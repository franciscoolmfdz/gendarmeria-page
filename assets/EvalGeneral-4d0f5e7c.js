import{i as O,h as c,r as y,o as g,f as x,j as u,_ as k,g as d,b as i,a as L}from"./index-8a5d36ad.js";import{_ as V}from"./CSpinner-925bb9d3.js";import{_ as B}from"./CHeaderBar-6b1a30b0.js";import{_ as N}from"./CFilterbar-0ed9d5d4.js";import{_ as b}from"./CCard-9d2b732e.js";import{_ as X}from"./CColunmChart-9ff34248.js";import{g as Y}from"./dimensionHistory-dfb3de38.js";import"./exporting-31a18af8.js";import"./api-ec658a74.js";const z={class:"evaluacion-general"},G={class:"chart-section"},H=i("span",{class:"card-title"},"Promedio respuestas evaluación general",-1),M=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=i("span",{class:"card-title"},"Preguntas",-1),T=i("span",{class:"question--value"},"8.1 A pesar de todo, le he podido dar un sentido a mi vida en esta cárcel",-1),U=i("span",{class:"question--value"},"8.2 Siento que estar acá me ha ayudado a salir adelante",-1),S=1,ne={__name:"EvalGeneral",setup(W){const e=O(),a=c(!1),w=c("Calidad de vida de los internos / Evaluación general"),P=c({categories:["8.1","8.2"],crosshair:!1}),D=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),E=c({column:{pointPadding:.2,borderWidth:3}}),I=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),A=(t,l,s)=>y({id:t,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async t=>{a.value=!0;const l=n.filter(s=>s.id!==t);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),a.value=!1},p=async(t,l,s)=>{var m,f;try{let r=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,_=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.description)??null,v=e.historyId;if(s&&(r=t,_=l),v&&r){a.value=!0;let q=await Y({historyId:v,carcelId:r,categoryId:1,subCategoryId:8});const h=[];q.filter(o=>o.poundUsed===1).map(o=>{const C=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;h.push(C)}),n.push(A(r,_,h))}}catch(r){console.log(r)}finally{s||(a.value=!1)}},$=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await p(t.id,t.description,!0))),a.value=!1};return(t,l)=>(g(),x(k,null,{default:u(()=>[d(B,{title:w.value,"section-value":S},null,8,["title"]),d(V,{"active-spin":a.value},null,8,["active-spin"]),d(N,{baseFilter:S,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:p,onExecuteRemove:F}),i("div",z,[i("div",G,[d(b,{class:"card-information"},{default:u(()=>[H,M]),_:1}),a.value?L("",!0):(g(),x(X,{key:0,optionsAxisX:P.value,optionsAxisY:D.value,plotOptions:E.value,tooltip:I.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(b,{class:"card-preguntas"},{default:u(()=>[R,T,U]),_:1})])]),_:1}))}};export{ne as default};
