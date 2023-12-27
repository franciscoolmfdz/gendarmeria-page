import{g as o,u as B,r as I,o as S,f as F,j as G,_ as L,m as u,n as O,b as w,a as X,k as Y}from"./index-f528de0d.js";import{_ as j}from"./subSideNav-7c587a52.js";import{_ as z}from"./CHeaderBar-27c2be18.js";import{_ as H}from"./CFilterbar-833c2caf.js";import{_ as M}from"./CColunmChart-e8fc032a.js";import"./CChartDonutSection-7774fca5.js";import"./CButton-eccee199.js";const W={class:"principal-section principal-section-reincidencia"},q={class:"chart-section"},d=4,ae={__name:"reincidencia",setup(J){const p=o([]),_=o(0),i=B(),n=o(!1),v=o("Elementos de reinserción / Internos reincidentes en cada recinto"),D=o({categories:["Sí","No"]}),V=o({min:0,allowDecimals:!1,title:{text:"Porcentaje de población reinserción IGI"}}),C=o({column:{pointPadding:.2,borderWidth:3}}),N=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=I([]),P=(e,a,t)=>I({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#fff",align:"right",y:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=e=>e?Math.round(e*100)/100:0,k=async e=>{n.value=!0;const a=l.filter(t=>t.id!==e);p.value=p.value.filter(t=>t.carcelId!==e),y(),l.splice(0,l.length),a.map(t=>l.push(t)),await i.sleep(50),n.value=!1},y=()=>{let e=p.value.reduce((a,t,f)=>a+t.pointCarcel,0);e=e/p.value.length,e=$(e),_.value=e.toString()},h=async(e,a,t)=>{var f,b;try{let s=((f=i==null?void 0:i.penitenciaria)==null?void 0:f.id)??null,g=((b=i==null?void 0:i.penitenciaria)==null?void 0:b.description)??null,x=i.historyId;if(t&&(s=e,g=a),x&&s){n.value=!0;let R=await Y({historyId:x,carcelId:s,categoryId:d,subCategoryId:24});const c=[];R.map(m=>{c.push(m.pound)});let r=[c[0]+c[2]];const T=c.reduce((m,E)=>m+E,0);r=parseFloat(((c[0]+c[2])/T*100).toFixed(1))??0,r=isNaN(r)?0:r,p.value.push({carcelId:s,pointCarcel:r}),y(),l.push(P(s,g,[r]))}}catch(s){console.log(s)}finally{t||(n.value=!1)}},A=async()=>{n.value=!0,i.carcelesSelected&&i.carcelesSelected.length>0&&await Promise.all(i.carcelesSelected.map(async e=>await h(e.id,e.description,!0))),n.value=!1};return(e,a)=>(S(),F(L,{class:"contenedor-reincidencia"},{default:G(()=>[u(z,{title:v.value,"section-value":d},null,8,["title"]),u(O,{"active-spin":n.value},null,8,["active-spin"]),u(H,{baseFilter:d,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:A,onExecuteAction:h,onExecuteRemove:k}),w("div",W,[u(j,{class:"subsection-funcionarios",title:v.value,"section-value":d,pointValue:_.value,pointTitle:"Internos reincidentes en cada recinto",pointSubtitle:"Proporción (%) Internos reincidentes en cada recinto","point-is-percent":!0,"point-type":2},null,8,["title","pointValue","pointSubtitle"]),w("div",q,[n.value?X("",!0):(S(),F(M,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:V.value,plotOptions:C.value,tooltip:N.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{ae as default};
