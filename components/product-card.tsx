import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/site";
export function ProductCard({product}:{product:Product}) {
 return <article className="product">
  <Link className={`product-photo${product.brand ? " product-photo-official" : ""}`} href={`/contact?interest=${encodeURIComponent(product.name)}`} aria-label={`Inquire about ${product.name}`}>
   <Image src={product.image} alt={product.description} fill sizes="(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 100vw" className={product.imageFit==="contain"?"object-contain":"object-cover"}/>
   <span className="product-code">{product.id}</span><span className="photo-arrow"><ArrowUpRight size={20}/></span>
  </Link>
  <p className="product-category">{product.brand ? `${product.brand} / ${product.category}` : product.category}</p>
  <h3><Link href={`/contact?interest=${encodeURIComponent(product.name)}`}>{product.name}</Link></h3>
  <p className="product-description">{product.description}</p>
  {product.source && <a className="product-source" href={product.source} target="_blank" rel="noopener noreferrer" aria-label={`Official product details for ${product.name}`}>Official product details <ArrowUpRight size={14}/></a>}
 </article>;
}
