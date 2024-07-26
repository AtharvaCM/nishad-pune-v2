import { defineType } from 'sanity';

export default defineType({
  name: 'modules',
  type: 'array',
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
});
