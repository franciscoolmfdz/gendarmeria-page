import{u as B,g as l,r as q,o as w,f as M,j as P,_ as E,m as p,n as L,b as c,a as N,k as X}from"./index-268772aa.js";import{_ as Y}from"./subSideNav-11a5ce54.js";import{_ as z}from"./CHeaderBar-873738c0.js";import{_ as H}from"./CFilterbar-bf69c50e.js";import{_ as R}from"./CCard-23aa0275.js";import{_ as W}from"./CColunmChart-fc62ac14.js";import"./CChartDonutSection-d5669898.js";import"./CButton-9395e1c7.js";const U={class:"chart-section-principal"},G={class:"motivacion-trabajo"},J={class:"chart-section"},K=c("span",{class:"card-title"},"Preguntas",-1),Q=c("span",{class:"question--value"},"fp14 Me gusta venir a trabajar aquí",-1),Z=c("span",{class:"question--value"},"fp15 Me siento orgulloso del trabajo que hago aquí",-1),ee=c("span",{class:"question--value"},"fp16 Siento que mi trabajo aquí tiene un sentido",-1),d=2,pe={__name:"motivacionTrabajo",setup(te){const a=B(),o=l(!1),f=l("Calidad de vida de los funcionarios / Motivación y significado del trabajo"),_=l(""),u=l([]),D=l({categories:["fp14","fp15","fp16"],crosshair:!1}),F=l({min:1,allowDecimals:!1,max:5}),I=l({column:{pointPadding:.2,borderWidth:3}}),V=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=q([]),$=(e,s,t)=>q({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),A=async e=>{o.value=!0;const s=r.filter(t=>t.id!==e);u.value=u.value.filter(t=>t.carcelId!==e),v(),r.splice(0,r.length),s.map(t=>r.push(t)),await a.sleep(50),o.value=!1},T=e=>e?Math.round(e*100)/100:0,v=()=>{let e=u.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/u.value.length,e=T(e),_.value=e.toString()},m=async(e,s,t)=>{var h,g;try{let n=((h=a==null?void 0:a.penitenciaria)==null?void 0:h.id)??null,y=((g=a==null?void 0:a.penitenciaria)==null?void 0:g.description)??null,b=a.historyId;if(t&&(n=e,y=s),b&&n){o.value=!0;let O=await X({historyId:b,carcelId:n,categoryId:d,subCategoryId:13});const x=[];let S=0,j=O.filter(i=>i.poundUsed===1);j.map(i=>{const C=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;S+=C,x.push(C)}),u.value.push({carcelId:n,pointCarcel:S/j.length}),v(),r.push($(n,y,x))}}catch(n){console.log(n)}finally{t||(o.value=!1)}},k=async()=>{o.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await m(e.id,e.description,!0))),o.value=!1};return(e,s)=>(w(),M(E,null,{default:P(()=>[p(z,{title:f.value,"section-value":d},null,8,["title"]),p(L,{"active-spin":o.value},null,8,["active-spin"]),p(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:m,onExecuteRemove:A}),c("div",U,[p(Y,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:_.value,pointTitle:"Motivación y significado del trabajo",pointSubtitle:"Frecuencia respuestas Motivación y significado del trabajo"},null,8,["title","pointValue"]),c("div",G,[c("div",J,[o.value?N("",!0):(w(),M(W,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:F.value,plotOptions:I.value,tooltip:V.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(R,{class:"card-preguntas"},{default:P(()=>[K,Q,Z,ee]),_:1})])])]),_:1}))}};export{pe as default};
