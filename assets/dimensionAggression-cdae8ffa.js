import{y as g}from"./index-f528de0d.js";const s="/dmm/dimension-history-aggression",$=async(e,n)=>{if(e!=null&&e.id){let l=`${s}/${e.id}`;return g(l,"GET",null,n)}let i=s,r=null;return e!=null&&e.regionId&&(r?r=`${r}&regionId=${e.regionId}`:r=`regionId=${e.regionId}`),e!=null&&e.carcelId&&(r?r=`${r}&carcelId=${e.carcelId}`:r=`carcelId=${e.carcelId}`),e!=null&&e.aggresionTypeId&&(r?r=`${r}&aggresionTypeId=${e.aggresionTypeId}`:r=`aggresionTypeId=${e.aggresionTypeId}`),e!=null&&e.year&&(r?r=`${r}&year=${e.year}`:r=`year=${e.year}`),r&&(i=`${i}?${r}`),g(i,"GET",null,n)};export{$ as g};