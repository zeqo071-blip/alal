export const azn=(n:number)=>{const [i,d]=n.toFixed(2).split('.');return i.replace(/\B(?=(\d{3})+(?!\d))/g,' ')+','+d+' ₼';};
