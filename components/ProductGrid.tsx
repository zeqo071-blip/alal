'use client';
import { useMemo, useState } from 'react'; import type { Product } from '@/types'; import ProductCard from './ProductCard';
export default function ProductGrid({products}:{products:Product[]}){
 const brands=useMemo(()=>[...new Set(products.map(p=>p.brand))],[products]);const max=Math.ceil(Math.max(1,...products.map(p=>p.price)));
 const [sel,setSel]=useState<string[]>([]);const [pm,setPm]=useState(max);const [rt,setRt]=useState(0);const [sort,setSort]=useState('pop');const [page,setPage]=useState(1);
 const list=useMemo(()=>{let l=products.filter(p=>(!sel.length||sel.includes(p.brand))&&p.price<=pm&&p.rating>=rt);
  const s:Record<string,(a:Product,b:Product)=>number>={pop:(a,b)=>b.reviews-a.reviews,cheap:(a,b)=>a.price-b.price,exp:(a,b)=>b.price-a.price,new:(a,b)=>b.id-a.id};return [...l].sort(s[sort]);},[products,sel,pm,rt,sort]);
 const shown=list.slice(0,page*12);
 return(<div className="grid gap-6 md:grid-cols-[230px_1fr]"><aside aria-label="Filtr" className="space-y-5 rounded-xl border border-line p-4 text-sm h-fit">
  <div><b>Qiymət (maks): {pm} ₼</b><input type="range" min={1} max={max} value={pm} onChange={e=>{setPm(+e.target.value);setPage(1);}} className="w-full accent-brand"/></div>
  <div><b>Brend</b>{brands.map(b=><label key={b} className="mt-1 flex gap-2"><input type="checkbox" checked={sel.includes(b)} onChange={()=>{setSel(s=>s.includes(b)?s.filter(x=>x!==b):[...s,b]);setPage(1);}}/>{b}</label>)}</div>
  <div><b>Reytinq</b><select value={rt} onChange={e=>setRt(+e.target.value)} className="mt-1 w-full rounded border p-1"><option value={0}>Hamısı</option><option value={4}>4+ ⭐</option><option value={4.5}>4.5+ ⭐</option></select></div></aside>
 <section><div className="mb-3 flex items-center justify-between text-sm"><span>{list.length} məhsul</span>
  <select aria-label="Çeşidləmə" value={sort} onChange={e=>setSort(e.target.value)} className="rounded border p-1"><option value="pop">Populyar</option><option value="cheap">Ən ucuz</option><option value="exp">Ən bahalı</option><option value="new">Ən yeni</option></select></div>
  {list.length===0?<div className="rounded-xl bg-soft p-10 text-center">😕 Heç bir məhsul tapılmadı. Filtrləri dəyişin.</div>:
  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{shown.map(p=><ProductCard key={p.id} p={p}/>)}</div>}
  {shown.length<list.length&&<button onClick={()=>setPage(p=>p+1)} className="mx-auto mt-6 block rounded-full border border-brand px-8 py-2 text-brand">Daha çox göstər</button>}</section></div>);}
