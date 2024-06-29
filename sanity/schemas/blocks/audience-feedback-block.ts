import { defineArrayMember, defineField, defineType } from 'sanity';

const audienceFeedback = defineType({
  name: 'audienceFeedbackBlock',
  title: 'Audience Feedback Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Block Title',
      type: 'string',
      description: 'Title for the audience feedback block.',
    }),
    defineField({
      name: 'feedbacks',
      title: 'Feedbacks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Feedback Title',
              type: 'string',
              description: 'Title of the feedback.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Caption or summary of the feedback.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'videoUrl',
              title: 'YouTube Video URL',
              type: 'url',
              description: 'URL of the YouTube video containing the feedback.',
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ['https'],
                  allowRelative: false,
                }),
            }),
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail Image',
              type: 'image',
              description: 'Thumbnail image for the feedback video.',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'caption',
              media: 'thumbnail',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});

export default audienceFeedback;
