import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/journal";
export const metadata: Metadata = { title: "Jurnal", description: "Catatan praktis Ruang Rona tentang rambut, kuku, dan perawatan diri." };
export default function JurnalPage() { return <div className="page-shell"><section className="page-hero"><p className="eyebrow">Jurnal Ruang Rona</p><h1>Pengetahuan kecil untuk merawat diri dengan lebih tenang.</h1><p>Catatan praktis dan bertanggung jawab untuk membantu Anda memahami perawatan sebelum duduk di kursi salon.</p></section><section className="section"><div className="article-index">{articles.map((article) => <Link href={`/jurnal/${article.slug}`} className="article-card" key={article.slug}><div className="article-card-image"><Image src={article.hero} alt="" fill sizes="(max-width: 600px) 105px, 260px" /></div><div><span className="service-category">{article.category} · {article.readingTime}</span><h2>{article.title}</h2><p>{article.excerpt}</p><span className="text-link">Baca artikel ↗</span></div></Link>)}</div></section></div>; }
