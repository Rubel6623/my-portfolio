import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rubel | Full Stack Developer",
  description: "Portfolio of Rubel, a Full Stack Developer specializing in building exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body suppressHydrationWarning className={`${inter.className} min-h-full flex flex-col bg-slate-900 text-slate-50`}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
