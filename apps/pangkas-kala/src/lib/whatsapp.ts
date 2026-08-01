import { business } from "@/data/business";

export function bookingMessage(service = "", barber = "") {
  return `Halo Pangkas Kala, saya ingin booking.\n\nLayanan: ${service}\nBarber pilihan: ${barber}\nHari/tanggal:\nPerkiraan jam:\nNama:\n\nApakah jadwal tersebut tersedia?`;
}
export function whatsappUrl(message = bookingMessage()) { return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`; }
