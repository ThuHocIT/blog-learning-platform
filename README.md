# 🚀 NextJS Blog Learning Platform

Một nền tảng Blog hiện đại được xây dựng để thực hành các kỹ thuật Next.js mới nhất (phiên bản 15+). Dự án tập trung vào hiệu suất, trải nghiệm người dùng và quy trình phát triển chuẩn chỉnh.

🌐 **Xem Demo trực tiếp:** [https://blog-learning-platform.vercel.app](https://blog-learning-platform.vercel.app)

---

## ✨ Tính năng nổi bật

- **⚡ Siêu tốc độ:** Sử dụng **Static Site Generation (SSG)** và **Incremental Static Regeneration (ISR)** giúp tải trang gần như tức thì.
- **📱 Responsive Design:** Giao diện tương thích hoàn hảo trên mọi thiết bị (Mobile, Tablet, Desktop) với **Tailwind CSS**.
- **🔍 Tìm kiếm thông minh:** Tính năng lọc bài viết theo từ khóa và danh mục trực tiếp trên URL.
- **📝 Nội dung Markdown:** Hỗ trợ viết bài blog bằng định dạng Markdown chuyên nghiệp.
- **🛡️ Form Validation:** Trang liên hệ được xác thực chặt chẽ bằng **Zod** và **React Hook Form**.
- **🌑 Dark Mode Ready:** Cấu trúc màu sắc linh hoạt, dễ dàng mở rộng.

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Vai trò |
| :--- | :--- |
| **Next.js 15+** | Framework chính (App Router, Server Components) |
| **TypeScript** | Quản lý kiểu dữ liệu chặt chẽ |
| **Tailwind CSS** | Styling giao diện nhanh chóng & hiện đại |
| **Zod** | Xác thực dữ liệu (Schema Validation) |
| **React Hook Form** | Quản lý trạng thái Form |
| **Lucide React** | Bộ icon SVG tối giản |
| **Vercel** | Nền tảng triển khai Cloud |

---

## 🏗️ Cấu trúc thư mục

```text
├── app/               # Next.js App Router (Pages, Layouts, APIs)
├── components/        # Các thành phần giao diện tái sử dụng
├── data/              # Lưu trữ dữ liệu bài viết (JSON)
├── lib/               # Các hàm tiện ích, cấu hình validation
├── public/            # Tài nguyên tĩnh (Images, Icons, Fonts)
├── types/             # Định nghĩa các interface TypeScript
└── next.config.ts     # Cấu hình Next.js (Remote Images,...)

🚀 Khởi chạy dự án dưới máy cục bộ
Clone dự án:

Bash
git clone [https://github.com/user_cua_ban/blog-learning-platform.git](https://github.com/ThuHocIT/blog-learning-platform.git)
Cài đặt thư viện:

Bash
npm install
Chạy môi trường phát triển:

Bash
npm run dev
Truy cập http://localhost:3000 để xem kết quả.

👤 Thông tin tác giả
Tên: Nguyen Anh Thu

Email: na.thu06277@gmail.com

GitHub: ThuHocIT

⭐ Nếu bạn thấy dự án này hữu ích, hãy tặng nó 1 sao trên GitHub nhé!