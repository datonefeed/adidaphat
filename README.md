# Miyu Studio Portfolio - Next.js

Portfolio website được chuyển đổi hoàn toàn từ React + Vite sang Next.js App Router.

## 🚀 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (Radix UI)
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Theme**: next-themes

## 📁 Cấu trúc Project

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage (Project Index)
│   ├── about/               # About page
│   ├── project/[id]/        # Dynamic project pages
│   ├── not-found.tsx        # 404 page
│   ├── providers.tsx        # Client-side providers
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Navbar.tsx
│   ├── FloatingNav.tsx
│   ├── ScrollRevealText.tsx
│   └── ui/                  # Shadcn UI components
├── data/                    # Data & types
│   └── projects.ts
├── lib/                     # Utilities
│   └── utils.ts
├── hooks/                   # Custom hooks
├── assets/                  # Images & static files
└── public/                  # Public assets
```

## 🛠️ Development

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build cho production

```bash
npm run build
npm start
```

## ✨ Những thay đổi chính từ Vite sang Next.js

### 1. Routing
- ❌ React Router → ✅ Next.js App Router
- Sử dụng file-based routing
- Dynamic routes với `[id]` folder

### 2. Components
- Thêm `"use client"` directive cho client components
- `Link` từ `next/link` thay vì `react-router-dom`
- `usePathname()` thay vì `useLocation()`
- `useParams()`, `useSearchParams()` từ Next.js

### 3. Images
- Sử dụng `next/image` để tối ưu hóa ảnh
- Cấu hình `remotePatterns` trong `next.config.js`

### 4. Styling
- Giữ nguyên Tailwind CSS
- Di chuyển CSS từ `src/index.css` sang `app/globals.css`

### 5. Configuration
- `next.config.js` thay vì `vite.config.ts`
- `tsconfig.json` được cấu hình cho Next.js
- Xóa các file không cần: `index.html`, ESLint config của Vite

## 📝 Scripts

```json
{
  "dev": "next dev",        // Chạy development server
  "build": "next build",    // Build production
  "start": "next start",    // Chạy production server
  "lint": "next lint"       // Lint code
}
```

## 🎨 Features

- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ Image optimization
- ✅ Fast refresh
- ✅ TypeScript support
- ✅ Dark mode với next-themes
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Performance optimization

## 📦 Deploy

Deploy dễ dàng lên Vercel, Netlify, AWS, hoặc các platform khác.

## 📄 License

MIT
