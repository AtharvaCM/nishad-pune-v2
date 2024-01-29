/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (typeof value === 'string' && value.trim() === '') {
            return 'Title cannot be empty'
          }
          return true
        }),
    },
    {
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newspaperName',
      title: 'Newspaper Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (typeof value === 'string' && value.trim() === '') {
            return 'Newspaper Name cannot be empty'
          }
          return true
        }),
    },
    {
      name: 'content',
      title: 'Article Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
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
          fieldset: 'altFieldset',
        },
      ],
    },
    // Additional fields as needed
  ],

  preview: {
    select: {
      title: 'title',
      date: 'publicationDate',
      media: 'image',
    },
    prepare(selection) {
      const { title, date, media } = selection
      return {
        title: title,
        subtitle: date
          ? new Date(date).toDateString()
          : 'No publication date set',
        media: media,
      }
    },
  },
}
