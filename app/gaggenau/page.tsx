import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GaggenauBanner } from "@/components/gaggenau-banner";
import { ProductCard } from "@/components/product-card";
import { ContactBand } from "@/components/sections";
import { gaggenauProducts, site } from "@/lib/site";

export const metadata: Metadata = {
 title: "Gaggenau Appliances",
 description: "Discuss Gaggenau ovens, coffee machines, cooktops, ventilation, refrigeration, wine cabinets, and dishwashers with Fusion Sphere.",
 alternates: {canonical:`${site.url}/gaggenau/`},
 openGraph: {title:"Gaggenau Appliances | Fusion Sphere",url:`${site.url}/gaggenau/`,images:[{url:"/images/gaggenau-kitchen.webp",width:1600,height:1203,alt:"Gaggenau Expressive series kitchen appliances"}]},
};

export default function Gaggenau() {
 return <>
  <GaggenauBanner/>
  <section className="section wrap gaggenau-intro">
   <div><p className="label blue-text">A dedicated brand conversation</p><h2>Kitchen appliances.<br/>Considered as a whole.</h2></div>
   <div><p>Fusion Sphere is a Gaggenau appliance agent. Contact our team to discuss your kitchen appliance requirements, selected product series, and destination market.</p><p>Explore cooking, refrigeration, coffee, wine storage, and dishwashing below. Exact models, electrical compatibility, installation requirements, and availability are confirmed for each inquiry.</p><Link className="text-link" href="/contact?interest=Gaggenau%20appliances">Contact Fusion Sphere <ArrowUpRight size={17}/></Link></div>
  </section>
  <section className="section gaggenau-range" id="gaggenau-products"><div className="wrap">
   <div className="section-heading"><div><p className="label blue-text">From the manufacturer's collection</p><h2>Selected Gaggenau products.</h2></div><a className="text-link" href="https://www.gaggenau.com/global" target="_blank" rel="noopener noreferrer">Gaggenau official website <ArrowUpRight size={17}/></a></div>
   <div className="product-grid">{gaggenauProducts.map(product=><ProductCard key={product.id} product={product}/>)}</div>
   <p className="catalog-note">Product information and photographs are sourced from Gaggenau's official website. Gaggenau trademarks and manufacturer photography belong to their respective owners. Images show manufacturer products and installations, not Fusion Sphere premises or verified current inventory. Regional model availability and specifications may differ.</p>
  </div></section>
  <ContactBand/>
 </>;
}
