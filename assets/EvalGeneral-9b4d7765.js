import{g as o,u as z,r as E,o as v,f as F,j as V,_ as G,m as p,n as H,b as m,a as W,c as A,p as j,F as U,k as J,t as I}from"./index-55c36585.js";import{_ as K}from"./subSideNav-e227cb4c.js";import{_ as Q}from"./CHeaderBar-fe98073c.js";import{_ as Z}from"./CFilterbar-d8883c57.js";import{_ as ee}from"./CCard-994e3cf2.js";import{_ as te}from"./CColunmChart-d0cda8fe.js";import{g as se}from"./dimensiones-b92417f1.js";import"./CChartDonutSection-e72e6124.js";import"./CButton-f23aba14.js";const ae={class:"chart-section-principal"},ne={class:"evaluacion-general"},le={class:"chart-section"},oe=m("span",{class:"card-title"},"Preguntas",-1),ie={class:"question--value"},u=1,$=8,he={__name:"EvalGeneral",setup(ce){const f=o([]),s=z(),n=o(!1),y=o("Calidad de vida de los internos / Evaluación general"),h=o(""),r=o([]),k=o({categories:["1.","2."],crosshair:!1}),L=o({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=o({column:{pointPadding:.2,borderWidth:3}}),N=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=E([]),O=(e,a,t)=>E({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),g=()=>{let e=r.value.reduce((a,t)=>a+t.pointCarcel,0);e=e/r.value.length,e=T(e),h.value=e.toString()},R=async e=>{n.value=!0;const a=c.filter(t=>t.id!==e);r.value=r.value.filter(t=>t.carcelId!==e),g(),c.splice(0,c.length),a.map(t=>c.push(t)),await s.sleep(50),n.value=!1},T=e=>e?Math.round(e*100)/100:0,x=async(e,a,t)=>{var d,S;try{let i=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,C=((S=s==null?void 0:s.penitenciaria)==null?void 0:S.description)??null,w=s.historyId;if(t&&(i=e,C=a),w&&i){n.value=!0;const X={historyId:w,carcelId:i,categoryId:u,subCategoryId:$};let _=0,Y=await J(X);const D=[];let P=Y.filter(l=>l.poundUsed===1);P.map((l,q)=>{console.log(l);const b=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;f.value[q].revertValue?_+=5-b:_+=b,D.push(b)}),r.value.push({carcelId:i,pointCarcel:_/P.length}),g(),c.push(O(i,C,D))}}catch(i){console.log(i)}finally{t||(n.value=!1)}},M=async()=>{n.value=!0,n.value=!0;const e={categoryId:u,subCategoryId:$};f.value=await se(e),s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),n.value=!1};return(e,a)=>(v(),F(G,null,{default:V(()=>[p(Q,{title:y.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":n.value},null,8,["active-spin"]),p(Z,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:R}),m("div",ae,[p(K,{title:y.value,"section-value":u,pointValue:h.value,pointTitle:"Evaluación general",pointSubtitle:"Promedio respuestas evaluación general"},null,8,["title","pointValue"]),m("div",ne,[m("div",le,[n.value?W("",!0):(v(),F(te,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:B.value,tooltip:N.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(ee,{class:"card-preguntas"},{default:V(()=>[oe,(v(!0),A(U,null,j(f.value,(t,d)=>(v(),A("span",ie,I(d+1)+". "+I(t.description),1))),256))]),_:1})])])]),_:1}))}};export{he as default};
