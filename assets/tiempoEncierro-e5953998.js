import{u as k,g as c,r as h,o as y,f as g,j as m,_ as L,m as p,n as N,b as r,a as T,l as V}from"./index-01c65d82.js";import{_ as q}from"./CHeaderBar-27cb1ce3.js";import{_ as B}from"./CFilterbar-954b0fc0.js";import{_ as x}from"./CCard-c0ac7723.js";import{_ as M}from"./CColunmChart-b9d3e151.js";import"./CButton-d9f18b09.js";const O={class:"regimen-carcel"},X={class:"chart-section"},Y=r("span",{class:"card-title"},"P6 ¿Cuánto tiempo lleva en esta cárcel? ",-1),z=r("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),H=r("span",{class:"card-title"},"Pregunta",-1),W=r("span",{class:"question--value"},"FP 6 ¿Cuánto tiempo lleva en esta cárcel? ",-1),f=7,ee={__name:"tiempoEncierro",setup(j){const t=k(),n=c(!1),b=c("Trayectoria / ¿Cuánto tiempo lleva en esta cárcel?"),S=c({categories:["menos de 6 meses","entre 6 meses y 1 año","entre 1 y 2 años","más de 2 años","No asignado"],crosshair:!1}),A=c({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),w=c({column:{pointPadding:.2,borderWidth:3}}),I=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),C=e=>{let o=0,s=0,u=0,d=0,i=0;for(let a=0;a<e.length;a++)e[a].value===1&&o++,e[a].value===2&&s++,e[a].value===3&&u++,e[a].value===4&&d++,e[a].value===-1&&(i+=e[a].value*-1);return[o,s,u,d,i]},l=h([]),F=(e,o,s)=>h({id:e,name:o,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),P=async e=>{n.value=!0;const o=l.filter(s=>s.id!==e);l.splice(0,l.length),o.map(s=>l.push(s)),await t.sleep(50),n.value=!1},_=async(e,o,s)=>{var u,d;try{let i=((u=t==null?void 0:t.penitenciaria)==null?void 0:u.id)??null,a=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.description)??null,v=t.historyId;if(s&&(i=e,a=o),v&&i){n.value=!0;let D=await V({historyId:v,carcelId:i,categoryId:f,subCategoryId:23,embedDetail:!0,dimensionId:129});const E=C(D.items);l.push(F(i,a,E))}}catch(i){console.log(i)}finally{s||(n.value=!1)}},$=async()=>{n.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await _(e.id,e.description,!0))),n.value=!1};return(e,o)=>(y(),g(L,null,{default:m(()=>[p(q,{title:b.value,"section-value":f},null,8,["title"]),p(N,{"active-spin":n.value},null,8,["active-spin"]),p(B,{baseFilter:f,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:_,onExecuteRemove:P}),r("div",O,[r("div",X,[p(x,{class:"card-information"},{default:m(()=>[Y,z]),_:1}),n.value?T("",!0):(y(),g(M,{key:0,optionsAxisX:S.value,optionsAxisY:A.value,plotOptions:w.value,tooltip:I.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(x,{class:"card-preguntas"},{default:m(()=>[H,W]),_:1})])]),_:1}))}};export{ee as default};
