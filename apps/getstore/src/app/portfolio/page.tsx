import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portofolio website untuk bisnis lokal",
  description: "Lihat website yang GetStore rancang untuk barbershop, salon, laundry, kuliner, dan bisnis lokal lainnya di Indonesia.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "GetStore",
    title: "Portofolio website untuk bisnis lokal | GetStore",
    description: "Lihat website yang GetStore rancang untuk bisnis lokal di Indonesia.",
    url: "/portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Portofolio website GetStore" }],
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#252420] px-5 py-8 text-[#f2eee8] md:px-10 md:py-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex items-center justify-between border-b border-[#f2eee8]/20 pb-5">
          <Link href="/" className="font-display text-2xl tracking-[-0.06em]">getstore<span className="text-[#d7663f]">.</span></Link>
          <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#aaa49a] transition-colors hover:text-[#d7663f]">Beranda ↗</Link>
        </div>
        <header className="max-w-[820px] py-24 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d7663f]">Pilihan karya</p>
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-[-0.08em]">Website yang membuat bisnis <span className="text-[#d7663f]">terlihat.</span></h1>
          <p className="mt-8 max-w-lg text-lg leading-7 text-[#aaa49a]">Beberapa website yang kami rancang untuk bisnis lokal dengan cerita, kebutuhan, dan karakter yang berbeda.</p>
        </header>
        <div className="grid gap-x-5 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className={`group block ${index % 3 === 1 ? "md:mt-24" : ""}`}>
              <div className="relative aspect-[1.2/1] overflow-hidden bg-[#3a3833]">
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: "top" }} className="object-cover object-top saturate-[0.7] transition duration-700 group-hover:scale-105 group-hover:saturate-100" />
                <span className="absolute left-5 top-5 bg-[#f2eee8] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#252420]">{String(index + 1).padStart(2, "0")} / Kunjungi situs ↗</span>
              </div>
              <div className="mt-5 flex items-start justify-between border-t border-[#f2eee8]/25 pt-3">
                <div><h2 className="font-display text-3xl tracking-[-0.06em]">{project.name}</h2><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[#aaa49a]">{project.category} / {project.location}</p></div>
                <span className="text-xl text-[#d7663f] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
            </a>
          ))}
        </div>
        <div className="border-t border-[#f2eee8]/20 py-16 text-center md:py-24"><p className="font-display text-3xl tracking-[-0.06em] md:text-5xl">Punya bisnis yang siap dilihat?</p><a href="https://wa.me/6287794620631" className="mt-8 inline-flex rounded-full bg-[#d7663f] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-1">Mari ngobrol ↗</a></div>
      </div>
    </main>
  );
}
