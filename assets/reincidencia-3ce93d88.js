import{u as N,g as l,r as y,o as h,f as g,j as x,_ as B,m as r,n as C,b as c,a as L,k as P}from"./index-cf584654.js";import{_ as V}from"./CHeaderBar-ad209272.js";import{_ as H}from"./CFilterbar-939a6c0f.js";import{_ as O}from"./CCard-bf1f3c07.js";import{_ as T}from"./CColunmChart-361e6179.js";import"./CButton-014b4ef1.js";const X={class:"regimen-carcel"},Y={class:"chart-section"},j=c("span",{class:"card-title"},"Proporción (%) Internos reincidentes en cada recinto ",-1),q=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),d=4,Q={__name:"reincidencia",setup(z){const e=N(),i=l(!1),b=l("Elementos de reinserción / Internos reincidentes en cada recinto"),S=l({categories:["Sí","No","Sí","No"],plotBands:[{color:"#E5F6F6",from:-.5,to:1.5,label:{text:"Hombre",align:"center",verticalAlign:"top",style:{color:"#666666"}}},{color:"#F3E2A9",from:1.5,to:3.5,label:{text:"Mujer",align:"center",verticalAlign:"top",style:{color:"#666666"}}}]}),F=l({min:0,allowDecimals:!1,title:{text:"Total reincidencia por recinto y sexo"}}),w=l({column:{pointPadding:.2,borderWidth:3}}),A=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),a=y([]),D=(t,s,o)=>y({id:t,name:s,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async t=>{i.value=!0;const s=a.filter(o=>o.id!==t);a.splice(0,a.length),s.map(o=>a.push(o)),await e.sleep(50),i.value=!1},p=async(t,s,o)=>{var u,m;try{let n=((u=e==null?void 0:e.penitenciaria)==null?void 0:u.id)??null,f=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,_=e.historyId;if(o&&(n=t,f=s),_&&n){i.value=!0;let $=await P({historyId:_,carcelId:n,categoryId:d,subCategoryId:24});const v=[];$.map(k=>{v.push(k.pound)}),a.push(D(n,f,v))}}catch(n){console.log(n)}finally{o||(i.value=!1)}},E=async()=>{i.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await p(t.id,t.description,!0))),i.value=!1};return(t,s)=>(h(),g(B,null,{default:x(()=>[r(V,{title:b.value,"section-value":d},null,8,["title"]),r(C,{"active-spin":i.value},null,8,["active-spin"]),r(H,{baseFilter:d,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:p,onExecuteRemove:I}),c("div",X,[c("div",Y,[r(O,{class:"card-information"},{default:x(()=>[j,q]),_:1}),i.value?L("",!0):(h(),g(T,{key:0,optionsAxisX:S.value,optionsAxisY:F.value,plotOptions:w.value,tooltip:A.value,series:a},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{Q as default};
