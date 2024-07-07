import { StructureBuilder } from 'sanity/structure';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Nishad Pune')
    .items([
      S.listItem().title('Home Page').child(S.editor().schemaType('homepage').documentId('homepage')),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => !['homepage'].includes(listItem.getId() || '')),
    ]);
