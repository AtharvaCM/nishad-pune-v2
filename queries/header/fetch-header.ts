export const FETCH_HEADER = `*[_type == "header"][0] {
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
}`
