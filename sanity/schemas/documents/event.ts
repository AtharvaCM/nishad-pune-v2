import { MdEvent } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  icon: MdEvent,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'The title of the event.',
      validation: (Rule) => Rule.required().min(10).max(100).warning('Event title should be between 10 and 100 characters.'),
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      description: 'The theme of the event, usually an audio-visual or orchestra theme.',
      validation: (Rule) => Rule.required().min(10).max(100).warning('Theme should be between 10 and 100 characters.'),
    }),
    defineField({
      name: 'date',
      title: 'Date and Time',
      type: 'datetime',
      description: 'The date and time of the event.',
      validation: (Rule) => Rule.required().warning('Date and time are required.'),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The location of the event.',
      validation: (Rule) => Rule.required().min(5).max(200).warning('Location should be between 5 and 200 characters.'),
    }),

    defineField({
      name: 'googleMapsLink',
      title: 'Google Maps Link',
      type: 'url',
      description: 'Google Maps link to embed for the venue.',
      validation: (Rule) => Rule.uri({ scheme: ['https'], allowRelative: false }).warning('A valid Google Maps URL is required.'),
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      description: 'Contact information for phone bookings.',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          description: 'Phone number for bookings.',
          validation: (Rule) =>
            Rule.required()
              .regex(/^\+?[1-9]\d{1,14}$/, { name: 'Phone Number' })
              .warning('A valid phone number is required.'),
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
          description: 'Email address for inquiries.',
          validation: (Rule) => Rule.email().warning('A valid email address is required.'),
        }),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Event Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The poster image for the event.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the poster image.',
          validation: (Rule) => Rule.required().warning('Alt text is required for accessibility.'),
        }),

        defineField({
          name: 'loading',
          title: 'Loading Strategy',
          description: 'Loading strategy for the image.',
          type: 'string',
          options: {
            layout: 'radio',
            list: ['lazy', 'eager'],
          },
          initialValue: 'lazy',
        }),
        defineField({
          name: 'overlay',
          title: 'Dark Overlay',
          description: 'Adds a dark overlay to the image to improve text readability.',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location',
      media: 'image',
    },
    prepare(selection) {
      const { title, date, location, media } = selection;
      return {
        title,
        subtitle: `${new Date(date).toDateString()} - ${location}`,
        media,
      };
    },
  },
});
