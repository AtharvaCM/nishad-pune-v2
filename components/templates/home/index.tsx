'use client';

import HeroSection from '@/components/home/hero-section';
import TestimonialCarousel from '@/components/testimonial-carousel';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
      <TestimonialCarousel />
    </div>
  );
}
