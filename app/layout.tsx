import './globals.css'; import type { Metadata } from 'next';
import Header from '@/components/Header'; import Footer from '@/components/Footer';
export const metadata:Metadata={title:'AlAl.az — Daha çox seçim, daha çox fürsət',description:'Azərbaycanın marketplace platforması: geyim, elektronika, ev, kosmetika və daha çoxu.',openGraph:{title:'AlAl.az',locale:'az_AZ',type:'website'}};
export default function Root({children}:{children:React.ReactNode}){return(<html lang="az"><body><Header/><main className="mx-auto max-w-[1280px] px-4 py-5">{children}</main><Footer/></body></html>);}
