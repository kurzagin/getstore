"use client";
import Link from "next/link";
import { useState } from "react";
import { salon, whatsappUrl } from "@/data/salon";
import { Wordmark, WhatsAppButton } from "./brand";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="site-header-inner"><Wordmark /><nav className="desktop-nav" aria-label="Navigasi utama">{salon.nav.map(([label, href]) => <Link key={href} href={href} className="nav-link">{label}</Link>)}</nav><div className="header-action"><WhatsAppButton label="Pesan via WhatsApp" /><button className={`menu-toggle ${open ? "is-open" : ""}`} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}><span /><span /><span /><b>Menu</b></button></div></div>{open && <div id="mobile-nav" className="mobile-nav"><nav aria-label="Navigasi mobile">{salon.nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></Link>)}</nav><WhatsAppButton className="mobile-nav-cta" /></div>}</header>;
}
export function MobileBookingBar() { return <div className="mobile-booking"><a href={`tel:${salon.contact.phone.replaceAll(" ", "")}`}>Telepon</a><a className="mobile-booking-main" href={whatsappUrl(salon.bookingTemplates.general)} target="_blank" rel="noreferrer">Pesan via WhatsApp <span aria-hidden="true">↗</span></a></div>; }
