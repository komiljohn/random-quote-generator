import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import OfflineBar from "@/components/OfflineBar";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Providers from "@/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily inspirations",
  description: "Discover wisdom from great minds",
  openGraph: {
    title: "Daily inspirations",
    description: "Discover wisdom from great minds",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh`}
      >
        <main className="flex items-center justify-center h-full">
          <Providers>
            {children}
            <OfflineBar />
            <ThemeSwitcher />
          </Providers>
        </main>
      </body>
    </html>
  );
}
