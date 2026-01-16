import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
	return (
		<main className="relative flex size-full min-h-screen w-full items-center justify-center p-4">
			<div className="mx-auto max-w-5xl">
				<ContactCard
					title="Kết Nối"
					description="Nếu bạn có câu hỏi về dịch vụ của chúng tôi hoặc muốn hợp tác cho dự án, vui lòng điền vào biểu mẫu này. Chúng tôi sẽ phản hồi trong vòng 1 ngày làm việc."
					contactInfo={[
						{
							icon: MailIcon,
							label: 'Email',
							value: 'hello@miyustudio.com',
						},
						{
							icon: PhoneIcon,
							label: 'Điện Thoại',
							value: '+84 123 456 789',
						},
						{
							icon: MapPinIcon,
							label: 'Địa Chỉ',
							value: 'TP Hồ Chí Minh, Việt Nam',
							className: 'col-span-2',
						}
					]}
				>
					<form action="" className="w-full space-y-4">
						<div className="flex flex-col gap-2">
							<Label>Họ Tên</Label>
							<Input type="text" placeholder="Nhập họ tên của bạn" />
						</div>
						<div className="flex flex-col gap-2">
							<Label>Email</Label>
							<Input type="email" placeholder="your@email.com" />
						</div>
						<div className="flex flex-col gap-2">
							<Label>Số Điện Thoại</Label>
							<Input type="phone" placeholder="+84" />
						</div>
						<div className="flex flex-col gap-2">
							<Label>Lời Nhắn</Label>
							<Textarea placeholder="Chia sẻ ý tưởng dự án của bạn..." />
						</div>
						<Button className="w-full" type="button">
							Gửi Tin Nhắn
						</Button>
					</form>
				</ContactCard>
			</div>
		</main>
	);
}