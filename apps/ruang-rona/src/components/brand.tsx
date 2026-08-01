import Link from "next/link";
import { salon, whatsappUrl } from "@/data/salon";

export function LogoMark({ compact = false }: { compact?: boolean }) {
  return <span className="logo-mark" aria-hidden="true"><svg viewBox="0 0 28 38" fill="none"><path d="M4 30C13 26 18 17 17 5"/><path d="M11 34C20 27 23 17 21 9"/></svg>{!compact && <span>RR</span>}</span>;
}
export function Wordmark() { return <Link href="/" className="wordmark" aria-label="Ruang Rona, kembali ke beranda"><LogoMark /><span><strong>Ruang Rona</strong><small>{salon.brand.descriptor}</small></span></Link>; }
export function WhatsAppButton({ label = "Pesan via WhatsApp", message = salon.bookingTemplates.general, className = "" }: { label?: string; message?: string; className?: string }) { return <a href={whatsappUrl(message)} target="_blank" rel="noreferrer" className={`button button-primary ${className}`}>{label}<span aria-hidden="true">↗</span></a>; }
