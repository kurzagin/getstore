import { whatsappUrl } from "@/lib/whatsapp";
export default function WhatsAppButton() { return <a className="whatsapp-float" href={whatsappUrl()} aria-label="Pesan laundry melalui WhatsApp"><span aria-hidden="true">WA</span><b>Pesan laundry</b></a>; }

