import HeroSection from '@/components/home/hero-section';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
