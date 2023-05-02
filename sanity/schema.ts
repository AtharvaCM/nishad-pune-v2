import { SchemaTypeDefinition } from 'sanity'

import footer from './schemas/footer'
import header from './schemas/header'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, footer],
}
