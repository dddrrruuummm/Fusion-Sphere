import type {Metadata} from "next";
import {site} from "@/lib/site";
import {Catalog} from "@/components/catalog";
import {ContactBand} from "@/components/sections";
export const metadata:Metadata={title:"Product Scope",description:"Explore large home appliances, televisions, electronics, clothing, and accessories in Fusion Sphere's wholesale product scope.",alternates:{canonical:`${site.url}/showcase/`}};
export default function Showcase(){return <><section className="page-intro wrap"><p className="label blue-text">Our product scope</p><h1>Find the direction.<br/>Start the conversation.</h1><p className="page-lead">From refrigerators, laundry appliances, and air conditioning to large-screen televisions, electronics, apparel, and accessories. A broader starting point for your wholesale brief.</p></section><section className="wrap catalog-section"><Catalog/></section><ContactBand/></>;}
