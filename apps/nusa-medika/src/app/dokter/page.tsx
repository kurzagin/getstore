import { Container, PageIntro } from "@/components/ui";
import { DoctorDirectory } from "@/components/interactive";
export const metadata = { title: "Direktori Dokter", description: "Cari dokter Nusa Medika berdasarkan nama, spesialisasi, hari praktik, dan ketersediaan." };
export default function DoctorsPage() { return <><Container><PageIntro eyebrow="Direktori dokter" title="Dokter yang tepat, jadwal yang jelas." description="Gunakan filter untuk menemukan dokter sesuai layanan dan waktu praktik yang Anda cari." current="Dokter" /></Container><section className="section pt-0"><Container><DoctorDirectory /></Container></section></> }
