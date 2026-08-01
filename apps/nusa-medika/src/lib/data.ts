export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  focus: string;
  schedule: string;
  days: string[];
  location: string;
  languages: string[];
  availability: "Tersedia" | "Penuh" | "Terbatas";
  image: string;
};

export type Service = {
  id: string;
  name: string;
  category: string;
  description: string;
  forWhom: string;
  clinic: string;
  days: string;
  preparation: string;
  icon: string;
};

export const hospital = {
  name: "NUSA MEDIKA",
  descriptor: "Rumah Sakit Umum & Pusat Kesehatan Keluarga",
  address: "Jl. Sisingamangaraja No. 18, Kota Sentosa, Indonesia",
  emergency: "(021) 555 0119",
  phone: "(021) 555 0100",
  whatsapp: "+62 811 9000 1010",
  email: "halo@nusamedika.demo",
};

export const doctors: Doctor[] = [
  { id: "maya-andriani", name: "dr. Maya Andriani, Sp.PD", specialty: "Penyakit Dalam", focus: "Pendampingan penyakit metabolik, hipertensi, dan kesehatan dewasa.", schedule: "Senin, Rabu · 09.00–13.00", days: ["Senin", "Rabu"], location: "Poliklinik Penyakit Dalam", languages: ["Indonesia", "Inggris"], availability: "Tersedia", image: "/images/doctor-maya-andriani.png" },
  { id: "raka-prasetyo", name: "dr. Raka Prasetyo, Sp.JP", specialty: "Jantung dan Pembuluh Darah", focus: "Evaluasi faktor risiko jantung dan pemeriksaan kardiovaskular dasar.", schedule: "Selasa, Kamis · 10.00–14.00", days: ["Selasa", "Kamis"], location: "Pusat Jantung Nusa", languages: ["Indonesia", "Jawa"], availability: "Terbatas", image: "/images/doctor-raka-prasetyo.png" },
  { id: "nadine-kusuma", name: "dr. Nadine Kusuma, Sp.A", specialty: "Ibu dan Anak", focus: "Tumbuh kembang, imunisasi, dan keluhan umum pada anak.", schedule: "Senin, Jumat · 08.00–12.00", days: ["Senin", "Jumat"], location: "Poliklinik Anak", languages: ["Indonesia", "Inggris"], availability: "Tersedia", image: "/images/doctor-nadine-kusuma.png" },
  { id: "farhan-akbar", name: "dr. Farhan Akbar, Sp.OT", specialty: "Bedah Terpadu", focus: "Konsultasi cedera muskuloskeletal dan persiapan tindakan ortopedi.", schedule: "Selasa, Sabtu · 09.00–12.00", days: ["Selasa", "Sabtu"], location: "Pusat Bedah Terpadu", languages: ["Indonesia", "Inggris"], availability: "Penuh", image: "/images/doctor-farhan-akbar.png" },
  { id: "sinta-larasati", name: "dr. Sinta Larasati, Sp.S", specialty: "Saraf", focus: "Keluhan sakit kepala, gangguan tidur, dan evaluasi saraf umum.", schedule: "Rabu, Jumat · 13.00–16.00", days: ["Rabu", "Jumat"], location: "Poliklinik Saraf", languages: ["Indonesia"], availability: "Tersedia", image: "/images/doctor-sinta-larasati.png" },
  { id: "bagus-wicaksono", name: "dr. Bagus Wicaksono, Sp.KFR", specialty: "Rehabilitasi Medik", focus: "Pemulihan fungsi gerak setelah cedera, operasi, atau kondisi kronis.", schedule: "Senin–Kamis · 14.00–17.00", days: ["Senin", "Selasa", "Rabu", "Kamis"], location: "Unit Rehabilitasi Medik", languages: ["Indonesia", "Inggris"], availability: "Tersedia", image: "/images/doctor-bagus-wicaksono.png" },
];

export const services: Service[] = [
  { id: "jantung", name: "Jantung dan Pembuluh Darah", category: "Spesialis", description: "Konsultasi faktor risiko, pemeriksaan dasar, dan tindak lanjut kesehatan jantung.", forWhom: "Dewasa dengan keluhan atau faktor risiko kardiovaskular.", clinic: "Pusat Jantung Nusa", days: "Selasa–Kamis", preparation: "Bawa hasil pemeriksaan sebelumnya dan daftar obat yang sedang dikonsumsi.", icon: "heart" },
  { id: "ibu-anak", name: "Ibu dan Anak", category: "Keluarga", description: "Perawatan anak, pemantauan tumbuh kembang, serta pendampingan kehamilan.", forWhom: "Bayi, anak, ibu hamil, dan keluarga yang membutuhkan konsultasi.", clinic: "Poliklinik Anak & Kebidanan", days: "Senin–Sabtu", preparation: "Bawa buku KIA atau catatan imunisasi bila tersedia.", icon: "baby" },
  { id: "penyakit-dalam", name: "Penyakit Dalam", category: "Spesialis", description: "Pendampingan kondisi metabolik dan kesehatan dewasa secara terencana.", forWhom: "Dewasa dengan keluhan umum atau kondisi kronis yang perlu dipantau.", clinic: "Poliklinik Penyakit Dalam", days: "Senin–Jumat", preparation: "Datang 15 menit lebih awal untuk proses administrasi.", icon: "activity" },
  { id: "bedah", name: "Bedah Terpadu", category: "Tindakan", description: "Konsultasi pra-tindakan, bedah umum, dan ortopedi dengan alur terkoordinasi.", forWhom: "Pasien dengan rujukan atau kebutuhan konsultasi tindakan bedah.", clinic: "Pusat Bedah Terpadu", days: "Selasa–Sabtu", preparation: "Konsultasi awal menentukan pemeriksaan dan persiapan berikutnya.", icon: "stethoscope" },
  { id: "saraf", name: "Saraf", category: "Spesialis", description: "Evaluasi keluhan saraf umum dan rencana pemantauan yang mudah dipahami.", forWhom: "Dewasa dengan keluhan sakit kepala, tidur, atau fungsi saraf.", clinic: "Poliklinik Saraf", days: "Rabu–Jumat", preparation: "Catat waktu munculnya keluhan dan hal yang memicunya.", icon: "brain" },
  { id: "rehab", name: "Rehabilitasi Medik", category: "Pemulihan", description: "Program pemulihan fungsi gerak yang disusun bersama dokter dan terapis.", forWhom: "Pasien pasca cedera, operasi, atau dengan keterbatasan gerak.", clinic: "Unit Rehabilitasi Medik", days: "Senin–Kamis", preparation: "Gunakan pakaian yang nyaman untuk bergerak dan bawa rujukan.", icon: "person-standing" },
];

export const specialties = ["Semua spesialisasi", "Penyakit Dalam", "Jantung dan Pembuluh Darah", "Ibu dan Anak", "Bedah Terpadu", "Saraf", "Rehabilitasi Medik"];
export const partnerCategories = ["Katering dan konsumsi", "Tekstil, linen, dan seragam", "Produk kebersihan non-medis", "Furnitur dan interior", "Percetakan", "Hampers dan merchandise", "Tanaman dan lanskap", "Dokumentasi dan acara", "Logistik lokal", "Jasa perawatan fasilitas"];
export const articles = [
  { title: "Persiapan sebelum pemeriksaan kesehatan", category: "Informasi pasien", read: "4 menit", excerpt: "Hal sederhana yang bisa disiapkan agar kunjungan berjalan lebih teratur." },
  { title: "Mengenali tanda tekanan darah tinggi", category: "Edukasi kesehatan", read: "5 menit", excerpt: "Mengapa pemeriksaan rutin penting, termasuk saat tubuh tidak terasa bermasalah." },
  { title: "Kapan anak perlu dibawa ke dokter?", category: "Keluarga", read: "4 menit", excerpt: "Panduan umum untuk mengenali kapan keluhan anak perlu diperiksa lebih lanjut." },
];
export const faqs = [
  ["Apakah pendaftaran Mitra Nusa berbayar?", "Tidak. Pendaftaran program ini tidak dipungut biaya. Biaya baru dapat muncul bila ada proses uji coba yang disepakati secara khusus."],
  ["Apakah pendaftaran menjamin adanya pesanan?", "Tidak. Pendaftaran hanya membuka proses evaluasi. Kebutuhan, kesesuaian mutu, kapasitas, dan proses pengadaan menentukan kerja sama."],
  ["Apakah usaha mikro boleh mendaftar?", "Boleh, selama dapat menunjukkan identitas usaha, kapasitas, kualitas yang konsisten, dan kemampuan memenuhi kebutuhan yang ditawarkan."],
  ["Apakah NIB wajib?", "Untuk sebagian besar kategori, identitas usaha yang sesuai termasuk NIB diperlukan. Persyaratan dapat berbeda sesuai kategori."],
  ["Produk apa yang tidak masuk alur aplikasi publik?", "Obat, alat kesehatan, dan perbekalan klinis yang diatur tidak termasuk dalam alur aplikasi UMKM publik ini."],
];
