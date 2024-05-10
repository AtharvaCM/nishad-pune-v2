'use client'

import { QueryResponseInitial, useQuery } from '@sanity/react-loader'
import { QueryParams, SanityDocument } from 'next-sanity'

import { POSTS_QUERY } from '@/sanity/lib/queries'

import Posts from './Posts'

export default function PostsPreview({
  initial,
  params,
}: {
  initial: QueryResponseInitial<SanityDocument[]>
  params?: QueryParams
}) {
  const { data } = useQuery<SanityDocument[] | null>(POSTS_QUERY, params, {
    initial,
  })

  return data ? (
    <Posts posts={data} />
  ) : (
    <div className="bg-red-100">Posts not found</div>
  )
}
