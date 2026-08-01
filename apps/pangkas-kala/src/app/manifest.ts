import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name:"Pangkas Kala", short_name:"Pangkas Kala", description:"Barbershop lingkungan di Cilandak.", start_url:"/", display:"standalone", background_color:"#f1ebdd", theme_color:"#171512", lang:"id" }; }
