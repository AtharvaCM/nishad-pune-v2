import { createClient, type QueryParams } from '@sanity/client';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
});

export async function sanityFetch<QueryResponse>({ query, params = {}, tags }: { query: string; params?: QueryParams; tags?: string[] }) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      tags, // for tag-based revalidation
    },
  });
}
