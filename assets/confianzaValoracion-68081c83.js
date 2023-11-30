import{g as n,u as Y,r as F,o as f,f as z,j as P,_ as q,m as p,n as H,b as m,a as R,c as A,p as W,F as j,k as U,t as I}from"./index-23ea3b69.js";import{_ as G}from"./subSideNav-81fa67f6.js";import{_ as J}from"./CHeaderBar-6cf1dce7.js";import{_ as K}from"./CFilterbar-8866a34c.js";import{a as Q}from"./CChartDonutSection-dad97b0b.js";import{_ as Z}from"./CColunmChart-dc304c10.js";import{g as ee}from"./dimensiones-3663bf73.js";import"./CButton-f4686af5.js";const ae={class:"chart-section-principal"},te={class:"confianzaValoracion"},se={class:"chart-section"},ne=m("span",{class:"card-title"},"Preguntas",-1),oe={class:"question--value"},u=2,$=10,_e={__name:"confianzaValoracion",setup(le){const v=n([]),t=Y(),o=n(!1),_=n("Calidad de vida de los funcionarios / Confianza y valoración"),y=n(""),r=n([]),k=n({categories:["1.","2.","3."],crosshair:!1}),L=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=n({column:{pointPadding:.2,borderWidth:3}}),E=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),N=(e,s,a)=>F({id:e,name:s,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),O=async e=>{o.value=!0;const s=c.filter(a=>a.id!==e);r.value=r.value.filter(a=>a.carcelId!==e),b(),c.splice(0,c.length),s.map(a=>c.push(a)),await t.sleep(50),o.value=!1},T=e=>e?Math.round(e*100)/100:0,b=()=>{let e=r.value.reduce((s,a)=>s+a.pointCarcel,0);e=e/r.value.length,e=T(e),y.value=e.toString()},h=async(e,s,a)=>{var d,g;try{let i=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,x=((g=t==null?void 0:t.penitenciaria)==null?void 0:g.description)??null,C=t.historyId;if(a&&(i=e,x=s),C&&i){o.value=!0;let X=await U({historyId:C,carcelId:i,categoryId:u,subCategoryId:$});const S=[];let V=0,w=X.filter(l=>l.poundUsed===1);w.map(l=>{const D=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;V+=D,S.push(D)}),r.value.push({carcelId:i,pointCarcel:V/w.length}),b(),c.push(N(i,x,S))}}catch(i){console.log(i)}finally{a||(o.value=!1)}},M=async()=>{o.value=!0;const e={categoryId:u,subCategoryId:$};v.value=await ee(e),t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async s=>await h(s.id,s.description,!0))),o.value=!1};return(e,s)=>(f(),z(q,null,{default:P(()=>[p(J,{title:_.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":o.value},null,8,["active-spin"]),p(K,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:h,onExecuteRemove:O}),m("div",ae,[p(G,{class:"subsection-funcionarios",title:_.value,"section-value":u,pointValue:y.value,pointTitle:"Confianza y valoración",pointSubtitle:"Frecuencia respuestas Confianza y valoración"},null,8,["title","pointValue"]),m("div",te,[m("div",se,[o.value?R("",!0):(f(),z(Z,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:B.value,tooltip:E.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Q,{class:"card-preguntas"},{default:P(()=>[ne,(f(!0),A(j,null,W(v.value,(a,d)=>(f(),A("span",oe,I(d+1)+". "+I(a.description),1))),256))]),_:1})])])]),_:1}))}};export{_e as default};
