// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';

type ContactApiResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    const res: ContactApiResponse = {
      success: false,
      message: 'Body JSON không hợp lệ.',
    };
    return NextResponse.json(res, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const res: ContactApiResponse = {
      success: false,
      message: 'Dữ liệu không hợp lệ.',
      errors: parsed.error.flatten().fieldErrors,
    };
    return NextResponse.json(res, { status: 422 });
  }

  try {
    // TODO: xử lý thực tế (gửi email / lưu DB / gọi service)
    // console.log('Contact payload:', parsed.data);

    const res: ContactApiResponse = {
      success: true,
      message: 'Gửi tin nhắn thành công!',
    };
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    const res: ContactApiResponse = {
      success: false,
      message: 'Lỗi máy chủ, vui lòng thử lại sau.',
    };
    return NextResponse.json(res, { status: 500 });
  }
}