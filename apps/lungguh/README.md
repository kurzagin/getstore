# Lungguh

Multi-page Next.js App Router landing site for Lungguh — Angkringan Dalam Rumah.

## Menjalankan lokal

```bash
npm install
npm run dev
npm run lint
npm run build
```

Buka `http://localhost:3000`.

## Struktur singkat

```text
src/app/                 routes, metadata, global styles
src/components/          header/footer, menu, FAQ, reservation form
src/data/                 typed content and replaceable business details
public/                   static assets from the starter
```

Route yang tersedia: `/`, `/menu`, `/nobar`, `/cerita`, `/lokasi`, `/reservasi`, `/privacy`.

## Keputusan desain

Sistem visual memakai charcoal, rice, sambal, banana-leaf, dan warung-light dengan Bricolage Grotesque untuk headline dan Plus Jakarta Sans untuk teks. Layout menggunakan garis, ruang, dan grid editorial sebelum bayangan atau kartu bulat. Foto diletakkan sebagai aset dominan, sementara motion dibatasi pada state menu, filter, accordion, dan hover; `prefers-reduced-motion` dihormati.

## Placeholder yang wajib diganti sebelum launch

- Foto menu Unsplash di `src/data/menu.ts` perlu diganti dengan foto berlisensi yang sudah dikurasi: hanya orang Indonesia, tanpa logo klub/broadcast, alkohol, atau merek asing yang terlihat. Hero dan interior saat ini memakai aset generated lokal di `public/images/`.
- `site.url`, alamat, telepon, WhatsApp, Instagram, koordinat, landmark, dan email di `src/data/site.ts`.
- Jadwal laga sample, status kursi, dan nama tim netral di `src/data/matches.ts`.
- Nama partner di `src/data/partners.ts` — saat ini diberi tanda `sample: true`.
- Harga, ketersediaan menu, dan semua copy “data contoh”.
- Embed peta di `/lokasi` dan alur backend/CRM untuk reservasi.
- Kebijakan privasi resmi: pengelola data, retensi, hak penghapusan, dan kontak.
- URL canonical/OG dan akun sosial di metadata.
- `Restaurant` JSON-LD: alamat, jam buka, telepon, dan `sameAs` yang sebenarnya.

## Checklist aksesibilitas

- Bahasa dokumen `id`, judul unik per route, skip link, landmark `<main>`, nav berlabel.
- Tombol mobile menu dan filter memakai state `aria-expanded`/`aria-pressed`.
- Semua input memiliki label nyata, validasi inline, dan pesan error yang dibaca dengan `role="alert"`.
- Foto memakai alt text bahasa Indonesia; hero diberi prioritas, foto lain mengikuti lazy loading bawaan `next/image`.
- Focus ring kontras, target sentuh memadai, dan animasi dikurangi saat user meminta reduced motion.
