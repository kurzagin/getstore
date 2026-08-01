# Pulang Rapi

Website multi-halaman untuk usaha laundry lokal Pulang Rapi, dibuat dengan Next.js App Router, TypeScript, dan Tailwind CSS v4.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Pemeriksaan produksi:

```bash
npm run lint
npm run build
npm run start
```

## Struktur singkat

- `src/app/` — route halaman, metadata, sitemap, dan robots
- `components/` — header, footer, CTA, tabel, accordion, dan form cek area
- `content/` — semua fakta bisnis yang bisa diedit
- `lib/whatsapp.ts` — pembuat URL WhatsApp dengan pesan terisi
- `public/images/` — tempat foto bisnis lokal ketika sudah tersedia

## Checklist sebelum launch

1. Ganti nomor WhatsApp, akun Instagram, alamat, dan jam operasional di `content/site.ts`.
2. Konfirmasi harga dan estimasi proses di `content/pricing.ts` serta `content/services.ts`.
3. Ganti area contoh, minimum pesanan, dan biaya jarak di `content/areas.ts`.
4. Tambahkan foto bisnis yang nyata ke `public/images/` dan gunakan alt text bahasa Indonesia.
5. Tambahkan testimoni terverifikasi saja ke `content/testimonials.ts`.
6. Tinjau kebijakan komplain, kerusakan, dan kompensasi dengan pemilik usaha.
7. Ganti domain contoh di `src/app/layout.tsx`, `src/app/sitemap.ts`, dan `src/app/robots.ts`.
8. Periksa ketersediaan merek dan domain Pulang Rapi.

## Fakta bisnis yang belum terkonfirmasi

Nomor telepon, alamat outlet, kota, jam operasional, harga, waktu proses, wilayah layanan, minimum pesanan, biaya jarak tambahan, metode pembayaran, kebijakan komplain/kompensasi, foto bisnis, dan testimoni masih berupa placeholder atau belum dimasukkan. Structured data LocalBusiness sengaja belum ditambahkan sampai alamat dan kontak yang benar tersedia.

## Catatan desain

Situs memakai komposisi editorial yang asimetris, warna linen–daun–clay, garis tipis, label pesanan, dan detail seperti jahitan untuk memberi rasa domestik yang tenang. Halaman katalog, proses, area, tentang, dan FAQ memakai ritme layout yang berbeda agar tidak terasa seperti homepage yang dipanjangkan. WhatsApp menjadi jalur utama, tetapi selalu disertai konteks dan catatan operasional yang realistis.
