import{u as B,g as l,r as w,i as L,o as P,f as D,j as F,_ as M,m as p,b as r,a as N,k as X}from"./index-c8938612.js";import{_ as Y}from"./subSideNav-83b573e9.js";import{_ as z}from"./CHeaderBar-52290071.js";import{_ as H}from"./CFilterbar-6e8993b2.js";import{_ as W}from"./CCard-96aa4865.js";import{_ as j}from"./CColunmChart-d78b7003.js";import"./CChartDonutSection-e94e3819.js";import"./CButton-1d70cd49.js";const U={class:"chart-section-principal"},G={class:"relacion-internos"},J={class:"chart-section"},K=r("span",{class:"card-title"},"Preguntas",-1),Q=r("span",{class:"question--value"},"fp31 En general, me preocupo por los internos/as",-1),Z=r("span",{class:"question--value"},"fp32 Creo que el tema carcelario tiene raíces sociales",-1),d=2,ue={__name:"funcionarioInternos",setup(ee){const a=B(),s=l(!1),f=l("Calidad de vida de los funcionarios / Respeto y relación con los internos"),_=l(""),u=l([]),V=l({categories:["fp31","fp32"],crosshair:!1}),A=l({min:1,allowDecimals:!1,max:5,title:{text:""}}),$=l({column:{pointPadding:.2,borderWidth:3}}),k=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=w([]),E=(e,o,t)=>w({id:e,name:o,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),O=e=>e?Math.round(e*100)/100:0,R=async e=>{s.value=!0;const o=c.filter(t=>t.id!==e);u.value=u.value.filter(t=>t.carcelId!==e),m(),c.splice(0,c.length),o.map(t=>c.push(t)),await a.sleep(50),s.value=!1},m=()=>{let e=u.value.reduce((o,t)=>o+t.pointCarcel,0);e=e/u.value.length,e=O(e),_.value=e.toString()},v=async(e,o,t)=>{var h,y;try{let i=((h=a==null?void 0:a.penitenciaria)==null?void 0:h.id)??null,g=((y=a==null?void 0:a.penitenciaria)==null?void 0:y.description)??null,x=a.historyId;if(t&&(i=e,g=o),x&&i){s.value=!0;let q=await X({historyId:x,carcelId:i,categoryId:d,subCategoryId:18});const b=[];let C=0,S=q.filter(n=>n.poundUsed===1);S.map(n=>{const I=n!=null&&n.valuePound?Math.round((n==null?void 0:n.valuePound)*100)/100:0;C+=I,b.push(I)}),u.value.push({carcelId:i,pointCarcel:C/S.length}),m(),c.push(E(i,g,b))}}catch(i){console.log(i)}finally{t||(s.value=!1)}},T=async()=>{s.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),s.value=!1};return(e,o)=>{const t=L("c-spinner");return P(),D(M,null,{default:F(()=>[p(z,{title:f.value,"section-value":d},null,8,["title"]),p(t,{"active-spin":s.value},null,8,["active-spin"]),p(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:v,onExecuteRemove:R}),r("div",U,[p(Y,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:_.value,pointTitle:"Relación con los internos",pointSubtitle:"Frecuencia respuestas respeto y relación con los internos"},null,8,["title","pointValue"]),r("div",G,[r("div",J,[s.value?N("",!0):(P(),D(j,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:A.value,plotOptions:$.value,tooltip:k.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(W,{class:"card-preguntas"},{default:F(()=>[K,Q,Z]),_:1})])])]),_:1})}}};export{ue as default};
