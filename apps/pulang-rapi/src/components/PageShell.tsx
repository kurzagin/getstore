import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppButton from "./WhatsAppButton";
export default function PageShell({ children }: { children: React.ReactNode }) { return <><aside className="demo-notice" aria-label="Pemberitahuan demo"><span>DEMO / PORTFOLIO</span><p>Ini adalah situs demo untuk Pulang Rapi, dibuat oleh Getstore.</p><a href="https://getstore.my.id" target="_blank" rel="noreferrer">getstore.my.id ↗</a></aside><SiteHeader /><main>{children}</main><SiteFooter /><WhatsAppButton /></>; }
