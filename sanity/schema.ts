import { SchemaTypeDefinition } from 'sanity'

import article from './schemas/documents/article'
import audienceFeedback from './schemas/documents/audienceFeedback'
import event from './schemas/documents/event'
import footer from './schemas/documents/footer'
import galleySection from './schemas/documents/gallerySection'
import header from './schemas/documents/header'
import homepage from './schemas/documents/homepage'
import show from './schemas/documents/show'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    audienceFeedback,
    event,
    footer,
    galleySection,
    header,
    homepage,
    show,
  ],
}

// TODO: Add meta tags in next sprint
