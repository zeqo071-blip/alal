import { categories } from '@/data/products';
export default function sitemap(){const b=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';return [{url:b},...categories.map(c=>({url:`${b}/kateqoriya/${c.slug}`}))];}
