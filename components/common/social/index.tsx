/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { IoIosLink } from 'react-icons/io';

import { cn } from '@/lib/utils';
import { getSiteData } from '@/sanity/utils/get-site-data';

import CTA from '../cta';

export default async function Social({ className }: React.HTMLProps<HTMLDivElement>) {
  const { social } = await getSiteData();

  if (!social?.items?.length) return null;

  return (
    <nav className={cn('group flex flex-wrap items-center', className)}>
      {social.items.map((item: any, key: number) => {
        switch (item._type) {
          case 'link':
            return (
              <CTA className="px-2 py-1 hover:!opacity-100 group-has-[a:hover]:opacity-50" link={item} key={key}>
                <Icon url={item.external} aria-label={item.label} />
              </CTA>
            );

          default:
            return null;
        }
      })}
    </nav>
  );
}

function Icon({ url, ...props }: { url?: string } & React.HTMLProps<SVGElement>) {
  if (!url) return null;

  return url?.includes('facebook.com') ? (
    <FaFacebookF {...props} />
  ) : url?.includes('github.com') ? (
    <FaGithub {...props} />
  ) : url?.includes('instagram.com') ? (
    <FaInstagram {...props} />
  ) : url?.includes('linkedin.com') ? (
    <FaLinkedinIn {...props} />
  ) : url?.includes('tiktok.com') ? (
    <FaTiktok {...props} />
  ) : url?.includes('twitter.com') || url?.includes('x.com') ? (
    <FaXTwitter {...props} />
  ) : url?.includes('youtube.com') ? (
    <FaYoutube {...props} />
  ) : (
    <IoIosLink {...props} />
  );
}
