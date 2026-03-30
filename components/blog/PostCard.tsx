
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/types'

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="card hover:shadow-lg transition-shadow overflow-hidden group">
        <div className="relative h-48 w-full">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-4">
          <span className="text-xs font-semibold text-primary-600 uppercase">{post.category.name}</span>
          <h3 className="text-xl font-bold mt-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mt-2 text-sm line-clamp-3">{post.excerpt}</p>
        </div>
      </article>
    </Link>
  )
}