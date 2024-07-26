import { SearchIcon } from '@sanity/icons';
import { RiPagesFill } from 'react-icons/ri';
import { VscEdit } from 'react-icons/vsc';
import { defineArrayMember, defineField, defineType } from 'sanity';

import imageBlock from '../fragments/image-block';

export default defineType({
  name: 'blog.post',
  title: 'Blog post',
  icon: VscEdit,
  type: 'document',
  groups: [
    {
      title: 'Main Content',
      name: 'mainContent',
      icon: RiPagesFill,
      default: true,
    },
    {
      title: 'SEO',
      name: 'seo',
      icon: SearchIcon,
    },
  ],
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'body',
      type: 'array',
      group: 'mainContent',
      of: [
        { type: 'block' },
        imageBlock,
        defineArrayMember({
          type: 'code',
          options: {
            withFilename: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      group: 'mainContent',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog.category' }],
        },
      ],
    }),
    defineField({
      name: 'publishDate',
      type: 'date',
      group: 'mainContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metadata',
      type: 'metadata',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'metadata.title',
      subtitle: 'publishDate',
      media: 'metadata.image',
    },
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Title',
      name: 'metadata.title',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
