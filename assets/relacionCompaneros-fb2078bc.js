import{g as n,u as X,r as I,o as m,f as P,j as A,_ as Y,m as p,n as q,b as f,a as z,c as V,p as H,F as W,k as U,t as $}from"./index-9ece5f00.js";import{_ as G}from"./subSideNav-849ce6fa.js";import{_ as J}from"./CHeaderBar-c560d413.js";import{_ as K}from"./CFilterbar-0a385611.js";import{a as Q}from"./CChartDonutSection-8542dc28.js";import{_ as Z}from"./CColunmChart-2e8ec6dd.js";import{g as ee}from"./dimensiones-2daacd7d.js";import"./CButton-f27b5fc8.js";const se={class:"chart-section-principal"},ae={class:"relacion-colegas"},te={class:"chart-section"},ne=f("span",{class:"card-title"},"Preguntas",-1),oe={class:"question--value"},u=2,le=14,ve={__name:"relacionCompaneros",setup(ie){const _=n([]),a=X(),o=n(!1),v=n("Calidad de vida de los funcionarios / Relación con compañeros/as de trabajo"),b=n(""),r=n([]),k=n({categories:["1.","2.","3."],crosshair:!1}),L=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),R=n({column:{pointPadding:.2,borderWidth:3}}),j=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=I([]),B=(e,t,s)=>I({id:e,name:t,data:s,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),E=async e=>{o.value=!0;const t=c.filter(s=>s.id!==e);r.value=r.value.filter(s=>s.carcelId!==e),y(),c.splice(0,c.length),t.map(s=>c.push(s)),await a.sleep(50),o.value=!1},N=e=>e?Math.round(e*100)/100:0,y=()=>{let e=r.value.reduce((t,s)=>t+s.pointCarcel,0);e=e/r.value.length,e=N(e),b.value=e.toString()},h=async(e,t,s)=>{var d,g;try{let i=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.id)??null,x=((g=a==null?void 0:a.penitenciaria)==null?void 0:g.description)??null,C=a.historyId;if(s&&(i=e,x=t),C&&i){o.value=!0;const T={historyId:C,carcelId:i,categoryId:u,subCategoryId:14};let S=0,M=await U(T);const w=[];let D=M.filter(l=>l.poundUsed===1);D.map(l=>{const F=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;S+=F,w.push(F)}),r.value.push({carcelId:i,pointCarcel:S/D.length}),y(),c.push(B(i,x,w))}}catch(i){console.log(i)}finally{s||(o.value=!1)}},O=async()=>{o.value=!0;const e={categoryId:u,subCategoryId:le};_.value=await ee(e),a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async t=>await h(t.id,t.description,!0))),o.value=!1};return(e,t)=>(m(),P(Y,null,{default:A(()=>[p(J,{title:v.value,"section-value":u},null,8,["title"]),p(q,{"active-spin":o.value},null,8,["active-spin"]),p(K,{baseFilter:u,multipleDisabled:!1,onExecuteMount:O,onExecuteAction:h,onExecuteRemove:E}),f("div",se,[p(G,{class:"subsection-funcionarios",title:v.value,"section-value":u,pointValue:b.value,pointTitle:"Relación con compañeros/as de trabajo",pointSubtitle:"Frecuencia respuestas Relación con compañeros/as de trabajo"},null,8,["title","pointValue"]),f("div",ae,[f("div",te,[o.value?z("",!0):(m(),P(Z,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:R.value,tooltip:j.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Q,{class:"card-preguntas"},{default:A(()=>[ne,(m(!0),V(W,null,H(_.value,(s,d)=>(m(),V("span",oe,$(d+1)+". "+$(s.description),1))),256))]),_:1})])])]),_:1}))}};export{ve as default};
