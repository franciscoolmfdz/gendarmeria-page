import{r as c,d as g,o as x,e as b,w as p,_ as k,b as d,a as i,f as E}from"./index-835fa660.js";import{_ as L}from"./CSpinner-cdbd9879.js";import{_ as V}from"./CHeaderBar-557e815f.js";import{_ as B}from"./CFilterbar-be2fd92d.js";import{u as N,_ as w}from"./CCard-6590ae85.js";import{_ as X}from"./CColunmChart-72deb70a.js";import{g as Y}from"./dimensionHistory-b6bfb333.js";import"./exporting-9f76ea7f.js";import"./api-7944baea.js";const z={class:"regimen-carcel"},H={class:"chart-section"},M=i("span",{class:"card-title"},"Frecuencia respuestas presión para tomar decisiones",-1),R=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),T=i("span",{class:"card-title"},"Preguntas",-1),U=i("span",{class:"question--value"},"fp42 Cuando tengo que adoptar alguna decisión me siento presionado/a directa o indirectamente por los medios",-1),W=i("span",{class:"question--value"},"fp43 Al adoptar decisiones en mi trabajo me siento presionado/a por las repercusiones que dicha decisión puede tener en mi carrera",-1),u=2,ne={__name:"tomaDesiciones",setup(j){const e=N(),s=c(!1),D=c("Calidad de vida de los funcionarios / Presión para tomar decisiones"),S=c({categories:["fp42","fp43"],crosshair:!1}),P=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=c({column:{pointPadding:.2,borderWidth:3}}),q=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),A=(t,l,a)=>g({id:t,name:l,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=async t=>{s.value=!0;const l=n.filter(a=>a.id!==t);n.splice(0,n.length),l.map(a=>n.push(a)),await e.sleep(50),s.value=!1},m=async(t,l,a)=>{var f,_;try{let r=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(a&&(r=t,v=l),h&&r){s.value=!0;let $=await Y({historyId:h,carcelId:r,categoryId:u,subCategoryId:20});const y=[];$.filter(o=>o.poundUsed===1).map(o=>{const O=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;y.push(O)}),n.push(A(r,v,y))}}catch(r){console.log(r)}finally{a||(s.value=!1)}},I=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),s.value=!1};return(t,l)=>(x(),b(k,null,{default:p(()=>[d(V,{title:D.value,"section-value":u},null,8,["title"]),d(L,{"active-spin":s.value},null,8,["active-spin"]),d(B,{baseFilter:u,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:m,onExecuteRemove:C}),i("div",z,[i("div",H,[d(w,{class:"card-information"},{default:p(()=>[M,R]),_:1}),s.value?E("",!0):(x(),b(X,{key:0,optionsAxisX:S.value,optionsAxisY:P.value,plotOptions:F.value,tooltip:q.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(w,{class:"card-preguntas"},{default:p(()=>[T,U,W]),_:1})])]),_:1}))}};export{ne as default};
