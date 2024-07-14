/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSiteData } from '@/sanity/utils/get-site-data';

import CTALink from '../common/cta';
import LinkList from './LinkList';

export default async function Menu() {
  const { headerMenu } = await getSiteData();

  return (
    <nav className="max-md:anim-fade-to-r flex items-center gap-y-2 [grid-area:nav] max-md:my-4 max-md:flex-col max-md:header-closed:hidden">
      {headerMenu?.items?.map((item: any) => {
        switch (item._type) {
          case 'link':
            return <CTALink className="hover:link md:px-3" link={item} key={item._key} />;

          case 'link.list':
            return <LinkList {...item} key={item._key} />;

          default:
            return null;
        }
      })}
    </nav>
  );
}
