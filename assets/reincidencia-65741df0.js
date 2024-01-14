import{g as a,u as H,r as x,o as I,f as w,j as L,_ as O,m as p,n as X,b as P,a as Y,l as f}from"./index-ec431411.js";import{_ as z}from"./subSideNav-4a7c6e79.js";import{_ as G}from"./CHeaderBar-cdabaa72.js";import{_ as M}from"./CFilterbar-3e993dc4.js";import{_ as W}from"./CColunmChart-1f51a053.js";import"./CChartDonutSection-f8d9fc93.js";import"./CButton-c29d1a69.js";const q={class:"principal-section principal-section-reincidencia"},J={class:"chart-section"},m=4,oe={__name:"reincidencia",setup(K){const c=a([]),_=a(0),n=H(),o=a(!1),d=a(null),v=a("Elementos de reinserción / Porcentaje de reincidencia"),D=a({categories:["Sí","No"]}),F=a({min:0,allowDecimals:!1,title:{text:"Porcentaje de población reincidente"}}),R=a({column:{pointPadding:.2,borderWidth:3}}),V=a({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=x([]),T=(e,i,t)=>x({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#fff",align:"right",x:40,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"},formatter:function(){return this.y.toString().replace(".",",")}}}),C=e=>e?Math.round(e*100)/100:0,N=async e=>{o.value=!0;const i=r.filter(t=>t.id!==e);c.value=c.value.filter(t=>t.carcelId!==e),y(),r.splice(0,r.length),i.map(t=>r.push(t)),await n.sleep(50),o.value=!1},y=()=>{let e=c.value.reduce((i,t,u)=>i+t.pointCarcel,0);e=e/c.value.length,e=C(e),_.value=e.toString()},h=async(e,i,t)=>{var u,g;try{let s=((u=n==null?void 0:n.penitenciaria)==null?void 0:u.id)??null,b=((g=n==null?void 0:n.penitenciaria)==null?void 0:g.description)??null;if(t&&(s=e,b=i),d&&s){o.value=!0;const j={historyId:d.value,embed:"reinsercion",procesalTypeId:1,regimenStateId:2,carcelId:s},S=await f(j),Q=[],k=S.items.length,E=S.items.filter(B=>B.condenaPrevia).length;let l=parseFloat((E/k*100).toFixed(1))??0;l=isNaN(l)?0:l,c.value.push({carcelId:s,pointCarcel:l}),y(),r.push(T(s,b,[l]))}}catch(s){console.log(s)}finally{t||(o.value=!1)}},$=async()=>{const i=await f({categoryId:4,historySubCategoryId:25,lastPeriod:!0});d.value=i.id;const t={historyId:i.id,embed:"reinsercion",procesalTypeId:1,regimenStateId:2};await f(t)},A=async()=>{o.value=!0,await $(),n.carcelesSelected&&n.carcelesSelected.length>0&&await Promise.all(n.carcelesSelected.map(async e=>await h(e.id,e.description,!0))),o.value=!1};return(e,i)=>(I(),w(O,{class:"contenedor-reincidencia"},{default:L(()=>[p(G,{title:v.value,"section-value":m},null,8,["title"]),p(X,{"active-spin":o.value},null,8,["active-spin"]),p(M,{baseFilter:m,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:A,onExecuteAction:h,onExecuteRemove:N}),P("div",q,[p(z,{class:"subsection-funcionarios",title:v.value,"section-value":m,pointValue:_.value,pointTitle:"Porcentaje de reincidencia",pointSubtitle:"Proporción (%) Internos reincidentes en cada recinto","point-is-percent":!0,"point-type":2},null,8,["title","pointValue","pointSubtitle"]),P("div",J,[o.value?Y("",!0):(I(),w(W,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:F.value,plotOptions:R.value,tooltip:V.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{oe as default};
