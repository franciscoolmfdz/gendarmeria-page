import{_ as k}from"./CSpinner-417ca586.js";import{i as L,h as r,r as h,o as y,f as g,j as p,_ as N,g as m,b as c,a as T}from"./index-5fb026f8.js";import{_ as V}from"./CHeaderBar-c86c0776.js";import{_ as q}from"./CFilterbar-018d6d97.js";import{_ as x}from"./CCard-e566a356.js";import{_ as B}from"./CColunmChart-a0bb477d.js";import{a as M}from"./dimensionHistory-76a7be62.js";import"./exporting-cf925c54.js";import"./api-5b4ce668.js";const O={class:"regimen-carcel"},X={class:"chart-section"},Y=c("span",{class:"card-title"},"P6 ¿Cuánto tiempo lleva en esta cárcel? ",-1),z=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),H=c("span",{class:"card-title"},"Pregunta",-1),W=c("span",{class:"question--value"},"FP 6 ¿Cuánto tiempo lleva en esta cárcel? ",-1),f=7,ae={__name:"tiempoEncierro",setup(j){const t=L(),n=r(!1),b=r("Trayectoria / ¿Cuánto tiempo lleva en esta cárcel?"),S=r({categories:["menos de 6 meses","entre 6 meses y 1 año","entre 1 y 2 años","más de 2 años","No asignado"],crosshair:!1}),A=r({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),w=r({column:{pointPadding:.2,borderWidth:3}}),I=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),C=e=>{let o=0,s=0,u=0,d=0,i=0;for(let a=0;a<e.length;a++)e[a].value===1&&o++,e[a].value===2&&s++,e[a].value===3&&u++,e[a].value===4&&d++,e[a].value===-1&&(i+=e[a].value*-1);return[o,s,u,d,i]},l=h([]),F=(e,o,s)=>h({id:e,name:o,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),P=async e=>{n.value=!0;const o=l.filter(s=>s.id!==e);l.splice(0,l.length),o.map(s=>l.push(s)),await t.sleep(50),n.value=!1},_=async(e,o,s)=>{var u,d;try{let i=((u=t==null?void 0:t.penitenciaria)==null?void 0:u.id)??null,a=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.description)??null,v=t.historyId;if(s&&(i=e,a=o),v&&i){n.value=!0;let D=await M({historyId:v,carcelId:i,categoryId:f,subCategoryId:23,embedDetail:!0,dimensionId:129});const E=C(D.items);l.push(F(i,a,E))}}catch(i){console.log(i)}finally{s||(n.value=!1)}},$=async()=>{n.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await _(e.id,e.description,!0))),n.value=!1};return(e,o)=>(y(),g(N,null,{default:p(()=>[m(V,{title:b.value,"section-value":f},null,8,["title"]),m(k,{"active-spin":n.value},null,8,["active-spin"]),m(q,{baseFilter:f,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:_,onExecuteRemove:P}),c("div",O,[c("div",X,[m(x,{class:"card-information"},{default:p(()=>[Y,z]),_:1}),n.value?T("",!0):(y(),g(B,{key:0,optionsAxisX:S.value,optionsAxisY:A.value,plotOptions:w.value,tooltip:I.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),m(x,{class:"card-preguntas"},{default:p(()=>[H,W]),_:1})])]),_:1}))}};export{ae as default};
