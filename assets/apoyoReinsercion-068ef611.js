import{r as c,d as g,o as b,e as x,w as u,_ as O,b as p,a as t,f as k}from"./index-c0caa7b8.js";import{_ as E}from"./CHeaderBar-e2a8dc15.js";import{_ as R}from"./CSpinner-1729ec54.js";import{_ as V}from"./CFilterbar-3f8c837b.js";import{u as B,_ as S}from"./CCard-d62b6639.js";import{_ as M}from"./CColunmChart-7e78f7e0.js";import{g as N}from"./dimensionHistory-b6bfb333.js";import"./exporting-2605b647.js";import"./api-7944baea.js";const T={class:"regimen-carcel"},X={class:"chart-section"},Y=t("span",{class:"card-title"},"Frecuencia respuestas Apoyo a la reinserción",-1),z=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),H=t("span",{class:"card-title"},"Preguntas",-1),U=t("span",{class:"question--value"},"fp30 Siento que mi trabajo contribuye a la reinserción",-1),W=t("span",{class:"question--value"},"fp33 Me siento respetado por los internos/as de esta cárcel",-1),j=t("span",{class:"question--value"},"fp34 Tengo una buena relación con los internos/as en esta prisión",-1),G=t("span",{class:"question--value"},"fp35 Los internos acuden a mí con sus problemas porque saben que los trataré de ayudar",-1),d=2,re={__name:"apoyoReinsercion",setup(J){const e=B(),a=c(!1),q=c("Calidad de vida de los funcionarios / Apoyo a la reinserción"),w=c({categories:["fp30","fp33","fp34","fp35"],crosshair:!1}),A=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),D=c({column:{pointPadding:.2,borderWidth:3}}),F=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),P=(s,l,o)=>g({id:s,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async s=>{a.value=!0;const l=n.filter(o=>o.id!==s);n.splice(0,n.length),l.map(o=>n.push(o)),await e.sleep(50),a.value=!1},f=async(s,l,o)=>{var _,m;try{let r=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.id)??null,v=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,h=e.historyId;if(o&&(r=s,v=l),h&&r){a.value=!0;let C=await N({historyId:h,carcelId:r,categoryId:d,subCategoryId:17});const y=[];C.filter(i=>i.poundUsed===1).map(i=>{const L=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;y.push(L)}),n.push(P(r,v,y))}}catch(r){console.log(r)}finally{o||(a.value=!1)}},$=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async s=>await f(s.id,s.description,!0))),a.value=!1};return(s,l)=>(b(),x(O,null,{default:u(()=>[p(E,{title:q.value,"section-value":d},null,8,["title"]),p(R,{"active-spin":a.value},null,8,["active-spin"]),p(V,{baseFilter:d,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:f,onExecuteRemove:I}),t("div",T,[t("div",X,[p(S,{class:"card-information"},{default:u(()=>[Y,z]),_:1}),a.value?k("",!0):(b(),x(M,{key:0,optionsAxisX:w.value,optionsAxisY:A.value,plotOptions:D.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(S,{class:"card-preguntas"},{default:u(()=>[H,U,W,j,G]),_:1})])]),_:1}))}};export{re as default};