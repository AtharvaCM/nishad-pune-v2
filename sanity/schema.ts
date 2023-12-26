import { SchemaTypeDefinition } from 'sanity'

import article from './schemas/documents/article'
import footer from './schemas/documents/footer'
import header from './schemas/documents/header'
import homepage from './schemas/documents/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, header, footer, homepage],
}

// TODO: Add meta tags in next sprint
