import { SchemaTypeDefinition } from 'sanity'

import audienceFeedback from './schemas/documents/audienceFeedback'
import footer from './schemas/documents/footer'
import header from './schemas/documents/header'
import homepage from './schemas/documents/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [audienceFeedback, header, footer, homepage],
}

// TODO: Add meta tags in next sprint
