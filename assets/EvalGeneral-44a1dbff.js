import{g as l,u as z,r as E,o as v,f as F,j as V,_ as G,m as p,n as H,b as m,a as W,c as A,p as j,F as U,k as J,t as I}from"./index-ff297cff.js";import{_ as K}from"./subSideNav-31470e8d.js";import{_ as Q}from"./CHeaderBar-2eaac43b.js";import{_ as Z}from"./CFilterbar-18d18acd.js";import{a as ee}from"./CChartDonutSection-1340ee1a.js";import{_ as te}from"./CColunmChart-d0066a0c.js";import{g as ae}from"./dimensiones-df0a4a06.js";import"./CButton-1f16a4b4.js";const se={class:"chart-section-principal"},ne={class:"evaluacion-general"},le={class:"chart-section"},ie=m("span",{class:"card-title"},"Preguntas",-1),oe={class:"question--value"},u=1,$=8,ye={__name:"EvalGeneral",setup(ce){const f=l([]),a=z(),n=l(!1),y=l("Calidad de vida de los internos / Evaluación general"),h=l(""),r=l([]),k=l({categories:["1.","2."],crosshair:!1}),L=l({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=l({column:{pointPadding:.2,borderWidth:3}}),N=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=E([]),O=(e,s,t)=>E({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),g=()=>{let e=r.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/r.value.length,e=T(e),h.value=e.toString()},R=async e=>{n.value=!0;const s=c.filter(t=>t.id!==e);r.value=r.value.filter(t=>t.carcelId!==e),g(),c.splice(0,c.length),s.map(t=>c.push(t)),await a.sleep(50),n.value=!1},T=e=>e?Math.round(e*100)/100:0,x=async(e,s,t)=>{var d,S;try{let o=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.id)??null,C=((S=a==null?void 0:a.penitenciaria)==null?void 0:S.description)??null,w=a.historyId;if(t&&(o=e,C=s),w&&o){n.value=!0;const X={historyId:w,carcelId:o,categoryId:u,subCategoryId:$};let _=0,Y=await J(X);const D=[];let P=Y.filter(i=>i.poundUsed===1);P.map((i,q)=>{const b=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;f.value[q].revertValue?_+=5-b:_+=b,D.push(b)}),r.value.push({carcelId:o,pointCarcel:_/P.length}),g(),c.push(O(o,C,D))}}catch(o){console.log(o)}finally{t||(n.value=!1)}},M=async()=>{n.value=!0,n.value=!0;const e={categoryId:u,subCategoryId:$};f.value=await ae(e),a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async s=>await x(s.id,s.description,!0))),n.value=!1};return(e,s)=>(v(),F(G,null,{default:V(()=>[p(Q,{title:y.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":n.value},null,8,["active-spin"]),p(Z,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:R}),m("div",se,[p(K,{title:y.value,"section-value":u,pointValue:h.value,pointTitle:"Evaluación general",pointSubtitle:"Promedio respuestas evaluación general"},null,8,["title","pointValue"]),m("div",ne,[m("div",le,[n.value?W("",!0):(v(),F(te,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:B.value,tooltip:N.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(ee,{class:"card-preguntas"},{default:V(()=>[ie,(v(!0),A(U,null,j(f.value,(t,d)=>(v(),A("span",oe,I(d+1)+". "+I(t.description),1))),256))]),_:1})])])]),_:1}))}};export{ye as default};
