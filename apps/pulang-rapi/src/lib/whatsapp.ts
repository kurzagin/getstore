import { siteConfig, whatsappGeneralMessage } from "@/content/site";

export function whatsappUrl(message = whatsappGeneralMessage) {
  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsappUrl(serviceName: string) {
  return whatsappUrl(`Halo Pulang Rapi, saya ingin bertanya tentang layanan ${serviceName}. Lokasi saya di [alamat/area]. Perkiraan kebutuhan saya: [jumlah].`);
}

