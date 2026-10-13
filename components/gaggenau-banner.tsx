import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export function GaggenauBanner({home=false}:{home?:boolean}) {
 const Heading = home ? "h2" : "h1";
 return <section className="gaggenau-banner">
  <Image src="/images/gaggenau-kitchen.webp" fill priority={!home} sizes="100vw" alt="Gaggenau Expressive series appliances installed in a kitchen, photographed by the manufacturer" className="gaggenau-banner-image"/>
  <div className="wrap gaggenau-banner-inner">
   <div><p className="label">Fusion Sphere / Gaggenau appliance agent</p><Heading>Gaggenau</Heading></div>
   <div className="gaggenau-banner-bottom"><p>Manufacturer photography / Gaggenau</p><Button asChild variant="light"><Link href={home?"/gaggenau":"/contact?interest=Gaggenau%20appliances"}>{home?"Explore Gaggenau":"Discuss your kitchen project"}<ArrowUpRight size={18}/></Link></Button></div>
  </div>
 </section>;
}
