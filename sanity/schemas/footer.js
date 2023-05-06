/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    // Useul links section
    {
      name: 'usefulLinks',
      type: 'array',
      title: 'Useful Links',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'usefulLinkName',
              type: 'string',
              title: 'Useful Link Name',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'usefulLinkPath',
              type: 'string',
              title: 'Useful Link Path',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    //Address section
    {
      name: 'address',
      type: 'object',
      title: 'Address',
      fields: [
        {
          name: 'physicalAddress',
          type: 'string',
          title: 'Physical Address',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'emailAddress',
          type: 'string',
          title: 'Email Address',
          validation: (Rule) => Rule.required().email(),
        },
        {
          name: 'contactNumber',
          type: 'string',
          title: 'Contact Number',
          validation: (Rule) =>
            Rule.required().regex(
              /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
              {
                name: 'contactNumber',
                invert: false,
              }
            ),
        },
      ],
    },
    // Copyright section
    {
      name: 'copyrightObject',
      type: 'object',
      title: 'Copyright Object',
      fields: [
        {
          name: 'companyName',
          type: 'string',
          title: 'Company Name',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'year',
          type: 'number',
          title: 'Year',
          validation: (Rule) => Rule.integer().min(2000).max(3000),
        },
        {
          name: 'copyrightText',
          type: 'string',
          title: 'Copyright Text',
        },
      ],
    },
    // Social links section
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'socialMediaServiceLogo',
              type: 'image',
              title: 'Social Media Service Logo',
            },
            {
              name: 'socialMediaServiceName',
              type: 'string',
              title: 'Social Media Service Name',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'socialMediaServiceURL',
              type: 'url',
              title: 'Social Media Service URL',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
