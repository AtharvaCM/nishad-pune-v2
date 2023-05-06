/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [
    {
      name: 'navBrandLogo',
      type: 'image',
      title: 'Navbar Brand Logo',
      options: {
        hotspots: true,
      },
    },
    {
      name: 'navLinks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'navLinkName',
              type: 'string',
              title: 'Nav Link Name',
            },
            {
              name: 'navLinkPath',
              type: 'string',
              title: 'Nav Link Path',
            },
          ],
        },
      ],
    },
  ],
}
