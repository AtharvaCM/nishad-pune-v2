import Link from 'next/link';

import { cn } from '@/lib/utils';
import { getSiteData } from '@/sanity/utils/get-site-data';

import CTAList from '../common/cta-list';
import Img from '../common/img';
import css from './Header.module.css';
import LanguageDropdown from './LanguageDropdown';
import Navigation from './Navigation';
import Toggle from './Toggle';
import Wrapper from './Wrapper';

export default async function Header() {
  const { title, logo, ctas } = await getSiteData();

  const logoImage = logo?.image?.dark || logo?.image?.default;

  return (
    <Wrapper className="frosted-glass sticky top-0 z-10 border-b border-primary/10 bg-background max-md:header-open:shadow-lg">
      <div className={cn(css.header, 'mx-auto grid max-w-screen-xl items-center gap-x-6 p-4')}>
        <div className="[grid-area:logo]">
          <Link className={cn('h3 md:h2 inline-block', logo?.image && 'max-w-[250px]')} href="/">
            {logoImage ? (
              <Img className="inline-block max-h-[1.2em] w-auto" image={logoImage} alt={logo?.name || title} />
            ) : (
              <span className="text-gradient">{title}</span>
            )}
          </Link>
        </div>

        <Navigation />

        <LanguageDropdown />
        <CTAList ctas={ctas} className="[grid-area:ctas] max-md:*:w-full max-md:header-closed:hidden md:ml-auto" />

        <Toggle />
      </div>
    </Wrapper>
  );
}
