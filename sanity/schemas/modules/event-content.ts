import { VscEdit } from 'react-icons/vsc';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event-content',
  title: 'Event Content',
  icon: VscEdit,
  type: 'object',
  fields: [
    defineField({
      name: 'uid',
      title: 'Unique Identifier',
      type: 'uid',
    }),
  ],
  preview: {
    select: {
      uid: 'uid',
    },
    prepare: ({ uid }) => ({
      title: 'Event Content',
      subtitle: uid && `#${uid}`,
    }),
  },
});
