import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image) => imageBuilder?.image(source).auto('format').fit('max').url();

export function urlFor(image: Sanity.Image) {
  return imageBuilder.image(image);
}
