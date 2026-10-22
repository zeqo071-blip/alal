'use client';
import Link from 'next/link'; import { useRouter } from 'next/navigation'; import { useEffect, useState } from 'react';
import { categories } from '@/data/products'; import { useStore } from '@/store/cart';
export default function Header(){const r=useRouter();const [q,setQ]=useState('');const [m,setM]=useState(false);
 const n=useStore(s=>Object.values(s.items).reduce((a,b)=>a+b,0));const f=useStore(s=>s.fav.length);useEffect(()=>setM(true),[]);
 return(<header className="bg-[#0f1115] text-white">
 <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-2 text-xs text-white/80"><span>📍 Bakı, Azərbaycan</span><span className="hidden sm:block">🚚 Sifarişiniz 1-3 iş günü ərzində çatdırılır</span><span>Kömək</span></div>
 <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-4 py-3">
  <Link href="/" className="text-3xl font-extrabold">AlAl<span className="text-brand">.az</span></Link>
  <form className="flex flex-1" onSubmit={e=>{e.preventDefault();r.push('/axtaris?q='+encodeURIComponent(q));}} role="search">
   <input aria-label="Axtarış" value={q} onChange={e=>setQ(e.target.value)} placeholder="Məhsul, kateqoriya və ya brend axtarın..." className="w-full rounded-l-full px-5 py-3 text-sm text-ink outline-none"/>
   <button className="rounded-r-full bg-brand px-6" aria-label="Axtar">🔍</button></form>
  <nav className="flex items-center gap-5 text-sm"><Link href="/sebet">♡ <span className="hidden md:inline">Sevimlilərim</span>{m&&f>0&&` (${f})`}</Link><Link href="/sebet">🛒 {m&&n>0&&<b className="rounded-full bg-brand px-1.5 text-xs">{n}</b>}</Link></nav></div>
 <div className="border-t border-white/10"><div className="mx-auto flex max-w-[1280px] gap-6 overflow-x-auto px-4 py-3 text-sm whitespace-nowrap">
  {categories.map(c=><Link key={c.slug} href={`/kateqoriya/${c.slug}`} className="hover:text-brand">{c.name}</Link>)}</div></div></header>);}
