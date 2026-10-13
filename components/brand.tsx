import { site } from "@/lib/site";

export function BrandName() {
  const [first, ...rest] = site.name.split(" ");
  return <span>{first}<br/>{rest.join(" ")}<span className="brand-dot">.</span></span>;
}

export function BrandMark({className=""}:{className?:string}) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M26 5a19 19 0 1 0 0 38V5Z" fill="currentColor"/><path d="M22 5a19 19 0 1 1 0 38V5Z" stroke="currentColor" strokeWidth="3"/><path d="M25 10a21 21 0 0 0 0 28" stroke="white" strokeWidth="2"/></svg>;
}
