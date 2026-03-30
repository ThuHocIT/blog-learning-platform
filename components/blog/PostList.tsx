
import { Post } from '@/types'
import PostCard from './PostCard'

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return <p>Không có bài viết nào.</p> 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}