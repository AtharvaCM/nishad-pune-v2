import { defineArrayMember, defineField, defineType } from 'sanity';

const hero = defineType({
  name: 'heroBlock',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the hero section.',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Tagline or subheading for the hero section.',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
      description: 'Content blocks for the hero section.',
    }),
    defineField({
      name: 'mediaType',
      title: 'Background Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      description: 'Select the type of background media for the hero section.',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
      hidden: ({ parent }) => !parent || parent.mediaType !== 'image',
      description: 'Background image for the hero section.',
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'customVideo',
      hidden: ({ parent }) => !parent || parent.mediaType !== 'video',
      description: 'Background video for the hero section.',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage.asset',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
});

export default hero;
