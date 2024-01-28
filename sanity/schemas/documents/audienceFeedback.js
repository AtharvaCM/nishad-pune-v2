/* eslint-disable import/no-anonymous-default-export */

export default {
  name: 'audienceFeedback',
  title: 'Audience Feedback',
  type: 'document',
  fields: [
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(1).error('Author Name cannot be empty'),
    },
    {
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule) => Rule.max(2000), // Optional: adjust the max length as needed
    },
    {
      name: 'youtubeLink',
      title: 'YouTube Video Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https'],
        }).optional(),
    },
    {
      name: 'relatedShow',
      title: 'Related Show/Event',
      type: 'reference',
      to: [{ type: 'show' }, { type: 'event' }], // Assuming 'show' is the name of your shows/events schema
      description: 'Link this feedback to a specific show or event.',
    },
    {
      name: 'isApproved',
      title: 'Approved',
      description:
        'Moderators can toggle this once the feedback is reviewed and approved.',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    // Add any other relevant fields as needed
  ],
  orderings: [
    {
      title: 'Approval Date, New',
      name: 'approvalDateDesc',
      by: [{ field: '_updatedAt', direction: 'desc' }],
    },
    // Add other orderings as necessary
  ],
  preview: {
    select: {
      title: 'authorName',
      subtitle: 'testimonial',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle,
      }
    },
  },
}
