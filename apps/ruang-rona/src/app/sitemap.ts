import type { MetadataRoute } from "next";
import { articles } from "@/data/journal";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://ruangrona.example"; return [{ url: base, lastModified: new Date() }, ...["layanan","tentang","jurnal","reservasi"].map(path => ({ url: `${base}/${path}`, lastModified: new Date() })), ...articles.map((article, index) => ({ url: `${base}/jurnal/${article.slug}`, lastModified: `2025-0${5 + Math.min(index, 1)}-${index === 0 ? "12" : index === 1 ? "28" : "09"}` }))]; }
