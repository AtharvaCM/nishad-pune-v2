/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          title: 'Social Link',
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube', value: 'youtube' },
                  // Add other social platforms as needed
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: false,
                  scheme: ['http', 'https'],
                }),
            },
          ],
        },
      ],
    },
    {
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: true,
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            },
            {
              name: 'dropdownLinks',
              title: 'Dropdown Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'href',
                      title: 'URL',
                      type: 'url',
                      validation: (Rule) =>
                        Rule.uri({
                          allowRelative: true,
                          scheme: ['http', 'https'],
                        }),
                    },
                  ],
                },
              ],
              options: {
                collapsible: true, // Allows the editor to collapse/expand the dropdown menu
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'phoneNumber',
      media: 'logo',
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: `Header: ${title}`,
        media,
      }
    },
  },
}
