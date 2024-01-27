/* eslint-disable import/no-anonymous-default-export */
import ticketTier from '../common/ticketTier'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date and Time',
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
          scheme: ['https'],
        }),
    },
    {
      name: 'ticketTiers',
      title: 'Ticket Tiers',
      type: 'array',
      of: [ticketTier],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
          // add any other statuses as required
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description:
        'Optional field to set the priority for featured events, lower numbers indicate higher priority.',
      hidden: ({ parent, value }) => !value && parent?.status !== 'past', // Only show this field for past events if a value is set
    },
    {
      name: 'isHighlighted',
      title: 'Highlight this event?',
      description: 'Mark if the event is a key past event to be highlighted',
      type: 'boolean',
    },
    // You can add an image or a gallery of images if you want to display event visuals
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  // Define how to preview events in the Sanity Studio
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location',
      media: 'image',
    },
    prepare(selection) {
      const { title, date, location, media } = selection
      return {
        title: title,
        subtitle: `${date} - ${location}`,
        media: media,
      }
    },
  },
}
