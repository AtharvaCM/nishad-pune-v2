/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    {
      name: 'videoLabel',
      type: 'string',
      title: 'Video Label',
      validation: (Rule) =>
        Rule.required().min(1).error('Video label cannot be empty'),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
}
