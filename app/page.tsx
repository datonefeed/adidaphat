"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Chào mừng đến với
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Portfolio của tôi
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Khám phá các dự án sáng tạo và thiết kế của tôi
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Link href="/home">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
              Xem Portfolio
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
              Về tôi
            </Button>
          </Link>
        </div>

        <div className="pt-12 animate-in fade-in duration-1000 delay-500">
          <p className="text-sm text-muted-foreground">
            Nhấn vào nút trên để bắt đầu khám phá
          </p>
        </div>
      </div>
    </main>
  );
}
