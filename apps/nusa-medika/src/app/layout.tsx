import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/ui";

const display = Manrope({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = { metadataBase: new URL("https://nusa-medika.demo"), title: { default: "Nusa Medika | Rumah Sakit Umum & Pusat Kesehatan Keluarga", template: "%s | Nusa Medika" }, description: "Nusa Medika menghadirkan layanan medis yang jelas, manusiawi, dan terkoordinasi untuk keluarga dan kota kita.", openGraph: { title: "Nusa Medika", description: "Rumah sakit umum dan pusat kesehatan keluarga.", type: "website", locale: "id_ID" }, alternates: { canonical: "https://nusa-medika.demo" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { const schema = { "@context": "https://schema.org", "@type": "Hospital", name: "Nusa Medika", description: "Rumah Sakit Umum & Pusat Kesehatan Keluarga", url: "https://nusa-medika.demo", telephone: "+62-21-555-0119", address: { "@type": "PostalAddress", streetAddress: "Jl. Sisingamangaraja No. 18", addressLocality: "Kota Sentosa", addressCountry: "ID" }, disclaimer: "Contoh data demonstrasi, bukan profil institusi nyata." }; return <html lang="id" className={`${display.variable} ${body.variable}`}><body><a href="#main-content" className="skip-link">Lewati ke konten utama</a><aside className="portfolio-notice" aria-label="Pemberitahuan situs demo"><span>DEMO / PORTFOLIO</span><p>Ini adalah situs demo untuk Nusa Medika, dibuat oleh Getstore.</p><a href="https://getstore.my.id" target="_blank" rel="noreferrer">getstore.my.id ↗</a></aside><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html> }
