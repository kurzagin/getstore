export const faqGroups = [
  { title: "Harga dan pembayaran", items: [
    { q: "Bagaimana cara menghitung harga laundry?", a: "Laundry kiloan mengikuti berat yang tercatat. Laundry satuan mengikuti jenis dan kondisi barang. Kami mengonfirmasi perkiraan harga sebelum pesanan diproses; harga akhir dapat berubah jika ada kebutuhan tambahan yang disepakati." },
    { q: "Kapan pembayaran dilakukan?", a: "Metode dan waktu pembayaran perlu dikonfirmasi saat pemesanan. Simpan ringkasan pesanan atau bukti pembayaran untuk memudahkan pengecekan." },
  ]},
  { title: "Penjemputan dan pengantaran", items: [
    { q: "Apakah tersedia antar-jemput?", a: "Tersedia di area tertentu. Kirim alamat atau nama wilayah melalui WhatsApp agar kami bisa mengecek jadwal dan ketentuannya." },
    { q: "Apakah ada minimum pesanan?", a: "Ketentuan minimum dapat berbeda menurut area. Silakan tanyakan saat mengirim alamat karena data ini masih perlu dikonfirmasi oleh operator." },
  ]},
  { title: "Proses pencucian", items: [
    { q: "Apakah pakaian dicuci bersama pesanan lain?", a: "Metode pemrosesan bergantung pada jenis layanan, kapasitas, dan kondisi pakaian. Sampaikan kebutuhan pemisahan saat memesan agar kami dapat menjelaskan pilihan yang tersedia." },
    { q: "Berapa lama prosesnya?", a: "Estimasi berbeda menurut layanan, jumlah, bahan, dan kapasitas hari itu. Kami akan menyampaikan perkiraan dan memberi kabar jika ada perubahan." },
  ]},
  { title: "Pewangi dan kebutuhan khusus", items: [
    { q: "Bisa memilih tanpa pewangi?", a: "Bisa diminta. Tuliskan pilihan tanpa pewangi di pesan WhatsApp dan pastikan kembali saat pesanan dikonfirmasi." },
    { q: "Bagaimana dengan pakaian berbahan khusus?", a: "Sebutkan bahan, label perawatan, noda, atau kekhawatiran lain sebelum barang diproses. Untuk barang tertentu, kami mungkin perlu mengecek dulu apakah dapat kami terima." },
  ]},
  { title: "Keterlambatan, kerusakan, dan keluhan", items: [
    { q: "Bagaimana jika ada masalah setelah pesanan diterima?", a: "Hubungi kami secepatnya dengan nomor pesanan dan foto bila relevan. Kami akan memeriksa catatan penerimaan dan proses sebelum membahas langkah berikutnya sesuai kebijakan yang berlaku." },
    { q: "Apakah noda pasti hilang?", a: "Tidak ada jaminan semua noda dapat hilang. Kondisi noda, bahan, dan usia noda memengaruhi hasil. Kami akan mencatat informasi khusus yang Anda sampaikan." },
  ]},
  { title: "Laundry untuk usaha", items: [
    { q: "Apakah bisa untuk homestay atau salon?", a: "Bisa dibicarakan untuk kebutuhan rutin. Kirim jenis barang, perkiraan volume, area, dan ritme pengiriman agar kami dapat menilai pengaturan yang realistis." },
  ]},
];

export const faqPreview = faqGroups.flatMap((group) => group.items).slice(0, 6);

