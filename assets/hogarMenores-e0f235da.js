import{_ as H}from"./CSpinner-519cb96b.js";import{r,d as g,o as h,e as y,w as m,_ as N,b as u,a as c,f as k}from"./index-9257cc1f.js";import{_ as L}from"./CHeaderBar-f6f0f2a1.js";import{_ as q}from"./CFilterbar-6444100a.js";import{u as B,_ as x}from"./CCard-041fdd75.js";import{_ as E}from"./CColunmChart-af1d7c4c.js";import{a as M}from"./dimensionHistory-b6bfb333.js";import"./exporting-f5cca3bb.js";import"./api-7944baea.js";const O={class:"regimen-carcel"},T={class:"chart-section"},X=c("span",{class:"card-title"},"Suma de P2 ¿estuvo en algún Hogar de menores o del Sename? ",-1),Y=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),z=c("span",{class:"card-title"},"Pregunta",-1),R=c("span",{class:"question--value"},"FP 2 Cuando niño, ¿estuvo en algún Hogar de menores o del Sename? ",-1),p=7,oe={__name:"hogarMenores",setup(W){const t=B(),i=r(!1),S=r("Trayectoria /  ¿estuvo en algún Hogar de menores o del Sename?"),b=r({categories:["Sí","No","No Asignado"],crosshair:!1}),w=r({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),A=r({column:{pointPadding:.2,borderWidth:3}}),F=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),I=e=>{let o=0,a=0,d=0;for(let s=0;s<e.length;s++)e[s].value===0&&o++,e[s].value===1&&a++,e[s].value===-1&&(d+=e[s].value*-1);return[a,o,d]},n=g([]),P=(e,o,a)=>g({id:e,name:o,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),V=async e=>{i.value=!0;const o=n.filter(a=>a.id!==e);n.splice(0,n.length),o.map(a=>n.push(a)),await t.sleep(50),i.value=!1},f=async(e,o,a)=>{var d,s;try{let l=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,_=((s=t==null?void 0:t.penitenciaria)==null?void 0:s.description)??null,v=t.historyId;if(a&&(l=e,_=o),v&&l){i.value=!0;let C=await M({historyId:v,carcelId:l,categoryId:p,subCategoryId:23,embedDetail:!0,dimensionId:125});const D=I(C.items);n.push(P(l,_,D))}}catch(l){console.log(l)}finally{a||(i.value=!1)}},$=async()=>{i.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await f(e.id,e.description,!0))),i.value=!1};return(e,o)=>(h(),y(N,null,{default:m(()=>[u(L,{title:S.value,"section-value":p},null,8,["title"]),u(H,{"active-spin":i.value},null,8,["active-spin"]),u(q,{baseFilter:p,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:f,onExecuteRemove:V}),c("div",O,[c("div",T,[u(x,{class:"card-information"},{default:m(()=>[X,Y]),_:1}),i.value?k("",!0):(h(),y(E,{key:0,optionsAxisX:b.value,optionsAxisY:w.value,plotOptions:A.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(x,{class:"card-preguntas"},{default:m(()=>[z,R]),_:1})])]),_:1}))}};export{oe as default};
