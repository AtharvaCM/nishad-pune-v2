import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';

import Modules from '@/components/modules';
import { sanityFetch } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';
import processMetadata from '@/utils/process-metadata';

export default async function Page({ params }: Readonly<Props>) {
  const page = await getPage(params);
  if (!page) notFound();
  return <Modules modules={page?.modules} page={page} />;
}

export async function generateMetadata({ params }: Props) {
  const page = await getPage(params);
  if (!page) notFound();
  return processMetadata(page);
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
