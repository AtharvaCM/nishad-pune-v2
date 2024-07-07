import HomePageTemplate from 'components/templates/home';

import { client } from '@/sanity/lib/client';
import { GET_HOME_PAGE } from '@/sanity/queries/home/get-home-page';
import { GET_HOME_PAGEResult } from '@/types/generated/sanity.types';

async function getHomePageData() {
  return client.fetch<GET_HOME_PAGEResult>(GET_HOME_PAGE);
}

export const revalidate = process.env.REVALIDATE_DURATION ? +process.env.REVALIDATE_DURATION : 86400;

export default async function Page() {
  const data = await getHomePageData();

  return <HomePageTemplate data={data} />;
}
