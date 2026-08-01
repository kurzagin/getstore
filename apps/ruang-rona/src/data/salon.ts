export const salon = {
  brand: {
    name: "Ruang Rona",
    descriptor: "Salon & Beauty House",
    tagline: "Rawat diri, pulang dengan rona baru.",
    locationLabel: "Salon & Beauty House · Jakarta",
  },
  contact: {
    whatsapp: "6281290001122",
    displayWhatsapp: "+62 812 9000 1122",
    phone: "+62 21 7000 1122",
    instagram: "@ruangrona",
    instagramUrl: "https://instagram.com/ruangrona",
    mapsUrl: "https://maps.google.com/?q=Ruang+Rona+South+Jakarta",
    address: "Jl. Kemang Raya No. 18, Bangka, Mampang Prapatan, Jakarta Selatan",
    coordinates: { latitude: -6.2615, longitude: 106.8106 },
  },
  hours: [
    ["Senin–Jumat", "09.00–20.00"],
    ["Sabtu", "09.00–19.00"],
    ["Minggu", "10.00–17.00"],
  ],
  nav: [
    ["Beranda", "/"],
    ["Layanan", "/layanan"],
    ["Tentang Kami", "/tentang"],
    ["Jurnal", "/jurnal"],
    ["Reservasi", "/reservasi"],
  ],
  bookingTemplates: {
    general: "Halo Ruang Rona, saya ingin berkonsultasi tentang perawatan. Apakah ada slot pada [tanggal dan jam]?",
    service: "Halo Ruang Rona, saya ingin menanyakan jadwal untuk {service}. Apakah ada slot pada [tanggal dan jam]?",
  },
};

export type ServiceCategory = "Rambut" | "Perawatan Kulit Wajah" | "Kuku" | "Relaksasi" | "Paket Acara";
export type Service = { name: string; category: ServiceCategory; description: string; duration: string; price: number; note?: string };
export const serviceCategories: ServiceCategory[] = ["Rambut", "Perawatan Kulit Wajah", "Kuku", "Relaksasi", "Paket Acara"];
export const services: Service[] = [
  { name: "Hair Cut & Styling", category: "Rambut", description: "Potong dan styling yang diawali konsultasi bentuk wajah, tekstur, serta kebiasaan harian Anda.", duration: "60–75 menit", price: 180000, note: "Untuk semua tekstur rambut." },
  { name: "Hair Spa", category: "Rambut", description: "Perawatan kulit kepala dan batang rambut dengan pijatan ringan, masker, dan pengeringan lembut.", duration: "75–90 menit", price: 275000, note: "Cocok saat rambut terasa kering atau kusam." },
  { name: "Hair Color", category: "Rambut", description: "Pewarnaan satu warna dengan konsultasi pilihan warna, kondisi rambut, dan perawatan setelahnya.", duration: "150–210 menit", price: 650000, note: "Harga akhir mengikuti panjang dan ketebalan rambut." },
  { name: "Blow & Styling", category: "Rambut", description: "Rapikan rambut untuk hari kerja, acara keluarga, atau sekadar ingin merasa lebih siap.", duration: "45–60 menit", price: 125000 },
  { name: "Facial Care", category: "Perawatan Kulit Wajah", description: "Pembersihan, kompres hangat, pijat wajah, dan masker yang dipilih sesuai kondisi kulit saat konsultasi.", duration: "75 menit", price: 250000, note: "Hindari jika kulit sedang mengalami iritasi berat." },
  { name: "Manicure & Pedicure", category: "Kuku", description: "Perawatan dasar kuku dan kutikula dengan alat yang dibersihkan dan disanitasi sebelum digunakan.", duration: "90 menit", price: 220000 },
  { name: "Gel Polish", category: "Kuku", description: "Warna gel rapi untuk kuku tangan atau kaki, termasuk persiapan kuku dan finishing.", duration: "75–90 menit", price: 250000, note: "Pelepasan gel lama dihitung terpisah." },
  { name: "Head, Neck & Shoulder Relaxation", category: "Relaksasi", description: "Pijatan terarah pada kepala, leher, dan bahu untuk jeda singkat di tengah rutinitas.", duration: "45 menit", price: 175000 },
  { name: "Rona Siap Acara", category: "Paket Acara", description: "Konsultasi singkat, styling rambut, dan sentuhan akhir sederhana untuk momen penting Anda.", duration: "120–150 menit", price: 475000, note: "Untuk wisuda, acara keluarga, atau sesi foto." },
  { name: "Rona Menjelang Hari H", category: "Paket Acara", description: "Rangkaian perawatan yang disusun bersama agar persiapan menuju hari besar terasa lebih teratur.", duration: "Menyesuaikan", price: 850000, note: "Jadwal dan isi paket dibicarakan saat konsultasi." },
];
export const featuredServices = services.filter((service) => ["Hair Cut & Styling", "Hair Spa", "Hair Color", "Facial Care", "Manicure & Pedicure", "Head, Neck & Shoulder Relaxation"].includes(service.name));

// Replace with verified customer testimonials before production.
export const testimonials = [
  { quote: "Saya suka karena sebelum mulai, stylist-nya benar-benar bertanya rambut saya biasa dirawat seperti apa. Hasilnya terasa masuk akal untuk keseharian.", name: "Ayu, 31", detail: "Hair Cut & Styling" },
  { quote: "Ruangnya tenang dan alat-alatnya terlihat tertata. Saya bisa minta area yang lebih privat tanpa merasa sungkan.", name: "Nadia, 27", detail: "Hair Spa" },
  { quote: "Booking lewat WhatsApp-nya jelas. Tidak didorong mengambil tambahan apa pun, jadi saya merasa cukup nyaman untuk datang lagi.", name: "Mira, 39", detail: "Manicure & Pedicure" },
];
export const faqs: readonly (readonly [string, string])[] = [
  ["Apakah harus reservasi?", "Reservasi sangat disarankan agar kami bisa menyiapkan waktu dan beautician yang sesuai. Anda tetap dapat menghubungi kami untuk menanyakan ketersediaan di hari yang sama."],
  ["Bisa konsultasi sebelum memilih treatment?", "Bisa. Konsultasi singkat dilakukan sebelum perawatan agar pilihan treatment, durasi, dan perkiraan biaya lebih jelas."],
  ["Apakah tersedia ruang yang nyaman untuk pelanggan berhijab?", "Area privat atau dengan folding screen dapat diminta saat reservasi, sesuai ketersediaan ruang dan beautician pada hari tersebut."],
  ["Berapa lama proses hair coloring?", "Umumnya 150–210 menit. Durasi dapat berubah mengikuti panjang, ketebalan, kondisi rambut, dan proses yang disepakati setelah konsultasi."],
  ["Metode pembayaran apa yang tersedia?", "Placeholder: tunai, transfer bank, dan QRIS. Silakan konfirmasi metode yang tersedia saat melakukan reservasi."],
  ["Bagaimana kebijakan keterlambatan dan perubahan jadwal?", "Mohon kabari kami sesegera mungkin jika terlambat atau perlu menjadwalkan ulang. Toleransi dan penyesuaian treatment akan dibicarakan berdasarkan slot berikutnya."],
];
export const formatRupiah = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value).replace("IDR", "Rp");
export const whatsappUrl = (message: string) => "https://wa.me/" + salon.contact.whatsapp + "?text=" + encodeURIComponent(message);
