"use client";
import { useState } from "react";
import { Cpu, Layers, Refrigerator, Shirt, ShoppingBag, Sparkles } from "lucide-react";
import { products, type Category } from "@/lib/site";
import { ProductCard } from "./product-card";
export function Catalog() {
 const [category,setCategory]=useState<Category|"All"|"Gaggenau">("All"); const items=products.filter(p=>category==="Gaggenau"?p.brand==="Gaggenau":category==="All"||p.category===category);
 const filters=[{name:"All",icon:Layers},{name:"Gaggenau",icon:Sparkles},{name:"Appliances",icon:Refrigerator},{name:"Electronics",icon:Cpu},{name:"Apparel",icon:Shirt},{name:"Accessories",icon:ShoppingBag}] as const;
 return <><div className="catalog-controls"><div className="filters" role="group" aria-label="Filter product scope">{filters.map(filter=><button key={filter.name} type="button" aria-pressed={category===filter.name} onClick={()=>setCategory(filter.name)}><filter.icon size={16}/>{filter.name}</button>)}</div><p aria-live="polite">{String(items.length).padStart(2,"0")} product directions</p></div><div className="product-grid">{items.map(product=><ProductCard key={product.id} product={product}/>)}</div><p className="catalog-note">Gaggenau product photography and information are sourced from the manufacturer. Other images illustrate product categories. Specifications, market availability, and commercial terms are confirmed on inquiry. Gaggenau trademarks and product photography belong to their respective owners.</p></>;
}
