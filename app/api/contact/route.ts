// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations'; // Dùng lại schema để validate ở server 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate dữ liệu một lần nữa ở phía Server để đảm bảo an toàn 
    const validatedData = contactSchema.parse(body);

    // Ở đây bạn có thể log ra để kiểm tra 
    console.log('Dữ liệu nhận được tại Server:', validatedData);

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