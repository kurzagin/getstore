# Ruang Rona

Website multi-halaman untuk Ruang Rona, salon & beauty house lokal di Jakarta Selatan. Dibangun dengan Next.js App Router, TypeScript, Tailwind CSS v4, `next/image`, dan `next/font`. Semua copy customer-facing menggunakan Bahasa Indonesia.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Periksa production build dengan `npm run build`, lalu jalankan hasilnya menggunakan `npm run start`.

## Struktur penting

- `src/data/salon.ts` — satu sumber data untuk brand, kontak, alamat, koordinat, jam buka, link sosial, layanan, harga, FAQ, testimonial, dan template pesan WhatsApp.
- `src/data/journal.ts` — tiga artikel jurnal lengkap dalam data typed lokal.
- `src/components/` — header, logo, CTA WhatsApp, footer, daftar layanan, filter, accordion, dan blok editorial.
- `public/images/` — aset foto raster lokal hasil generasi, dengan nama file yang dipakai komponen. Tidak ada remote stock image.
- `public/image-prompts/` — prompt foto asli yang sesuai konteks Indonesia untuk mengganti placeholder.

## Sebelum produksi

Ganti nilai berikut di `src/data/salon.ts`:

- nomor telepon dan nomor WhatsApp
- alamat, koordinat, dan URL Google Maps
- Instagram
- harga layanan dan jam operasional
- metode pembayaran, parkir/transit, dan kebijakan perubahan jadwal
- nama, bio, dan foto tim
- testimoni contoh dengan testimoni customer yang sudah diverifikasi

Ganti PNG hasil generasi di `public/images/` dengan foto original WEBP/AVIF menggunakan nama file yang sama, atau perbarui `src` di komponen yang relevan. Jangan gunakan stock photo acak. Foto generasi ini tetap perlu ditinjau dan, idealnya, diganti dengan foto salon serta tim Ruang Rona yang sebenarnya sebelum produksi.

## Rationale desain

Ruang Rona memakai komposisi editorial yang lebih ringan dan beauty-forward: headline Newsreader yang feminin, UI Manrope yang praktis, permukaan putih dan blush pink, plum-purple untuk kontras, serta aksen pink yang konsisten pada CTA. Image frame diberi radius lembut dan sentuhan asimetris supaya terasa seperti salon yang hangat, bukan klinik atau template SaaS.

Interaksi dibatasi pada filter layanan, FAQ accordion, menu mobile, hover states, dan bottom booking bar mobile. Semua link WhatsApp menggunakan `encodeURIComponent`; halaman memakai metadata per route, JSON-LD BeautySalon, sitemap, robots, focus states, dan `prefers-reduced-motion`.

## Content inventory

Home, Layanan (10 layanan dalam 5 kategori), Tentang Kami, Jurnal index, 3 artikel lengkap, Reservasi/FAQ, 404, footer, sitemap, dan robots.

## Production placeholders tersisa

Foto salon, foto tim, alamat/nomor bisnis, Google Maps embed, metode pembayaran, detail parkir/transit, nama tim, testimonial terverifikasi, dan domain canonical `https://ruangrona.example`.
