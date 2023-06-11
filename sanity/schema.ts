import { SchemaTypeDefinition } from 'sanity'

import footer from './schemas/documents/footer'
import header from './schemas/documents/header'
import homepage from './schemas/documents/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, footer, homepage],
}

// TODO: Add meta tags in next sprint
