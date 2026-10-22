'use client';
import Link from 'next/link'; import type { Product } from '@/types'; import { azn } from '@/lib/format'; import { useStore } from '@/store/cart';
export default function ProductCard({p}:{p:Product}){const add=useStore(s=>s.add);const fav=useStore(s=>s.fav.includes(p.id));const tf=useStore(s=>s.toggleFav);
 return(<div className="group relative rounded-xl border border-line bg-white p-2 transition hover:shadow-lg">
 {p.disc>0&&<span className="absolute left-3 top-3 z-10 rounded bg-brand px-1.5 py-0.5 text-xs font-bold text-white">-{p.disc}%</span>}
 <button aria-label="Sevimlilərə əlavə et" onClick={()=>tf(p.id)} className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-1.5">{fav?'❤️':'♡'}</button>
 <Link href={`/mehsul/${p.id}`}><div role="img" aria-label={p.name} className="flex aspect-square items-center justify-center rounded-lg bg-soft text-5xl">🖼️</div>
 <div className="mt-2 text-sm font-semibold">{p.brand}</div><div className="truncate text-xs text-muted">{p.name}</div>
 <div className="mt-1 text-xs">⭐ {p.rating} <span className="text-muted">({p.reviews})</span></div>
 <div className="mt-1"><b className="text-brand">{azn(p.price)}</b>{p.disc>0&&<s className="ml-2 text-xs text-muted">{azn(p.old)}</s>}</div></Link>
 <button onClick={()=>add(p.id)} className="mt-2 w-full rounded-lg bg-brand py-2 text-sm font-semibold text-white hover:bg-brand2">Səbətə at</button></div>);}
