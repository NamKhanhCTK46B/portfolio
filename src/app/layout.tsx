import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Hoàng Nam Khánh | Portfolio",
  description:
    "Portfolio của Nguyễn Hoàng Nam Khánh, sinh viên Kỹ thuật phần mềm – Trường Đại học Đà Lạt, đang tìm cơ hội thực tập phát triển web.",
  keywords: ["portfolio", "thực tập", "web developer", "Nguyễn Hoàng Nam Khánh", "Đại học Đà Lạt", "Kỹ thuật phần mềm"],
  authors: [{ name: "Nguyễn Hoàng Nam Khánh" }],
  icons: {
    icon: [{ url: "/images/portfolio-logo.png", type: "image/png", sizes: "256x256" }],
    shortcut: "/images/portfolio-logo.png",
    apple: "/images/portfolio-logo.png",
  },
  openGraph: {
    title: "Nguyễn Hoàng Nam Khánh | Portfolio",
    description: "Sinh viên KTPM – Trường Đại học Đà Lạt, tập trung phát triển web với React/Next.js.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
