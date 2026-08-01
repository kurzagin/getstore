import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://pangkas-kala.example"; return ["/","/layanan","/barber","/galeri","/tentang","/kontak"].map(url=>({url:base+url,lastModified:new Date(),changeFrequency:"monthly" as const,priority:url==="/"?1:.7})); }
