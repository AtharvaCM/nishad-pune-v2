import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';

import homepageTestimonials from '@/utils/constants/homepage-testimonials.json';

import styles from './slider-carousel.module.scss';

export default function TestimonialCarousel() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [currentSlideNumber, setCurrentSlideNumber] = useState<number>(0);

  return (
    <Box className={cx(styles['d-container'])}>
      <Box className={cx(styles['d-container__inner'])}>
        <Slider {...settings} beforeChange={(currentSlide: number, nextSlide: number) => setCurrentSlideNumber(nextSlide)}>
          {homepageTestimonials.map((testimonial) => (
            <Box key={testimonial.id} className={cx(styles['d-container__slide'])}>
              <Box
                className={cx(styles['d-container__card'], {
                  [styles['d-container__card--current']]: currentSlideNumber + 1 === testimonial.id,
                })}
              >
                <Box className={cx(styles['d-container__image-wrapper'])}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={cx(styles['d-container__image'])}
                    width={96}
                    height={96}
                  />
                </Box>
                <h3 className={cx(styles['d-container__name'])}>{testimonial.name}</h3>
                <p className={cx(styles['d-container__role'])}>{testimonial.role}</p>
                <p className={cx(styles['d-container__feedback'])}>{testimonial.feedback}</p>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
