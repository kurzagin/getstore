export type Service = {
  name: string; price: number; duration: string; description: string; includes: string; note?: string; category: string;
};
export type Barber = { name: string; role: string; bio: string; specialties: string[]; experience: string; style: string; days: string; image: string; gallery: string[] };

// FIKTIF: ganti semua kontak, alamat, koordinat, dan URL sosial sebelum peluncuran.
export const business = {
  name: "Pangkas Kala", tagline: "Rapi, pada waktunya.",
  description: "Barbershop lingkungan di Jakarta Selatan dengan konsultasi yang masuk akal, harga jelas, dan potongan yang enak dipakai sehari-hari.",
  address: "Jl. Cempaka Raya No. 18, Cilandak Barat, Jakarta Selatan 12430",
  neighborhood: "Cilandak Barat, Jakarta Selatan", landmark: "Seberang Pasar Cempaka, 2 menit dari Halte Cilandak",
  phone: "+62217834518", displayPhone: "(021) 7834 518", whatsapp: "6281212345678",
  instagram: "https://instagram.com/pangkas.kala", mapUrl: "https://maps.google.com/?q=Pangkas+Kala+Cilandak",
  coordinates: { latitude: -6.2925, longitude: 106.7995 },
  hours: [
    { day: "Senin", short: "Sen", open: "10:00", close: "21:00" }, { day: "Selasa", short: "Sel", open: "10:00", close: "21:00" },
    { day: "Rabu", short: "Rab", open: "10:00", close: "21:00" }, { day: "Kamis", short: "Kam", open: "10:00", close: "21:00" },
    { day: "Jumat", short: "Jum", open: "13:00", close: "21:00" }, { day: "Sabtu", short: "Sab", open: "09:00", close: "21:00" },
    { day: "Minggu", short: "Min", open: "09:00", close: "20:00" },
  ],
  payment: ["Tunai", "QRIS", "Debit (tergantung jaringan)"],
  seo: { title: "Pangkas Kala — Barbershop Cilandak", description: "Potongan yang cocok dipakai setelah keluar dari kursi. Booking Pangkas Kala di Cilandak lewat WhatsApp." },
};

export const services: Service[] = [
  { category: "Potong rambut", name: "Pangkas Reguler", price: 55000, duration: "40 menit", description: "Potong sesuai referensi atau kita pilihkan bentuk yang mudah dirawat.", includes: "Konsultasi, potong, styling ringan" },
  { category: "Potong rambut", name: "Pangkas + Keramas", price: 75000, duration: "50 menit", description: "Potong dengan keramas sebelum dan sesudah untuk hasil yang lebih bersih.", includes: "Konsultasi, keramas, potong, styling" },
  { category: "Potong rambut", name: "Pangkas Anak", price: 45000, duration: "35 menit", description: "Potongan rapi dengan tempo yang lebih sabar untuk anak-anak.", includes: "Konsultasi singkat, potong, styling ringan", note: "Untuk anak sampai 12 tahun" },
  { category: "Potong rambut", name: "Senior Barber Cut", price: 85000, duration: "50 menit", description: "Waktu konsultasi lebih panjang untuk bentuk dan detail yang spesifik.", includes: "Konsultasi detail, potong, finishing" },
  { category: "Cukur dan janggut", name: "Beard Trim", price: 40000, duration: "25 menit", description: "Rapikan garis dan panjang janggut tanpa mengubah karakter wajah.", includes: "Konsultasi, trim, detail garis" },
  { category: "Cukur dan janggut", name: "Hot Towel Shave", price: 55000, duration: "30 menit", description: "Cukur bersih dengan handuk hangat dan finishing yang menenangkan.", includes: "Pre-shave, hot towel, cukur, aftercare" },
  { category: "Cukur dan janggut", name: "Haircut + Beard Trim", price: 90000, duration: "60 menit", description: "Potong rambut dan rapikan janggut dalam satu kunjungan.", includes: "Konsultasi, haircut, beard trim, styling" },
  { category: "Perawatan", name: "Hair Wash & Tonic", price: 30000, duration: "20 menit", description: "Keramas dan tonic ringan untuk menyegarkan kulit kepala.", includes: "Keramas, pijat singkat, tonic" },
  { category: "Perawatan", name: "Scalp Reset", price: 65000, duration: "35 menit", description: "Perawatan kulit kepala untuk rasa bersih yang lebih tahan lama.", includes: "Pembersihan, pijat, tonic" },
  { category: "Paket", name: "Kala Lengkap", price: 125000, duration: "90 menit", description: "Satu rangkaian lengkap ketika ingin dibereskan sekalian.", includes: "Haircut, wash, beard trim, hot towel, styling" },
  { category: "Paket", name: "Ayah & Anak", price: 90000, duration: "75 menit", description: "Dua kursi, satu waktu yang lebih praktis untuk ayah dan anak.", includes: "Pangkas reguler + pangkas anak" },
];

export const barbers: Barber[] = [
  { name: "Arga", role: "Fade & tekstur", bio: "Arga suka mulai dari pertanyaan sederhana: rambut ini biasanya dipakai bagaimana? Dari situ ia membangun fade yang tetap masuk akal saat tumbuh.", specialties: ["Low fade", "Textured crop", "Short cut"], experience: "7 tahun pengalaman", style: "Konsultasi singkat, banyak menunjukkan bentuk lewat cermin.", days: "Selasa–Minggu", image: "/images/pangkas-kala/barber-arga.webp", gallery: ["low-taper", "textured-crop"] },
  { name: "Bayu", role: "Klasik & janggut", bio: "Bayu teliti dengan garis, proporsi, dan detail janggut. Ia paling senang ketika pelanggan datang membawa referensi yang ingin dibicarakan, bukan ditiru mentah-mentah.", specialties: ["Side part", "Beard trim", "Hot towel"], experience: "10 tahun pengalaman", style: "Menjelaskan pilihan sebelum alat mulai bekerja.", days: "Senin–Sabtu", image: "/images/pangkas-kala/barber-bayu.webp", gallery: ["classic-side-part", "beard-trim"] },
  { name: "Dimas", role: "Medium & praktis", bio: "Dimas membantu pelanggan yang ingin memanjangkan rambut tanpa terlihat tidak terurus. Potongannya ringan, mudah ditata, dan tidak menuntut banyak produk.", specialties: ["Two block", "Medium scissor cut", "Low-maintenance"], experience: "5 tahun pengalaman", style: "Mendengarkan rutinitas harian sebelum menyarankan panjang.", days: "Rabu–Minggu", image: "/images/pangkas-kala/barber-dimas.webp", gallery: ["two-block", "medium-scissor"] },
];

export const gallery = [
  { name: "Low taper", barber: "Arga", category: ["Pendek", "Fade"], image: "/images/pangkas-kala/low-taper.webp", alt: "Detail potongan low taper dengan tekstur pendek" },
  { name: "Textured crop", barber: "Arga", category: ["Pendek"], image: "/images/pangkas-kala/textured-crop.webp", alt: "Potongan textured crop pendek dengan bagian atas bertekstur" },
  { name: "Classic side part", barber: "Bayu", category: ["Klasik", "Pendek"], image: "/images/pangkas-kala/classic-side-part.webp", alt: "Potongan classic side part yang rapi di samping" },
  { name: "Two block", barber: "Dimas", category: ["Sedang"], image: "/images/pangkas-kala/two-block.webp", alt: "Potongan two block dengan rambut bagian atas lebih panjang" },
  { name: "Buzz cut", barber: "Arga", category: ["Pendek"], image: "/images/pangkas-kala/buzz-cut.webp", alt: "Potongan buzz cut pendek dan bersih" },
  { name: "Medium scissor cut", barber: "Dimas", category: ["Sedang"], image: "/images/pangkas-kala/medium-scissor.webp", alt: "Potongan medium scissor cut dengan jatuh alami" },
  { name: "Beard trim", barber: "Bayu", category: ["Janggut"], image: "/images/pangkas-kala/classic-side-part.webp", alt: "Detail janggut yang dirapikan dengan garis bersih" },
  { name: "Low fade", barber: "Arga", category: ["Fade", "Pendek"], image: "/images/pangkas-kala/low-taper.webp", alt: "Sisi kepala dengan gradasi low fade" },
];
