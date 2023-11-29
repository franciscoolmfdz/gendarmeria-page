import{g as n,u as q,r as F,o as m,f as R,j as V,_ as z,m as p,n as H,b as f,a as W,c as A,p as j,F as U,k as G,t as I}from"./index-27498bb2.js";import{_ as J}from"./subSideNav-ab04d332.js";import{_ as K}from"./CHeaderBar-5da83c53.js";import{_ as Q}from"./CFilterbar-65cf0105.js";import{a as Z}from"./CChartDonutSection-bcde11d7.js";import{_ as ee}from"./CColunmChart-5fac13b3.js";import{g as te}from"./dimensiones-f1be8155.js";import"./CButton-b35e2b14.js";const se={class:"chart-section-principal"},ae={class:"regimen-carcel"},ne={class:"chart-section"},le=f("span",{class:"card-title"},"Preguntas",-1),ie={class:"question--value"},u=1,$=6,ye={__name:"RegimenCarcel",setup(oe){const v=n([]),l=n(!1),s=q(),y=n("Calidad de vida de los internos / Régimen de la cárcel"),h=n(""),r=n([]),k=n({categories:["1.","2.","3.","4.","5.","6.","7."],crosshair:!1}),L=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=n({column:{pointPadding:.2,borderWidth:3}}),E=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),N=(e,a,t)=>F({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),O=async e=>{l.value=!0;const a=c.filter(t=>t.id!==e);r.value=r.value.filter(t=>t.carcelId!==e),g(),c.splice(0,c.length),a.map(t=>c.push(t)),await s.sleep(50),l.value=!1},T=e=>e?Math.round(e*100)/100:0,g=()=>{let e=r.value.reduce((a,t)=>a+t.pointCarcel,0);e=e/r.value.length,e=T(e),h.value=e.toString()},x=async(e,a,t)=>{var d,C;try{let o=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,S=((C=s==null?void 0:s.penitenciaria)==null?void 0:C.description)??null,w=s.historyId;if(t&&(o=e,S=a),w&&o){l.value=!0;let X=await G({historyId:w,carcelId:o,categoryId:u,subCategoryId:$});const D=[];let _=0,P=X.filter(i=>i.poundUsed===1);P.map((i,Y)=>{const b=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;v.value[Y].revertValue?_+=5-b:_+=b,D.push(b)}),r.value.push({carcelId:o,pointCarcel:_/P.length}),g(),c.push(N(o,S,D))}}catch(o){console.log(o)}finally{t||(l.value=!1)}},M=async()=>{l.value=!0;const e={categoryId:u,subCategoryId:$};v.value=await te(e),s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),l.value=!1};return(e,a)=>(m(),R(z,null,{default:V(()=>[p(K,{title:y.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":l.value},null,8,["active-spin"]),p(Q,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:O}),f("div",se,[p(J,{title:y.value,"section-value":u,pointValue:h.value,pointTitle:"Régimen de la cárcel",pointSubtitle:"Promedio respuestas régimen de la cárcel"},null,8,["title","pointValue"]),f("div",ae,[f("div",ne,[l.value?W("",!0):(m(),R(ee,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:B.value,tooltip:E.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Z,{class:"card-preguntas"},{default:V(()=>[le,(m(!0),A(U,null,j(v.value,(t,d)=>(m(),A("span",ie,I(d+1)+". "+I(t.description),1))),256))]),_:1})])])]),_:1}))}};export{ye as default};
