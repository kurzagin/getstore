import { business } from "@/data/business";
export default function BusinessHours(){ return <div className="grid grid-cols-2 gap-x-5 text-sm">{business.hours.map(h=><div className="flex justify-between border-b hairline py-2" key={h.day}><span>{h.day}</span><span className="font-semibold">{h.open}–{h.close}</span></div>)}</div> }
