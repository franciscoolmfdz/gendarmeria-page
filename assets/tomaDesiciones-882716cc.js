import{i as k,h as c,r as y,o as x,f as b,j as p,_ as E,g as d,b as i,a as L}from"./index-e11d2db0.js";import{_ as V}from"./CSpinner-68c13a5e.js";import{_ as B}from"./CHeaderBar-7430ddcb.js";import{_ as N}from"./CFilterbar-bbe1765b.js";import{_ as D}from"./CCard-e78a7983.js";import{_ as X}from"./CColunmChart-fee3e7a8.js";import{g as Y}from"./dimensionHistory-30900885.js";import"./exporting-9b377c6a.js";import"./api-7944baea.js";const j={class:"regimen-carcel"},z={class:"chart-section"},H=i("span",{class:"card-title"},"Frecuencia respuestas presión para tomar decisiones",-1),M=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=i("span",{class:"card-title"},"Preguntas",-1),T=i("span",{class:"question--value"},"fp42 Cuando tengo que adoptar alguna decisión me siento presionado/a directa o indirectamente por los medios",-1),U=i("span",{class:"question--value"},"fp43 Al adoptar decisiones en mi trabajo me siento presionado/a por las repercusiones que dicha decisión puede tener en mi carrera",-1),u=2,ne={__name:"tomaDesiciones",setup(W){const e=k(),s=c(!1),S=c("Calidad de vida de los funcionarios / Presión para tomar decisiones"),w=c({categories:["fp42","fp43"],crosshair:!1}),P=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=c({column:{pointPadding:.2,borderWidth:3}}),q=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),A=(t,l,a)=>y({id:t,name:l,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=async t=>{s.value=!0;const l=n.filter(a=>a.id!==t);n.splice(0,n.length),l.map(a=>n.push(a)),await e.sleep(50),s.value=!1},m=async(t,l,a)=>{var f,_;try{let r=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(a&&(r=t,v=l),h&&r){s.value=!0;let $=await Y({historyId:h,carcelId:r,categoryId:u,subCategoryId:20});const g=[];$.filter(o=>o.poundUsed===1).map(o=>{const O=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;g.push(O)}),n.push(A(r,v,g))}}catch(r){console.log(r)}finally{a||(s.value=!1)}},I=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),s.value=!1};return(t,l)=>(x(),b(E,null,{default:p(()=>[d(B,{title:S.value,"section-value":u},null,8,["title"]),d(V,{"active-spin":s.value},null,8,["active-spin"]),d(N,{baseFilter:u,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:m,onExecuteRemove:C}),i("div",j,[i("div",z,[d(D,{class:"card-information"},{default:p(()=>[H,M]),_:1}),s.value?L("",!0):(x(),b(X,{key:0,optionsAxisX:w.value,optionsAxisY:P.value,plotOptions:F.value,tooltip:q.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(D,{class:"card-preguntas"},{default:p(()=>[R,T,U]),_:1})])]),_:1}))}};export{ne as default};
