import { getPosts } from '@/lib/api'; // [cite: 353]
import PostList from '@/components/blog/PostList'; // [cite: 354]
import SearchBar from '@/components/blog/SearchBar'; // [cite: 355]

interface BlogPageProps {
  searchParams: Promise<{ q?: string; category?: string }>; // [cite: 357, 360]
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { q, category } = await searchParams; // [cite: 1778]
  
  // Gọi hàm lấy dữ liệu kèm bộ lọc [cite: 363, 450]
  const posts = await getPosts({
    search: q, // [cite: 364]
    category: category, // [cite: 365]
  });

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Khám phá kiến thức</h1>
      <SearchBar /> {/* [cite: 370] */}
      
      <div className="mt-12">
        {posts.length > 0 ? (
          <PostList posts={posts} /> // [cite: 372]
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500">Không tìm thấy bài viết nào khớp với tìm kiếm.</p>
          </div>
        )}
      </div>
    </div>
  );
}