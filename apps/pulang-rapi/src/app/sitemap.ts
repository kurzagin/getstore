import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://pulangrapi.example"; return ["", "/layanan", "/cara-kerja", "/area-layanan", "/tentang", "/faq"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }

