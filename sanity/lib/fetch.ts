import 'server-only';

import { draftMode } from 'next/headers';
import type { QueryParams } from 'next-sanity';

import { dev } from '../env';
import { client } from './client';

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({ query, params = {}, tags }: { query: string; params?: QueryParams; tags?: string[] }) {
  const preview = dev || draftMode().isEnabled;

  if (preview && !token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.');
  }

  return client.fetch<QueryResponse>(
    query,
    params,
    preview
      ? {
          stega: true,
          perspective: 'previewDrafts',
          useCdn: false,
          token: token,
          next: {
            revalidate: 0,
            tags,
          },
        }
      : {
          perspective: 'published',
          useCdn: true,
          next: {
            revalidate: preview ? 0 : false,
            tags,
          },
        },
  );
}
