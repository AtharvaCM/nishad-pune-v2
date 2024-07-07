import { groq } from 'next-sanity';

export const testimonialFragment = groq`
  {
    _type,
    title,
    testimonials[]{
      name,
      image,
      designation,
      testimonialText
    }
  }
`;
