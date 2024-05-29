import { groq } from 'next-sanity';

export const FETCH_FOOTER = groq`*[_type == "footer"][0]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  usefulLinks[]{
    _key,
    usefulLinkName,
    usefulLinkPath
  },
  address{
    physicalAddress,
    emailAddress,
    contactNumber
  },
  copyrightObject{
    companyName,
    year,
    copyrightText
  },
  socialLinks[]{
    _key,
    socialMediaServiceLogo{
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    },
    socialMediaServiceName,
    socialMediaServiceURL
  }
}`;
