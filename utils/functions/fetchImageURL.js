import imageUrlBuilder from '@sanity/image-url';

import { client } from '@/sanity/lib/client';

export function fetchImageURL(logoAssetRef) {
  try {
    if (!logoAssetRef) {
      // Throw a custom error
      throw new Error('Logo asset is undefined or does not have a _ref property.');
    }
    const imageUrl = imageUrlBuilder(client).image(logoAssetRef).url();
    return imageUrl;
  } catch (error) {
    throw new Error('Failed to fetch image data: ' + error.message);
  }
}
