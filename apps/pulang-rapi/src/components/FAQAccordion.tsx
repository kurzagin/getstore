"use client";
import { useState } from "react";
type Item = { q: string; a: string };
export default function FAQAccordion({ items }: { items: Item[] }) { const [active, setActive] = useState<number | null>(null); return <div className="faq-list">{items.map((item, i) => <div className={`faq-item ${active === i ? "is-open" : ""}`} key={item.q}><button aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}><span>{item.q}</span><b aria-hidden="true">+</b></button>{active === i && <div className="faq-answer"><p>{item.a}</p></div>}</div>)}</div>; }

