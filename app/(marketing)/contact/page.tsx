import ContactForm from '@/components/forms/ContactForm'; // Hoặc đường dẫn đúng tới file ContactForm của bạn

export const metadata = {
  title: 'Liên hệ - NextJS Blog',
  description: 'Gửi tin nhắn cho chúng tôi để được hỗ trợ.',
};

export default function ContactPage() {
  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Liên hệ</h1>
        <p className="text-gray-600">
          Điền thông tin bên dưới để gửi tin nhắn cho chúng tôi. Chúng tôi sẽ phản hồi sớm nhất có thể.
        </p>
      </div>
      
      {/* Hiển thị Form liên hệ */}
      <ContactForm />
    </div>
  );
}