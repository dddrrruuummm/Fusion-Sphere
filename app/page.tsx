import {Hero,Introduction,FeaturedScope,BuyerBrief,ContactBand} from "@/components/sections";
import {site} from "@/lib/site";
import {GaggenauBanner} from "@/components/gaggenau-banner";
export const metadata={alternates:{canonical:site.url}};
export default function Home(){return <><Hero/><Introduction/><GaggenauBanner home/><FeaturedScope/><BuyerBrief/><ContactBand/></>;}
