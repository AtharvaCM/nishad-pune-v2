import { cn } from '@/lib/utils';

import CtaLink from '../cta';

export default function CTAList({
  ctas,
  className,
}: React.HTMLAttributes<HTMLDivElement> & {
  ctas?: Sanity.CTA[];
} & React.ComponentProps<'div'>) {
  if (!ctas?.length) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-[.5em]', className)}>
      {ctas?.map((cta) => <CtaLink className="max-sm:w-full" {...cta} key={cta._key} />)}
    </div>
  );
}
