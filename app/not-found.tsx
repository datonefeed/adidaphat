import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-display mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Trang bạn tìm kiếm không tồn tại
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 border border-border rounded-full hover:bg-accent transition-colors"
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
}
