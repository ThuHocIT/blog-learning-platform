// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { contactSchema, type ContactFormData } from '@/lib/validations'; // Dùng lại schema để validate ở server 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dữ liệu không hợp lệ', issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const payload: ContactFormData = parsed.data;

    // Ở đây bạn có thể xử lý dữ liệu, ví dụ lưu vào database hoặc gửi email
    console.log('Dữ liệu nhận được tại Server:', payload);

    // Giả lập thời gian xử lý (như lưu vào database) 
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Cảm ơn bạn! Tin nhắn đã được gửi thành công.', 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Dữ liệu không hợp lệ.' },
      { status: 400 } 
    );
  }
}