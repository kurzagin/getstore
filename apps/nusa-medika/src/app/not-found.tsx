import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui";
export default function NotFound() { return <section className="section"><Container><div className="mx-auto max-w-xl py-16 text-center"><p className="eyebrow">Halaman tidak ditemukan</p><h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-[#123F42]">Kami belum menemukan halaman itu.</h1><p className="mt-5 text-[#5F6A67]">Mungkin tautannya berubah. Kembali ke beranda atau pilih layanan yang Anda butuhkan.</p><Link href="/" className="button button-primary mt-8"><ArrowLeft size={16} /> Kembali ke beranda</Link></div></Container></section> }
