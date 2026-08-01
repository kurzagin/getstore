import type { Metadata } from "next";
import { ServiceList } from "@/components/ui";
export const metadata: Metadata = { title: "Layanan & Harga", description: "Menu perawatan rambut, wajah, kuku, relaksasi, dan paket acara Ruang Rona." };
export default function LayananPage() { return <div className="page-shell"><section className="page-hero"><p className="eyebrow">Menu perawatan</p><h1>Ruang untuk kebutuhan Anda.</h1><p>Perawatan dirancang untuk kehidupan sehari-hari: jelas, terukur, dan dimulai dari konsultasi singkat agar pilihan Anda terasa tepat.</p></section><section className="section"><ServiceList /></section></div>; }
