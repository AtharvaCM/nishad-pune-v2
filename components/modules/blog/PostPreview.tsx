import Link from 'next/link';

import DateComp from '@/components/common/date-comp';
import Img from '@/components/common/img';
import { processUrl } from '@/sanity/lib/url';

import Categories from './Categories';

export default function PostPreview({ post }: { post: Sanity.BlogPost }) {
  return (
    <Link className="group block space-y-2" href={processUrl(post, { base: false })}>
      <figure className="aspect-video overflow-hidden bg-gray-500">
        <Img
          className="aspect-video w-full object-cover transition-[filter,transform] group-hover:scale-105 group-hover:brightness-110"
          image={post.metadata.image}
          imageWidth={800}
        />
      </figure>

      <div className="h3 group-hover:underline">{post.metadata.title}</div>

      <div className="flex flex-wrap gap-x-4">
        <DateComp value={post.publishDate} />
        <Categories categories={post.categories} />
      </div>
    </Link>
  );
}
