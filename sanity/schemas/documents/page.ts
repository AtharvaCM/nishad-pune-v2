import { SearchIcon } from '@sanity/icons';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';
import { FcDocument } from 'react-icons/fc';
import { RiPagesFill } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  orderings: [orderRankOrdering],
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
    orderRankField({ type: 'page' }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      group: 'mainContent',
    }),
    defineField({
      name: 'modules',
      type: 'modules',
      group: 'mainContent',
    }),
    defineField({
      name: 'metadata',
      type: 'metadata',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'metadata.slug.current',
    },
    prepare: ({ title, slug }) => ({
      title,
      subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
      media: FcDocument,
    }),
  },
});
