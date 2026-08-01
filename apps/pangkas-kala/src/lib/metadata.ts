import type { Metadata } from "next";
import { business } from "@/data/business";
export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const full = `${title} — ${business.name}`;
  return { title: full, description, alternates: { canonical: `https://pangkas-kala.example${path}` }, openGraph: { title: full, description, url: `https://pangkas-kala.example${path}`, siteName: business.name, locale: "id_ID", type: "website" }, twitter: { card: "summary_large_image", title: full, description } };
}
