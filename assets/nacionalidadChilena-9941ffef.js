import{u as $,g as c,r as h,o as g,f as y,j as p,_ as D,m as u,n as k,b as r,a as L,l as q}from"./index-4bd6d820.js";import{_ as B}from"./CHeaderBar-12e5ecf4.js";import{_ as O}from"./CFilterbar-704137cb.js";import{_ as x}from"./CCard-fa4c3a9e.js";import{_ as T}from"./CColunmChart-c205778e.js";import"./CButton-8cd8b6c3.js";const X={class:"regimen-carcel"},Y={class:"chart-section"},z=r("span",{class:"card-title"},"Suma de P4 ¿Es chileno?",-1),H=r("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),W=r("span",{class:"card-title"},"Pregunta",-1),j=r("span",{class:"question--value"},"FP 4 ¿Es chileno?",-1),m=7,ee={__name:"nacionalidadChilena",setup(M){const t=$(),o=c(!1),b=c("Trayectoria / ¿Es chileno?"),S=c({categories:["Sí","No","No Asignado"],crosshair:!1}),w=c({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),A=c({column:{pointPadding:.2,borderWidth:3}}),F=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),I=e=>{let s=0,a=0,d=0;for(let i=0;i<e.length;i++)e[i].value===0&&s++,e[i].value===1&&a++,e[i].value===-1&&(d+=e[i].value*-1);return[a,s,d]},n=h([]),C=(e,s,a)=>h({id:e,name:s,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),E=async e=>{o.value=!0;const s=n.filter(a=>a.id!==e);n.splice(0,n.length),s.map(a=>n.push(a)),await t.sleep(50),o.value=!1},f=async(e,s,a)=>{var d,i;try{let l=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,_=((i=t==null?void 0:t.penitenciaria)==null?void 0:i.description)??null,v=t.historyId;if(a&&(l=e,_=s),v&&l){o.value=!0;let P=await q({historyId:v,carcelId:l,categoryId:m,subCategoryId:23,embedDetail:!0,dimensionId:127});const V=I(P.items);n.push(C(l,_,V))}}catch(l){console.log(l)}finally{a||(o.value=!1)}},N=async()=>{o.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await f(e.id,e.description,!0))),o.value=!1};return(e,s)=>(g(),y(D,null,{default:p(()=>[u(B,{title:b.value,"section-value":m},null,8,["title"]),u(k,{"active-spin":o.value},null,8,["active-spin"]),u(O,{baseFilter:m,multipleDisabled:!1,onExecuteMount:N,onExecuteAction:f,onExecuteRemove:E}),r("div",X,[r("div",Y,[u(x,{class:"card-information"},{default:p(()=>[z,H]),_:1}),o.value?L("",!0):(g(),y(T,{key:0,optionsAxisX:S.value,optionsAxisY:w.value,plotOptions:A.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(x,{class:"card-preguntas"},{default:p(()=>[W,j]),_:1})])]),_:1}))}};export{ee as default};
