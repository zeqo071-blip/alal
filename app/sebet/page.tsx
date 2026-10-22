'use client';
import { useEffect, useState } from 'react'; import Link from 'next/link'; import { useStore } from '@/store/cart'; import { getProduct } from '@/data/products'; import { azn } from '@/lib/format';
export default function Cart(){const {items,setQty,remove,clear}=useStore();const [m,setM]=useState(false);const [code,setCode]=useState('');const [ok,setOk]=useState(false);useEffect(()=>setM(true),[]);
 if(!m)return <div className="skeleton h-40 rounded-xl"/>;
 const rows=Object.entries(items).map(([id,q])=>({p:getProduct(+id)!,q})).filter(r=>r.p);const sub=rows.reduce((a,r)=>a+r.p.price*r.q,0);const ship=sub>=150||!sub?0:5;const disc=ok?sub*0.1:0;
 if(!rows.length)return <div className="rounded-xl bg-soft p-12 text-center">🛒 Səbətiniz boşdur. <Link href="/" className="text-brand underline">Alış-verişə başla</Link></div>;
 return(<div className="grid gap-6 md:grid-cols-[1fr_300px]"><div className="space-y-3"><h1 className="text-2xl font-bold">Səbətim</h1>
 {rows.map(({p,q})=><div key={p.id} className="flex items-center gap-4 rounded-xl border border-line p-3"><div className="flex h-16 w-16 items-center justify-center rounded bg-soft text-2xl">🖼️</div>
 <div className="flex-1 text-sm"><div className="font-semibold">{p.name}</div><div className="text-xs text-muted">Satıcı: AlAl Mağaza</div></div>
 <div className="flex items-center gap-2"><button aria-label="Azalt" onClick={()=>setQty(p.id,q-1)} className="h-7 w-7 rounded border">−</button>{q}<button aria-label="Artır" onClick={()=>setQty(p.id,q+1)} className="h-7 w-7 rounded border">+</button></div>
 <b className="w-24 text-right text-brand">{azn(p.price*q)}</b><button aria-label="Sil" onClick={()=>remove(p.id)}>🗑️</button></div>)}</div>
 <aside className="h-fit space-y-2 rounded-xl border border-line p-4 text-sm"><b>Sifariş xülasəsi</b><div className="flex justify-between"><span>Məhsullar</span>{azn(sub)}</div><div className="flex justify-between"><span>Çatdırılma</span>{ship?azn(ship):'Pulsuz'}</div>
 {ok&&<div className="flex justify-between text-green-600"><span>Promo (−10%)</span>−{azn(disc)}</div>}
 <div className="flex gap-2"><input value={code} onChange={e=>setCode(e.target.value)} placeholder="Promo kod (ALAL10)" className="w-full rounded border px-2 py-1"/><button onClick={()=>setOk(code.toUpperCase()==='ALAL10')} className="rounded bg-ink px-3 text-white">OK</button></div>
 <div className="flex justify-between border-t pt-2 text-lg font-bold"><span>Cəmi</span>{azn(sub+ship-disc)}</div>
 <button onClick={()=>{alert('Checkout mərhələsi növbəti addımdır (mock).');}} className="w-full rounded-lg bg-brand py-3 font-semibold text-white">Sifarişi təsdiqlə</button><button onClick={clear} className="w-full text-xs text-muted">Səbəti təmizlə</button></aside></div>);}
