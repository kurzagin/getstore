import Link from "next/link";
import MobileNav from "./MobileNav";
import { whatsappUrl } from "@/lib/whatsapp";

const links = ["Layanan", "Cara Kerja", "Area Layanan", "Tentang", "FAQ"];
const hrefs = ["/layanan", "/cara-kerja", "/area-layanan", "/tentang", "/faq"];

export default function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner">
    <Link href="/" className="wordmark" aria-label="Pulang Rapi, beranda"><span>Pulang</span><b>Rapi</b></Link>
    <nav className="desktop-nav" aria-label="Navigasi utama">{links.map((link, i) => <Link key={link} href={hrefs[i]}>{link}</Link>)}</nav>
    <a className="button button-small header-cta" href={whatsappUrl()}>Pesan Laundry <span aria-hidden="true">↗</span></a>
    <MobileNav />
  </div></header>;
}

