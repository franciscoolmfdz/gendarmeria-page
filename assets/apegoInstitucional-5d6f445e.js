import{i as O,h as r,r as y,o as x,f as b,j as d,_ as E,g as p,b as i,a as L,k as V}from"./index-ea41498e.js";import{_ as B}from"./CSpinner-f0b0a17e.js";import{_ as M}from"./CHeaderBar-9e1a4280.js";import{_ as N}from"./CFilterbar-da4f705e.js";import{_ as S}from"./CCard-3b7f55b7.js";import{_ as X}from"./CColunmChart-51b138b0.js";import"./CSelect.vue_vue_type_style_index_0_lang-ea3e1c73.js";import"./CSelect-64d8cf1d.js";import"./carceles-4edea485.js";import"./exporting-a6d722f2.js";const Y={class:"regimen-carcel"},j={class:"chart-section"},z=i("span",{class:"card-title"},"Frecuencia de respuestas apego institucional",-1),H=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=i("span",{class:"card-title"},"Preguntas",-1),T=i("span",{class:"question--value"},"fp8 Me identifico con las metas y objetivos de la institución",-1),U=i("span",{class:"question--value"},"fp9 Siento compromiso con lo que pase en esta cárcel",-1),u=2,le={__name:"apegoInstitucional",setup(W){const e=O(),s=r(!1),w=r("Calidad de vida de los funcionarios / Apego institucional"),I=r({categories:["fp8","fp9"],crosshair:!1}),D=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),A=(t,l,a)=>y({id:t,name:l,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async t=>{s.value=!0;const l=n.filter(a=>a.id!==t);n.splice(0,n.length),l.map(a=>n.push(a)),await e.sleep(50),s.value=!1},f=async(t,l,a)=>{var m,_;try{let c=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(a&&(c=t,v=l),h&&c){s.value=!0;let q=await V({historyId:h,carcelId:c,categoryId:u,subCategoryId:11});const g=[];q.filter(o=>o.poundUsed===1).map(o=>{const C=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;g.push(C)}),n.push(A(c,v,g))}}catch(c){console.log(c)}finally{a||(s.value=!1)}},k=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await f(t.id,t.description,!0))),s.value=!1};return(t,l)=>(x(),b(E,null,{default:d(()=>[p(M,{title:w.value,"section-value":u},null,8,["title"]),p(B,{"active-spin":s.value},null,8,["active-spin"]),p(N,{baseFilter:u,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:f,onExecuteRemove:$}),i("div",Y,[i("div",j,[p(S,{class:"card-information"},{default:d(()=>[z,H]),_:1}),s.value?L("",!0):(x(),b(X,{key:0,optionsAxisX:I.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:P.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(S,{class:"card-preguntas"},{default:d(()=>[R,T,U]),_:1})])]),_:1}))}};export{le as default};
