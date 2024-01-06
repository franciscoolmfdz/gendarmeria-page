import{g as o,u as E,r as x,o as S,f as F,j as B,_ as L,m as u,n as O,b as w,a as X,k as Y}from"./index-361d98cb.js";import{_ as j}from"./subSideNav-228ff674.js";import{_ as z}from"./CHeaderBar-41292442.js";import{_ as H}from"./CFilterbar-c8860b50.js";import{_ as M}from"./CColunmChart-b80fd394.js";import"./CChartDonutSection-360ccab3.js";import"./CButton-ba3fd6fa.js";const W={class:"principal-section principal-section-reincidencia"},q={class:"chart-section"},d=4,ne={__name:"reincidencia",setup(J){const p=o([]),_=o(0),i=E(),a=o(!1),v=o("Elementos de reinserción / Reinserción IGI"),D=o({categories:["Sí","No"]}),V=o({min:0,allowDecimals:!1,title:{text:"Porcentaje de población reinserción IGI"}}),R=o({column:{pointPadding:.2,borderWidth:3}}),C=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=x([]),N=(e,n,t)=>x({id:e,name:n,data:t,dataLabels:{enabled:!0,color:"#fff",align:"right",x:40,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),P=e=>e?Math.round(e*100)/100:0,$=async e=>{a.value=!0;const n=l.filter(t=>t.id!==e);p.value=p.value.filter(t=>t.carcelId!==e),h(),l.splice(0,l.length),n.map(t=>l.push(t)),await i.sleep(50),a.value=!1},h=()=>{let e=p.value.reduce((n,t,f)=>n+t.pointCarcel,0);e=e/p.value.length,e=P(e),_.value=e.toString()},y=async(e,n,t)=>{var f,b;try{let s=((f=i==null?void 0:i.penitenciaria)==null?void 0:f.id)??null,g=((b=i==null?void 0:i.penitenciaria)==null?void 0:b.description)??null,I=i.historyId;if(t&&(s=e,g=n),I&&s){a.value=!0;let A=await Y({historyId:I,carcelId:s,categoryId:d,subCategoryId:24});const c=[];A.map(m=>{c.push(m.pound)});let r=[c[0]+c[2]];const G=c.reduce((m,T)=>m+T,0);r=parseFloat(((c[0]+c[2])/G*100).toFixed(1))??0,r=isNaN(r)?0:r,p.value.push({carcelId:s,pointCarcel:r}),h(),l.push(N(s,g,[r]))}}catch(s){console.log(s)}finally{t||(a.value=!1)}},k=async()=>{a.value=!0,i.carcelesSelected&&i.carcelesSelected.length>0&&await Promise.all(i.carcelesSelected.map(async e=>await y(e.id,e.description,!0))),a.value=!1};return(e,n)=>(S(),F(L,{class:"contenedor-reincidencia"},{default:B(()=>[u(z,{title:v.value,"section-value":d},null,8,["title"]),u(O,{"active-spin":a.value},null,8,["active-spin"]),u(H,{baseFilter:d,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:y,onExecuteRemove:$}),w("div",W,[u(j,{class:"subsection-funcionarios",title:v.value,"section-value":d,pointValue:_.value,pointTitle:"Reinserción IGI",pointSubtitle:"Proporción (%) Internos reincidentes en cada recinto","point-is-percent":!0,"point-type":2},null,8,["title","pointValue","pointSubtitle"]),w("div",q,[a.value?X("",!0):(S(),F(M,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:V.value,plotOptions:R.value,tooltip:C.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{ne as default};
