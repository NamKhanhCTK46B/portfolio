# Portfolio - Nguyễn Hoàng Nam Khánh

Portfolio cá nhân được xây dựng bằng Next.js, tối ưu cho sinh viên Công nghệ phần mềm đang tìm cơ hội thực tập.

## Nội dung

- Giới thiệu bản thân và mục tiêu thực tập
- Học vấn, GPA và TOEIC
- Kỹ năng frontend, backend/database và công cụ làm việc
- Dự án học tập, đồ án chuyên ngành và portfolio cá nhân
- Thông tin liên hệ

## Công nghệ

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Chạy local

```bash
npm install
npm run dev
```

Mở địa chỉ được in trong terminal, mặc định là `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```

## Deploy trên Vercel

Dự án deploy qua GitHub push. Trên Vercel chọn preset Next.js:

```text
Root Directory: portfolio
Build Command: npm run build
Install Command: npm install
Output Directory: .next
```

Hiện tại portfolio tạm bỏ Supabase, không cần cấu hình biến môi trường.

## Commit convention

Sử dụng Conventional Commits, ví dụ:

```bash
git commit -m "feat: migrate portfolio to nextjs"
```
