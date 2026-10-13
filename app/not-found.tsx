import Link from "next/link";
import {Button} from "@/components/ui/button";
export default function NotFound(){return <section className="wrap page-intro"><p className="label blue-text">404 / Page not found</p><h1>Let&apos;s get you<br/>back on track.</h1><Button asChild><Link href="/">Return home</Link></Button></section>;}
