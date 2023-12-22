import{g as o,u as z,r as F,o as u,f as _,j as k,_ as H,m as f,n as R,b as m,a as I,c as V,p as W,F as j,k as U,t as $}from"./index-4db8e7f1.js";import{_ as G}from"./subSideNav-ecbc9dc1.js";import{_ as J}from"./CHeaderBar-c13a152f.js";import{_ as K}from"./CFilterbar-029756cf.js";import{a as Q}from"./CChartDonutSection-e923d460.js";import{_ as Z}from"./CColunmChart-5a632953.js";import{g as ee}from"./dimensiones-39ee516b.js";import"./CButton-82bc19c5.js";const se={class:"chart-section-principal"},te={class:"acceso-programas"},ae={class:"chart-section"},ne={class:"information-section"},oe=m("span",{class:"card-title"},"Preguntas",-1),le={class:"question--value"},d=1,L=3,be={__name:"AccesoProgramas",setup(ie){const v=o([]),t=z(),n=o(!1),b=o("Calidad de vida de los internos / Acceso a programas"),y=o(""),r=o([]),B=o({categories:["1.","2.","3.","4.","5.","6.","7."],crosshair:!1}),E=o({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),N=o({column:{pointPadding:.2,borderWidth:0}}),O=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),T=(e,a,s)=>F({id:e,name:a,data:s,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),M=async e=>{n.value=!0;const a=c.filter(s=>s.id!==e);r.value=r.value.filter(s=>s.carcelId!==e),h(),c.splice(0,c.length),a.map(s=>c.push(s)),await t.sleep(50),n.value=!1},X=e=>e?Math.round(e*100)/100:0,h=()=>{let e=r.value.reduce((a,s,p)=>a+s.pointCarcel,0);e=e/r.value.length,e=X(e),y.value=e.toString()},g=async(e,a,s)=>{var p,x;try{let i=((p=t==null?void 0:t.penitenciaria)==null?void 0:p.id)??null,S=((x=t==null?void 0:t.penitenciaria)==null?void 0:x.description)??null,A=t.historyId;if(s&&(i=e,S=a),A&&i){n.value=!0;let q=await U({historyId:A,carcelId:i,categoryId:d,subCategoryId:L});const C=[];let P=0,w=q.filter(l=>l.poundUsed===1);w.map(l=>{const D=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;P+=D,C.push(D)}),r.value.push({carcelId:i,pointCarcel:P/w.length}),h(),c.push(T(i,S,C))}}catch(i){console.log(i)}finally{s||(n.value=!1)}},Y=async()=>{n.value=!0;const e={categoryId:d,subCategoryId:L};v.value=await ee(e),t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async a=>await g(a.id,a.description,!0))),n.value=!1};return(e,a)=>(u(),_(H,{class:"acceso-programas-section"},{default:k(()=>[f(J,{title:b.value,"section-value":d},null,8,["title"]),f(R,{"active-spin":n.value},null,8,["active-spin"]),f(K,{baseFilter:d,multipleDisabled:!1,onExecuteMount:Y,onExecuteAction:g,onExecuteRemove:M}),m("div",se,[n.value?I("",!0):(u(),_(G,{key:0,title:b.value,"section-value":d,pointValue:y.value,pointTitle:"Acceso a programas",pointSubtitle:"Promedio respuestas sobre acceso a programas"},null,8,["title","pointValue"])),m("div",te,[m("div",ae,[n.value?I("",!0):(u(),_(Z,{key:0,chartType:"bar",optionsAxisX:B.value,optionsAxisY:E.value,plotOptions:N.value,tooltip:O.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),m("div",ne,[f(Q,{class:"card-preguntas"},{default:k(()=>[oe,(u(!0),V(j,null,W(v.value,(s,p)=>(u(),V("span",le,$(p+1)+". "+$(s.description),1))),256))]),_:1})])])])]),_:1}))}};export{be as default};
