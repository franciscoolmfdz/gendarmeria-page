import{u as k,g as l,r as x,o as b,f as I,j as S,_ as N,m as r,n as V,b as c,a as B,k as L}from"./index-0a5b9537.js";import{_ as G}from"./CHeaderBar-eb61e211.js";import{_ as H}from"./CFilterbar-da100325.js";import{_ as O}from"./CCard-a029c455.js";import{_ as R}from"./CColunmChart-70b68ed0.js";import"./CButton-a7ca8310.js";const X={class:"regimen-carcel"},Y={class:"chart-section"},j=c("span",{class:"card-title"},"Proporción (%) Internos reincidentes IGI ",-1),q=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),f=4,Z={__name:"regimenProcesal",setup(z){const e=k(),o=l(!1),F=l("Elementos de reinserción / Internos reincidentes IGI"),w=l({categories:["Condenado","Imputado","Procesado","Condenado","Imputado","Procesado"],plotBands:[{color:"#E5F6F6",from:-.5,to:2.5,label:{text:"Hombre",align:"center",verticalAlign:"top",style:{color:"#666666"}}},{color:"#F3E2A9",from:2.5,to:5.5,label:{text:"Mujer",align:"center",verticalAlign:"top",style:{color:"#666666"}}}]}),A=l({min:0,allowDecimals:!1,title:{text:"Reincidencia IGI"}}),D=l({column:{pointPadding:.2,borderWidth:3}}),P=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),a=x([]),_=(t,n,s)=>x({id:t,name:n,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=async t=>{o.value=!0;const n=a.filter(s=>s.id!==t);a.splice(0,a.length),n.map(s=>a.push(s)),await e.sleep(50),o.value=!1},v=async(t,n,s)=>{var g,h;try{let i=((g=e==null?void 0:e.penitenciaria)==null?void 0:g.id)??null,d=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,y=e.historyId;if(s&&(i=t,d=n),y&&i){o.value=!0;let $=await L({historyId:y,carcelId:i,categoryId:f,subCategoryId:25});const p=[],u=[];$.map(m=>{m.valueUsed<7?p.push(m.pound):u.push(m.pound)}),console.log(p,u),a.push(_(i,d+" (Sí)",p)),a.push(_(i,d+" (No)",u))}}catch(i){console.log(i)}finally{s||(o.value=!1)}},E=async()=>{o.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await v(t.id,t.description,!0))),o.value=!1};return(t,n)=>(b(),I(N,null,{default:S(()=>[r(G,{title:F.value,"section-value":f},null,8,["title"]),r(V,{"active-spin":o.value},null,8,["active-spin"]),r(H,{baseFilter:f,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:v,onExecuteRemove:C}),c("div",X,[c("div",Y,[r(O,{class:"card-information"},{default:S(()=>[j,q]),_:1}),o.value?B("",!0):(b(),I(R,{key:0,optionsAxisX:w.value,optionsAxisY:A.value,plotOptions:D.value,tooltip:P.value,series:a},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{Z as default};
