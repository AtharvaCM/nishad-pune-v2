/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { urlForImage } from '@/sanity/lib/image';

import styles from './hero-block.module.scss';

const HeroBlock: FC<any> = (props) => {
  const { heading, tagline, mediaType, backgroundImage } = props;

  if (!backgroundImage?.asset) return null;

  return (
    <Section className={cx(styles['d-section'])}>
      {mediaType === 'video' ? (
        <video autoPlay muted loop playsInline className={cx(styles['d-section__bg-media'])}>
          {/* TODO: Replace video src from sanity */}
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Box className={cx(styles['d-section__bg-media'])}>
          <Image
            alt={backgroundImage?.alt || 'BG Image'}
            src={urlForImage(backgroundImage?.asset)}
            width={1440}
            height={815}
            className={cx(styles['d-section__bg-media-image'])}
          />
        </Box>
      )}
      <div className={cx(styles['d-section__overlay'])}>
        <Heading as="h1" size={'9'} className={cx(styles['d-section__title'])}>
          {heading}
        </Heading>
        <Text size={'6'} className={cx(styles['d-section__sub-title'])}>
          {tagline}
        </Text>
      </div>
    </Section>
  );
};

export default HeroBlock;
