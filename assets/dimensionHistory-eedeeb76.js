import{a as l}from"./api-5b4ce668.js";const c="/dmm/dimension-history",n="/dmm/dimension-histories",y="/dmm/dimension-result",$=async(e,i)=>{if(e!=null&&e.id){let s=`${c}/${e.id}`;return l(s,"GET",null,i)}return l(c,"GET",null,i)},I=async(e,i)=>{let s=y,r=null;return e!=null&&e.historyId&&(r?r=`${r}&historyId=${e.categoryId}`:r=`historyId=${e.categoryId}`),e!=null&&e.categoryId&&(r?r=`${r}&categoryId=${e.categoryId}`:r=`categoryId=${e.categoryId}`),e!=null&&e.subCategoryId&&(r?r=`${r}&subCategoryId=${e.subCategoryId}`:r=`subCategoryId=${e.subCategoryId}`),e!=null&&e.carcelId&&(r?r=`${r}&carcelId=${e.carcelId}`:r=`carcelId=${e.carcelId}`),r&&(s=`${s}?${r}`),l(s,"GET",null,i)},f=async(e,i)=>{if(e!=null&&e.id){let o=`${n}/${e.id}`;return l(o,"GET",null,i)}let s=n,r=null;if(e!=null&&e.lastPeriod&&(e!=null&&e.categoryId)){let o=`${n}?lastPeriod=true&categoryId=${e.categoryId}`;return l(o,"GET",null,i)}return e!=null&&e.year&&(r?r=`${r}&year=${e.year}`:r=`year=${e.year}`),e!=null&&e.month&&(r?r=`${r}&month=${e.month}`:r=`month=${e.month}`),e!=null&&e.historyId&&(r?r=`${r}&historyId=${e.historyId}`:r=`historyId=${e.historyId}`),e!=null&&e.categoryId&&(r?r=`${r}&categoryId=${e.categoryId}`:r=`categoryId=${e.categoryId}`),e!=null&&e.subCategoryId&&(r?r=`${r}&subCategoryId=${e.subCategoryId}`:r=`subCategoryId=${e.subCategoryId}`),e!=null&&e.carcelId&&(r?r=`${r}&carcelId=${e.carcelId}`:r=`carcelId=${e.carcelId}`),e!=null&&e.embedResult&&(r?r=`${r}&embedResult=${e.embedResult}`:r=`embedResult=${e.embedResult}`),e!=null&&e.embedDetail&&(r?r=`${r}&embedDetail=${e.embedDetail}`:r=`embedDetail=${e.embedDetail}`),r&&(s=`${s}?${r}`),l(s,"GET",null,i)},u=async(e,i)=>l(c,"POST",e,i),g={getDimensionHistory:$,postDimensionHistory:u,getHistoryResults:I};export{f as a,g as d,I as g};
