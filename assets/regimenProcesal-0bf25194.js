import{u as H,g as o,r as x,o as S,f as w,j as L,_ as O,m as p,n as X,b as D,a as Y,l as m}from"./index-517d81b5.js";import{_ as j}from"./CHeaderBar-9e488358.js";import{_ as z}from"./CFilterbar-0ead3af2.js";import{_ as M}from"./subSideNav-e8b173ec.js";import{_ as W}from"./CColunmChart-7681df41.js";import"./CButton-9d782e0a.js";import"./CChartDonutSection-682f2bb4.js";const q={class:"regimen-procesal-carcel"},J={class:"chart-section"},f=4,oe={__name:"regimenProcesal",setup(K){const a=H(),n=o(!1),_=o("Elementos de reinserción / Internos con IGI"),v=o(null),r=o([]),u=o(null),F=o({categories:["Condenado"]}),C=o({min:0,allowDecimals:!1,title:{text:"Porcentaje de internos con IGI aplicado"}}),P=o({column:{pointPadding:.2,borderWidth:3}}),V=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=x([]),A=(e,i,t)=>x({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#fff",align:"right",x:40,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"},formatter:function(){return this.y.toString().replace(".",",")}}}),G=e=>e?Math.round(e*100)/100:0,T=async e=>{n.value=!0;const i=l.filter(t=>t.id!==e);r.value=r.value.filter(t=>t.carcelId!==e),y(),l.splice(0,l.length),i.map(t=>l.push(t)),await a.sleep(50),n.value=!1},y=()=>{let e=r.value.reduce((i,t,d)=>i+t.pointCarcel,0);e=e/r.value.length,e=G(e),v.value=e.toString()},g=async(e,i,t)=>{var d,h;try{let s=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.id)??null,I=((h=a==null?void 0:a.penitenciaria)==null?void 0:h.description)??null;if(t&&(s=e,I=i),u&&s){n.value=!0;const R={historyId:u.value,embed:"reinsercion",procesalTypeId:1,regimenStateId:2,carcelId:s},b=await m(R),k=b.items.length,E=b.items.filter(B=>B.igi).length;let c=parseFloat((E/k*100).toFixed(1))??0;c=isNaN(c)?0:c,r.value.push({carcelId:s,pointCarcel:c}),y(),l.push(A(s,I,[c]))}}catch(s){console.log(s)}finally{t||(n.value=!1)}},$=async()=>{const i=await m({categoryId:4,historySubCategoryId:25,lastPeriod:!0});u.value=i.id;const t={historyId:i.id,embed:"reinsercion",procesalTypeId:1,regimenStateId:2};await m(t)},N=async()=>{n.value=!0,await $(),a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),n.value=!1};return(e,i)=>(S(),w(O,{class:"container-regimen-procesal"},{default:L(()=>[p(j,{title:_.value,"section-value":f},null,8,["title"]),p(X,{"active-spin":n.value},null,8,["active-spin"]),p(z,{baseFilter:f,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:N,onExecuteAction:g,onExecuteRemove:T}),D("div",q,[p(M,{class:"subsection-regimen-procesal",title:_.value,"section-value":f,pointValue:v.value,"point-type":2,"point-is-percent":!0,pointTitle:"Internos con IGI",pointSubtitle:"Internos reincidentes en cada recinto"},null,8,["title","pointValue"]),D("div",J,[n.value?Y("",!0):(S(),w(W,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:C.value,plotOptions:P.value,tooltip:V.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{oe as default};
