/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'artistProfile',
  title: 'Artist Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image hotspot for better cropping
      },
      fieldsets: [
        {
          name: 'altFieldset',
          title: 'Alternative Text',
          options: { collapsed: true, collapsible: true },
        },
      ],
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    },
    {
      name: 'careerHighlights',
      title: 'Career Highlights',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'mediaGallery',
      title: 'Media Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true,
              },
            },
            // Add a field for videos if needed, or use a custom object with a url field
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'url' }],
      validation: (Rule) => Rule.unique().error('You have duplicate links'),
    },
  ],
  // Adding a preview for the content in the Sanity Studio
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
