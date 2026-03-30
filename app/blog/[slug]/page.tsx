// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/api';
import { Post } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// 1. Tạo các tham số tĩnh cho SSG [cite: 389]
export async function generateStaticParams() {
  const posts: Post[] = await getAllPosts(); 
  return posts.map((post) => ({
    slug: post.slug, 
  }));
}

// 2. Cấu hình tự động cập nhật dữ liệu sau mỗi 1 giờ (ISR) 
export const revalidate = 3600; 

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug); // [cite: 410]

  if (!post) {
    notFound(); // [cite: 411, 412]
  }

  return (
    <article className="container py-16 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-500 mb-6 font-medium">
          <span>Tác giả: {post.author.name}</span>
          <span>•</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
          <span>•</span>
          <span>{post.readingTime} phút đọc</span>
        </div>
        <div className="relative h-112.5 w-full shadow-xl">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            priority // Tải ảnh này trước để tối ưu LCP 
            className="object-cover rounded-2xl"
          />
        </div>
      </header>
      
      {/* Nội dung bài viết */}
      <div className="prose lg:prose-xl max-w-none text-gray-800 leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}