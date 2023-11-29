import{u as k,g as l,r as y,o as h,f as b,j as C,_ as N,m as c,n as T,b as g,a as B,k as E}from"./index-caf32ba9.js";import{_ as P}from"./subSideNav-a58b3954.js";import{_ as H}from"./CHeaderBar-d352756e.js";import{_ as L}from"./CFilterbar-d3f0f06a.js";import"./CChartDonutSection-6897dea7.js";import{_ as O}from"./CColunmChart-9c336413.js";import"./CButton-98714c16.js";const X={class:"principal-section principal-section-reincidencia"},Y={class:"chart-section"},r=4,Q={__name:"reincidencia",setup(j){const e=k(),i=l(!1),p=l("Elementos de reinserción / Internos reincidentes en cada recinto"),x=l({categories:["Sí","No","Sí","No"],plotBands:[{color:"#e3e3e386",from:-.5,to:1.5,label:{text:"Hombre",align:"center",verticalAlign:"top",style:{color:"#666666"}}},{color:"#cbf3cf",from:1.5,to:3.5,label:{text:"Mujer",align:"center",verticalAlign:"top",style:{color:"#666666"}}}]}),S=l({min:0,allowDecimals:!1,title:{text:"Total reincidencia por recinto y sexo"}}),I=l({column:{pointPadding:.2,borderWidth:3}}),w=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),a=y([]),D=(t,n,o)=>y({id:t,name:n,data:o,dataLabels:{enabled:!0,color:"#fff",align:"right",y:-5,style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),A=async t=>{i.value=!0;const n=a.filter(o=>o.id!==t);a.splice(0,a.length),n.map(o=>a.push(o)),await e.sleep(50),i.value=!1},d=async(t,n,o)=>{var u,f;try{let s=((u=e==null?void 0:e.penitenciaria)==null?void 0:u.id)??null,m=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.description)??null,_=e.historyId;if(o&&(s=t,m=n),_&&s){i.value=!0;let V=await E({historyId:_,carcelId:s,categoryId:r,subCategoryId:24});const v=[];V.map($=>{v.push($.pound)}),a.push(D(s,m,v))}}catch(s){console.log(s)}finally{o||(i.value=!1)}},F=async()=>{i.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await d(t.id,t.description,!0))),i.value=!1};return(t,n)=>(h(),b(N,{class:"contenedor-reincidencia"},{default:C(()=>[c(H,{title:p.value,"section-value":r},null,8,["title"]),c(T,{"active-spin":i.value},null,8,["active-spin"]),c(L,{baseFilter:r,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:F,onExecuteAction:d,onExecuteRemove:A}),g("div",X,[c(P,{class:"subsection-funcionarios",title:p.value,"section-value":r,pointValue:t.pointCalculated,pointTitle:"Internos reincidentes en cada recinto",pointSubtitle:"Proporción (%) Internos reincidentes en cada recinto"},null,8,["title","pointValue","pointSubtitle"]),g("div",Y,[i.value?B("",!0):(h(),b(O,{key:0,chartType:"bar",optionsAxisX:x.value,optionsAxisY:S.value,plotOptions:I.value,tooltip:w.value,series:a},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{Q as default};
