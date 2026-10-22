import { notFound } from 'next/navigation'; import { categories, products } from '@/data/products'; import ProductGrid from '@/components/ProductGrid';
export default function Cat({params}:{params:{slug:string}}){const c=categories.find(x=>x.slug===params.slug);if(!c)notFound();
 return(<><h1 className="mb-4 text-2xl font-bold">{c.icon} {c.name}</h1><ProductGrid products={products.filter(p=>p.cat===c.slug)}/></>);}
