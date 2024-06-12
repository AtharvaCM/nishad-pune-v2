'use client';

import HeroSection from '@/components/home/hero-section';
import SimpleSlider from '@/components/test-slider';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
      <SimpleSlider />
    </div>
  );
}
