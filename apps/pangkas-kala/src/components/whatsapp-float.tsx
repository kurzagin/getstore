import { whatsappUrl } from "@/lib/whatsapp";
export default function WhatsAppFloat() { return <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Booking Pangkas Kala melalui WhatsApp"><span aria-hidden="true">WA</span><b>Booking</b></a>; }
