import { VscExtensions } from 'react-icons/vsc';
import { defineArrayMember, defineField, defineType } from 'sanity';

import { count, getBlockText } from '../../../utils';
import { alignItems, alignmentFieldset, textAlign } from '../../fragments/fields/alignment';
import creativeCtas from './creative-ctas';
import creativeIcon from './creative-icon';
import creativeImage from './creative-image';
import creativeRichtext from './creative-richtext';

export default defineType({
  name: 'creative-module',
  title: 'Creative module',
  icon: VscExtensions,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'options' }],
  fieldsets: [alignmentFieldset],
  fields: [
    defineField({
      name: 'intro',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'modules',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'module',
          type: 'object',
          fields: [
            defineField({
              name: 'subModules',
              type: 'array',
              of: [creativeCtas, creativeIcon, creativeImage, creativeRichtext, { type: 'custom-html' }],
            }),
            defineField({
              name: 'colSpan',
              title: 'Column span',
              type: 'number',
              validation: (Rule) => Rule.min(1).integer(),
            }),
          ],
          preview: {
            select: {
              subModules: 'subModules',
              colSpan: 'colSpan',
            },
            prepare: ({ subModules, colSpan }) => ({
              title: subModules
                .map((subModule: { _type: string }) => subModule._type)
                .filter(Boolean)
                .join(' + '),
              subtitle: colSpan > 1 ? `${colSpan}-column span` : undefined,
            }),
          },
        }),
      ],
      group: 'content',
    }),
    defineField({
      name: 'columns',
      type: 'number',
      description: 'Leave empty to use the number of modules as columns',
      validation: (Rule) => Rule.min(1).integer(),
      group: 'options',
    }),
    defineField({
      name: 'bordered',
      type: 'boolean',
      initialValue: false,
      group: 'options',
      description: 'When enabled, vertical alignment will be set to "stretched"',
    }),
    defineField({
      ...textAlign,
      fieldset: 'alignment',
    }),
    defineField({
      ...alignItems,
      fieldset: 'alignment',
      hidden: ({ parent }) => parent.bordered,
    }),
  ],
  preview: {
    select: {
      intro: 'intro',
      modules: 'modules',
    },
    prepare: ({ intro, modules }) => ({
      title: getBlockText(intro),
      subtitle: count(modules, 'module'),
    }),
  },
});
