import{r as c,d as g,o as x,e as b,w as p,_ as A,b as d,a as t,f as C}from"./index-828d6b4e.js";import{_ as k}from"./CHeaderBar-9f7183cd.js";import{_ as L}from"./CSpinner-f8021ced.js";import{_ as V}from"./CFilterbar-eefdd7fd.js";import{u as B,_ as w}from"./CCard-ddf66874.js";import{_ as N}from"./CColunmChart-f7db4373.js";import{g as X}from"./dimensionHistory-b6bfb333.js";import"./exporting-50898081.js";import"./api-7944baea.js";const Y={class:"regimen-carcel"},H={class:"chart-section"},M=t("span",{class:"card-title"},"Frecuencia respuestas Organización y orden",-1),R=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),T=t("span",{class:"card-title"},"Preguntas",-1),U=t("span",{class:"question--value"},"fp20 Esta cárcel está bien organizada",-1),W=t("span",{class:"question--value"},"fp24 Esta prisión es mala en mantener orden y disciplina",-1),j=t("span",{class:"question--value"},"fp25 Esta prisión es demasiado cómoda para los presos",-1),G=t("span",{class:"question--value"},"fp26 El poder que tienen los internos/as aquí es muy alto",-1),u=2,re={__name:"organizacionOrden",setup(J){const e=B(),a=c(!1),O=c("Calidad de vida de los internos / Organización y orden"),S=c({categories:["fp20","fp24","fp25","fp26"],crosshair:!1}),q=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),E=c({column:{pointPadding:.2,borderWidth:3}}),z=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),D=(s,l,o)=>g({id:s,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async s=>{a.value=!0;const l=n.filter(o=>o.id!==s);n.splice(0,n.length),l.map(o=>n.push(o)),await e.sleep(50),a.value=!1},f=async(s,l,o)=>{var m,_;try{let r=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(o&&(r=s,v=l),h&&r){a.value=!0;let I=await X({historyId:h,carcelId:r,categoryId:u,subCategoryId:13});const y=[];I.filter(i=>i.poundUsed===1).map(i=>{const $=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;y.push($)}),n.push(D(r,v,y))}}catch(r){console.log(r)}finally{o||(a.value=!1)}},P=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async s=>await f(s.id,s.description,!0))),a.value=!1};return(s,l)=>(x(),b(A,null,{default:p(()=>[d(k,{title:O.value,"section-value":u},null,8,["title"]),d(L,{"active-spin":a.value},null,8,["active-spin"]),d(V,{baseFilter:u,multipleDisabled:!1,onExecuteMount:P,onExecuteAction:f,onExecuteRemove:F}),t("div",Y,[t("div",H,[d(w,{class:"card-information"},{default:p(()=>[M,R]),_:1}),a.value?C("",!0):(x(),b(N,{key:0,optionsAxisX:S.value,optionsAxisY:q.value,plotOptions:E.value,tooltip:z.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(w,{class:"card-preguntas"},{default:p(()=>[T,U,W,j,G]),_:1})])]),_:1}))}};export{re as default};
