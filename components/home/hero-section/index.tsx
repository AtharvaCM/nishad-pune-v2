// index.tsx

import { FC } from 'react';

import styles from './hero-section.module.scss';

interface IHeroSectionProps {
  children: React.ReactNode;
}

const HeroSection: FC<IHeroSectionProps> = ({ children }: IHeroSectionProps) => (
  <section className={styles.heroSection}>
    <video autoPlay muted loop className={styles.heroVideo}>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className={styles.overlay}>{children}</div>
  </section>
);

export default HeroSection;
