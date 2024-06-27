'use client';

import HeroSection from '@/components/home/hero-section';
import TestimonialCarousel from '@/components/testimonial-carousel';

import AudienceFeedback from './../../audience-feedback/index';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
      <h1 className="text-4xl font-bold text-center my-8">Audience Feedback</h1>
      <AudienceFeedback />
      <TestimonialCarousel />
    </div>
  );
}
