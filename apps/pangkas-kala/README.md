# Pangkas Kala

Website multi-halaman untuk Pangkas Kala, barbershop lingkungan fiktif di Cilandak, dibangun dengan Next.js 16 App Router, TypeScript, dan Tailwind CSS v4.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Kustomisasi bisnis

Semua informasi yang perlu diganti sebelum produksi ada di [`src/data/business.ts`](src/data/business.ts): nama, alamat, nomor telepon, WhatsApp, Instagram, koordinat, jam buka, layanan, barber, harga, dan gambar. Nilai di file tersebut sengaja fiktif.

Gambar situs tersedia sebagai aset WebP lokal di [`public/images/pangkas-kala`](public/images/pangkas-kala). Ganti file-file tersebut dengan foto toko, barber, dan hasil potongan milik sendiri; pertahankan nama file agar tidak perlu mengubah konfigurasi. Jika memakai host gambar lain, tambahkan domainnya ke `remotePatterns` di `next.config.ts`.

## WhatsApp dan peta

`src/lib/whatsapp.ts` membuat URL WhatsApp dengan pesan yang sudah terisi dan ter-encode. Nomor pusat ada di `business.whatsapp`; gunakan format internasional tanpa tanda `+` atau spasi.

Tombol lokasi memakai `business.mapUrl`. Ganti URL dan `business.coordinates` dengan lokasi Google Maps yang benar. Peta memakai placeholder ringan agar tidak memuat iframe pihak ketiga tanpa interaksi.

## SEO dan data terstruktur

Metadata per halaman ada di masing-masing `page.tsx` melalui helper `src/lib/metadata.ts`. `src/app/sitemap.ts`, `robots.ts`, dan `manifest.ts` adalah file convention Next. JSON-LD `HairSalon` dibuat di `src/app/layout.tsx` dari konfigurasi bisnis yang sama. Setelah mengganti URL domain, validasi hasilnya di Google Rich Results Test dan Schema Markup Validator.

## Deploy

```bash
npm run build
npm run start
```

Proyek ini dapat dideploy ke Vercel atau host Node.js yang mendukung Next.js. Sebelum launch, ganti domain `https://pangkas-kala.example` di `layout.tsx`, `metadata.ts`, `robots.ts`, dan `sitemap.ts`, lalu ganti seluruh data fiktif yang ditandai komentar atau footer.

## Integrasi formulir

Formulir kontak hanya melakukan validasi client-side dan menampilkan status sukses lokal. Hubungkan fungsi `submit` di `src/components/contact-form.tsx` ke endpoint formulir nyata sebelum digunakan pelanggan.
