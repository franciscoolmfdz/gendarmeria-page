import{u as A,g as r,r as g,o as b,f as x,j as p,_ as E,l as u,m as L,b as t,a as O,k as V}from"./index-1482005a.js";import{_ as B}from"./CHeaderBar-46b15ae3.js";import{_ as M}from"./CFilterbar-feb28bc4.js";import{_ as S}from"./CCard-582b8853.js";import{_ as N}from"./CColunmChart-56bb9457.js";import"./CSelect.vue_vue_type_style_index_0_lang-024aa3d7.js";import"./CSelect-d1359523.js";import"./carceles-dec193d8.js";const T={class:"regimen-carcel"},X={class:"chart-section"},Y=t("span",{class:"card-title"},"Frecuencia respuestas comunicación y relación con la jefatura",-1),z=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),H=t("span",{class:"card-title"},"Preguntas",-1),J=t("span",{class:"question--value"},"fp1 La comunicación entre el personal y los oficiales que dirigen esta cárcel es buena",-1),R=t("span",{class:"question--value"},"fp3 El ánimo (la moral) del personal es buena en esta cárcel",-1),U=t("span",{class:"question--value"},"fp4 Tengo una buena relación con los oficiales jefe (alcaide, jefe operativo, jefe internos, etc.) aquí",-1),W=t("span",{class:"question--value"},"fp5 Me siento respetado por los oficiales de esta prisión.",-1),d=2,le={__name:"relacionJefatura",setup(G){const e=A(),s=r(!1),q=r("Calidad de vida de los funcionarios / Comunicación y relación con la jefatura"),w=r({categories:["fp1","fp3","fp4","fp5"],crosshair:!1}),D=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),j=(a,l,o)=>g({id:a,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=async a=>{s.value=!0;const l=n.filter(o=>o.id!==a);n.splice(0,n.length),l.map(o=>n.push(o)),await e.sleep(50),s.value=!1},f=async(a,l,o)=>{var _,m;try{let c=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.id)??null,v=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,h=e.historyId;if(o&&(c=a,v=l),h&&c){s.value=!0;let $=await V({historyId:h,carcelId:c,categoryId:d,subCategoryId:9});const y=[];$.filter(i=>i.poundUsed===1).map(i=>{const k=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;y.push(k)}),n.push(j(c,v,y))}}catch(c){console.log(c)}finally{o||(s.value=!1)}},I=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async a=>await f(a.id,a.description,!0))),s.value=!1};return(a,l)=>(b(),x(E,null,{default:p(()=>[u(B,{title:q.value,"section-value":d},null,8,["title"]),u(L,{"active-spin":s.value},null,8,["active-spin"]),u(M,{baseFilter:d,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:f,onExecuteRemove:C}),t("div",T,[t("div",X,[u(S,{class:"card-information"},{default:p(()=>[Y,z]),_:1}),s.value?O("",!0):(b(),x(N,{key:0,optionsAxisX:w.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:P.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(S,{class:"card-preguntas"},{default:p(()=>[H,J,R,U,W]),_:1})])]),_:1}))}};export{le as default};
