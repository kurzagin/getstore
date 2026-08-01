import { pricing } from "@/content/pricing";
export default function PriceTable() { return <div className="table-wrap"><table><thead><tr><th>Layanan</th><th>Estimasi proses</th><th>Harga mulai</th><th>Catatan</th></tr></thead><tbody>{pricing.map((item) => <tr key={item.service}><td data-label="Layanan">{item.service}</td><td data-label="Estimasi">{item.duration}</td><td data-label="Harga">{item.price}</td><td data-label="Catatan">{item.note}</td></tr>)}</tbody></table></div>; }

