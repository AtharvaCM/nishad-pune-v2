/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSiteData } from '@/sanity/utils/get-site-data';

import CTA from '../common/cta';
import LinkList from './LinkList';

export default async function Menu() {
  const { headerMenu } = await getSiteData();

  return (
    <nav className="max-md:anim-fade-to-r flex gap-y-2 [grid-area:nav] max-md:my-4 max-md:flex-col max-md:header-closed:hidden">
      {headerMenu?.items?.map((item: any, key: number) => {
        switch (item._type) {
          case 'link':
            return <CTA className="hover:link md:px-3" link={item} key={key} />;

          case 'link.list':
            return <LinkList {...item} key={key} />;

          default:
            return null;
        }
      })}
    </nav>
  );
}
