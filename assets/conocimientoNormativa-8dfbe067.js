import{u as B,g as n,r as w,o as A,f as D,j as F,_ as L,m as p,n as M,b as r,a as X,k as Y}from"./index-d5d29b93.js";import{_ as q}from"./subSideNav-7690126a.js";import{_ as H}from"./CHeaderBar-c99abf49.js";import{_ as R}from"./CFilterbar-6fdaab9f.js";import{_ as W}from"./CCard-fa753b4a.js";import{_ as j}from"./CColunmChart-9503d52d.js";import"./CChartDonutSection-be9d7933.js";import"./CButton-1f0b74cb.js";const U={class:"chart-section-principal"},G={class:"conocimiento-notmativa"},J={class:"chart-section"},K=r("span",{class:"card-title"},"Preguntas",-1),Q=r("span",{class:"question--value"},"fp40 Conozco la normativa penitenciaria atingente a mis funciones dentro del recinto",-1),Z=r("span",{class:"question--value"},"fp41 Entiendo / comprendo la normativa atingente a mis funciones ",-1),u=2,pe={__name:"conocimientoNormativa",setup(ee){const e=B(),a=n(!1),d=n("Calidad de vida de los funcionarios / Conocimiento de la normativa penitenciaria"),m=n(""),f=n(0),P=n({categories:["fp40","fp41"],crosshair:!1}),V=n({min:0,allowDecimals:!1,title:{text:""},categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"]}),$=n({column:{pointPadding:.2,borderWidth:3}}),I=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),s=w([]),N=(t,l,o)=>w({id:t,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async t=>{a.value=!0;const l=s.filter(o=>o.id!==t);s.splice(0,s.length),l.map(o=>s.push(o)),await e.sleep(50),a.value=!1},T=t=>t?Math.round(t*100)/100:0,_=async(t,l,o)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,g=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,y=e.historyId;if(o&&(c=t,g=l),y&&c){a.value=!0;let O=await Y({historyId:y,carcelId:c,categoryId:u,subCategoryId:19});const x=[];let b=0,C=O.filter(i=>i.poundUsed===1);C.map(i=>{const S=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;b+=S,x.push(S)}),f.value+=b/C.length;let z=T(f.value/e.carcelesSelected.length);m.value=z.toString(),s.push(N(c,g,x))}}catch(c){console.log(c)}finally{o||(a.value=!1)}},E=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await _(t.id,t.description,!0))),a.value=!1};return(t,l)=>(A(),D(L,null,{default:F(()=>[p(H,{title:d.value,"section-value":u},null,8,["title"]),p(M,{"active-spin":a.value},null,8,["active-spin"]),p(R,{baseFilter:u,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:_,onExecuteRemove:k}),r("div",U,[p(q,{class:"subsection-funcionarios",title:d.value,"section-value":u,pointValue:m.value,pointTitle:"Conocimiento de la normativa penitenciaria",pointSubtitle:"Frecuencia respuestas Conocimiento de la normativa penitenciaria"},null,8,["title","pointValue"]),r("div",G,[r("div",J,[a.value?X("",!0):(A(),D(j,{key:0,chartType:"bar",optionsAxisX:P.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:I.value,series:s},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(W,{class:"card-preguntas"},{default:F(()=>[K,Q,Z]),_:1})])])]),_:1}))}};export{pe as default};
