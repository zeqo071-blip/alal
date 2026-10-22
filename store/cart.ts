import { create } from 'zustand'; import { persist } from 'zustand/middleware';
type S={items:Record<number,number>;fav:number[];add:(id:number)=>void;setQty:(id:number,q:number)=>void;remove:(id:number)=>void;toggleFav:(id:number)=>void;clear:()=>void};
export const useStore=create<S>()(persist((set)=>({items:{},fav:[],
 add:id=>set(s=>({items:{...s.items,[id]:(s.items[id]||0)+1}})),
 setQty:(id,q)=>set(s=>{const i={...s.items};if(q<=0)delete i[id];else i[id]=q;return{items:i};}),
 remove:id=>set(s=>{const i={...s.items};delete i[id];return{items:i};}),
 toggleFav:id=>set(s=>({fav:s.fav.includes(id)?s.fav.filter(x=>x!==id):[...s.fav,id]})),clear:()=>set({items:{}})}),{name:'alal-store'}));
