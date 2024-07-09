// import { FC } from 'react';

// import { Homepage } from '@/types/generated/sanity.types';

// import TestimonialCarousel from '../testimonial-carousel';
// import AudienceFeedbackBlock from './audience-feedback-block';
// import HeroBlock from './hero-block';

// function renderBlocks(blocks: Homepage['blocks']) {
//   return blocks?.map((block, index) => {
//     switch (block._type) {
//       case 'heroBlock':
//         return <HeroBlock key={index} {...block} />;
//       case 'testimonialBlock':
//         return <TestimonialCarousel key={index} {...block} />;
//       case 'audienceFeedbackBlock':
//         return <AudienceFeedbackBlock key={index} {...block} />;
//       default:
//         return null;
//     }
//   });
// }

// interface IBlocksProps {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   blocks: any;
// }

// const Blocks: FC<IBlocksProps> = ({ blocks }) => <>{renderBlocks(blocks)}</>;

// export default Blocks;
