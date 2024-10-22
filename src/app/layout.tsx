import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

const NotoSansJPFont = Noto_Sans_JP({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"] 
});

// const RubikFont = Rubik({
//   weight: ['400', '500', '700'],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "就活完全ガイド",
  description: "履歴書の書き方から面接対策まで",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={NotoSansJPFont.className}>
        <Header/>
        <main className="main">
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
