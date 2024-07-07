import { groq } from 'next-sanity';

export const GET_PAGE = groq`*[_type == "page" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  content
}`;
