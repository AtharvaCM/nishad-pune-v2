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
        Rule.required().custom((value) => {
          if (typeof value === 'string' && value.trim() === '') {
            return 'Video Label cannot be empty'
          }
          return true
        }),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
}
