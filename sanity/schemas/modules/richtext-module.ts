import { VscSymbolKeyword } from 'react-icons/vsc';
import { defineArrayMember, defineField, defineType } from 'sanity';

import { getBlockText } from '../../utils';
import imageBlock from '../fragments/image-block';

export default defineType({
  name: 'richtext-module',
  title: 'Richtext module',
  icon: VscSymbolKeyword,
  type: 'object',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'options', title: 'Options' },
  ],
  fields: [
    defineField({
      name: 'content',
      type: 'array',
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
      group: 'content',
    }),
    defineField({
      name: 'tableOfContents',
      type: 'boolean',
      initialValue: false,
      group: 'options',
    }),
    defineField({
      name: 'tocPosition',
      type: 'string',
      options: {
        list: ['left', 'right'],
        layout: 'radio',
      },
      hidden: ({ parent }) => !parent.tableOfContents,
      initialValue: 'right',
      group: 'options',
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: 'Richtext module',
    }),
  },
});
