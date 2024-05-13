import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'cake calculate',
    description: 'counting ingredients',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='ru'>
          <body className={`${inter.className} bg-[#efefef]`}>
              <Header />
              {children}
          </body>
      </html>
  );
}
