import{r,d as g,o as b,e as x,w as p,_ as E,b as u,a as t,f as L}from"./index-42b1f99d.js";import{_ as O}from"./CHeaderBar-4c7da320.js";import{_ as k}from"./CSpinner-da91c443.js";import{u as V,_ as B,a as w}from"./CCard-6884ce7f.js";import{_ as M}from"./CColunmChart-bae8c89b.js";import{g as N}from"./dimensionHistory-b6bfb333.js";import"./exporting-4bd766b0.js";import"./api-7944baea.js";const T={class:"regimen-carcel"},X={class:"chart-section"},Y=t("span",{class:"card-title"},"Frecuencia respuestas comunicación y relación con la jefatura",-1),z=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),H=t("span",{class:"card-title"},"Preguntas",-1),J=t("span",{class:"question--value"},"fp1 La comunicación entre el personal y los oficiales que dirigen esta cárcel es buena",-1),R=t("span",{class:"question--value"},"fp3 El ánimo (la moral) del personal es buena en esta cárcel",-1),U=t("span",{class:"question--value"},"fp4 Tengo una buena relación con los oficiales jefe (alcaide, jefe operativo, jefe internos, etc.) aquí",-1),W=t("span",{class:"question--value"},"fp5 Me siento respetado por los oficiales de esta prisión.",-1),d=2,le={__name:"relacionJefatura",setup(G){const e=V(),s=r(!1),S=r("Calidad de vida de los funcionarios / Comunicación y relación con la jefatura"),q=r({categories:["fp1","fp3","fp4","fp5"],crosshair:!1}),D=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),C=(a,l,o)=>g({id:a,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async a=>{s.value=!0;const l=n.filter(o=>o.id!==a);n.splice(0,n.length),l.map(o=>n.push(o)),await e.sleep(50),s.value=!1},f=async(a,l,o)=>{var _,m;try{let c=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.id)??null,v=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,h=e.historyId;if(o&&(c=a,v=l),h&&c){s.value=!0;let j=await N({historyId:h,carcelId:c,categoryId:d,subCategoryId:9});const y=[];j.filter(i=>i.poundUsed===1).map(i=>{const A=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;y.push(A)}),n.push(C(c,v,y))}}catch(c){console.log(c)}finally{o||(s.value=!1)}},$=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async a=>await f(a.id,a.description,!0))),s.value=!1};return(a,l)=>(b(),x(E,null,{default:p(()=>[u(O,{title:S.value,"section-value":d},null,8,["title"]),u(k,{"active-spin":s.value},null,8,["active-spin"]),u(B,{baseFilter:d,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:f,onExecuteRemove:I}),t("div",T,[t("div",X,[u(w,{class:"card-information"},{default:p(()=>[Y,z]),_:1}),s.value?L("",!0):(b(),x(M,{key:0,optionsAxisX:q.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:P.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(w,{class:"card-preguntas"},{default:p(()=>[H,J,R,U,W]),_:1})])]),_:1}))}};export{le as default};
