import{u as C,i as r,r as h,o as g,f as y,g as m,_ as L,m as p,p as N,b as c,a as V,q as B}from"./index-70926910.js";import{_ as D}from"./CHeaderBar-a99216df.js";import{_ as O}from"./CFilterbar-589e7ba9.js";import{_ as b}from"./CCard-3d6808c8.js";import{_ as Q}from"./CColunmChart-eab0ad9e.js";import"./CButton-3d32abb2.js";const T={class:"regimen-carcel"},X={class:"chart-section"},Y=c("span",{class:"card-title"},"Suma de P7 ¿Qué año saldría en libertad (cumplido)?",-1),z=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),H=c("span",{class:"card-title"},"Pregunta",-1),W=c("span",{class:"question--value"},"FP 7 ¿Qué año saldría en libertad (cumplido)?",-1),f=7,ee={__name:"terminoEncierro",setup(J){const t=C(),n=r(!1),x=r("Trayectoria / ¿Qué año saldría en libertad (cumplido)?"),S=r({categories:["2022","2023","2024","2025 o después","No Asignado"],crosshair:!1}),w=r({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),A=r({column:{pointPadding:.2,borderWidth:3}}),F=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),I=e=>{let s=0,a=0,d=0,u=0,o=0;for(let i=0;i<e.length;i++)e[i].value===1&&s++,e[i].value===2&&a++,e[i].value===3&&d++,e[i].value===4&&u++,e[i].value===-1&&(o+=e[i].value*-1);return[s,a,d,u,o]},l=h([]),E=(e,s,a)=>h({id:e,name:s,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),P=async e=>{n.value=!0;const s=l.filter(a=>a.id!==e);l.splice(0,l.length),s.map(a=>l.push(a)),await t.sleep(50),n.value=!1},_=async(e,s,a)=>{var d,u;try{let o=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,i=((u=t==null?void 0:t.penitenciaria)==null?void 0:u.description)??null,v=t.historyId;if(a&&(o=e,i=s),v&&o){n.value=!0;let k=await B({historyId:v,carcelId:o,categoryId:f,subCategoryId:23,embedDetail:!0,dimensionId:130});const q=I(k.items);l.push(E(o,i,q))}}catch(o){console.log(o)}finally{a||(n.value=!1)}},$=async()=>{n.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await _(e.id,e.description,!0))),n.value=!1};return(e,s)=>(g(),y(L,null,{default:m(()=>[p(D,{title:x.value,"section-value":f},null,8,["title"]),p(N,{"active-spin":n.value},null,8,["active-spin"]),p(O,{baseFilter:f,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:_,onExecuteRemove:P}),c("div",T,[c("div",X,[p(b,{class:"card-information"},{default:m(()=>[Y,z]),_:1}),n.value?V("",!0):(g(),y(Q,{key:0,optionsAxisX:S.value,optionsAxisY:w.value,plotOptions:A.value,tooltip:F.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(b,{class:"card-preguntas"},{default:m(()=>[H,W]),_:1})])]),_:1}))}};export{ee as default};
