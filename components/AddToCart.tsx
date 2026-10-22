'use client';
import { useStore } from '@/store/cart';
export default function AddToCart({id}:{id:number}){const add=useStore(s=>s.add);return <button onClick={()=>add(id)} className="rounded-lg bg-brand px-8 py-3 font-semibold text-white hover:bg-brand2">Səbətə at</button>;}
