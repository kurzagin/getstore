import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { site } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({ variable:"--font-bricolage", subsets:["latin"], display:"swap" });
const body = Plus_Jakarta_Sans({ variable:"--font-jakarta", subsets:["latin"], display:"swap" });

export const metadata: Metadata = { metadataBase:new URL(site.url), title:{ default:"Lungguh — Angkringan Dalam Rumah", template:"%s — Lungguh" }, description:site.description, alternates:{ canonical:"/" }, openGraph:{ title:"Lungguh — Angkringan Dalam Rumah", description:site.description, url:site.url, siteName:"Lungguh", locale:"id_ID", type:"website" }, twitter:{ card:"summary_large_image", title:"Lungguh — Angkringan Dalam Rumah", description:site.description } };

export default function RootLayout({ children }:{ children:React.ReactNode }) { const jsonLd={"@context":"https://schema.org","@type":"Restaurant","name":site.name,"description":site.description,"url":site.url,"telephone":site.phone,"priceRange":"Rp","servesCuisine":"Indonesian","acceptsReservations":true,"address":{"@type":"PostalAddress","streetAddress":site.address,"addressCountry":"ID"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"10:00","closes":"23:00"}],"sameAs":[`https://instagram.com/${site.instagram.replace("@","")}`,"https://wa.me/6281200000000"]}; return <html lang="id" className={`${display.variable} ${body.variable}`}><body><a className="skip-link" href="#main-content">Lewati ke isi</a><aside className="demo-notice" aria-label="Pemberitahuan demo"><span>DEMO / PORTFOLIO</span><p>Ini adalah situs demo untuk Lungguh, dibuat oleh Getstore.</p><a href="https://getstore.my.id" target="_blank" rel="noreferrer">getstore.my.id ↗</a></aside><SiteHeader/><main id="main-content">{children}</main><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>; }
