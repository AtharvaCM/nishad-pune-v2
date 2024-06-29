// schemas/documents/homepage.ts
import { defineField, defineType } from 'sanity';

import { blockTypes } from '../blocks';

const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'blocks',
      title: 'Page Content',
      type: 'array',
      of: blockTypes,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});

export default homepage;
