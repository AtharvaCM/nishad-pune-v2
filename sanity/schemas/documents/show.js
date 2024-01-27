/* eslint-disable import/no-anonymous-default-export */
import ticketTier from '../common/ticketTier'

export default {
  name: 'show',
  title: 'Show',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'extendedDescription',
      title: 'Extended Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'themes',
      title: 'Themes',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule) =>
            Rule.required().min(1).error('Theme cannot be empty'),
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1).error('At least one theme is required'),
    },
    {
      name: 'images',
      title: 'Images',
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
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'multimedia',
      title: 'Multimedia Links',
      type: 'array',
      of: [{ type: 'url' }],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'googleMapsLink',
      title: 'Google Maps Link',
      type: 'url',
      description: 'Optional link to the Google Maps location of the event.',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'ticketTiers',
      title: 'Ticket Tiers',
      type: 'array',
      of: [ticketTier],
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Duration of the show, e.g., "2 hours", "90 minutes".',
    },
    {
      name: 'isFeatured',
      title: 'Featured Show',
      type: 'boolean',
      initialValue: false,
      description: 'Check this if the show is to be featured on the main page.',
    },
    // Add any other relevant fields that may be necessary for your shows
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      date: 'date',
    },
    prepare(selection) {
      const { title, media, date } = selection
      const subtitle = date ? new Date(date).toDateString() : 'Date TBA'
      return {
        title: title,
        media: media,
        subtitle: subtitle,
      }
    },
  },
}
