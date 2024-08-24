/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { IoIosLink } from 'react-icons/io';

import { cn } from '@/lib/utils';
import { getSiteData } from '@/sanity/utils/get-site-data';

import CTALink from '../cta';

export default async function Social({ className }: Readonly<React.ComponentProps<'div'>>) {
  const { social } = await getSiteData();

  if (!social?.items?.length) return null;

  return (
    <nav className={cn('group flex flex-wrap items-center', className)}>
      {social.items.map((item: any) => {
        if (item._type === 'link') {
          return (
            <CTALink className="px-2 py-1 hover:!opacity-100 group-has-[a:hover]:opacity-50" link={item} key={item._key}>
              <Icon url={item.external} aria-label={item.label} />
            </CTALink>
          );
        }

        return null;
      })}
    </nav>
  );
}

const iconMap: { [key: string]: React.ComponentType<React.ComponentProps<'svg'>> } = {
  'facebook.com': FaFacebookF,
  'github.com': FaGithub,
  'instagram.com': FaInstagram,
  'linkedin.com': FaLinkedinIn,
  'tiktok.com': FaTiktok,
  'twitter.com': FaXTwitter,
  'x.com': FaXTwitter,
  'youtube.com': FaYoutube,
};

function Icon({ url, ...props }: { url?: string } & React.ComponentProps<'svg'>) {
  if (!url) return null;

  let hostname: string;
  try {
    hostname = new URL(url).hostname;
  } catch (e) {
    return null; // Return null if the URL is invalid
  }

  const IconComponent = iconMap[hostname] || IoIosLink;

  return <IconComponent {...props} />;
}
