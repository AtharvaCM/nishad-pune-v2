import { CgChevronRight } from 'react-icons/cg';

import { cn } from '@/lib/utils';

import CTALink from '../common/cta';
import InteractiveDetails from './InteractiveDetails';

export default function LinkList({ link, links }: Readonly<Sanity.LinkList>) {
  return (
    <InteractiveDetails className="group relative h-full" closeAfterNavigate>
      <summary className="flex items-center gap-1 md:px-3">
        {link.label}
        <CgChevronRight className="transition-transform group-open:rotate-90 md:rotate-90" />
      </summary>

      <ul className="anim-fade-to-b md:frosted-glass left-0 top-full px-3 py-2 flex flex-col gap-1 max-md:border-l md:absolute md:min-w-max md:rounded md:border md:bg-background md:shadow-md">
        {links?.map((link) => (
          <li key={link._key}>
            <CTALink className={cn('hover:link inline-block py-px', link.external?.startsWith('http') && 'is-external')} link={link} />
          </li>
        ))}
      </ul>
    </InteractiveDetails>
  );
}
