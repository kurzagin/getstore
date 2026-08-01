"use client";
import { useState } from "react";
import { categories, menuItems } from "@/data/menu";
import { MenuCard } from "@/components/ui";
export function MenuFilter(){const [active,setActive]=useState("Semua"); const items=active==="Semua"?menuItems:menuItems.filter(i=>i.category===active); return <div><div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter menu">{categories.map(c=><button key={c} onClick={()=>setActive(c)} className={`border px-3 py-2 text-xs font-bold transition-colors ${active===c?"border-charcoal bg-charcoal text-paper":"border-charcoal/25 hover:border-charcoal"}`} aria-pressed={active===c}>{c}</button>)}</div><p className="mb-6 text-sm text-muted">Menampilkan {items.length} pilihan · harga per porsi</p><div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">{items.map(item=><MenuCard key={item.name} item={item}/>)}</div></div>}
