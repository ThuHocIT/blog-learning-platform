'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Lấy giá trị tìm kiếm hiện tại từ URL nếu có
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const debouncedQuery = useDebounce(query, 300) // Debounce để tránh gọi API quá nhiều khi người dùng gõ

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (debouncedQuery) {
      params.set('q', debouncedQuery) 
    } else {
      params.delete('q') 
    }
    // Cập nhật URL mà không làm load lại trang
    router.push(`/blog?${params.toString()}`)
  }, [debouncedQuery, router, searchParams])

  return (
    <div className="mb-6">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Tìm kiếm bài viết..."
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 outline-none"
      />
    </div>
  )
}