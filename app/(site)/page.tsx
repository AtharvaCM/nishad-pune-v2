import HomePageTemplate from 'components/templates/home';

import { sanityFetch } from '@/sanity/lib/fetch';
import { GET_HOME_PAGE } from '@/sanity/queries/home/get-home-page';
import { GET_HOME_PAGEResult } from '@/types/generated/sanity.types';

async function getHomePageData() {
  return await sanityFetch<GET_HOME_PAGEResult>({ query: GET_HOME_PAGE, tags: ['homepage'] });
}

export default async function Page() {
  const data = await getHomePageData();

  return <HomePageTemplate data={data} />;
}
