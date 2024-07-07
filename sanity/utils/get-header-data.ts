import { client } from '@/sanity/lib/client';
import { FETCH_HEADER } from '@/sanity/queries/header/fetch-header';
import { FETCH_HEADERResult } from '@/types/generated/sanity.types';

export async function getHeaderData(): Promise<FETCH_HEADERResult> {
  return client.fetch<FETCH_HEADERResult>(FETCH_HEADER);
}
