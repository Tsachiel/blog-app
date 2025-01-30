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
  title: "My Blog | The best blog ever",
  description: "Stay updated with the latest news and blog posts!",
  openGraph: {
    title: "My Blog | The best blog ever",
    description: "Stay updated with the latest news and blog posts!",
    type: "website",
    url: "https://myblog.com",
    images: [
      {
        url: "https://myblog.com/default-image.jpg", // 🔹 שים כאן תמונת ברירת מחדל
        width: 1200,
        height: 630,
        alt: "My Blog Default Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Blog | The best blog ever",
    description: "Stay updated with the latest news and blog posts!",
    images: ["https://myblog.com/default-image.jpg"],
  },
  alternates: {
    canonical: "https://myblog.com",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
