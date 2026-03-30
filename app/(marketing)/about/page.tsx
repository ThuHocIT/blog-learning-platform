// app/(marketing)/about/page.tsx
export const metadata = {
  title: 'Giới thiệu - NextJS Blog',
};

export default function AboutPage() {
  return (
    <div className="container py-20 max-w-4xl">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Cột thông tin cá nhân */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
            <h3 className="text-xl font-bold text-primary-700 mb-2">Tác giả</h3>
            <p className="font-semibold text-gray-900">Nguyễn Anh Thứ</p>
            <p className="text-sm text-gray-600 mb-4">Fullstack Developer</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📍 Hanoi, Vietnam</p>
              <p>📧 nathu.06277@gmail.com</p>
              <p>🔗 https://github.com/ThuHocIT/</p>
            </div>
          </div>
        </div>

        {/* Cột thông tin dự án */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-6">Về dự án này</h1>
          <div className="prose lg:prose-lg text-gray-700">
            <p>
              Dự án <strong>NextJS Blog Learning Platform</strong> là một ứng dụng Demo 
              được xây dựng nhằm mục đích đào tạo và thực hành các kiến thức Next.js 
              từ cơ bản đến nâng cao[cite: 4, 6].
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Mục tiêu kỹ thuật</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Thực hành <strong>App Router</strong> và cấu trúc thư mục hiện đại.</li>
              <li>Phân biệt và áp dụng <strong>Server/Client Components</strong>.</li>
              <li>Xử lý dữ liệu với <strong>SSR, CSR và SSG</strong>.</li>
              <li>Quản lý Form và Validation chuyên nghiệp với <strong>Zod</strong>.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Thông điệp từ tác giả</h3>
            <p>
              Tôi xây dựng blog này không chỉ để chia sẻ kiến thức mà còn để tạo ra một 
              không gian thực hành chuẩn chỉnh cho mọi người. Hy vọng dự án này sẽ giúp ích 
              cho bạn trên con đường chinh phục Next.js!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}