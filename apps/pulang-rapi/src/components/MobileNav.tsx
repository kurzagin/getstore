"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey); }, []);
  useEffect(() => { if (open) panel.current?.querySelector<HTMLAnchorElement>("a")?.focus(); }, [open]);
  const close = () => setOpen(false);
  return <div className="mobile-nav-wrap"><button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span>{open ? "Tutup" : "Menu"}</span><i aria-hidden="true"><em></em><em></em></i></button>
    {open && <div className="mobile-menu" id="mobile-menu" ref={panel}><nav aria-label="Navigasi mobile"><Link onClick={close} href="/layanan">Layanan</Link><Link onClick={close} href="/cara-kerja">Cara Kerja</Link><Link onClick={close} href="/area-layanan">Area Layanan</Link><Link onClick={close} href="/tentang">Tentang</Link><Link onClick={close} href="/faq">FAQ</Link></nav><a className="button" href={whatsappUrl()}>Pesan via WhatsApp ↗</a></div>}
  </div>;
}

