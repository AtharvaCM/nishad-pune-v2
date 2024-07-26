import { VscTag } from 'react-icons/vsc';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog.category',
  title: 'Blog category',
  type: 'document',
  icon: VscTag,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
});
