import{g as n,u as Y,r as I,o as m,f as P,j as A,_ as q,m as p,n as z,b as f,a as H,c as V,p as R,F as W,k as j,t as $}from"./index-21f23004.js";import{_ as U}from"./subSideNav-e3fbe30d.js";import{_ as G}from"./CHeaderBar-cbc33fae.js";import{_ as J}from"./CFilterbar-5fd7ec21.js";import{_ as K}from"./CCard-83fab194.js";import{_ as Q}from"./CColunmChart-27802e61.js";import{g as Z}from"./dimensiones-8b524529.js";import"./CChartDonutSection-0f7737d1.js";import"./CButton-107a322a.js";const ee={class:"chart-section-principal"},te={class:"conocimiento-notmativa"},ae={class:"chart-section"},se=f("span",{class:"card-title"},"Preguntas",-1),ne={class:"question--value"},u=2,ie=19,be={__name:"conocimientoNormativa",setup(oe){const v=n([]),a=Y(),i=n(!1),_=n("Calidad de vida de los funcionarios / Conocimiento de la normativa penitenciaria"),b=n(""),r=n([]),k=n({categories:["1.","2."],crosshair:!1}),L=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),N=n({column:{pointPadding:.2,borderWidth:3}}),B=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=I([]),E=(e,s,t)=>I({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),O=async e=>{i.value=!0;const s=c.filter(t=>t.id!==e);r.value=r.value.filter(t=>t.carcelId!==e),y(),c.splice(0,c.length),s.map(t=>c.push(t)),await a.sleep(50),i.value=!1},T=e=>e?Math.round(e*100)/100:0,y=()=>{let e=r.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/r.value.length,e=T(e),b.value=e.toString()},h=async(e,s,t)=>{var d,g;try{let l=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.id)??null,x=((g=a==null?void 0:a.penitenciaria)==null?void 0:g.description)??null,C=a.historyId;if(t&&(l=e,x=s),C&&l){i.value=!0;let X=await j({historyId:C,carcelId:l,categoryId:u,subCategoryId:19});const S=[];let w=0,D=X.filter(o=>o.poundUsed===1);D.map(o=>{const F=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;w+=F,S.push(F)}),r.value.push({carcelId:l,pointCarcel:w/D.length}),y(),c.push(E(l,x,S))}}catch(l){console.log(l)}finally{t||(i.value=!1)}},M=async()=>{i.value=!0;const e={categoryId:u,subCategoryId:ie};v.value=await Z(e),a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async s=>await h(s.id,s.description,!0))),i.value=!1};return(e,s)=>(m(),P(q,null,{default:A(()=>[p(G,{title:_.value,"section-value":u},null,8,["title"]),p(z,{"active-spin":i.value},null,8,["active-spin"]),p(J,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:h,onExecuteRemove:O}),f("div",ee,[p(U,{class:"subsection-funcionarios",title:_.value,"section-value":u,pointValue:b.value,pointTitle:"Conocimiento de la normativa penitenciaria",pointSubtitle:"Frecuencia respuestas Conocimiento de la normativa penitenciaria"},null,8,["title","pointValue"]),f("div",te,[f("div",ae,[i.value?H("",!0):(m(),P(Q,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:N.value,tooltip:B.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(K,{class:"card-preguntas"},{default:A(()=>[se,(m(!0),V(W,null,R(v.value,(t,d)=>(m(),V("span",ne,$(d+1)+". "+$(t.description),1))),256))]),_:1})])])]),_:1}))}};export{be as default};
