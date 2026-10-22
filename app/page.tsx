import Link from 'next/link'; import { categories, products } from '@/data/products'; import ProductCard from '@/components/ProductCard';
const Row=({t,l}:{t:string;l:typeof products})=>(<section className="mt-8"><h2 className="mb-3 text-xl font-bold">{t}</h2><div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{l.map(p=><ProductCard key={p.id} p={p}/>)}</div></section>);
export default function Home(){
 return(<div><div className="rounded-2xl bg-gradient-to-r from-[#0f1115] via-[#3a1a05] to-brand p-10 text-white"><p className="text-xs font-semibold text-brand">AlAl.az-DAN SƏNƏ ÖZƏL</p>
 <h1 className="mt-2 text-4xl font-extrabold">Daha çox seçim,<br/><span className="text-brand">daha çox fürsət!</span></h1><p className="mt-2">Sevdiyin brendlər indi AlAl.az-da!</p>
 <Link href="/kateqoriya/elektronika" className="mt-5 inline-block rounded-lg bg-brand px-6 py-3 font-semibold">Alış-verişə başla →</Link></div>
 <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-12">{categories.map(c=><Link key={c.slug} href={`/kateqoriya/${c.slug}`} className="flex flex-col items-center rounded-xl bg-soft p-3 text-center text-xs hover:bg-orange-50"><span className="text-3xl">{c.icon}</span>{c.name}</Link>)}</div>
 <Row t="🔥 Bu həftənin ən çox satılanları" l={[...products].sort((a,b)=>b.reviews-a.reviews).slice(0,6)}/>
 <Row t="Endirimdə" l={products.filter(p=>p.disc>=28).slice(0,6)}/>
 <Row t="Sənin üçün tövsiyələr" l={products.filter(p=>p.rating>=4.6).slice(0,6)}/></div>);}
