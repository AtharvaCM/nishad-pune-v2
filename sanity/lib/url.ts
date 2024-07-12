import { stegaClean } from '@sanity/client/stega';

import { BASE_URL } from '../env';

export function processUrl(
  page: Sanity.PageBase,
  {
    base = true,
    params,
  }: {
    base?: boolean;
    params?: string;
  } = {},
) {
  const directory = page._type === 'blog.post' ? 'blog' : null;

  const slug = page.metadata?.slug?.current;
  const path = slug === 'index' ? null : slug;

  return (base ? BASE_URL + '/' : '/') + [directory, path, stegaClean(params)].filter(Boolean).join('/');
}
