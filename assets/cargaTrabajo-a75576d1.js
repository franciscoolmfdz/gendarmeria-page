import{g as n,u as q,r as P,o as f,f as j,j as A,_ as z,m as p,n as H,b as m,a as R,c as I,p as W,F as U,k as G,t as V}from"./index-360e99ca.js";import{_ as J}from"./subSideNav-83b68ade.js";import{_ as K}from"./CHeaderBar-d039016f.js";import{_ as Q}from"./CFilterbar-be7e4a52.js";import{a as Z}from"./CChartDonutSection-b7e9946b.js";import{_ as ee}from"./CColunmChart-2e9121dd.js";import{g as ae}from"./dimensiones-8303ecda.js";import"./CButton-120a3296.js";const te={class:"chart-section-principal"},se={class:"carga-trabajo"},ne={class:"chart-section"},le=m("span",{class:"card-title"},"Preguntas",-1),oe={class:"question--value"},u=2,$=12,ve={__name:"cargaTrabajo",setup(ie){const _=n([]),t=q(),l=n(!1),v=n("Calidad de vida de los funcionarios / Carga de trabajo"),b=n(""),r=n([]),k=n({categories:["1.","2.","3.","4."],crosshair:!1}),L=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),T=n({column:{pointPadding:.2,borderWidth:3}}),B=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=P([]),E=(e,s,a)=>P({id:e,name:s,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),N=async e=>{l.value=!0;const s=c.filter(a=>a.id!==e);r.value=r.value.filter(a=>a.carcelId!==e),y(),c.splice(0,c.length),s.map(a=>c.push(a)),await t.sleep(50),l.value=!1},O=e=>e?Math.round(e*100)/100:0,y=()=>{let e=r.value.reduce((s,a)=>s+a.pointCarcel,0);e=e/r.value.length,e=O(e),b.value=e.toString()},h=async(e,s,a)=>{var d,g;try{let i=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,x=((g=t==null?void 0:t.penitenciaria)==null?void 0:g.description)??null,C=t.historyId;if(a&&(i=e,x=s),C&&i){l.value=!0;const X={historyId:C,carcelId:i,categoryId:u,subCategoryId:$};let S=0,Y=await G(X);const w=[];let D=Y.filter(o=>o.poundUsed===1);D.map(o=>{const F=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;S+=F,w.push(F)}),r.value.push({carcelId:i,pointCarcel:S/D.length}),y(),c.push(E(i,x,w))}}catch(i){console.log(i)}finally{a||(l.value=!1)}},M=async()=>{l.value=!0;const e={categoryId:u,subCategoryId:$};_.value=await ae(e),t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async s=>await h(s.id,s.description,!0))),l.value=!1};return(e,s)=>(f(),j(z,null,{default:A(()=>[p(K,{title:v.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":l.value},null,8,["active-spin"]),p(Q,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:h,onExecuteRemove:N}),m("div",te,[p(J,{class:"subsection-funcionarios",title:v.value,"section-value":u,pointValue:b.value,pointTitle:"Carga de trabajo",pointSubtitle:"Frecuencia respuestas carga de trabajo"},null,8,["title","pointValue"]),m("div",se,[m("div",ne,[l.value?R("",!0):(f(),j(ee,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:T.value,tooltip:B.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Z,{class:"card-preguntas"},{default:A(()=>[le,(f(!0),I(U,null,W(_.value,(a,d)=>(f(),I("span",oe,V(d+1)+". "+V(a.description),1))),256))]),_:1})])])]),_:1}))}};export{ve as default};
