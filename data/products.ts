import type { Category, Product } from '@/types';
export const categories:Category[]=[
{slug:'qadin',name:'Qadın Geyimləri',icon:'👗',items:['Yay donu','İpək köynək','Cins şalvar','Palto'],brands:['Zara','Mango','LC Waikiki'],base:70},
{slug:'kisi',name:'Kişi Geyimləri',icon:'👔',items:['Polo köynək','Klassik şalvar','Sviter','Gödəkçə'],brands:['Koton','Defacto','Adidas'],base:75},
{slug:'ayaqqabi',name:'Ayaqqabı',icon:'👟',items:['Krossovka','Çəkmə','Sandal','Klassik ayaqqabı'],brands:['Nike','Puma','Skechers'],base:110},
{slug:'usaq',name:'Uşaq Dünyası',icon:'🧸',items:['Oyuncaq ayı','Konstruktor','Uşaq paltarı','Ana çantası'],brands:['Lego','Chicco','Baby Born'],base:45},
{slug:'elektronika',name:'Elektronika',icon:'📱',items:['Smartfon','Qulaqlıq','Noutbuk','Planşet'],brands:['Samsung','Apple','Xiaomi'],base:650},
{slug:'ev',name:'Ev & Yaşam',icon:'🏠',items:['Yastıq dəsti','Çay dəsti','Süfrə örtüyü','Dekor vaza'],brands:['Karaca','Madame Coco','English Home'],base:55},
{slug:'mebel',name:'Mebel',icon:'🛋️',items:['Divan','Kitab rəfi','Yemək masası','Kreslo'],brands:['Bellona','İstikbal','Weltew'],base:420},
{slug:'kosmetika',name:'Kosmetika & Parfümeriya',icon:'💄',items:['Ətir','Üz kremi','Dodaq boyası','Şampun'],brands:['Dior','L\'Oréal','Nivea'],base:60},
{slug:'idman',name:'İdman & Outdoor',icon:'🏋️',items:['Qantel dəsti','Yoga matı','Velosiped','Çadır'],brands:['Decathlon','Reebok','Under Armour'],base:90},
{slug:'zergerlik',name:'Zərgərlik & Saat',icon:'⌚',items:['Qol saatı','Gümüş boyunbağı','Qolbaq','Üzük'],brands:['Casio','Pandora','Fossil'],base:130},
{slug:'aksesuar',name:'Aksesuar',icon:'👜',items:['Çiyin çantası','Günəş eynəyi','Kəmər','Cüzdan'],brands:['Ray-Ban','Tommy','Michael Kors'],base:80},
{slug:'supermarket',name:'Supermarket',icon:'🛒',items:['Zeytun yağı','Qəhvə','Çay dəsti','Şokolad qutusu'],brands:['Nestlé','Lavazza','Ahmad Tea'],base:12}];
export const products:Product[]=categories.flatMap((c,ci)=>c.brands.flatMap((b,bi)=>c.items.map((it,ii)=>{
 const id=ci*12+bi*4+ii+1; const price=Math.round(c.base*(0.5+((id*37)%100)/60)*100)/100; const disc=[0,15,20,28,32][id%5];
 return {id,name:`${b} ${it}`,brand:b,cat:c.slug,catName:c.name,price,old:disc?Math.round(price/(1-disc/100)*100)/100:price,disc,
  rating:Math.round((3.8+((id*13)%12)/10)*10)/10,reviews:20+((id*53)%480),
  desc:`${b} brendinin ${it.toLowerCase()} modeli. Yüksək keyfiyyət, rahat istifadə və sürətli çatdırılma. Bakı daxili 1-2 gün, regionlara 2-4 iş günü.`};})));
export const getProduct=(id:number)=>products.find(p=>p.id===id);
