import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';

import Modules from '@/components/modules';
import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';
import processMetadata from '@/utils/process-metadata';

export default async function Page({ params }: Props) {
  const page = await getPage(params);
  if (!page) notFound();
  return <Modules modules={page?.modules} page={page} />;
}

export async function generateMetadata({ params }: Props) {
  const page = await getPage(params);
  if (!page) notFound();
  return processMetadata(page);
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(
    groq`*[
			_type == 'page' &&
			defined(metadata.slug.current) &&
			!(metadata.slug.current in ['index', '404'])
		].metadata.slug.current`,
  );

  return slugs.map((slug) => ({ slug: slug.split('/') }));
}

async function getPage(params: Props['params']) {
  return await sanityFetch<Sanity.Page>({
    query: groq`*[
			_type == 'page' &&
			metadata.slug.current == $slug &&
			!(metadata.slug.current in ['index', '404'])
		][0]{
			...,
			modules[]{ ${modulesQuery} },
			metadata {
				...,
				'ogimage': image.asset->url
			}
		}`,

    params: { slug: params.slug?.join('/') },
    tags: ['pages'],
  });
}

type Props = {
  params: { slug?: string[] };
};
