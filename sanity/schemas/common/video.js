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
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
}
