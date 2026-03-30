// app/blog/page.tsx
import { getPosts } from '@/lib/api' //
import PostList from '@/components/blog/PostList' // 
import SearchBar from '@/components/blog/SearchBar' // 

export default async function BlogPage() {
  const posts = await getPosts() // Lấy tất cả bài viết 

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Tất cả bài viết</h1>
      <SearchBar /> {}
      <div className="mt-12">
        <PostList posts={posts} /> {}
      </div>
    </div>
  )
}