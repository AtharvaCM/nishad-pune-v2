import { groq } from 'next-sanity';

import Modules from '@/components/modules';
import { sanityFetch } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';
import processMetadata from '@/utils/process-metadata';

async function getPage() {
  // TODO: Separate query into it's own var
  const page = await sanityFetch<Sanity.Page>({
    query: groq`*[_type == 'page' && metadata.slug.current == 'index'][0]{
			...,
			modules[]{ ${modulesQuery} },
			metadata {
				...,
				'ogimage': image.asset->url
			}
		}`,

    tags: ['homepage'],
  });

  if (!page) throw new Error('Missing "page" document with metadata.slug "index" in Sanity Studio');

  return page;
}

export async function generateMetadata() {
  const page = await getPage();
  return processMetadata(page);
}

export default async function Page() {
  const page = await getPage();

  return <Modules modules={page?.modules} />;
}
