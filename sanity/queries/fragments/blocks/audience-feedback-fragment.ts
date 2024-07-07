import { groq } from 'next-sanity';

export const audienceFeedbackFragment = groq`
  {
    _type,
    title,
    feedbacks[]{
      title,
      caption,
      videoUrl,
      thumbnail
    }
  }
`;
