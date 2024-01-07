import { SchemaTypeDefinition } from 'sanity'

import event from './schemas/documents/event'
import footer from './schemas/documents/footer'
import header from './schemas/documents/header'
import homepage from './schemas/documents/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, footer, header, homepage],
}

// TODO: Add meta tags in next sprint
