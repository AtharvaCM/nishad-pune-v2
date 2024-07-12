import { defineField, defineType } from 'sanity';

import StringInput from '../fragments/input/StringInput';

export default defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        source: (doc: any) => doc.metadata.title || doc.name || doc.title,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning('The SEO Meta Title should be between 50 and 60 characters.'),
      components: { input: StringInput },
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('The SEO Meta Description should be between 50 and 160 characters.'),
      components: { input: StringInput },
    }),
    defineField({
      name: 'image',
      description: 'Used for social sharing previews',
      type: 'image',
    }),
    defineField({
      name: 'noIndex',
      description: 'Prevent search engines from indexing this page.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
