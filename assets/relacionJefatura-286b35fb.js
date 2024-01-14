import{g as n,u as R,r as I,o as f,f as P,j as A,_ as X,m as p,n as Y,b as m,a as q,c as V,p as z,F as H,k as J,t as $}from"./index-f62bec79.js";import{_ as W}from"./subSideNav-a149f5ab.js";import{_ as U}from"./CHeaderBar-768ede49.js";import{_ as G}from"./CFilterbar-96184d99.js";import{a as K}from"./CChartDonutSection-340f5160.js";import{_ as Q}from"./CColunmChart-c9b61f21.js";import{g as Z}from"./dimensiones-80ebc7e2.js";import"./CButton-49b6c568.js";const ee={class:"chart-section-principal"},te={class:"relacion-jefatura"},ae={class:"chart-section"},se=m("span",{class:"card-title"},"Preguntas",-1),ne={class:"question--value"},u=2,le=9,ve={__name:"relacionJefatura",setup(ie){const _=n([]),a=R(),l=n(!1),v=n("Calidad de vida de los funcionarios / Comunicación y relación con la jefatura"),y=n(""),r=n([]),k=n({categories:["1.","2.","3.","4."],crosshair:!1}),L=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),j=n({column:{pointPadding:.2,borderWidth:3}}),B=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=I([]),E=(e,s,t)=>I({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"},formatter:function(){return this.y.toString().replace(".",",")}}}),N=async e=>{l.value=!0;const s=c.filter(t=>t.id!==e);r.value=r.value.filter(t=>t.carcelId!==e),b(),c.splice(0,c.length),s.map(t=>c.push(t)),await a.sleep(50),l.value=!1},O=e=>e?Math.round(e*100)/100:0,b=()=>{let e=r.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/r.value.length,e=O(e),y.value=e.toString()},h=async(e,s,t)=>{var d,g;try{let o=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.id)??null,x=((g=a==null?void 0:a.penitenciaria)==null?void 0:g.description)??null,S=a.historyId;if(t&&(o=e,x=s),S&&o){l.value=!0;let M=await J({historyId:S,carcelId:o,categoryId:u,subCategoryId:9});const C=[];let w=0,D=M.filter(i=>i.poundUsed===1);D.map(i=>{const F=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;w+=F,C.push(F)}),r.value.push({carcelId:o,pointCarcel:w/D.length}),b(),c.push(E(o,x,C))}}catch(o){console.log(o)}finally{t||(l.value=!1)}},T=async()=>{l.value=!0;const e={categoryId:u,subCategoryId:le};_.value=await Z(e),a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async s=>await h(s.id,s.description,!0))),l.value=!1};return(e,s)=>(f(),P(X,null,{default:A(()=>[p(U,{title:v.value,"section-value":u},null,8,["title"]),p(Y,{"active-spin":l.value},null,8,["active-spin"]),p(G,{baseFilter:u,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:h,onExecuteRemove:N}),m("div",ee,[p(W,{class:"subsection-funcionarios",title:v.value,"section-value":u,pointValue:y.value,pointTitle:"Relación con jefatura",pointSubtitle:"Frecuencia respuestas comunicación y relación con la jefatura"},null,8,["title","pointValue"]),m("div",te,[m("div",ae,[l.value?q("",!0):(f(),P(Q,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:j.value,tooltip:B.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(K,{class:"card-preguntas"},{default:A(()=>[se,(f(!0),V(H,null,z(_.value,(t,d)=>(f(),V("span",ne,$(d+1)+". "+$(t.description),1))),256))]),_:1})])])]),_:1}))}};export{ve as default};
