import{g as n,u as q,r as F,o as f,f as I,j as P,_ as z,m as p,n as H,b as m,a as R,c as V,p as W,F as j,k as U,t as $}from"./index-54860183.js";import{_ as G}from"./subSideNav-d9c416bd.js";import{_ as J}from"./CHeaderBar-501feae6.js";import{_ as K}from"./CFilterbar-43c804dc.js";import{a as Q}from"./CChartDonutSection-db332b04.js";import{_ as Z}from"./CColunmChart-4777448a.js";import{g as ee}from"./dimensiones-d5ba8a8c.js";import"./CButton-b5f860aa.js";const te={class:"chart-section-principal"},se={class:"apego-institusion"},ae={class:"chart-section"},ne=m("span",{class:"card-title"},"Preguntas",-1),ie={class:"question--value"},u=2,k=11,ve={__name:"apegoInstitucional",setup(oe){const _=n([]),s=q(),i=n(!1),v=n("Calidad de vida de los funcionarios / Apego institucional"),y=n(""),r=n([]),L=n({categories:["1.","2."],crosshair:!1,formatter:function(){return this.y.toString().replace(".",",")}}),B=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),E=n({column:{pointPadding:.2,borderWidth:3}}),N=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),O=(e,a,t)=>F({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"},formatter:function(){return this.y.toString().replace(".",",")}}}),T=async e=>{i.value=!0;const a=c.filter(t=>t.id!==e);r.value=r.value.filter(t=>t.carcelId!==e),b(),c.splice(0,c.length),a.map(t=>c.push(t)),await s.sleep(50),i.value=!1},b=()=>{let e=r.value.reduce((a,t)=>a+t.pointCarcel,0);e=e/r.value.length,e=M(e),y.value=e.toString()},M=e=>e?Math.round(e*100)/100:0,h=async(e,a,t)=>{var d,g;try{let l=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,x=((g=s==null?void 0:s.penitenciaria)==null?void 0:g.description)??null,S=s.historyId;if(t&&(l=e,x=a),S&&l){i.value=!0;let Y=await U({historyId:S,carcelId:l,categoryId:u,subCategoryId:k});const C=[];let w=0,A=Y.filter(o=>o.poundUsed===1);A.map(o=>{const D=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;w+=D,C.push(D)}),r.value.push({carcelId:l,pointCarcel:w/A.length}),b(),c.push(O(l,x,C))}}catch(l){console.log(l)}finally{t||(i.value=!1)}},X=async()=>{i.value=!0;const e={categoryId:u,subCategoryId:k};_.value=await ee(e),s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await h(a.id,a.description,!0))),i.value=!1};return(e,a)=>(f(),I(z,null,{default:P(()=>[p(J,{title:v.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":i.value},null,8,["active-spin"]),p(K,{baseFilter:u,multipleDisabled:!1,onExecuteMount:X,onExecuteAction:h,onExecuteRemove:T}),m("div",te,[p(G,{class:"subsection-funcionarios",title:v.value,"section-value":u,pointValue:y.value,pointTitle:"Apego institucional",pointSubtitle:"Frecuencia de respuestas apego institucional"},null,8,["title","pointValue"]),m("div",se,[m("div",ae,[i.value?R("",!0):(f(),I(Z,{key:0,chartType:"bar",optionsAxisX:L.value,optionsAxisY:B.value,plotOptions:E.value,tooltip:N.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Q,{class:"card-preguntas"},{default:P(()=>[ne,(f(!0),V(j,null,W(_.value,(t,d)=>(f(),V("span",ie,$(d+1)+". "+$(t.description),1))),256))]),_:1})])])]),_:1}))}};export{ve as default};
