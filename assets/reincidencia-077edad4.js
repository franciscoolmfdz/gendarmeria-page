import{_ as k}from"./CSpinner-b8c03685.js";import{r as l,d as y,o as h,e as g,w as x,_ as B,b as r,a as c,f as C}from"./index-a88dcf22.js";import{_ as L}from"./CHeaderBar-b95baead.js";import{u as P,_ as V,a as H}from"./CCard-0817b9ef.js";import{_ as O}from"./CColunmChart-c2988874.js";import{g as T}from"./dimensionHistory-b6bfb333.js";import"./exporting-401e8bba.js";import"./api-7944baea.js";const X={class:"regimen-carcel"},Y={class:"chart-section"},q=c("span",{class:"card-title"},"Proporción (%) Internos reincidentes en cada recinto ",-1),z=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),d=3,ee={__name:"reincidencia",setup(M){const e=P(),a=l(!1),b=l("Estado de la situación carcelaria / Internos reincidentes en cada recinto"),S=l({categories:["Sí","No","Sí","No"],plotBands:[{color:"#E5F6F6",from:-.5,to:1.5,label:{text:"Hombre",align:"center",verticalAlign:"top",style:{color:"#666666"}}},{color:"#F3E2A9",from:1.5,to:3.5,label:{text:"Mujer",align:"center",verticalAlign:"top",style:{color:"#666666"}}}]}),w=l({min:0,allowDecimals:!1,title:{text:"Total por sexo y condena previa"}}),F=l({column:{pointPadding:.2,borderWidth:3}}),A=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),i=y([]),D=(t,s,o)=>y({id:t,name:s,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async t=>{a.value=!0;const s=i.filter(o=>o.id!==t);i.splice(0,i.length),s.map(o=>i.push(o)),await e.sleep(50),a.value=!1},p=async(t,s,o)=>{var u,m;try{let n=((u=e==null?void 0:e.penitenciaria)==null?void 0:u.id)??null,f=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,_=e.historyId;if(o&&(n=t,f=s),_&&n){a.value=!0;let $=await T({historyId:_,carcelId:n,categoryId:d,subCategoryId:24});const v=[];$.map(N=>{v.push(N.pound)}),i.push(D(n,f,v))}}catch(n){console.log(n)}finally{o||(a.value=!1)}},E=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await p(t.id,t.description,!0))),a.value=!1};return(t,s)=>(h(),g(B,null,{default:x(()=>[r(L,{title:b.value,"section-value":d},null,8,["title"]),r(k,{"active-spin":a.value},null,8,["active-spin"]),r(V,{baseFilter:d,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:p,onExecuteRemove:I}),c("div",X,[c("div",Y,[r(H,{class:"card-information"},{default:x(()=>[q,z]),_:1}),a.value?C("",!0):(h(),g(O,{key:0,optionsAxisX:S.value,optionsAxisY:w.value,plotOptions:F.value,tooltip:A.value,series:i},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{ee as default};
