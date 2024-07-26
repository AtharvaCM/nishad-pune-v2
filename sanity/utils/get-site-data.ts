import { client } from '@/sanity/lib/client';

import { GET_SITE } from '../lib/queries';

export async function getSiteData() {
  return client.fetch(GET_SITE);
}
