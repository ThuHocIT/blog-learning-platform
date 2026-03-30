// app/blog/page.tsx
import { getPosts } from '@/lib/api'
import PostList from '@/components/blog/PostList'
import SearchBar from '@/components/blog/SearchBar'

interface BlogPageProps {
  searchParams: Promise<{ q?: string }> // Next.js 15+ searchParams cũng là Promise
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { q } = await searchParams
  
  // Gọi hàm getPosts với tham số tìm kiếm
  const posts = await getPosts({ search: q }) 

  return (
    <div className="container py-16">
      <h1 className="mb-8">Tất cả bài viết</h1>
      <SearchBar /> [cite: 370]
      <div className="mt-8">
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="text-center text-gray-500 py-10">
            Không tìm thấy bài viết nào cho từ khóa "{q}"
          </p>
        )}
      </div>
    </div>
  )
}