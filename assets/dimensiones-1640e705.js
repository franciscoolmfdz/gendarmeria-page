import{q as o}from"./index-cf584654.js";const n="/dmm/dimensions",g=async(e,i)=>{if(e!=null&&e.id){let l=`${n}/${e.id}`;return o(l,"GET",null,i)}let s=n,r=null;return e!=null&&e.categoryId&&(r?r=`${r}&categoryId=${e.categoryId}`:r=`categoryId=${e.categoryId}`),e!=null&&e.subCategoryId&&(r?r=`${r}&subCategoryId=${e.subCategoryId}`:r=`subCategoryId=${e.subCategoryId}`),r&&(s=`${s}?${r}`),o(s,"GET",null,i)},y={getDimensiones:g};export{y as d,g};
