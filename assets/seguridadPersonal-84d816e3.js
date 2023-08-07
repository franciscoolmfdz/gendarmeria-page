import{r as c,d as y,o as b,e as x,w as u,_ as O,b as d,a as i,f as k}from"./index-9257cc1f.js";import{_ as L}from"./CHeaderBar-f6f0f2a1.js";import{_ as V}from"./CSpinner-519cb96b.js";import{_ as B}from"./CFilterbar-6444100a.js";import{u as M,_ as P}from"./CCard-041fdd75.js";import{_ as N}from"./CColunmChart-af1d7c4c.js";import{g as R}from"./dimensionHistory-b6bfb333.js";import"./exporting-f5cca3bb.js";import"./api-7944baea.js";const T={class:"regimen-carcel"},X={class:"chart-section"},Y=i("span",{class:"card-title"},"Promedio respuestas Regimen de la carcel",-1),j=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),z=i("span",{class:"card-title"},"Preguntas",-1),H=i("span",{class:"question--value"},"fp21 Temo por mi seguridad al trabajar aquí",-1),U=i("span",{class:"question--value"},"fp22 El ambiente en general de esta cárcel es tenso",-1),W=i("span",{class:"question--value"},"fp23 Me siento seguro al terminar mi turno de trabajo y salir de la cárcel (me siento seguro/a en la calle)",-1),p=2,le={__name:"seguridadPersonal",setup(G){const e=M(),a=c(!1),S=c("Calidad de vida de los funcionarios / Seguridad personal"),w=c({categories:["fp21","fp22","fp23"],crosshair:!1}),D=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),q=c({column:{pointPadding:.2,borderWidth:3}}),F=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),I=(t,l,s)=>y({id:t,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async t=>{a.value=!0;const l=n.filter(s=>s.id!==t);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),a.value=!1},f=async(t,l,s)=>{var m,_;try{let r=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,g=e.historyId;if(s&&(r=t,v=l),g&&r){a.value=!0;let C=await R({historyId:g,carcelId:r,categoryId:p,subCategoryId:15});const h=[];C.filter(o=>o.poundUsed===1).map(o=>{const E=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;h.push(E)}),n.push(I(r,v,h))}}catch(r){console.log(r)}finally{s||(a.value=!1)}},A=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await f(t.id,t.description,!0))),a.value=!1};return(t,l)=>(b(),x(O,null,{default:u(()=>[d(L,{title:S.value,"section-value":p},null,8,["title"]),d(V,{"active-spin":a.value},null,8,["active-spin"]),d(B,{baseFilter:p,multipleDisabled:!1,onExecuteMount:A,onExecuteAction:f,onExecuteRemove:$}),i("div",T,[i("div",X,[d(P,{class:"card-information"},{default:u(()=>[Y,j]),_:1}),a.value?k("",!0):(b(),x(N,{key:0,optionsAxisX:w.value,optionsAxisY:D.value,plotOptions:q.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(P,{class:"card-preguntas"},{default:u(()=>[z,H,U,W]),_:1})])]),_:1}))}};export{le as default};
