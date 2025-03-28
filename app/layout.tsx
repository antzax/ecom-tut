import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// ${geistSans.variable} ${geistMono.variable}

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Buy cool products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
