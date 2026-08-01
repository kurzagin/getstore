import { getOpenStatus } from "@/lib/hours";
export default function OpenStatus(){ const status=getOpenStatus(); return <div className="flex items-center gap-2 text-sm font-semibold"><span className={`h-2.5 w-2.5 rounded-full ${status.open?"bg-olive":"bg-tobacco"}`} aria-hidden="true" />{status.label} <span className="font-normal muted">· {status.detail}</span></div> }
