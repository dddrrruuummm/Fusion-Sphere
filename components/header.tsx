"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";
import { BrandMark, BrandName } from "./brand";
import { Button } from "./ui/button";
export function Header() {
  const [open,setOpen]=useState(false); const path=usePathname();
  return <header className="site-header"><div className="wrap header-inner"><Link href="/" className="brand" aria-label="Fusion Sphere home" onClick={()=>setOpen(false)}><BrandMark/><BrandName/></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item=><Link key={item.href} href={item.href} aria-current={path.startsWith(item.href)?"page":undefined}>{item.label}</Link>)}</nav><Button asChild className="desktop-inquiry"><Link href="/contact">Let&apos;s talk <ArrowUpRight size={17}/></Link></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X size={23}/>:<Menu size={23}/>}</Button></div>{open&&<nav id="mobile-navigation" className="mobile-nav wrap" aria-label="Mobile navigation">{[{label:"Home",href:"/"},...navigation,{label:"Contact",href:"/contact"}].map(item=><Link href={item.href} key={item.href} onClick={()=>setOpen(false)}>{item.label}<ArrowUpRight size={17}/></Link>)}</nav>}</header>;
}
