import { groq } from 'next-sanity';

export const FETCH_HEADER = groq`*[_type == "header"][0] {
  logo,
  address,
  phoneNumber,
  socialLinks[]{
    type,
    url
  },
  navigation[]{
    text,
    href,
    dropdownLinks[]{
      text,
      href
    }
  }
}`;
