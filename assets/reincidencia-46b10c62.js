import{_ as k}from"./CSpinner-bfff3c1b.js";import{i as B,h as l,r as y,o as h,f as g,j as x,_ as C,g as r,b as c,a as L}from"./index-81990198.js";import{_ as P}from"./CHeaderBar-c05e4acb.js";import{_ as V}from"./CFilterbar-cf066549.js";import{_ as H}from"./CCard-45074258.js";import{_ as O}from"./CColunmChart-e1a7329a.js";import{g as T}from"./dimensionHistory-2874fc68.js";import"./CSelect.vue_vue_type_style_index_0_lang-f7ab962f.js";import"./CSelect-97c825b8.js";import"./carceles-fea03c35.js";import"./api-ec658a74.js";import"./exporting-32b7d0aa.js";const X={class:"regimen-carcel"},Y={class:"chart-section"},j=c("span",{class:"card-title"},"Proporción (%) Internos reincidentes en cada recinto ",-1),q=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),p=4,ae={__name:"reincidencia",setup(z){const e=B(),i=l(!1),b=l("Elementos de reinserción / Internos reincidentes en cada recinto"),S=l({categories:["Sí","No","Sí","No"],plotBands:[{color:"#E5F6F6",from:-.5,to:1.5,label:{text:"Hombre",align:"center",verticalAlign:"top",style:{color:"#666666"}}},{color:"#F3E2A9",from:1.5,to:3.5,label:{text:"Mujer",align:"center",verticalAlign:"top",style:{color:"#666666"}}}]}),F=l({min:0,allowDecimals:!1,title:{text:"Total reincidencia por recinto y sexo"}}),w=l({column:{pointPadding:.2,borderWidth:3}}),A=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),a=y([]),D=(t,s,o)=>y({id:t,name:s,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async t=>{i.value=!0;const s=a.filter(o=>o.id!==t);a.splice(0,a.length),s.map(o=>a.push(o)),await e.sleep(50),i.value=!1},d=async(t,s,o)=>{var m,u;try{let n=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,f=((u=e==null?void 0:e.penitenciaria)==null?void 0:u.description)??null,_=e.historyId;if(o&&(n=t,f=s),_&&n){i.value=!0;let $=await T({historyId:_,carcelId:n,categoryId:p,subCategoryId:24});const v=[];$.map(N=>{v.push(N.pound)}),a.push(D(n,f,v))}}catch(n){console.log(n)}finally{o||(i.value=!1)}},E=async()=>{i.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await d(t.id,t.description,!0))),i.value=!1};return(t,s)=>(h(),g(C,null,{default:x(()=>[r(P,{title:b.value,"section-value":p},null,8,["title"]),r(k,{"active-spin":i.value},null,8,["active-spin"]),r(V,{baseFilter:p,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:d,onExecuteRemove:I}),c("div",X,[c("div",Y,[r(H,{class:"card-information"},{default:x(()=>[j,q]),_:1}),i.value?L("",!0):(h(),g(O,{key:0,optionsAxisX:S.value,optionsAxisY:F.value,plotOptions:w.value,tooltip:A.value,series:a},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{ae as default};
