import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
export const metadata: Metadata = { metadataBase: new URL("https://pulangrapi.example"), title: { default: "Pulang Rapi | Laundry Antar-Jemput yang Jelas dan Terawat", template: "%s | Pulang Rapi" }, description: "Laundry kiloan, setrika, satuan, dan layanan antar-jemput untuk rumah, kost, serta usaha kecil. Cek harga dan pesan melalui WhatsApp.", openGraph: { title: "Pulang Rapi | Laundry Antar-Jemput yang Jelas dan Terawat", description: "Laundry harian dengan harga yang dibicarakan di awal dan catatan pesanan yang jelas.", type: "website", locale: "id_ID" }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id" className={`${geist.variable} antialiased`}><body>{children}</body></html>; }
