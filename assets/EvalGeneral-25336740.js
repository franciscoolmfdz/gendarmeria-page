import{r as c,d as y,o as g,e as x,w as u,_ as O,b as d,a as i,f as k}from"./index-f56d6358.js";import{_ as L}from"./CSpinner-0f935314.js";import{_ as V}from"./CHeaderBar-208b08b9.js";import{u as B,_ as N,a as b}from"./CCard-a7916b9b.js";import{_ as X}from"./CColunmChart-27ce0daf.js";import{g as Y}from"./dimensionHistory-b6bfb333.js";import"./exporting-df16a601.js";import"./api-7944baea.js";const z={class:"evaluacion-general"},G={class:"chart-section"},H=i("span",{class:"card-title"},"Promedio respuestas evaluación general",-1),M=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=i("span",{class:"card-title"},"Preguntas",-1),T=i("span",{class:"question--value"},"8.1 A pesar de todo, le he podido dar un sentido a mi vida en esta cárcel",-1),U=i("span",{class:"question--value"},"8.2 Siento que estar acá me ha ayudado a salir adelante",-1),S=1,ie={__name:"EvalGeneral",setup(W){const e=B(),t=c(!1),w=c("Calidad de vida de los internos / Evaluación general"),P=c({categories:["8.1","8.2"],crosshair:!1}),D=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),E=c({column:{pointPadding:.2,borderWidth:3}}),I=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),A=(a,l,s)=>y({id:a,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async a=>{t.value=!0;const l=n.filter(s=>s.id!==a);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),t.value=!1},p=async(a,l,s)=>{var f,m;try{let r=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.id)??null,_=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,v=e.historyId;if(s&&(r=a,_=l),v&&r){t.value=!0;let q=await Y({historyId:v,carcelId:r,categoryId:1,subCategoryId:8});const h=[];q.filter(o=>o.poundUsed===1).map(o=>{const C=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;h.push(C)}),n.push(A(r,_,h))}}catch(r){console.log(r)}finally{s||(t.value=!1)}},$=async()=>{t.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async a=>await p(a.id,a.description,!0))),t.value=!1};return(a,l)=>(g(),x(O,null,{default:u(()=>[d(V,{title:w.value,"section-value":S},null,8,["title"]),d(L,{"active-spin":t.value},null,8,["active-spin"]),d(N,{baseFilter:S,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:p,onExecuteRemove:F}),i("div",z,[i("div",G,[d(b,{class:"card-information"},{default:u(()=>[H,M]),_:1}),t.value?k("",!0):(g(),x(X,{key:0,optionsAxisX:P.value,optionsAxisY:D.value,plotOptions:E.value,tooltip:I.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(b,{class:"card-preguntas"},{default:u(()=>[R,T,U]),_:1})])]),_:1}))}};export{ie as default};
