import { VscEdit } from 'react-icons/vsc';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog-post-content',
  title: 'Blog post content',
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
    prepare: () => ({
      title: 'Blog post content',
    }),
  },
});
