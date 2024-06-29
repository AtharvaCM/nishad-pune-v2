import '@radix-ui/themes/styles.css';
import '@/app/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Theme } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';
import { PropsWithChildren } from 'react';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import { LenisScroller } from '@/components/common/lennis-scroller';
import VisualEditing from '@/components/VisualEditing';
import { getFooterData } from '@/sanity/utils/get-footer-data';
import { getHeaderData } from '@/sanity/utils/get-header-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
  gsap.registerPlugin(ScrollTrigger);

  const headerData = await getHeaderData();
  const footerData = await getFooterData();

  return (
    <html lang="en" className="light">
      <body className={cx('bg-white', inter.variable)}>
        <Theme accentColor="grass" grayColor="olive">
          <Header headerData={headerData} />
          <div className="container mx-auto">{children}</div>
          {draftMode().isEnabled && <VisualEditing />}
          <Footer footerData={footerData} />
          <LenisScroller />
        </Theme>
      </body>
    </html>
  );
}
