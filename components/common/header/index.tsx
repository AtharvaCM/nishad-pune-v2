import { client } from '@/sanity/lib/client';
import { FETCH_HEADER } from '@/sanity/queries/header/fetch-header';
import { FETCH_HEADERResult } from '@/types/generated/sanity.types';

export interface IHeaderProps {}

export default async function Header(_props: IHeaderProps) {
  const headerData = await client.fetch<FETCH_HEADERResult>(FETCH_HEADER);
  // FIXME: Remove this log after done with the example
  // eslint-disable-next-line no-console
  console.log('headerData: ', headerData);

  return <header></header>;
}
