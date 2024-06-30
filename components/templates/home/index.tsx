'use client';

import Blocks from '@/components/blocks';
import { GET_HOME_PAGEResult } from '@/types/generated/sanity.types';

export interface IHomePageTemplateProps {
  data: GET_HOME_PAGEResult;
}

export default function HomePageTemplate(props: Readonly<IHomePageTemplateProps>) {
  const { data } = props;
  const blocks = data?.blocks;

  return <div>{blocks !== undefined && blocks !== null ? <Blocks blocks={blocks} /> : null}</div>;
}
