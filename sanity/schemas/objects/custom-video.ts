import { defineField, defineType } from 'sanity';

const customVideo = defineType({
  name: 'customVideo',
  title: 'Custom Video',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the video.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description of the video content.',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      description: 'Upload the video file here.',
      options: {
        accept: 'video/*',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'customImage',
      description: 'Thumbnail image for the video.',
    }),
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'object',
      fields: [
        defineField({
          name: 'author',
          title: 'Author',
          type: 'string',
          description: 'Author of the image.',
        }),
        defineField({
          name: 'copyright',
          title: 'Copyright',
          type: 'string',
          description: 'Copyright information for the image.',
        }),
        defineField({
          name: 'source',
          title: 'Source',
          type: 'url',
          description: 'Source URL of the image.',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
    prepare({ title, media }) {
      return { title, media };
    },
  },
});

export default customVideo;
