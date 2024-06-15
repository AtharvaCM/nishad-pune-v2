import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cx from 'classnames';
import React from 'react';
import Slider from 'react-slick';

import styles from './slider-carousel.module.scss';

const testimonials = [
  {
    name: 'Missy Limana',
    role: 'Engineer',
    image: 'https://randomuser.me/api/portraits/women/74.jpg',
    feedback: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    name: 'Max Brown',
    role: 'Project Lead',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
    feedback: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    name: 'Hanna Lisem',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/73.jpg',
    feedback: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
  {
    name: 'Peter Zenetti',
    role: 'Sopftware Developer',
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
    feedback: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
  },
];

export default function TestimonialCarousel() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
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

  return (
    <div className={cx(styles['d-container'])}>
      <div className={cx(styles['d-container__inner'])}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={cx(styles['d-container__slide'])}>
              <div className={cx(styles['testimonial'])}>
                <img src={testimonial.image} alt={testimonial.name} className={cx(styles['testimonial__image'])} />
                <h3 className={cx(styles['testimonial__name'])}>{testimonial.name}</h3>
                <p className={cx(styles['testimonial__role'])}>{testimonial.role}</p>
                <p className={cx(styles['testimonial__feedback'])}>{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
