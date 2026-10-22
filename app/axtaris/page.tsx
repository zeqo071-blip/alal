import { products } from '@/data/products'; import ProductGrid from '@/components/ProductGrid';
export default function Search({searchParams}:{searchParams:{q?:string}}){const q=(searchParams.q||'').toLowerCase();
 const l=products.filter(p=>(p.name+p.catName).toLowerCase().includes(q));
 return(<><h1 className="mb-4 text-2xl font-bold">“{searchParams.q||''}” üzrə nəticələr</h1><ProductGrid products={l}/></>);}
