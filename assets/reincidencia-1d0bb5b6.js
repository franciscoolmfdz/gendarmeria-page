import{g as a,u as H,r as I,o as S,f as w,j as L,_ as O,m as p,n as X,b as P,a as Y,l as m}from"./index-f5fd31c3.js";import{_ as z}from"./subSideNav-e2f785c7.js";import{_ as G}from"./CHeaderBar-bab0926c.js";import{_ as M}from"./CFilterbar-db7aa8bb.js";import{_ as W}from"./CColunmChart-18bb4a0a.js";import"./CChartDonutSection-43d29e75.js";import"./CButton-3047008f.js";const q={class:"principal-section principal-section-reincidencia"},J={class:"chart-section"},f=4,oe={__name:"reincidencia",setup(K){const l=a([]),_=a(0),n=H(),o=a(!1),d=a(null),v=a("Elementos de reinserción / Porcentaje de reincidencia"),D=a({categories:["Sí","No"]}),F=a({min:0,allowDecimals:!1,title:{text:"Porcentaje de población reincidente"}}),R=a({column:{pointPadding:.2,borderWidth:3}}),V=a({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=I([]),T=(e,i,t)=>I({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#fff",align:"right",x:40,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=e=>e?Math.round(e*100)/100:0,N=async e=>{o.value=!0;const i=c.filter(t=>t.id!==e);l.value=l.value.filter(t=>t.carcelId!==e),y(),c.splice(0,c.length),i.map(t=>c.push(t)),await n.sleep(50),o.value=!1},y=()=>{let e=l.value.reduce((i,t,u)=>i+t.pointCarcel,0);e=e/l.value.length,e=C(e),_.value=e.toString()},h=async(e,i,t)=>{var u,g;try{let s=((u=n==null?void 0:n.penitenciaria)==null?void 0:u.id)??null,b=((g=n==null?void 0:n.penitenciaria)==null?void 0:g.description)??null;if(t&&(s=e,b=i),d&&s){o.value=!0;const j={historyId:d.value,embed:"reinsercion",procesalTypeId:1,regimenStateId:2,carcelId:s},x=await m(j),Q=[],k=x.items.length,E=x.items.filter(B=>B.condenaPrevia).length;let r=parseFloat((E/k*100).toFixed(1))??0;r=isNaN(r)?0:r,l.value.push({carcelId:s,pointCarcel:r}),y(),c.push(T(s,b,[r]))}}catch(s){console.log(s)}finally{t||(o.value=!1)}},$=async()=>{const i=await m({categoryId:4,historySubCategoryId:25,lastPeriod:!0});d.value=i.id;const t={historyId:i.id,embed:"reinsercion",procesalTypeId:1,regimenStateId:2};await m(t)},A=async()=>{o.value=!0,await $(),n.carcelesSelected&&n.carcelesSelected.length>0&&await Promise.all(n.carcelesSelected.map(async e=>await h(e.id,e.description,!0))),o.value=!1};return(e,i)=>(S(),w(O,{class:"contenedor-reincidencia"},{default:L(()=>[p(G,{title:v.value,"section-value":f},null,8,["title"]),p(X,{"active-spin":o.value},null,8,["active-spin"]),p(M,{baseFilter:f,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:A,onExecuteAction:h,onExecuteRemove:N}),P("div",q,[p(z,{class:"subsection-funcionarios",title:v.value,"section-value":f,pointValue:_.value,pointTitle:"Porcentaje de reincidencia",pointSubtitle:"Proporción (%) Internos reincidentes en cada recinto","point-is-percent":!0,"point-type":2},null,8,["title","pointValue","pointSubtitle"]),P("div",J,[o.value?Y("",!0):(S(),w(W,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:F.value,plotOptions:R.value,tooltip:V.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{oe as default};
