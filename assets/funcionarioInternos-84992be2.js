import{g as n,u as X,r as F,i as Y,o as m,f as P,j as A,_ as q,m as p,b as _,a as z,c as V,p as H,F as W,k as j,t as k}from"./index-ee631519.js";import{_ as U}from"./subSideNav-f35a984e.js";import{_ as G}from"./CHeaderBar-1817246d.js";import{_ as J}from"./CFilterbar-99f5bdb9.js";import{a as K}from"./CChartDonutSection-46baed7d.js";import{_ as Q}from"./CColunmChart-0069ecbf.js";import{g as Z}from"./dimensiones-ca1be872.js";import"./CButton-d5cec8f6.js";const ee={class:"chart-section-principal"},se={class:"relacion-internos"},te={class:"chart-section"},ae=_("span",{class:"card-title"},"Preguntas",-1),ne={class:"question--value"},u=2,oe=18,ve={__name:"funcionarioInternos",setup(le){const v=n([]),t=X(),o=n(!1),y=n("Calidad de vida de los funcionarios / Respeto y relación con los internos"),b=n(""),r=n([]),L=n({categories:["1.","2."],crosshair:!1}),$=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=n({column:{pointPadding:.2,borderWidth:3}}),E=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),N=(e,a,s)=>F({id:e,name:a,data:s,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),O=e=>e?Math.round(e*100)/100:0,R=async e=>{o.value=!0;const a=c.filter(s=>s.id!==e);r.value=r.value.filter(s=>s.carcelId!==e),h(),c.splice(0,c.length),a.map(s=>c.push(s)),await t.sleep(50),o.value=!1},h=()=>{let e=r.value.reduce((a,s)=>a+s.pointCarcel,0);e=e/r.value.length,e=O(e),b.value=e.toString()},g=async(e,a,s)=>{var d,f;try{let i=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,x=((f=t==null?void 0:t.penitenciaria)==null?void 0:f.description)??null,C=t.historyId;if(s&&(i=e,x=a),C&&i){o.value=!0;let M=await j({historyId:C,carcelId:i,categoryId:u,subCategoryId:18});const S=[];let I=0,w=M.filter(l=>l.poundUsed===1);w.map(l=>{const D=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;I+=D,S.push(D)}),r.value.push({carcelId:i,pointCarcel:I/w.length}),h(),c.push(N(i,x,S))}}catch(i){console.log(i)}finally{s||(o.value=!1)}},T=async()=>{o.value=!0;const e={categoryId:u,subCategoryId:oe};v.value=await Z(e),t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async a=>await g(a.id,a.description,!0))),o.value=!1};return(e,a)=>{const s=Y("c-spinner");return m(),P(q,null,{default:A(()=>[p(G,{title:y.value,"section-value":u},null,8,["title"]),p(s,{"active-spin":o.value},null,8,["active-spin"]),p(J,{baseFilter:u,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:g,onExecuteRemove:R}),_("div",ee,[p(U,{class:"subsection-funcionarios",title:y.value,"section-value":u,pointValue:b.value,pointTitle:"Relación con los internos",pointSubtitle:"Frecuencia respuestas respeto y relación con los internos"},null,8,["title","pointValue"]),_("div",se,[_("div",te,[o.value?z("",!0):(m(),P(Q,{key:0,chartType:"bar",optionsAxisX:L.value,optionsAxisY:$.value,plotOptions:B.value,tooltip:E.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(K,{class:"card-preguntas"},{default:A(()=>[ae,(m(!0),V(W,null,H(v.value,(d,f)=>(m(),V("span",ne,k(f+1)+". "+k(d.description),1))),256))]),_:1})])])]),_:1})}}};export{ve as default};
