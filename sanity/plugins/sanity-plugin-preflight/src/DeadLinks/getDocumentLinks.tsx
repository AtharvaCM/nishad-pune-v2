import { nestLists } from '@portabletext/toolkit';
import { isPortableTextTextBlock, isTypedObject } from 'sanity';

import { Modules } from '@/types/generated/sanity.types';

import { isPortableTextLink } from '../utils/guards';
import { LinkResults } from '.';

/**
 * Retrieve all links from a given Sanity Article document.
 */
export const getDocumentLinks = (blocks: Modules): LinkResults => {
  if (!Array.isArray(blocks) || !blocks.every(isTypedObject)) {
    return {};
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let documentLinks: any[] = [];

  // Iterate over each module and extract 'intro' and 'content' blocks
  blocks.forEach((module) => {
    if ('intro' in module && Array.isArray(module.intro)) {
      documentLinks = documentLinks.concat(nestLists(module.intro, 'direct'));
    }
    if ('content' in module && Array.isArray(module.content)) {
      documentLinks = documentLinks.concat(nestLists(module.content, 'direct'));
    }

    if ('body' in module && Array.isArray(module.body)) {
      documentLinks = documentLinks.concat(nestLists(module.body, 'direct'));
    }
  });

  return documentLinks.reduce((links: LinkResults, block) => {
    const markDefs = isPortableTextTextBlock(block) && block.markDefs ? block.markDefs : undefined;

    if (markDefs) {
      const markLinks = markDefs?.reduce((marks, mark) => {
        const isMarkLink = isPortableTextLink(mark);
        // Avoid checking the same link multiple times
        const isDuplicate = isMarkLink && links[mark.href];

        if (isMarkLink && !isDuplicate) {
          return { ...marks, [mark.href]: { status: 'initial' } };
        }

        return marks;
      }, {});

      return {
        ...links,
        ...markLinks,
      };
    }
    return links;
  }, {});
};
