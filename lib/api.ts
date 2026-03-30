import { Post } from '@/types';
import postsData from '@/data/posts.json';

// Giả lập delay mạng để học viên thấy được Loading State 
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPosts(options?: {
  limit?: number;
  search?: string;
  category?: string;
}): Promise<Post[]> {
  await delay(500); //
  let posts = postsData as Post[];

  // Lọc theo từ khóa tìm kiếm
  if (options?.search) {
    const s = options.search.toLowerCase();
    posts = posts.filter(p => p.title.toLowerCase().includes(s));
  }

  // Lọc theo danh mục 
  if (options?.category) {
    posts = posts.filter(p => p.category.slug === options.category);
  }

  // Giới hạn số lượng bài viết (ví dụ trang chủ chỉ lấy 6 bài) 
  if (options?.limit) {
    posts = posts.slice(0, options.limit);
  }

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  await delay(300); // [cite: 477]
  const post = postsData.find(p => p.slug === slug);
  return (post as Post) || null;
}
export async function getAllPosts(): Promise<Post[]> {
  return postsData as Post[];
}