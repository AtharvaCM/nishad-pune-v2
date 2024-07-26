import { groq } from 'next-sanity';

import DateComp from '@/components/common/date-comp';
import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';

import Breadcrumbs from '../Breadcrumbs';
import Content from '../RichtextModule/Content';
import TableOfContents from '../RichtextModule/TableOfContents';
import Categories from './Categories';
import css from './Post.module.css';
import ReadTime from './ReadTime';

export default async function Post({ post }: Readonly<{ post: Sanity.BlogPost }>) {
  const crumbs = await sanityFetch<Sanity.Page[]>({
    query: groq`*[_type == 'page' && metadata.slug.current in ['index', 'blog']]{
			title,
			metadata
		}`,
  });

  return (
    <>
      <article>
        <header className="section space-y-6 text-center">
          <h1 className="h1 text-balance">{post.metadata.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-x-4">
            <DateComp value={post.publishDate} />
            <Categories categories={post.categories} />
            <ReadTime value={post.readTime} />
          </div>
        </header>

        <div className="section grid gap-8 lg:grid-cols-[1fr,auto]">
          <aside className="lg:sticky-below-header mx-auto w-full max-w-lg self-start [--offset:1rem] lg:order-1 lg:w-[250px]">
            <TableOfContents headings={post.headings} />
          </aside>

          <Content value={post.body} className={cn(css.body, 'grid max-w-screen-md')}>
            <hr />
          </Content>
        </div>
      </article>

      <Breadcrumbs
        crumbs={
          crumbs?.map((crumb) => ({
            type: 'internal',
            internal: crumb,
          })) as Omit<Sanity.Link[], '_type' | 'label'>
        }
        currentPage={post}
      />
    </>
  );
}
