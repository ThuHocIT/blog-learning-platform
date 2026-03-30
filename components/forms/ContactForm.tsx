'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validations';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema), // Kết nối Zod với React Hook Form [cite: 905]
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Dữ liệu form:', data); 
    toast.success('Gửi tin nhắn thành công! [cite: 1435]');
    reset(); // Xóa dữ liệu form sau khi gửi [cite: 1436]
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
      <div>
        <label className="block mb-1 font-medium">Họ tên</label>
        <input {...register('name')} className="w-full border p-2 rounded" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>} [cite: 1452]
      </div>
      {/* Tương tự cho email và message... */}
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:bg-gray-400">
        {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'} [cite: 1497]
      </button>
    </form>
  );
}