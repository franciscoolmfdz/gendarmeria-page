import{g as n,u as q,r as P,o as f,f as T,j as F,_ as z,m as p,n as H,b as m,a as W,c as V,p as j,F as U,k as G,t as A}from"./index-f528de0d.js";import{_ as J}from"./subSideNav-7c587a52.js";import{_ as K}from"./CHeaderBar-27c2be18.js";import{_ as Q}from"./CFilterbar-833c2caf.js";import{a as Z}from"./CChartDonutSection-7774fca5.js";import{_ as ee}from"./CColunmChart-e8fc032a.js";import{g as te}from"./dimensiones-b7993d3b.js";import"./CButton-eccee199.js";const se={class:"chart-section-principal"},ae={class:"trato-internos"},ne={class:"chart-section"},oe=m("span",{class:"card-title"},"Preguntas",-1),le={class:"question--value"},u=1,$=4,ye={__name:"TratoInternos",setup(ie){const v=n([]),s=q(),o=n(!1),y=n("Calidad de vida de los internos / Trato con otros Internos(as)"),h=n(""),c=n([]),k=n({categories:["1.","2.","3.","4.","5.","6.","7."],crosshair:!1}),L=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=n({column:{pointPadding:.2,borderWidth:3}}),E=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=P([]),N=(e,a,t)=>P({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),O=async e=>{o.value=!0;const a=r.filter(t=>t.id!==e);r.splice(0,r.length),c.value=c.value.filter(t=>t.carcelId!==e),g(),a.map(t=>r.push(t)),await s.sleep(50),o.value=!1},R=e=>e?Math.round(e*100)/100:0,g=()=>{let e=c.value.reduce((a,t)=>a+t.pointCarcel,0);e=e/c.value.length,e=R(e),h.value=e.toString()},x=async(e,a,t)=>{var d,S;try{let i=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,C=((S=s==null?void 0:s.penitenciaria)==null?void 0:S.description)??null,I=s.historyId;if(t&&(i=e,C=a),I&&i){o.value=!0;let X=await G({historyId:I,carcelId:i,categoryId:u,subCategoryId:$});const w=[];let _=0,D=X.filter(l=>l.poundUsed===1);D.map((l,Y)=>{const b=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;v.value[Y].revertValue?_+=5-b:_+=b,w.push(b)}),c.value.push({carcelId:i,pointCarcel:_/D.length}),g(),r.push(N(i,C,w))}}catch(i){console.log(i)}finally{t||(o.value=!1)}},M=async()=>{o.value=!0;const e={categoryId:u,subCategoryId:$};v.value=await te(e),s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),o.value=!1};return(e,a)=>(f(),T(z,{class:"contenedor-trato-internos"},{default:F(()=>[p(K,{title:y.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":o.value},null,8,["active-spin"]),p(Q,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:O}),m("div",se,[p(J,{title:y.value,"section-value":u,pointValue:h.value,pointTitle:"Trato con otros Internos(as)",pointSubtitle:"Promedio respuestas sobre trato entre los internos"},null,8,["title","pointValue","pointTitle"]),m("div",ae,[m("div",ne,[o.value?W("",!0):(f(),T(ee,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:B.value,tooltip:E.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Z,{class:"card-preguntas"},{default:F(()=>[oe,(f(!0),V(U,null,j(v.value,(t,d)=>(f(),V("span",le,A(d+1)+". "+A(t.description),1))),256))]),_:1})])])]),_:1}))}};export{ye as default};
