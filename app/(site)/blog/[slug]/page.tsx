import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';

import Post from '@/components/modules/blog/Post';
import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/fetch';
import processMetadata from '@/utils/process-metadata';

export default async function Page({ params }: Props) {
  const post = await getPost(params);
  if (!post) notFound();
  return <Post post={post} />;
}

export async function generateMetadata({ params }: Props) {
  const post = await getPost(params);
  if (!post) notFound();
  return processMetadata(post);
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(groq`*[_type == 'blog.post' && defined(metadata.slug.current)].metadata.slug.current`);

  return slugs.map((slug) => ({ slug }));
}

async function getPost(params: Props['params']) {
  return await sanityFetch<Sanity.BlogPost>({
    query: groq`*[_type == 'blog.post' && metadata.slug.current == $slug][0]{
			...,
			'body': select(_type == 'image' => asset->, body),
			'readTime': length(pt::text(body)) / 200,
			'headings': body[style in ['h2', 'h3']]{
				style,
				'text': pt::text(@)
			},
			categories[]->,
			metadata {
				...,
				'ogimage': image.asset->url
			}
		}`,

    params,
    tags: ['blog.post'],
  });
}

type Props = {
  params: { slug?: string };
};
