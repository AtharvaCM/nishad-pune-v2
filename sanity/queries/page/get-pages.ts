import { groq } from 'next-sanity';

export const GET_PAGES = groq`*[_type == "page"] {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
}`;
