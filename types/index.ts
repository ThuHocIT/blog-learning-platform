// types/index.ts

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email?: string; // [cite: 161, 166, 167]
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string; // [cite: 168, 172, 173]
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // [cite: 148, 153]
  coverImage: string;
  publishedAt: string;
  author: Author;
  category: Category;
  tags: string[]; // [cite: 155, 156, 158]
  readingTime: number; // [cite: 159, 160]
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: string; // [cite: 174, 176, 181]
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string; // [cite: 182, 187]
}