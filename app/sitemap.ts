import type {MetadataRoute} from "next";
import {site} from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{return ["","about/","gaggenau/","services/","showcase/","contact/","privacy-policy/","terms/"].map(path=>({url:`${site.url}/${path}`,lastModified:new Date("2026-10-12T00:00:00Z"),changeFrequency:"monthly",priority:path===""?1:0.7}));}
