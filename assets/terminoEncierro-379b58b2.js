import{_ as L}from"./CSpinner-7e843c39.js";import{r,d as h,o as g,e as y,w as m,_ as N,b as p,a as c,f as V}from"./index-71af1fdf.js";import{_ as q}from"./CHeaderBar-12f01208.js";import{u as B,_ as D,a as b}from"./CCard-19362bef.js";import{_ as O}from"./CColunmChart-dad082e0.js";import{a as Q}from"./dimensionHistory-b6bfb333.js";import"./exporting-3103b939.js";import"./api-7944baea.js";const T={class:"regimen-carcel"},X={class:"chart-section"},Y=c("span",{class:"card-title"},"Suma de P7 ¿Qué año saldría en libertad (cumplido)?",-1),z=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),H=c("span",{class:"card-title"},"Pregunta",-1),W=c("span",{class:"question--value"},"FP 7 ¿Qué año saldría en libertad (cumplido)?",-1),f=7,ae={__name:"terminoEncierro",setup(J){const t=B(),n=r(!1),x=r("Trayectoria / ¿Qué año saldría en libertad (cumplido)?"),S=r({categories:["2022","2023","2024","2025 o después","No Asignado"],crosshair:!1}),w=r({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),A=r({column:{pointPadding:.2,borderWidth:3}}),F=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),I=e=>{let s=0,a=0,d=0,u=0,o=0;for(let i=0;i<e.length;i++)e[i].value===1&&s++,e[i].value===2&&a++,e[i].value===3&&d++,e[i].value===4&&u++,e[i].value===-1&&(o+=e[i].value*-1);return[s,a,d,u,o]},l=h([]),E=(e,s,a)=>h({id:e,name:s,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),P=async e=>{n.value=!0;const s=l.filter(a=>a.id!==e);l.splice(0,l.length),s.map(a=>l.push(a)),await t.sleep(50),n.value=!1},_=async(e,s,a)=>{var d,u;try{let o=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,i=((u=t==null?void 0:t.penitenciaria)==null?void 0:u.description)??null,v=t.historyId;if(a&&(o=e,i=s),v&&o){n.value=!0;let k=await Q({historyId:v,carcelId:o,categoryId:f,subCategoryId:23,embedDetail:!0,dimensionId:130});const C=I(k.items);l.push(E(o,i,C))}}catch(o){console.log(o)}finally{a||(n.value=!1)}},$=async()=>{n.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await _(e.id,e.description,!0))),n.value=!1};return(e,s)=>(g(),y(N,null,{default:m(()=>[p(q,{title:x.value,"section-value":f},null,8,["title"]),p(L,{"active-spin":n.value},null,8,["active-spin"]),p(D,{baseFilter:f,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:_,onExecuteRemove:P}),c("div",T,[c("div",X,[p(b,{class:"card-information"},{default:m(()=>[Y,z]),_:1}),n.value?V("",!0):(g(),y(O,{key:0,optionsAxisX:S.value,optionsAxisY:w.value,plotOptions:A.value,tooltip:F.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(b,{class:"card-preguntas"},{default:m(()=>[H,W]),_:1})])]),_:1}))}};export{ae as default};
