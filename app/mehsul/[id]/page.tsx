import { notFound } from 'next/navigation'; import { getProduct, products } from '@/data/products'; import { azn } from '@/lib/format'; import AddToCart from '@/components/AddToCart'; import ProductCard from '@/components/ProductCard';
export default function Product({params}:{params:{id:string}}){const p=getProduct(+params.id);if(!p)notFound();
 return(<><div className="grid gap-8 md:grid-cols-2"><div role="img" aria-label={p.name} className="flex aspect-square items-center justify-center rounded-2xl bg-soft text-8xl">🖼️</div>
 <div><div className="text-sm text-muted">{p.catName}</div><h1 className="text-2xl font-bold">{p.name}</h1><div className="mt-1 text-sm">⭐ {p.rating} ({p.reviews} rəy)</div>
 <div className="mt-4 text-3xl font-extrabold text-brand">{azn(p.price)}{p.disc>0&&<s className="ml-3 text-base font-normal text-muted">{azn(p.old)}</s>}</div>
 <div className="mt-2 rounded-lg bg-orange-50 p-3 text-sm">💳 Hissə-hissə: 6 ay × {azn(p.price/6)}</div>
 <p className="mt-4 text-sm text-muted">{p.desc}</p><p className="mt-3 text-sm">🚚 Bakı: 1-2 gün · Regionlar: 2-4 iş günü</p><div className="mt-5"><AddToCart id={p.id}/></div></div></div>
 <h2 className="mb-3 mt-10 text-xl font-bold">Oxşar məhsullar</h2><div className="grid grid-cols-2 gap-3 lg:grid-cols-6">{products.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,6).map(x=><ProductCard key={x.id} p={x}/>)}</div></>);}
