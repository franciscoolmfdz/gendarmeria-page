import{s as o}from"./index-ee631519.js";const n="/dmm/dimensions",g=async(e,i)=>{if(e!=null&&e.id){let l=`${n}/${e.id}`;return o(l,"GET",null,i)}let r=n,s=null;return e!=null&&e.categoryId&&(s?s=`${s}&categoryId=${e.categoryId}`:s=`categoryId=${e.categoryId}`),e!=null&&e.subCategoryId&&(s?s=`${s}&subCategoryId=${e.subCategoryId}`:s=`subCategoryId=${e.subCategoryId}`),s&&(r=`${r}?${s}`),o(r,"GET",null,i)},y={getDimensiones:g};export{y as d,g};
