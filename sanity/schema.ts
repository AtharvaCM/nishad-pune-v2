import { SchemaTypeDefinition } from 'sanity'

import footer from './schemas/documents/footer'
import header from './schemas/documents/header'
import homepage from './schemas/documents/homepage'
import show from './schemas/documents/show'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [footer, header, homepage, show],
}

// TODO: Add meta tags in next sprint
