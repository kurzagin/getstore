import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const displayFont = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getstore.my.id"),
  title: "GetStore — Website yang terasa seperti bisnis kamu",
  description: "GetStore merancang dan mengembangkan website profesional untuk UMKM Indonesia.",
  alternates: { canonical: "https://getstore.my.id" },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${displayFont.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
