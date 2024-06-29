import { defineArrayMember, defineField, defineType } from 'sanity';

const testimonial = defineType({
  name: 'testimonialBlock',
  title: 'Testimonial Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Block Title',
      type: 'string',
      description: 'Title for the testimonials block.',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Name of the user giving the testimonial.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'User Image',
              type: 'image',
              description: 'Image of the user giving the testimonial.',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'designation',
              title: 'Designation',
              type: 'string',
              description: 'Designation of the user giving the testimonial.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'testimonialText',
              title: 'Testimonial Text',
              type: 'text',
              description: 'Text of the testimonial provided by the user.',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'designation',
              media: 'image',
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

export default testimonial;
