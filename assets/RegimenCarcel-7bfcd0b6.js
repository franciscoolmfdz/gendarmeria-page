import{g as i,u as O,r as q,o as w,f as A,j as P,_ as z,m as u,n as B,b as s,a as M,k as N}from"./index-59105a95.js";import{_ as X}from"./subSideNav-6d410a8a.js";import{_ as Y}from"./CHeaderBar-8c04cde7.js";import{_ as j}from"./CFilterbar-36ee3a35.js";import{_ as H}from"./CCard-24fe3e98.js";import{_ as W}from"./CColunmChart-5ba6930f.js";import"./CChartDonutSection-8dec0bf6.js";import"./CButton-38f3b723.js";const U={class:"chart-section-principal"},G={class:"regimen-carcel"},J={class:"chart-section"},K=s("span",{class:"card-title"},"Preguntas",-1),Q=s("span",{class:"question--value"},"6.1 Conozco los pasos a seguir para hacer un reclamo",-1),Z=s("span",{class:"question--value"},"6.2 Siento que las reglas de esta cárcel son claras",-1),ee=s("span",{class:"question--value"},"6.3 En esta cárcel me siento discriminado (ya sea por mi orientación sexual, país de origen, delito u otra)",-1),te=s("span",{class:"question--value"},"6.4 Acá responden rápido a los escritos de los internos",-1),se=s("span",{class:"question--value"},"6.5 Los gendarmes responden rápido cuando hay una emergencia",-1),ae=s("span",{class:"question--value"},"6.6 Aquí cada gendarme pone sus propias reglas",-1),oe=s("span",{class:"question--value"},"6.7 En esta cárcel recibo un trato justo y se respetan mis derechos",-1),d=1,fe={__name:"RegimenCarcel",setup(ne){const a=i(!1),e=O(),p=i("Calidad de vida de los internos / Regimen de la carcel"),_=i(""),m=i(0),D=i({categories:["6.1","6.2","6.3","6.4","6.5","6.6","6.7"],crosshair:!1}),I=i({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),R=i({column:{pointPadding:.2,borderWidth:3}}),V=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=q([]),$=(t,c,o)=>q({id:t,name:c,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),E=async t=>{a.value=!0;const c=l.filter(o=>o.id!==t);l.splice(0,l.length),c.map(o=>l.push(o)),await e.sleep(50),a.value=!1},F=t=>t?Math.round(t*100)/100:0,f=async(t,c,o)=>{var h,v;try{let r=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.id)??null,g=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.description)??null,y=e.historyId;if(o&&(r=t,g=c),y&&r){a.value=!0;let T=await N({historyId:y,carcelId:r,categoryId:1,subCategoryId:6});const x=[];let b=0,S=T.filter(n=>n.poundUsed===1);S.map(n=>{const C=n!=null&&n.promPound?Math.round((n==null?void 0:n.promPound)*100)/100:0;b+=C,x.push(C)}),m.value+=b/S.length;let L=F(m.value/e.carcelesSelected.length);_.value=L.toString(),l.push($(r,g,x))}}catch(r){console.log(r)}finally{o||(a.value=!1)}},k=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await f(t.id,t.description,!0))),a.value=!1};return(t,c)=>(w(),A(z,null,{default:P(()=>[u(Y,{title:p.value,"section-value":d},null,8,["title"]),u(B,{"active-spin":a.value},null,8,["active-spin"]),u(j,{baseFilter:d,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:f,onExecuteRemove:E}),s("div",U,[u(X,{title:p.value,"section-value":d,pointValue:_.value,pointTitle:"Regimen de la carcel",pointSubtitle:"Promedio respuestas Regimen de la carcel"},null,8,["title","pointValue"]),s("div",G,[s("div",J,[a.value?M("",!0):(w(),A(W,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:I.value,plotOptions:R.value,tooltip:V.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(H,{class:"card-preguntas"},{default:P(()=>[K,Q,Z,ee,te,se,ae,oe]),_:1})])])]),_:1}))}};export{fe as default};
