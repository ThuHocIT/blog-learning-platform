'use client'; // Bắt buộc cho các thành phần có tính tương tác như Form 
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validations'; // Import schema đã định nghĩa 
import toast from 'react-hot-toast';

export default function ContactForm() {
  // Khởi tạo React Hook Form với Zod Resolver 
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // Hàm xử lý khi submit form thành công 
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let result: { success?: boolean; message?: string } = {};
      try {
        result = await response.json();
      } catch {
        // ignore JSON parse error, fallback message below
      }

      if (!response.ok || !result.success) {
        toast.error(result.message || 'Có lỗi xảy ra, vui lòng thử lại.');
        return;
      }

      toast.success(result.message || 'Gửi tin nhắn thành công!');
      reset();
    } catch (error) {
      toast.error('Không thể kết nối đến máy chủ.');
      console.error('Lỗi gửi form:', error);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="max-w-md mx-auto space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
    >
      {/* Trường Họ tên  */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">Họ tên</label>
        <input
          id="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name')}
          placeholder="Nguyễn Văn A"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mt-1 italic">{errors.name.message}</p>
        )}
      </div>

      {/* Trường Email  */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
          placeholder="example@email.com"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1 italic">{errors.email.message}</p>
        )}
      </div>

      {/* Trường Tin nhắn */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">Tin nhắn</label>
        <textarea
          id="message"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
          rows={5}
          placeholder="Nhập nội dung tin nhắn của bạn tại đây..."
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs mt-1 italic">{errors.message.message}</p>
        )}
      </div>

      {/* Nút Gửi  */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 transition-colors shadow-md shadow-primary-100 flex justify-center items-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            Đang gửi...
          </>
        ) : (
          'Gửi tin nhắn'
        )}
      </button>
    </form>
  );
}