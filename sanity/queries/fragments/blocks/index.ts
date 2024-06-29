import { groq } from 'next-sanity';

import { audienceFeedbackFragment } from './audience-feedback-fragment';
import { heroFragment } from './hero-block-fragment';
import { testimonialFragment } from './testimonial-block-fragment';

export const blocksFragment = groq`
  blocks[]{
    _type == "heroBlock" => ${heroFragment},
    _type == "testimonialBlock" => ${testimonialFragment},
    _type == "audienceFeedbackBlock" => ${audienceFeedbackFragment}
  }
`;
