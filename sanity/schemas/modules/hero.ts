import { TfiLayoutCtaCenter } from 'react-icons/tfi';
import { defineField, defineType } from 'sanity';

import { getBlockText } from '../../utils';
import { alignItems, alignmentFieldset, textAlign } from '../fragments/fields/alignment';

export default defineType({
  name: 'hero',
  title: 'Hero',
  icon: TfiLayoutCtaCenter,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'image' }, { name: 'options' }],
  fieldsets: [alignmentFieldset],
  fields: [
    defineField({
      name: 'pretitle',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'Call-to-actions',
      type: 'array',
      of: [{ type: 'cta' }],
      group: 'content',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
        }),
        defineField({
          name: 'loading',
          type: 'string',
          options: {
            layout: 'radio',
            list: ['lazy', 'eager'],
          },
          initialValue: 'lazy',
        }),
        defineField({
          name: 'overlay',
          type: 'boolean',
          title: 'Dark Overlay',
          initialValue: true,
          description: 'Adds a dark overlay to the image to improve text readability.',
        }),
      ],
      group: 'image',
    }),
    defineField({
      name: 'bgImageMobile',
      title: 'Background image (mobile)',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'image',
    }),
    defineField({
      ...textAlign,
      fieldset: 'alignment',
    }),
    defineField({
      ...alignItems,
      fieldset: 'alignment',
    }),
  ],
  preview: {
    select: {
      content: 'content',
      media: 'bgImage',
    },
    prepare: ({ content, media }) => ({
      title: getBlockText(content),
      subtitle: 'Hero',
      media,
    }),
  },
});
