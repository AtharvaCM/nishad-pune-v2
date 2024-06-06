import HeroSection from '@/components/home/hero-section';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection>
        <h1>Sample Auto Play Background Video</h1>
        <p>Sample Overlay Text</p>
      </HeroSection>
    </div>
  );
}
