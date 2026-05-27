import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Hoàng Nam Khánh | Portfolio",
  description:
    "Portfolio của Nguyễn Hoàng Nam Khánh, sinh viên Công nghệ phần mềm đang tìm cơ hội thực tập phát triển web và phần mềm.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
