import { NextPage } from 'next';

import Modules from '@/components/modules';
import processMetadata from '@/utils/process-metadata';

import { getPage } from './actions';

interface IPageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }) {
  const page = await getPage(lang);
  return processMetadata(page);
}

const Page: NextPage<IPageProps> = async ({ params: { lang } }) => {
  const page = await getPage(lang);

  return <Modules modules={page?.modules} />;
};

export default Page;
