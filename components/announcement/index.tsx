import cx from 'classnames';
import { groq, PortableText } from 'next-sanity';

import { sanityFetch } from '@/sanity/lib/fetch';
import { linkQuery } from '@/sanity/lib/queries';

import CtaLink from '../common/cta';
import styles from './announcement.module.scss';

export default async function Announcement() {
  const announcements = await sanityFetch<Sanity.Announcement[]>({
    query: groq`*[_type == 'site'][0].announcements[]->{
			...,
			cta{ ${linkQuery} },
		}`,
    params: {
      tags: ['announcements'],
      revalidate: 30,
    },
  });

  if (!announcements) return null;

  const active = announcements.find(({ start, end }) => (!start || new Date(start) < new Date()) && (!end || new Date(end) > new Date()));

  if (!active) return null;

  return (
    <aside className={cx(styles['d-container'])}>
      <div className={cx(styles['d-container__text-wrapper'])}>
        <PortableText value={active.content} />
      </div>

      <CtaLink className={cx(styles['d-container__cta'])} link={active.cta} />
    </aside>
  );
}
