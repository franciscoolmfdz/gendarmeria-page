import{_ as k}from"./CSpinner-f396d0ca.js";import{i as C,h as r,r as h,o as g,f as y,j as p,_ as L,g as u,b as c,a as q}from"./index-56444a41.js";import{_ as B}from"./CHeaderBar-ce0ad327.js";import{_ as E}from"./CFilterbar-93b1efd1.js";import{_ as b}from"./CCard-394f244e.js";import{_ as O}from"./CColunmChart-728befc7.js";import{a as T}from"./dimensionHistory-893adf31.js";import"./exporting-18a7442d.js";import"./api-ec658a74.js";const X={class:"regimen-carcel"},Y={class:"chart-section"},z=c("span",{class:"card-title"},"Suma de P5 Antes de estar en esta cárcel, ¿había estado preso(a)? (como adulto) ",-1),H=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=c("span",{class:"card-title"},"Pregunta",-1),W=c("span",{class:"question--value"},"FP 5 Antes de estar en esta cárcel, ¿había estado preso(a)? ",-1),m=7,se={__name:"reinsidencia",setup(j){const t=C(),i=r(!1),x=r("Trayectoria /  Antes de estar en esta cárcel, ¿había estado preso(a)? (como adulto)"),S=r({categories:["Sí","No","No Asignado"],crosshair:!1}),A=r({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),w=r({column:{pointPadding:.2,borderWidth:3}}),F=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),I=e=>{let s=0,a=0,d=0;for(let o=0;o<e.length;o++)e[o].value===0&&s++,e[o].value===1&&a++,e[o].value===-1&&(d+=e[o].value*-1);return[a,s,d]},n=h([]),P=(e,s,a)=>h({id:e,name:s,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),V=async e=>{i.value=!0;const s=n.filter(a=>a.id!==e);n.splice(0,n.length),s.map(a=>n.push(a)),await t.sleep(50),i.value=!1},f=async(e,s,a)=>{var d,o;try{let l=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,_=((o=t==null?void 0:t.penitenciaria)==null?void 0:o.description)??null,v=t.historyId;if(a&&(l=e,_=s),v&&l){i.value=!0;let D=await T({historyId:v,carcelId:l,categoryId:m,subCategoryId:23,embedDetail:!0,dimensionId:128});const N=I(D.items);n.push(P(l,_,N))}}catch(l){console.log(l)}finally{a||(i.value=!1)}},$=async()=>{i.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await f(e.id,e.description,!0))),i.value=!1};return(e,s)=>(g(),y(L,null,{default:p(()=>[u(B,{title:x.value,"section-value":m},null,8,["title"]),u(k,{"active-spin":i.value},null,8,["active-spin"]),u(E,{baseFilter:m,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:f,onExecuteRemove:V}),c("div",X,[c("div",Y,[u(b,{class:"card-information"},{default:p(()=>[z,H]),_:1}),i.value?q("",!0):(g(),y(O,{key:0,optionsAxisX:S.value,optionsAxisY:A.value,plotOptions:w.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(b,{class:"card-preguntas"},{default:p(()=>[R,W]),_:1})])]),_:1}))}};export{se as default};
