import { DeadLinks, Preflight } from '@planetary/sanity-plugin-preflight';
import { RocketIcon } from '@sanity/icons';
import { FolderIcon } from '@sanity/icons';
import { EditIcon } from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { BsDatabaseAdd } from 'react-icons/bs';
import { VscServerProcess } from 'react-icons/vsc';
import { StructureBuilder, StructureContext } from 'sanity/structure';

import { group, singleton } from '../utils';

export const deskStructure = (S: StructureBuilder, context: StructureContext) =>
  S.list()
    .title('Nishad Pune Content')
    .items([
      singleton(S, 'site').icon(VscServerProcess),
      orderableDocumentListDeskItem({ type: 'page', title: 'Pages', icon: FolderIcon, id: 'orderable-en-pages', S, context }),
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

export const getDefaultDocumentNode = (S: StructureBuilder, { schemaType }: { schemaType: string }) => {
  // Only show the Preflight plugin on selected document types
  if (['blog.post', 'page'].includes(schemaType)) {
    return S.document().views([
      // Include the default content editor
      S.view.form().icon(EditIcon),

      // Add Preflight plugin
      S.view
        .component(
          Preflight({
            plugins: [
              DeadLinks({
                content: 'modules',
              }),
            ],
          }),
        )
        .title('Preflight')
        .icon(RocketIcon),
    ]);
  }

  // Otherwise render the default content editor
  return S.document().views([S.view.form()]);
};
