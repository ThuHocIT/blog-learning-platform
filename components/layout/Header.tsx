'use client'; // Client Component vì có logic tương tác [cite: 224]
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} priority /> 
          <span className="text-xl font-bold text-primary-600">NextBlog</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-primary-600 font-medium">Trang chủ</Link>
          <Link href="/blog" className="hover:text-primary-600 font-medium">Blog</Link>
          <Link href="/about" className="hover:text-primary-600 font-medium">Giới thiệu</Link>
          <Link href="/contact" className="hover:text-primary-600 font-medium">Liên hệ</Link>
        </nav>
        <Link href="/blog">
  <button className="btn-primary">
    Bắt đầu
  </button>
</Link>
      </div>
    </header>
  );
}