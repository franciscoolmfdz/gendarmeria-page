import{u as L,g as i,r as w,o as C,f as P,j as A,_ as M,m as p,n as N,b as r,a as X,k as Y}from"./index-4bd6d820.js";import{_ as j}from"./subSideNav-bee2ce3e.js";import{_ as z}from"./CHeaderBar-12e5ecf4.js";import{_ as H}from"./CFilterbar-704137cb.js";import{_ as R}from"./CCard-fa4c3a9e.js";import{_ as W}from"./CColunmChart-c205778e.js";import"./CChartDonutSection-b011d11d.js";import"./CButton-8cd8b6c3.js";const U={class:"chart-section-principal"},G={class:"toma-decision"},J={class:"chart-section"},K=r("span",{class:"card-title"},"Preguntas",-1),Q=r("span",{class:"question--value"},"fp42 Cuando tengo que adoptar alguna decisión me siento presionado/a directa o indirectamente por los medios",-1),Z=r("span",{class:"question--value"},"fp43 Al adoptar decisiones en mi trabajo me siento presionado/a por las repercusiones que dicha decisión puede tener en mi carrera",-1),u=2,pe={__name:"tomaDesiciones",setup(ee){const e=L(),a=i(!1),d=i("Calidad de vida de los funcionarios / Presión para tomar decisiones"),f=i(""),m=i(0),V=i({categories:["fp42","fp43"],crosshair:!1}),$=i({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=i({column:{pointPadding:.2,borderWidth:3}}),I=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=w([]),T=(t,l,s)=>w({id:t,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async t=>{a.value=!0;const l=n.filter(s=>s.id!==t);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),a.value=!1},q=t=>t?Math.round(t*100)/100:0,_=async(t,l,s)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,y=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,g=e.historyId;if(s&&(c=t,y=l),g&&c){a.value=!0;let O=await Y({historyId:g,carcelId:c,categoryId:u,subCategoryId:20}),x=0;const b=[];let S=O.filter(o=>o.poundUsed===1);S.map(o=>{const D=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;x+=D,b.push(D)}),m.value+=x/S.length;let B=q(m.value/e.carcelesSelected.length);f.value=B.toString(),n.push(T(c,y,b))}}catch(c){console.log(c)}finally{s||(a.value=!1)}},E=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await _(t.id,t.description,!0))),a.value=!1};return(t,l)=>(C(),P(M,null,{default:A(()=>[p(z,{title:d.value,"section-value":u},null,8,["title"]),p(N,{"active-spin":a.value},null,8,["active-spin"]),p(H,{baseFilter:u,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:_,onExecuteRemove:k}),r("div",U,[p(j,{class:"subsection-funcionarios",title:d.value,"section-value":u,pointValue:f.value,pointTitle:"Toma de decisiones",pointSubtitle:"recuencia respuestas presión para tomar decisiones"},null,8,["title","pointValue"]),r("div",G,[r("div",J,[a.value?X("",!0):(C(),P(W,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:$.value,plotOptions:F.value,tooltip:I.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(R,{class:"card-preguntas"},{default:A(()=>[K,Q,Z]),_:1})])])]),_:1}))}};export{pe as default};
