import{s as h}from"./files-0fc7d111.js";const p=h(),y=(e,s,r)=>{if(!s)return null;if(r===1)switch(e){case 5:return 4;case 4:return 3;case 3:return 2;case 2:return 1;case 1:return 0}else{if(r===2)return e>=3?1:e>=0?0:e;if(r===3)return e>=3?0:e>=0?1:e}return e},C=e=>p.carcelesList.find(t=>{if(t.adicionalCode&&parseInt(t.adicionalCode)===parseInt(e)||parseInt(t.code)===parseInt(e))return t}),f=(e,s,r,t)=>{const a=C(r);return{value:s,recordId:t,pound:y(s,e.isScalar,e.scalarTypeId,e.id),dimensionId:e.id,isScalar:e.isScalar,subCategoryId:e.subCategoryId,categoryId:e.categoryId,regionId:a.regionId,carcelId:a.id,scalarTypeId:e==null?void 0:e.scalarTypeId}},O=(e,s,r,t=1)=>{const a=r.split("-");let l={period:r,hYear:a[0],hMonth:a[1],userId:t,categoryId:s,fileId:null,items:[]};for(let c=0;c<e.length;c++){const u=e[c].carcel??e[c].CODIGO_ESTABLECIMIENTO;let g=Object.keys(e[c]);const I=p.dimensionList;for(let d=0;d<I.length;d++){const n=I[d];if(g.some(o=>o===n.code)){const o=e[c][n.code],i=f(n,o,u,c+1);l.items.push(i)}else{const i=f(n,-1,u,c+1);l.items.push(i)}}}return l};export{O as d};
