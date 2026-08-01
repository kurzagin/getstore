import { business } from "@/data/business";
export function getOpenStatus(date = new Date()) {
  const jakarta = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "long", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(date);
  const day = jakarta.find((p) => p.type === "weekday")?.value;
  const time = jakarta.find((p) => p.type === "hour")?.value + ":" + jakarta.find((p) => p.type === "minute")?.value;
  const map: Record<string, string> = { Monday: "Senin", Tuesday: "Selasa", Wednesday: "Rabu", Thursday: "Kamis", Friday: "Jumat", Saturday: "Sabtu", Sunday: "Minggu" };
  const hours = business.hours.find((h) => h.day === map[day ?? ""]);
  if (!hours) return { open: false, label: "Tutup hari ini", detail: "Buka kembali sesuai jadwal" };
  const open = time >= hours.open && time < hours.close;
  return { open, label: open ? "Sedang buka" : "Sedang tutup", detail: open ? `Sampai ${hours.close}` : `Buka ${hours.open}–${hours.close}` };
}
