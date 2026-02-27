import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <div className="mx-auto flex max-w-5xl px-6 py-8">
          <Navbar />
          <main className="flex-1 min-w-0 pl-8 ml-8 border-l border-gray-200">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
