import { groq } from 'next-sanity';

import { blocksFragment } from '../fragments/blocks';

export const GET_HOME_PAGE = groq`
*[_type == "homepage"][0]{
  title,
  ${blocksFragment}
}
`;
