import '@radix-ui/themes/styles.css'
import './globals.css'

import { Theme } from '@radix-ui/themes'
import cx from 'classnames'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Inter } from 'next/font/google'
import { draftMode } from 'next/headers'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import { LenisScroller } from '@/components/common/lennis-scroller'
import Preloader from '@/components/common/preloader'
import VisualEditing from '@/components/VisualEditiing'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  gsap.registerPlugin(ScrollTrigger)

  return (
    <html lang="en" className="light">
      <body className={cx('bg-white', inter.variable)}>
        <Theme accentColor="grass" grayColor="olive">
          <Preloader />
          <Header />
          <div className="container mx-auto">{children}</div>
          {draftMode().isEnabled && <VisualEditing />}
          <Footer />
          <LenisScroller />
        </Theme>
      </body>
    </html>
  )
}
