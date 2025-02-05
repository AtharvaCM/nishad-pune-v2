import { createClient } from '@sanity/client';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
    // logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === 'title') {
        return true;
      }

      return props.filterDefault(props);
    },
  },
});
