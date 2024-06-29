import { SchemaTypeDefinition } from 'sanity';

import { blocks } from './schemas/blocks';
import article from './schemas/documents/article';
import artistProfile from './schemas/documents/artistProfile';
import audienceFeedback from './schemas/documents/audienceFeedback';
import event from './schemas/documents/event';
import footer from './schemas/documents/footer';
import galleySection from './schemas/documents/gallerySection';
import header from './schemas/documents/header';
import homepage from './schemas/documents/homepage';
import membershipForm from './schemas/documents/membershipForm';
import page from './schemas/documents/page';
import show from './schemas/documents/show';
import customImage from './schemas/objects/custom-image';
import customVideo from './schemas/objects/custom-video';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    artistProfile,
    audienceFeedback,
    customImage,
    customVideo,
    event,
    footer,
    galleySection,
    header,
    homepage,
    membershipForm,
    page,
    show,
    ...blocks,
  ],
};

// TODO: Add meta tags in next sprint
