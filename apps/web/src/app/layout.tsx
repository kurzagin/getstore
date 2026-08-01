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
  title: {
    default: "GetStore — Website yang terasa seperti bisnis kamu",
    template: "%s | GetStore",
  },
  description: "GetStore merancang dan mengembangkan website profesional untuk UMKM Indonesia.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://getstore.my.id",
    siteName: "GetStore",
    title: "GetStore — Website yang terasa seperti bisnis kamu",
    description: "GetStore merancang dan mengembangkan website profesional untuk UMKM Indonesia.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GetStore — Website untuk bisnis lokal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GetStore — Website yang terasa seperti bisnis kamu",
    description: "GetStore merancang dan mengembangkan website profesional untuk UMKM Indonesia.",
    images: ["/og-image.png"],
  },
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
