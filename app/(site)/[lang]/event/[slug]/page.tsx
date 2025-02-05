import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';

import Modules from '@/components/modules';
import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';
import processMetadata from '@/utils/process-metadata';

export default async function Page({ params }: Readonly<Props>) {
  const page = await getPageTemplate(params.lang);
  const event = await getEvent(params);
  if (!page || !event) notFound();
  return <Modules modules={page?.modules} page={page} event={event} />;
}

export async function generateMetadata({ params }: Props) {
  const event = await getEvent(params);
  if (!event) notFound();
  return processMetadata(event);
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(groq`*[_type == 'event' && defined(metadata.slug.current)].metadata.slug.current`);
  return slugs.map((slug) => ({ slug }));
}

async function getEvent(params: Props['params']) {
  return await sanityFetch<Sanity.Event>({
    query: groq`*[_type == 'event' && metadata.slug.current == $slug][0]{
			...,
      title,
      theme,
      date,
      image,
      googleMapsLink,
      contactInfo,
      location, 
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,
    params,
    tags: ['event'],
  });
}

async function getPageTemplate(lang: string) {
  const slug = `${lang}/event/*`;
  const query = groq`*[_type == 'page' && metadata.slug.current == 'event/*'][0]{
    ...,
    modules[]{ ${modulesQuery} },
    metadata { slug }
  }`;

  return await sanityFetch<Sanity.Page>({
    query,
    params: {
      slug,
    },
    tags: ['event/*'],
  });
}

type Props = {
  params: { slug?: string; lang: string };
};
