import{g as n,u as z,r as P,o as m,f as A,j as V,_ as H,m as p,n as M,b as f,a as R,c as $,p as W,F as j,k as U,t as k}from"./index-21f23004.js";import{_ as G}from"./CHeaderBar-cbc33fae.js";import{_ as J}from"./CFilterbar-5fd7ec21.js";import{_ as K}from"./subSideNav-e3fbe30d.js";import{_ as Q}from"./CCard-83fab194.js";import{_ as Z}from"./CColunmChart-27802e61.js";import{g as ee}from"./dimensiones-8b524529.js";import"./CButton-107a322a.js";import"./CChartDonutSection-0f7737d1.js";const te={class:"chart-section-principal"},se={class:"infraestructura-section"},ae={class:"chart-section"},ne=f("span",{class:"card-title"},"Preguntas",-1),le={class:"question--value"},u=1,L=2,be={__name:"InfraestructuraCarcel",setup(ie){const _=n([]),l=n(!1),s=z(),v=n("Calidad de vida de los internos / Infrastructura cárcel"),b=n(""),r=n([]),B=n({categories:["1.","2.","3.","4.","5.","6.","7."],crosshair:!1}),E=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),N=n({column:{pointPadding:.2,borderWidth:3}}),O=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} </b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),o=P([]),T=(e,a,t)=>P({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,style:{inside:!0,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),y=e=>e?Math.round(e*100)/100:0,X=async e=>{l.value=!0;const a=o.filter(t=>t.id!==e);r.value=r.value.filter(t=>t.carcelId!==e),h(),o.splice(0,o.length),a.map(t=>o.push(t)),await s.sleep(50),l.value=!1},h=()=>{let e=r.value.reduce((a,t)=>a+t.pointCarcel,0);e=e/r.value.length,e=y(e),b.value=e.toString()},g=async(e,a,t)=>{var d,x;try{let i=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,C=((x=s==null?void 0:s.penitenciaria)==null?void 0:x.description)??null,S=s.historyId;if(t&&(i=e,C=a),S&&i){l.value=!0;let q=await U({historyId:S,carcelId:i,categoryId:u,subCategoryId:L});const I=[];let w=q.filter(c=>c.poundUsed===1),D=0;w.map(c=>{const F=y(c==null?void 0:c.valuePound);D+=F,I.push(F)}),r.value.push({carcelId:i,pointCarcel:D/w.length}),h(),o.push(T(i,C,I))}}catch(i){console.log(i)}finally{t||(l.value=!1)}},Y=async()=>{l.value=!0;const e={categoryId:u,subCategoryId:L};_.value=await ee(e),s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await g(a.id,a.description,!0))),l.value=!1};return(e,a)=>(m(),A(H,{class:"infraestructura-container"},{default:V(()=>[p(G,{title:v.value,"section-value":u},null,8,["title"]),p(M,{"active-spin":l.value},null,8,["active-spin"]),p(J,{baseFilter:u,onExecuteMount:Y,multipleDisabled:!1,onExecuteAction:g,onExecuteRemove:X}),f("div",te,[p(K,{title:v.value,"section-value":u,pointValue:b.value,pointTitle:"Infrastructura de la cárcel",pointSubtitle:"Promedio respuestas Infrastructura de la cárcel"},null,8,["title","pointValue"]),f("div",se,[f("div",ae,[l.value?R("",!0):(m(),A(Z,{key:0,chartType:"bar",optionsAxisX:B.value,optionsAxisY:E.value,plotOptions:N.value,tooltip:O.value,series:o},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Q,{class:"card-preguntas"},{default:V(()=>[ne,(m(!0),$(j,null,W(_.value,(t,d)=>(m(),$("span",le,k(d+1)+". "+k(t.description),1))),256))]),_:1})])])]),_:1}))}};export{be as default};
