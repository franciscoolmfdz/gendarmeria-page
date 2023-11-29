import{u as z,g as r,r as I,o as M,f as F,j as V,_ as B,m as f,n as D,b as _,a as L,l as X}from"./index-1bb1a5ad.js";import{_ as Y}from"./CHeaderBar-fc183519.js";import{_ as j}from"./CFilterbar-029eba30.js";import{_ as H}from"./subSideNav-3cd33cac.js";import{a as W}from"./CChartDonutSection-dd1d0cf9.js";import{_ as q}from"./CColunmChart-7b935ce4.js";import"./CButton-5c2fcc81.js";const J={class:"chart-section-principal termino-encierro-section"},Q={class:"termino-encierro"},R={class:"chart-section"},G=_("span",{class:"card-title"},"Pregunta",-1),K=_("span",{class:"question--value"},"7. ¿Qué año saldría en libertad (cumplido)?",-1),y=7,se={__name:"terminoEncierro",setup(U){const a=z(),s=r(!1),x=r("Antecedentes y trayectorias / Año para salir en libertad"),A=r(""),u=r([]),S=r({categories:["2022","2023","2024","2025 o después","No Asignado"],crosshair:!1}),$=r({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),E=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),w=()=>{let e=u.value.reduce((i,t)=>i+t.pointCarcel,0);e=e/u.value.length,e=Math.round(d(e)),A.value=S.value.categories[e]},c=I([]),k=(e,i,t)=>I({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),d=e=>e?Math.round(e*100)/100:0,N=async e=>{s.value=!0;const i=c.filter(t=>t.id!==e);c.splice(0,c.length),u.value=u.value.filter(t=>t.carcelId!==e),w(),i.map(t=>c.push(t)),await a.sleep(50),s.value=!1},O=(e,i)=>{let t=0,p=0,m=0,n=0,v=0,o=0;for(let l=0;l<e.length;l++)e[l].value===1&&(t++,o++),e[l].value===2&&(p++,o++),e[l].value===3&&(m++,o++),e[l].value===4&&(n++,o++),e[l].value===-1&&(v+=e[l].value*-1);const h=[Math.round(d(t*100/o)),Math.round(d(p*100/o)),Math.round(d(m*100/o)),Math.round(d(n*100/o))],b=Math.max(...h),g=h.indexOf(b);return u.value.push({carcelId:i,pointCarcel:g}),w(),h},C=async(e,i,t)=>{var p,m;try{let n=((p=a==null?void 0:a.penitenciaria)==null?void 0:p.id)??null,v=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,o=a.historyId;if(t&&(n=e,v=i),o&&n){s.value=!0;let b=await X({historyId:o,carcelId:n,categoryId:y,subCategoryId:23,embedDetail:!0,dimensionId:130});const g=O(b.items,n);c.push(k(n,v,g))}}catch(n){console.log(n)}finally{t||(s.value=!1)}},T=async()=>{s.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await C(e.id,e.description,!0))),s.value=!1};return(e,i)=>(M(),F(B,null,{default:V(()=>[f(Y,{title:x.value,"section-value":y},null,8,["title"]),f(D,{"active-spin":s.value},null,8,["active-spin"]),f(j,{baseFilter:y,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:C,onExecuteRemove:N}),_("div",J,[f(H,{class:"subsection-trayectoria",title:x.value,"section-value":y,"point-label":A.value,"point-disabled":!0,pointTitle:"Año para salir en libertad",pointSubtitle:"","point-type":2},null,8,["title","point-label"]),_("div",Q,[_("div",R,[s.value?L("",!0):(M(),F(q,{key:0,chartType:"bar",optionsAxisX:S.value,optionsAxisY:$.value,plotOptions:E.value,tooltip:P.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),f(W,{class:"card-preguntas"},{default:V(()=>[G,K]),_:1})])])]),_:1}))}};export{se as default};