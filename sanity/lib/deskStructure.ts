import { BsDatabaseAdd } from 'react-icons/bs';
import { VscServerProcess } from 'react-icons/vsc';
import { StructureBuilder } from 'sanity/structure';

import { group, singleton } from '../utils';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Nishad Pune Content')
    .items([
      singleton(S, 'site').icon(VscServerProcess),
      S.documentTypeListItem('page').title('Pages'),
      S.divider(),

      S.documentTypeListItem('navigation'),
      S.documentTypeListItem('announcement').title('Announcements'),
      S.documentTypeListItem('redirect').title('Redirects'),
      S.divider(),

      S.documentTypeListItem('blog.post').title('Blog posts'),
      S.documentTypeListItem('blog.category').title('Blog categories'),
      S.divider(),

      group(S, 'Miscellaneous', [
        S.documentTypeListItem('logo').title('Logos'),
        S.documentTypeListItem('pricing').title('Pricing tiers'),
        S.documentTypeListItem('testimonial').title('Testimonials'),
      ]).icon(BsDatabaseAdd),
    ]);
