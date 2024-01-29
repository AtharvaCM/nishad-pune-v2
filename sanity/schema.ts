import { SchemaTypeDefinition } from 'sanity'

import article from './schemas/documents/article'
import artistProfile from './schemas/documents/artistProfile'
import audienceFeedback from './schemas/documents/audienceFeedback'
import event from './schemas/documents/event'
import footer from './schemas/documents/footer'
import galleySection from './schemas/documents/gallerySection'
import header from './schemas/documents/header'
import homepage from './schemas/documents/homepage'
import membershipForm from './schemas/documents/membershipForm'
import show from './schemas/documents/show'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    artistProfile,
    audienceFeedback,
    event,
    footer,
    galleySection,
    header,
    homepage,
    membershipForm,
    show,
  ],
}

// TODO: Add meta tags in next sprint
