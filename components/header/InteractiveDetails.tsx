'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { cn } from '@/lib/utils';

import css from './InteractiveDetails.module.css';

/**
 * @param safeAreaOnHover - Adds a safe area around the details element to prevent it from closing when the mouse leaves the element.
 * @param closeAfterNavigate - Closes the details element after a navigation event.
 */
export default function InteractiveDetails({
  safeAreaOnHover,
  closeAfterNavigate,
  className,
  ...props
}: React.DetailsHTMLAttributes<HTMLDetailsElement> & {
  safeAreaOnHover?: boolean;
  closeAfterNavigate?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const events = !isMobile
    ? {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      }
    : {};

  // Close after navigation
  const pathname = usePathname();

  useEffect(() => {
    if (closeAfterNavigate) setOpen(false);
  }, [closeAfterNavigate, pathname]);

  return <details className={cn(safeAreaOnHover && css.safearea, className)} open={open} {...events} {...props} />;
}
