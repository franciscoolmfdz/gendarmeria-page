import{s}from"./index-4bbbeb8a.js";const g="/dmm/dimension-history-aggression",$=async(e,n)=>{if(e!=null&&e.id){let l=`${g}/${e.id}`;return s(l,"GET",null,n)}let i=g,r=null;return e!=null&&e.regionId&&(r?r=`${r}&regionId=${e.regionId}`:r=`regionId=${e.regionId}`),e!=null&&e.carcelId&&(r?r=`${r}&carcelId=${e.carcelId}`:r=`carcelId=${e.carcelId}`),e!=null&&e.aggresionTypeId&&(r?r=`${r}&aggresionTypeId=${e.aggresionTypeId}`:r=`aggresionTypeId=${e.aggresionTypeId}`),e!=null&&e.year&&(r?r=`${r}&year=${e.year}`:r=`year=${e.year}`),r&&(i=`${i}?${r}`),s(i,"GET",null,n)};export{$ as g};
