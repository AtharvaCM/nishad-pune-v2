import { defineField, defineType } from 'sanity';

const customImage = defineType({
  name: 'customImage',
  title: 'Custom Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Describe what is shown in the image for accessibility.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption for the image.',
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
      imageUrl: 'customImage.asset->url',
      altText: 'customImage.alt',
      caption: 'customImage.caption',
    },
    prepare({ altText, caption }) {
      const title = altText || 'No alt text';
      const subtitle = caption || 'No caption';
      return { title, subtitle, media: 'customImage' };
    },
  },
});

export default customImage;
