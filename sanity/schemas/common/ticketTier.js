/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'ticketTier',
  title: 'Ticket Tier',
  type: 'object',
  fields: [
    {
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Gold', value: 'gold' },
          { title: 'Silver', value: 'silver' },
          { title: 'Bronze', value: 'bronze' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.min(0).precision(2),
    },
  ],
  preview: {
    select: {
      title: 'tier',
      subtitle: 'price',
    },
    prepare({ title, subtitle }) {
      return {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        subtitle: `Price: ₹${subtitle}`,
      }
    },
  },
}
