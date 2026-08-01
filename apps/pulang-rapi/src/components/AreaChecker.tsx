"use client";
import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
export default function AreaChecker() { const [value, setValue] = useState(""); const submit = (event: FormEvent) => { event.preventDefault(); const area = value.trim() || "[alamat/area belum diisi]"; window.location.href = whatsappUrl(`Halo Pulang Rapi, saya ingin mengecek area layanan. Alamat atau area saya: ${area}. Mohon diinformasikan apakah bisa dijemput.`); }; return <form className="area-checker" onSubmit={submit}><label htmlFor="area">Alamat atau kecamatan</label><div className="checker-row"><input id="area" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Contoh: Kecamatan A, dekat..." /><button className="button" type="submit">Cek via WhatsApp ↗</button></div><p>Alamat yang Anda isi hanya digunakan untuk menyiapkan pesan WhatsApp dan tidak disimpan oleh situs ini.</p></form>; }

