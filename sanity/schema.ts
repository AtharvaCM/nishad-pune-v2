import { SchemaTypeDefinition } from 'sanity'

import event from './schemas/documents/event'
import footer from './schemas/documents/footer'
import galleySection from './schemas/documents/gallerySection'
import header from './schemas/documents/header'
import homepage from './schemas/documents/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, footer, galleySection, header, homepage],
}

// TODO: Add meta tags in next sprint
