import '@radix-ui/themes/styles.css';
// import '../styles/global.css';
import './globals.css';

import { Theme } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';
import { headers } from 'next/headers';
import { PropsWithChildren } from 'react';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import { LenisScroller } from '@/components/common/lennis-scroller';
import VisualEditing from '@/components/VisualEditing';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: PropsWithChildren) {
  const pathname = headers().get('x-next-pathname') as string;
  const isSanityRoute = pathname.startsWith('/sanity') ? true : false;

  gsap.registerPlugin(ScrollTrigger);

  return (
    <html lang="en" className="light">
      <body className={cx('bg-white', inter.variable)}>
        <Theme accentColor="grass" grayColor="olive">
          {!isSanityRoute ? <Header /> : null}
          <div className="container mx-auto">{children}</div>
          {draftMode().isEnabled && <VisualEditing />}
          {!isSanityRoute ? <Footer /> : null}
          {!isSanityRoute ? <LenisScroller /> : null}
        </Theme>
      </body>
    </html>
  );
}
