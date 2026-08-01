import Link from "next/link";
import type { Service } from "@/content/services";
import { serviceWhatsappUrl } from "@/lib/whatsapp";
export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) { return <article className={`service-card service-card-${index % 3}`}><div className="card-kicker">0{index + 1} / {service.label}</div><h3>{service.name}</h3><p>{service.description}</p><div className="service-meta"><span>{service.price}</span><span>{service.time}</span></div><div className="service-actions"><Link href={`/layanan#${service.slug}`}>Lihat detail</Link><a href={serviceWhatsappUrl(service.name)}>Tanya via WA ↗</a></div></article>; }

