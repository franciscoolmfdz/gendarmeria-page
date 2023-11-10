import{u as z,g as i,r as q,o as E,f as P,j as w,_ as B,m as u,n as L,b as t,a as M,k as X}from"./index-fc26754b.js";import{_ as Y}from"./subSideNav-9ffd3689.js";import{_ as H}from"./CHeaderBar-9b96237c.js";import{_ as R}from"./CFilterbar-81f2a423.js";import{_ as W}from"./CCard-6c2e717d.js";import{_ as j}from"./CColunmChart-24a48a66.js";import"./CChartDonutSection-0ec9d6f0.js";import"./CButton-8ab6f89a.js";const U={class:"chart-section-principal"},G={class:"trato-internos"},J={class:"chart-section"},K=t("span",{class:"card-title"},"Preguntas",-1),Q=t("span",{class:"question--value"},"1. En esta cárcel me llevo bien con otros internos (4.1) ",-1),Z=t("span",{class:"question--value"},"2. En esta cárcel me siento inseguro o amenazado (4.2) ",-1),ss=t("span",{class:"question--value"},"3. Siento que soy tratado con respeto por otros internos (4.3) ",-1),es=t("span",{class:"question--value"},"4. En esta cárcel se abusa de los internos más débiles (4.4) ",-1),ns=t("span",{class:"question--value"},"5. En esta cárcel me siento seguro de agresiones de otros internos (4.5) ",-1),ts=t("span",{class:"question--value"},"6. En esta cárcel tengo amigos que me ayudan (4.6) ",-1),as=t("span",{class:"question--value"},"7. En esta cárcel temo por mi integridad física (4.7) ",-1),d=1,ms={__name:"TratoInternos",setup(os){const n=z(),a=i(!1),b=i("Calidad de vida de los internos / Trato con otros internos"),_=i(""),r=i([]),T=i({categories:["1.","2.","3.","4.","5.","6.","7."],crosshair:!1}),A=i({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="item-leyend">5. Siempre</span></div>'}}),D=i({column:{pointPadding:.2,borderWidth:3}}),V=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=q([]),$=(s,o,e)=>q({id:s,name:o,data:e,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async s=>{a.value=!0;const o=c.filter(e=>e.id!==s);c.splice(0,c.length),r.value=r.value.filter(e=>e.carcelId!==s),m(),o.map(e=>c.push(e)),await n.sleep(50),a.value=!1},k=s=>s?Math.round(s*100)/100:0,m=()=>{let s=r.value.reduce((o,e)=>o+e.pointCarcel,0);s=s/r.value.length,s=k(s),_.value=s.toString()},v=async(s,o,e)=>{var f,h;try{let p=((f=n==null?void 0:n.penitenciaria)==null?void 0:f.id)??null,y=((h=n==null?void 0:n.penitenciaria)==null?void 0:h.description)??null,g=n.historyId;if(e&&(p=s,y=o),g&&p){a.value=!0;let O=await X({historyId:g,carcelId:p,categoryId:1,subCategoryId:4});const x=[];let S=0,C=O.filter(l=>l.poundUsed===1);C.map(l=>{const I=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;S+=I,x.push(I)}),r.value.push({carcelId:p,pointCarcel:S/C.length}),m(),c.push($(p,y,x))}}catch(p){console.log(p)}finally{e||(a.value=!1)}},N=async()=>{a.value=!0,n.carcelesSelected&&n.carcelesSelected.length>0&&await Promise.all(n.carcelesSelected.map(async s=>await v(s.id,s.description,!0))),a.value=!1};return(s,o)=>(E(),P(B,null,{default:w(()=>[u(H,{title:b.value,"section-value":d},null,8,["title"]),u(L,{"active-spin":a.value},null,8,["active-spin"]),u(R,{baseFilter:d,multipleDisabled:!1,onExecuteMount:N,onExecuteAction:v,onExecuteRemove:F}),t("div",U,[u(Y,{title:b.value,"section-value":d,pointValue:_.value,pointTitle:"Trato con otros internos",pointSubtitle:"Promedio respuestas sobre trato entre los internos"},null,8,["title","pointValue"]),t("div",G,[t("div",J,[a.value?M("",!0):(E(),P(j,{key:0,chartType:"bar",optionsAxisX:T.value,optionsAxisY:A.value,plotOptions:D.value,tooltip:V.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(W,{class:"card-preguntas"},{default:w(()=>[K,Q,Z,ss,es,ns,ts,as]),_:1})])])]),_:1}))}};export{ms as default};