import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "정보처리기사 실기 기출문제",
  description: "C, Java, Python, SQL 코딩 문제 풀이 연습",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
      >
        <div className="min-h-screen">
          <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
              <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="text-xl font-bold text-white">
                  정처기 실기
                </span>
                <span className="text-xs px-2 py-0.5 bg-blue-600/20 text-blue-400 rounded-full font-medium">
                  코딩
                </span>
              </a>
            </div>
          </header>
          <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
