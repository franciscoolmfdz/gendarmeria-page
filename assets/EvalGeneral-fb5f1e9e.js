import{u as B,g as o,r as w,o as A,f as I,j as D,_ as M,m as u,n as X,b as r,a as Y,k as z}from"./index-35ecef89.js";import{_ as G}from"./subSideNav-b6909395.js";import{_ as H}from"./CHeaderBar-260743b4.js";import{_ as R}from"./CFilterbar-7bf20fc4.js";import{_ as W}from"./CCard-ce4af8dd.js";import{_ as j}from"./CColunmChart-2a7c08b8.js";import"./CChartDonutSection-1f0f6d69.js";import"./CButton-4a84bbc1.js";const U={class:"chart-section-principal"},J={class:"evaluacion-general"},K={class:"chart-section"},Q=r("span",{class:"card-title"},"Preguntas",-1),Z=r("span",{class:"question--value"},"1. A pesar de todo, le he podido dar un sentido a mi vida en esta cárcel",-1),ee=r("span",{class:"question--value"},"2. Siento que estar acá me ha ayudado a salir adelante",-1),d=1,pe={__name:"EvalGeneral",setup(ae){const t=B(),s=o(!1),v=o("Calidad de vida de los internos / Evaluación general"),_=o(""),p=o([]),E=o({categories:["1.","2."],crosshair:!1}),V=o({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),$=o({column:{pointPadding:.2,borderWidth:3}}),F=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=w([]),k=(e,n,a)=>w({id:e,name:n,data:a,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),m=()=>{let e=p.value.reduce((n,a)=>n+a.pointCarcel,0);e=e/p.value.length,e=N(e),_.value=e.toString()},L=async e=>{s.value=!0;const n=c.filter(a=>a.id!==e);p.value=p.value.filter(a=>a.carcelId!==e),m(),c.splice(0,c.length),n.map(a=>c.push(a)),await t.sleep(50),s.value=!1},N=e=>e?Math.round(e*100)/100:0,f=async(e,n,a)=>{var h,y;try{let i=((h=t==null?void 0:t.penitenciaria)==null?void 0:h.id)??null,b=((y=t==null?void 0:t.penitenciaria)==null?void 0:y.description)??null,g=t.historyId;if(a&&(i=e,b=n),g&&i){s.value=!0;const T={historyId:g,carcelId:i,categoryId:1,subCategoryId:8};let x=0,q=await z(T);const S=[];let C=q.filter(l=>l.poundUsed===1);C.map(l=>{const P=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;x+=P,S.push(P)}),p.value.push({carcelId:i,pointCarcel:x/C.length}),m(),c.push(k(i,b,S))}}catch(i){console.log(i)}finally{a||(s.value=!1)}},O=async()=>{s.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await f(e.id,e.description,!0))),s.value=!1};return(e,n)=>(A(),I(M,null,{default:D(()=>[u(H,{title:v.value,"section-value":d},null,8,["title"]),u(X,{"active-spin":s.value},null,8,["active-spin"]),u(R,{baseFilter:d,multipleDisabled:!1,onExecuteMount:O,onExecuteAction:f,onExecuteRemove:L}),r("div",U,[u(G,{title:v.value,"section-value":d,pointValue:_.value,pointTitle:"Evaluación general",pointSubtitle:"Promedio respuestas evaluación general"},null,8,["title","pointValue"]),r("div",J,[r("div",K,[s.value?Y("",!0):(A(),I(j,{key:0,chartType:"bar",optionsAxisX:E.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:F.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(W,{class:"card-preguntas"},{default:D(()=>[Q,Z,ee]),_:1})])])]),_:1}))}};export{pe as default};
