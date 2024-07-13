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
      type: 'array',
      group: 'mainContent',
      of: [
        { type: 'accordion-list' },
        { type: 'blog-list' },
        { type: 'breadcrumbs' },
        { type: 'callout' },
        { type: 'creative-module' },
        { type: 'custom-html' },
        { type: 'flag-list' },
        { type: 'hero' },
        { type: 'hero.saas' },
        { type: 'hero.split' },
        { type: 'logo-list' },
        { type: 'pricing-list' },
        { type: 'richtext-module' },
        { type: 'stat-list' },
        { type: 'step-list' },
        { type: 'testimonial-list' },
        { type: 'testimonial.featured' },
      ],
      options: {
        insertMenu: {
          groups: [
            {
              name: 'intro',
              title: 'Intro',
              of: ['hero', 'hero.saas', 'hero.split'],
            },
            {
              name: 'content',
              title: 'Content',
              of: ['accordion-list', 'blog-list', 'richtext-module', 'custom-html'],
            },
            {
              name: 'navigation',
              title: 'Navigation',
              of: ['breadcrumbs'],
            },
            {
              name: 'media',
              title: 'Media',
              of: ['callout', 'creative-module', 'flag-list'],
            },
            {
              name: 'listings',
              title: 'Listings',
              of: ['logo-list', 'pricing-list', 'stat-list', 'step-list'],
            },
            {
              name: 'testimonials',
              title: 'Testimonials',
              of: ['testimonial-list', 'testimonial.featured'],
            },
          ],
          // TODO: Add screenshots of each block
          // views: [{ name: 'list' }, { name: 'grid', previewImageUrl: (schemaTypeName) => `/assets/${schemaTypeName}.png` }],
        },
      },
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
