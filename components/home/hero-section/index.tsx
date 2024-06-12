import { Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import { FC } from 'react';

import styles from './hero-section.module.scss';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <video autoPlay muted loop playsInline className={cx(styles['d-section__bg-video'])}>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className={cx(styles['d-section__overlay'])}>
      <Heading as="h1" size={'8'} className={cx(styles['d-section__title'])}>
        Sample Auto Play Background Video
      </Heading>
      <Text size={'6'} className={cx(styles['d-section__sub-title'])}>
        Sample Overlay Text
      </Text>
    </div>
  </Section>
);

export default HeroSection;
