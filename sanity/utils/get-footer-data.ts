import { client } from '@/sanity/lib/client';
import { FETCH_FOOTER } from '@/sanity/queries/footer/fetch-footer';
import { FETCH_FOOTERResult } from '@/types/generated/sanity.types';

export async function getFooterData(): Promise<FETCH_FOOTERResult> {
  return client.fetch<FETCH_FOOTERResult>(FETCH_FOOTER);
}
