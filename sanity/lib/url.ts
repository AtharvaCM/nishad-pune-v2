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
  const segment = page._type === 'blog.post' ? 'blog' : null;

  const slug = page.metadata?.slug?.current;
  const path = slug === 'index' ? null : slug;

  return (base ? BASE_URL + '/' : '/') + [segment, path, stegaClean(params)].filter(Boolean).join('/');
}
