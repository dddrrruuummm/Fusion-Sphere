import type { Metadata } from "next";
import { site, mapsUrl } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"Fusion Sphere | Appliances, Electronics & Apparel Wholesale",template:"%s | Fusion Sphere"},description:"Fusion Sphere SDN. BHD. is a Kuala Lumpur wholesale company spanning large home appliances, consumer electronics, clothing, and accessories.",openGraph:{title:"Fusion Sphere | Two Worlds. One Source.",description:"Large appliances, electronics, clothing, and accessories. Wholesale conversations from Kuala Lumpur, Malaysia.",siteName:site.name,url:site.url,type:"website",locale:"en_US",images:[{url:"/images/hero.webp",width:1536,height:1024,alt:"Fusion Sphere electronics and apparel product scope"}]},twitter:{card:"summary_large_image",images:["/images/hero.webp"]},robots:{index:true,follow:true}};
export default function Layout({children}:{children:React.ReactNode}){
 const schema={"@context":"https://schema.org","@type":"WholesaleStore",name:site.name,legalName:site.legalName,url:site.url,email:site.email,identifier:site.registration,foundingDate:"2025-09-10",description:"Wholesale of electrical and electronic goods, clothing, and clothing accessories.",address:{"@type":"PostalAddress",streetAddress:`${site.address.street}, ${site.address.district}`,addressLocality:site.address.city,addressRegion:site.address.region,postalCode:site.address.postalCode,addressCountry:site.address.country},hasMap:mapsUrl};
 return <html lang="en" data-scroll-behavior="smooth"><body><a href="#main-content" className="skip-link">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><Header/><main id="main-content">{children}</main><Footer/></body></html>;
}
