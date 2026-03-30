import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự '),
  email: z.string().email('Email không hợp lệ '),
  message: z.string().min(10, 'Tin nhắn phải có ít nhất 10 ký tự '),
});

export type ContactFormData = z.infer<typeof contactSchema>; // Tự động tạo type từ schema 