/* eslint-disable @typescript-eslint/no-explicit-any */
import { stegaClean } from '@sanity/client/stega';

import { cn } from '@/lib/utils';
import { getSiteData } from '@/sanity/utils/get-site-data';

import CTALink from '../common/cta';

export default async function Menu() {
  const { footerMenu } = await getSiteData();

  return (
    <nav className="flex flex-wrap items-start gap-x-12 gap-y-6">
      {footerMenu?.items?.map((item: any) => {
        switch (item._type) {
          case 'link':
            return <CTALink className="hover:link" link={item} key={item._key} />;

          case 'link.list':
            return (
              <div className="space-y-2 text-left" key={item._key}>
                <div className="technical text-xs">
                  <CTALink link={item.link}>{stegaClean(item.link?.label) || item.link.internal?.title}</CTALink>
                </div>

                <ul>
                  {item.links?.map((link: any) => (
                    <li key={link._key}>
                      <CTALink
                        className={cn('inline-block py-px hover:underline', link.external?.startsWith('http') && 'is-external')}
                        link={link}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );

          default:
            return null;
        }
      })}
    </nav>
  );
}
