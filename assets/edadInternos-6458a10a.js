import{_ as N}from"./CSpinner-519cb96b.js";import{r,d as y,o as g,e as x,w as d,_ as V,b as _,a as c,f as q}from"./index-9257cc1f.js";import{_ as B}from"./CHeaderBar-f6f0f2a1.js";import{_ as M}from"./CFilterbar-6444100a.js";import{u as O,_ as b}from"./CCard-041fdd75.js";import{_ as T}from"./CColunmChart-af1d7c4c.js";import{a as X}from"./dimensionHistory-b6bfb333.js";import"./exporting-f5cca3bb.js";import"./api-7944baea.js";const Y={class:"regimen-carcel"},z={class:"chart-section"},H=c("span",{class:"card-title"},"Suma de p1 ¿Cuántos años tiene actualmente?",-1),W=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=c("span",{class:"card-title"},"Pregunta",-1),U=c("span",{class:"question--value"},"FP 1 ¿Cuántos años tiene actualmente?",-1),v=7,se={__name:"edadInternos",setup(j){const a=O(),n=r(!1),S=r("Trayectoria / ¿Cuántos años tiene actualmente?"),w=r({categories:["Menor a 20 años","Entre 20 a 30 años","Entre 30 a 40 años","Entre 40 a 50 años","Entre 50 a 60 años","Mayor a 60 años","No Asignado"],crosshair:!1}),D=r({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),I=r({column:{pointPadding:.2,borderWidth:3}}),A=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),C=e=>{let o=0,s=0,u=0,m=0,i=0,p=0,f=0;for(let t=0;t<e.length;t++)e[t].value<20&&o++,e[t].value>=20&&e[t].value<30&&s++,e[t].value>=30&&e[t].value<40&&u++,e[t].value>=40&&e[t].value<50&&m++,e[t].value>=50&&e[t].value<=60&&i++,e[t].value>60&&p++,e[t].value===-1&&(f+=e[t].value*-1);return[o,s,u,m,i,p,f]},l=y([]),F=(e,o,s)=>y({id:e,name:o,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),P=async e=>{n.value=!0;const o=l.filter(s=>s.id!==e);l.splice(0,l.length),o.map(s=>l.push(s)),await a.sleep(50),n.value=!1},h=async(e,o,s)=>{var u,m;try{let i=((u=a==null?void 0:a.penitenciaria)==null?void 0:u.id)??null,p=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,f=a.historyId;if(s&&(i=e,p=o),f&&i){n.value=!0;let k=await X({historyId:f,carcelId:i,categoryId:v,subCategoryId:23,embedDetail:!0,dimensionId:124});const L=C(k.items);l.push(F(i,p,L))}}catch(i){console.log(i)}finally{s||(n.value=!1)}},$=async()=>{n.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await h(e.id,e.description,!0))),n.value=!1};return(e,o)=>(g(),x(V,null,{default:d(()=>[_(B,{title:S.value,"section-value":v},null,8,["title"]),_(N,{"active-spin":n.value},null,8,["active-spin"]),_(M,{baseFilter:v,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:h,onExecuteRemove:P}),c("div",Y,[c("div",z,[_(b,{class:"card-information"},{default:d(()=>[H,W]),_:1}),n.value?q("",!0):(g(),x(T,{key:0,optionsAxisX:w.value,optionsAxisY:D.value,plotOptions:I.value,tooltip:A.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),_(b,{class:"card-preguntas"},{default:d(()=>[R,U]),_:1})])]),_:1}))}};export{se as default};
