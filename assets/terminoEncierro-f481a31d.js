import{u as z,g as r,r as C,o as I,f as V,j as $,_ as B,m as f,n as D,b as _,a as L,l as X}from"./index-54860183.js";import{_ as Y}from"./CHeaderBar-501feae6.js";import{_ as j}from"./CFilterbar-43c804dc.js";import{_ as H}from"./subSideNav-d9c416bd.js";import{a as W}from"./CChartDonutSection-db332b04.js";import{_ as q}from"./CColunmChart-4777448a.js";import"./CButton-b5f860aa.js";const J={class:"chart-section-principal termino-encierro-section"},R={class:"termino-encierro"},G={class:"chart-section"},K=_("span",{class:"card-title"},"Pregunta",-1),Q=_("span",{class:"question--value"},"7. Año de egreso",-1),y=7,ne={__name:"terminoEncierro",setup(U){const a=z(),n=r(!1),x=r("Antecedentes y trayectorias / Año de egreso"),F=r(""),u=r([]),A=r({categories:["2022","2023","2024","2025 o después","No Asignado"],crosshair:!1}),E=r({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),P=r({column:{pointPadding:.2,borderWidth:3}}),M=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),S=()=>{let e=u.value.reduce((i,t)=>i+t.pointCarcel,0);e=e/u.value.length,e=Math.round(d(e)),F.value=A.value.categories[e]},c=C([]),k=(e,i,t)=>C({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:15,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),d=e=>e?Math.round(e*100)/100:0,N=async e=>{n.value=!0;const i=c.filter(t=>t.id!==e);c.splice(0,c.length),u.value=u.value.filter(t=>t.carcelId!==e),S(),i.map(t=>c.push(t)),await a.sleep(50),n.value=!1},O=(e,i)=>{let t=0,p=0,m=0,s=0,v=0,o=0;for(let l=0;l<e.length;l++)e[l].value===1&&(t++,o++),e[l].value===2&&(p++,o++),e[l].value===3&&(m++,o++),e[l].value===4&&(s++,o++),e[l].value===-1&&(v+=e[l].value*-1);const h=[Math.round(d(t*100/o)),parseFloat(d(p*100/o).toFixed(1)),parseFloat(d(m*100/o).toFixed(1)),parseFloat(d(s*100/o).toFixed(1))],g=Math.max(...h),b=h.indexOf(g);return u.value.push({carcelId:i,pointCarcel:b}),S(),h},w=async(e,i,t)=>{var p,m;try{let s=((p=a==null?void 0:a.penitenciaria)==null?void 0:p.id)??null,v=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,o=a.historyId;if(t&&(s=e,v=i),o&&s){n.value=!0;let g=await X({historyId:o,carcelId:s,categoryId:y,subCategoryId:23,embedDetail:!0,dimensionId:130});const b=O(g.items,s);c.push(k(s,v,b))}}catch(s){console.log(s)}finally{t||(n.value=!1)}},T=async()=>{n.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await w(e.id,e.description,!0))),n.value=!1};return(e,i)=>(I(),V(B,null,{default:$(()=>[f(Y,{title:x.value,"section-value":y},null,8,["title"]),f(D,{"active-spin":n.value},null,8,["active-spin"]),f(j,{baseFilter:y,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:w,onExecuteRemove:N}),_("div",J,[f(H,{class:"subsection-trayectoria",title:x.value,"section-value":y,"point-label":F.value,"point-disabled":!0,pointTitle:"Año de egreso",pointSubtitle:"","point-type":2},null,8,["title","point-label"]),_("div",R,[_("div",G,[n.value?L("",!0):(I(),V(q,{key:0,chartType:"bar",optionsAxisX:A.value,optionsAxisY:E.value,plotOptions:P.value,tooltip:M.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),f(W,{class:"card-preguntas"},{default:$(()=>[K,Q]),_:1})])])]),_:1}))}};export{ne as default};
