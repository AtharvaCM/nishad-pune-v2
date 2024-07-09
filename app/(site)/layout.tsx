import '@radix-ui/themes/styles.css';
import '@/styles/app.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Theme } from '@radix-ui/themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';
import { PropsWithChildren } from 'react';

import Announcement from '@/components/announcement';
import { LenisScroller } from '@/components/common/lennis-scroller';
import Footer from '@/components/footer';
import Header from '@/components/header';
import SkipToContent from '@/components/skip-to-content';
import VisualEditing from '@/components/VisualEditing';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  icons: {
    icon: 'https://fav.farm/🖤',
  },
};

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <html lang="en" className="light">
      <body className={cx('bg-white', inter.variable)}>
        <Theme accentColor="grass" grayColor="olive">
          <SkipToContent />
          <Announcement />
          <Header />
          <main role="main" id="main-content" tabIndex={-1} className="container mx-auto">
            {children}
          </main>
          <Footer />
          <LenisScroller />

          <Analytics />
          <SpeedInsights />
          {draftMode().isEnabled && <VisualEditing />}
        </Theme>
      </body>
    </html>
  );
}
