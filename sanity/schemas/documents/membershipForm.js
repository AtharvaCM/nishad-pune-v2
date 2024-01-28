/* eslint-disable import/no-anonymous-default-export */

export default {
  name: 'membershipForm',
  title: 'Membership Form',
  type: 'document',
  fields: [
    {
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(1).error('Form Title cannot be empty'),
    },
    {
      name: 'formDescription',
      title: 'Form Description',
      type: 'text',
    },
    {
      name: 'fields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'fieldName',
              title: 'Field Name',
              type: 'string',
              validation: (Rule) =>
                Rule.required().min(1).error('Field Name cannot be empty'),
            },
            {
              name: 'fieldType',
              title: 'Field Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Email', value: 'email' },
                  { title: 'Number', value: 'number' },
                  // Add other field types as needed
                ],
              },
            },
            {
              name: 'isRequired',
              title: 'Is Required',
              type: 'boolean',
              initialValue: true,
            },
            {
              name: 'description',
              title: 'Field Description',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'fieldName',
              subtitle: 'fieldType',
            },
            prepare(selection) {
              const { title, subtitle } = selection
              return {
                title: title,
                subtitle: subtitle,
              }
            },
          },
        },
      ],
    },
    {
      name: 'membershipTypes',
      title: 'Membership Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Membership Type',
              type: 'string',
              validation: (Rule) =>
                Rule.required().min(1).error('Membership Type cannot be empty'),
            },
            {
              name: 'fee',
              title: 'Membership Fee',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    // Add any other fields related to payment details or additional instructions
  ],
  preview: {
    select: {
      title: 'formTitle',
      description: 'formDescription',
    },
    prepare(selection) {
      const { title, description } = selection
      return {
        title: title,
        subtitle: description,
      }
    },
  },
}
