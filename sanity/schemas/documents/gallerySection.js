/* eslint-disable import/no-anonymous-default-export */

export default {
  name: 'gallerySection',
  title: 'Gallery Section',
  type: 'document',
  fields: [
    {
      name: 'sectionName',
      title: 'Section Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mediaItems',
      title: 'Media Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'mediaType',
              title: 'Media Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video', value: 'video' },
                ],
                layout: 'radio',
              },
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              hidden: ({ parent }) => !parent || parent.mediaType !== 'image',
            },
            {
              name: 'videoUrl',
              title: 'Video URL',
              type: 'url',
              hidden: ({ parent }) => !parent || parent.mediaType !== 'video',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'caption',
              videoUrl: 'videoUrl',
            },
            prepare({ title, videoUrl }) {
              return {
                title: title,
                subtitle: videoUrl ? 'Video media' : 'Image media',
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'sectionName',
      media: 'mediaItems.0.media',
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title,
        media: media,
      }
    },
  },
}
