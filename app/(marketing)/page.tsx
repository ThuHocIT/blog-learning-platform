// app/page.tsx
import postsData from '@/data/posts.json'
import PostList from '@/components/blog/PostList'
import { Post } from '@/types'

export default function HomePage() {
  const posts = postsData as Post[] // Lấy 6 bài mới nhất theo spec [cite: 338]

  return (
    <main>
      <section className="bg-primary-50 py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Chào mừng đến với NextBlog</h1> 
          <p className="mt-4 text-xl text-gray-600">Nơi chia sẻ kiến thức Next.js từ cơ bản đến nâng cao.</p>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="mb-12">Bài viết mới nhất</h2> 
        <PostList posts={posts} /> 
      </section>
    </main>
  )
}