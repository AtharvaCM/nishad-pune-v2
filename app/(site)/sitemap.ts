import type { MetadataRoute } from 'next';
import { groq } from 'next-sanity';

import { BASE_URL } from '@/sanity/env';
import { sanityFetch } from '@/sanity/lib/fetch';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPages = await sanityFetch<Record<string, MetadataRoute.Sitemap>>({
    query: groq`{
			'pages': *[
				_type == 'page' &&
				!(metadata.slug.current in ['404', 'blog/*']) &&
				metadata.noIndex != true
			]|order(metadata.slug.current){
				'url': $baseUrl + select(metadata.slug.current == 'index' => '', metadata.slug.current),
				'lastModified': _updatedAt,
				'priority': select(
					metadata.slug.current == 'index' => 1,
					0.5
				),
			},
			'posts': *[_type == 'blog.post' && metadata.noIndex != true]|order(name){
				'url': $baseUrl + 'blog/' + metadata.slug.current,
				'lastModified': _updatedAt,
				'priority': 0.4
			}
		}`,
    params: {
      baseUrl: BASE_URL + '/',
    },
  });

  return Object.values(allPages).flat();
}
