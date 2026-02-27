import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Sikand",
  description: "Rohan Sikand — Stanford CS (AI) B.S., M.S. 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
