import{u as O,g as s,r as w,o as D,f as F,j as P,_ as z,m as p,n as L,b as r,a as X,k as Y}from"./index-dd4685c7.js";import{_ as q}from"./subSideNav-9a521af5.js";import{_ as H}from"./CHeaderBar-a2769ce8.js";import{_ as M}from"./CFilterbar-c4e63675.js";import{_ as R}from"./CCard-68034043.js";import{_ as W}from"./CColunmChart-5fcf1a79.js";import"./CChartDonutSection-658d1a8e.js";import"./CButton-4bbc2b87.js";const j={class:"chart-section-principal"},U={class:"conocimiento-notmativa"},G={class:"chart-section"},J=r("span",{class:"card-title"},"Preguntas",-1),K=r("span",{class:"question--value"},"fp40 Conozco la normativa penitenciaria atingente a mis funciones dentro del recinto",-1),Q=r("span",{class:"question--value"},"fp41 Entiendo / comprendo la normativa atingente a mis funciones ",-1),u=2,re={__name:"conocimientoNormativa",setup(Z){const e=O(),a=s(!1),d=s("Calidad de vida de los funcionarios / Conocimiento de la normativa penitenciaria"),f=s(""),m=s(0),V=s({categories:["fp40","fp41"],crosshair:!1}),$=s({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),A=s({column:{pointPadding:.2,borderWidth:3}}),I=s({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=w([]),k=(t,l,o)=>w({id:t,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),E=async t=>{a.value=!0;const l=n.filter(o=>o.id!==t);n.splice(0,n.length),l.map(o=>n.push(o)),await e.sleep(50),a.value=!1},_=async(t,l,o)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,y=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,g=e.historyId;if(o&&(c=t,y=l),g&&c){a.value=!0;let T=await Y({historyId:g,carcelId:c,categoryId:u,subCategoryId:19});const x=[];let b=0,S=T.filter(i=>i.poundUsed===1);S.map(i=>{const C=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;b+=C,x.push(C)}),m.value+=b/S.length;let B=roundValue(m.value/e.carcelesSelected.length);f.value=B.toString(),n.push(k(c,y,x))}}catch(c){console.log(c)}finally{o||(a.value=!1)}},N=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await _(t.id,t.description,!0))),a.value=!1};return(t,l)=>(D(),F(z,null,{default:P(()=>[p(H,{title:d.value,"section-value":u},null,8,["title"]),p(L,{"active-spin":a.value},null,8,["active-spin"]),p(M,{baseFilter:u,multipleDisabled:!1,onExecuteMount:N,onExecuteAction:_,onExecuteRemove:E}),r("div",j,[p(q,{class:"subsection-funcionarios",title:d.value,"section-value":u,pointValue:f.value,pointTitle:"Bormativa penitenciaria",pointSubtitle:"Frecuencia respuestas Conocimiento de la normativa penitenciaria"},null,8,["title","pointValue"]),r("div",U,[r("div",G,[a.value?X("",!0):(D(),F(W,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:$.value,plotOptions:A.value,tooltip:I.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(R,{class:"card-preguntas"},{default:P(()=>[J,K,Q]),_:1})])])]),_:1}))}};export{re as default};
