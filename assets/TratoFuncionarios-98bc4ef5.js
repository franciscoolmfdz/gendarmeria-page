import{g as n,u as q,r as I,o as f,f as P,j as T,_ as z,m as p,n as H,b as m,a as W,c as V,p as j,F as U,k as G,t as A}from"./index-f3eb65f5.js";import{_ as J}from"./subSideNav-aa036e42.js";import{_ as K}from"./CHeaderBar-47a90cd1.js";import{_ as Q}from"./CFilterbar-c0c86506.js";import{a as Z}from"./CChartDonutSection-300b1341.js";import{_ as ee}from"./CColunmChart-26545c43.js";import{g as te}from"./dimensiones-e804350f.js";import"./CButton-184dffc5.js";const se={class:"chart-section-principal"},ae={class:"trato-funcionarios"},ne={class:"chart-section"},oe=m("span",{class:"card-title"},"Preguntas",-1),ie={class:"question--value"},u=1,$=5,ye={__name:"TratoFuncionarios",setup(le){const v=n([]),s=q(),o=n(!1),y=n("Calidad de vida de los internos / Trato interpersonal Funcionario-Interno"),h=n(""),c=n([]),k=n({categories:["1.","2.","3.","4.","5.","6.","7.","8."],crosshair:!1}),L=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=n({column:{pointPadding:.2,borderWidth:3}}),E=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=I([]),N=(e,a,t)=>I({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),O=async e=>{o.value=!0;const a=r.filter(t=>t.id!==e);r.splice(0,r.length),c.value=c.value.filter(t=>t.carcelId!==e),g(),a.map(t=>r.push(t)),await s.sleep(50),o.value=!1},R=e=>e?Math.round(e*100)/100:0,g=()=>{let e=c.value.reduce((a,t)=>a+t.pointCarcel,0);e=e/c.value.length,e=R(e),h.value=e.toString()},x=async(e,a,t)=>{var d,S;try{let l=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,F=((S=s==null?void 0:s.penitenciaria)==null?void 0:S.description)??null,C=s.historyId;if(t&&(l=e,F=a),C&&l){o.value=!0;let X=await G({historyId:C,carcelId:l,categoryId:u,subCategoryId:$});const w=[];let _=0,D=X.filter(i=>i.poundUsed===1);D.map((i,Y)=>{const b=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;v.value[Y].revertValue?_+=5-b:_+=b,w.push(b)}),c.value.push({carcelId:l,pointCarcel:_/D.length}),g(),r.push(N(l,F,w))}}catch(l){console.log(l)}finally{t||(o.value=!1)}},M=async()=>{o.value=!0;const e={categoryId:u,subCategoryId:$};v.value=await te(e),s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),o.value=!1};return(e,a)=>(f(),P(z,null,{default:T(()=>[p(K,{title:y.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":o.value},null,8,["active-spin"]),p(Q,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:O}),m("div",se,[p(J,{title:y.value,"section-value":u,pointValue:h.value,pointTitle:"Trato interpersonal Funcionario-Interno",pointSubtitle:"Promedio respuestas de trato con funcionarios"},null,8,["title","pointValue"]),m("div",ae,[m("div",ne,[o.value?W("",!0):(f(),P(ee,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:B.value,tooltip:E.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Z,{class:"card-preguntas"},{default:T(()=>[oe,(f(!0),V(U,null,j(v.value,(t,d)=>(f(),V("span",ie,A(d+1)+". "+A(t.description),1))),256))]),_:1})])])]),_:1}))}};export{ye as default};
