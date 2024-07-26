'use server';

import { groq } from 'next-sanity';

import { sanityFetch } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';

export async function getPage(language: string) {
  const page = await sanityFetch<Sanity.Page>({
    query: groq`*[_type == 'page' && metadata.slug.current == 'index' && language == $language][0]{
    ...,
    modules[]{ ${modulesQuery} },
    metadata {
      ...,
      'ogimage': image.asset->url
    },
    language,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      title,
      slug,
      language
    },
  }`,
    params: {
      language,
    },
    tags: ['homepage'],
  });

  if (!page) throw new Error('Missing "page" document with metadata.slug "index" in Sanity Studio');

  return page;
}
