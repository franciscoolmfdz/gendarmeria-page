import{u as B,g as n,r as w,o as D,f as F,j as P,_ as L,m as u,n as M,b as r,a as X,k as Y}from"./index-5ea9ca80.js";import{_ as q}from"./subSideNav-65496e07.js";import{_ as H}from"./CHeaderBar-7cb89305.js";import{_ as R}from"./CFilterbar-70d05e16.js";import{_ as W}from"./CCard-e5dc31a5.js";import{_ as j}from"./CColunmChart-129f62cb.js";import"./CChartDonutSection-fa8a7a2b.js";import"./CButton-499e7585.js";const U={class:"chart-section-principal"},G={class:"conocimiento-notmativa"},J={class:"chart-section"},K=r("span",{class:"card-title"},"Preguntas",-1),Q=r("span",{class:"question--value"},"fp40 Conozco la normativa penitenciaria atingente a mis funciones dentro del recinto",-1),Z=r("span",{class:"question--value"},"fp41 Entiendo / comprendo la normativa atingente a mis funciones ",-1),p=2,ue={__name:"conocimientoNormativa",setup(ee){const e=B(),a=n(!1),d=n("Calidad de vida de los funcionarios / Conocimiento de la normativa penitenciaria"),f=n(""),m=n(0),V=n({categories:["fp40","fp41"],crosshair:!1}),$=n({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),A=n({column:{pointPadding:.2,borderWidth:3}}),I=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),s=w([]),k=(t,l,o)=>w({id:t,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),E=async t=>{a.value=!0;const l=s.filter(o=>o.id!==t);s.splice(0,s.length),l.map(o=>s.push(o)),await e.sleep(50),a.value=!1},N=t=>t?Math.round(t*100)/100:0,_=async(t,l,o)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,y=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,g=e.historyId;if(o&&(c=t,y=l),g&&c){a.value=!0;let O=await Y({historyId:g,carcelId:c,categoryId:p,subCategoryId:19});const x=[];let b=0,S=O.filter(i=>i.poundUsed===1);S.map(i=>{const C=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;b+=C,x.push(C)}),m.value+=b/S.length;let z=N(m.value/e.carcelesSelected.length);f.value=z.toString(),s.push(k(c,y,x))}}catch(c){console.log(c)}finally{o||(a.value=!1)}},T=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await _(t.id,t.description,!0))),a.value=!1};return(t,l)=>(D(),F(L,null,{default:P(()=>[u(H,{title:d.value,"section-value":p},null,8,["title"]),u(M,{"active-spin":a.value},null,8,["active-spin"]),u(R,{baseFilter:p,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:_,onExecuteRemove:E}),r("div",U,[u(q,{class:"subsection-funcionarios",title:d.value,"section-value":p,pointValue:f.value,pointTitle:"Conocimiento de la normativa penitenciaria",pointSubtitle:"Frecuencia respuestas Conocimiento de la normativa penitenciaria"},null,8,["title","pointValue"]),r("div",G,[r("div",J,[a.value?X("",!0):(D(),F(j,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:$.value,plotOptions:A.value,tooltip:I.value,series:s},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(W,{class:"card-preguntas"},{default:P(()=>[K,Q,Z]),_:1})])])]),_:1}))}};export{ue as default};
