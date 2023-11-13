import{u as q,g as n,r as V,o as G,f as A,j as D,_ as E,m as h,n as R,b as u,a as T,l as B}from"./index-0a5b9537.js";import{_ as L}from"./subSideNav-2bf860ce.js";import{_ as N}from"./CCard-a029c455.js";import{_ as O}from"./CHeaderBar-eb61e211.js";import{_ as X}from"./CFilterbar-da100325.js";import{_ as Y}from"./CColunmChart-70b68ed0.js";import"./CChartDonutSection-36ff8a6f.js";import"./CButton-a7ca8310.js";const j={class:"chart-section-principal"},z={class:"cuestionario-ghq"},W={class:"chart-section"},J=u("span",{class:"card-title"},"Escala de evaluación",-1),K=u("span",{class:"question--value"},"Ausencia de psicopatología: 0 a 2 puntos.",-1),U=u("span",{class:"question--value"},"Sospecha de psicopatología: 3 a 6 puntos.",-1),Z=u("span",{class:"question--value"},"Presencia de psicopatología: 7 ó mas puntos.",-1),b=1,ce={__name:"cuestionarioInternosGHQ",setup(ee){const a=q(),l=n(!1),x=n("Calidad de vida de los internos / Cuestionario de Salud GHQ-12 de Goldberg"),f=n([]),S=n(0),P=n({categories:["Ausencia","Sospecha","Presencia"],crosshair:!1}),C=n({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población"}}),H=n({column:{pointPadding:.2,borderWidth:3}}),F=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),d=V([]),$=(e,s,t)=>V({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:11,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),Q=async e=>{l.value=!0;const s=d.filter(t=>t.id!==e);f.value=f.value.filter(t=>t.carcelId!=e),I(),d.splice(0,d.length),s.map(t=>d.push(t)),await a.sleep(50),l.value=!1},g=e=>e?Math.round(e*100)/100:0,I=()=>{let e=f.value.reduce((s,t)=>s+t.pointValue,0);e=e/f.value.length,e=g(e),S.value=e.toString()},M=(e,s)=>{let t=e[0].recordId,p=0,_=0,o=0,i=0,r=0,y=0;for(let v=0;v<e.length;v++){let c=e[v];c.pound>=0&&(r+=c.pound,y++),c.recordId==t&&c.pound>=0?i+=c.pound:(i<2?p++:i>2&&i<=6?_++:i>6&&o++,i=c.pound,t=c.recordId)}r=r*10/y;const m=p+_+o;return f.value.push({carcelId:s,pointValue:r}),I(),[Math.round(g(p/m*100)),Math.round(g(_/m*100)),Math.round(g(o/m*100))]},w=async(e,s,t)=>{var p,_;try{let o=((p=a==null?void 0:a.penitenciaria)==null?void 0:p.id)??null,i=((_=a==null?void 0:a.penitenciaria)==null?void 0:_.description)??null,r=a.historyId;if(t&&(o=e,i=s),r&&o){l.value=!0;let m=await B({historyId:r,carcelId:o,categoryId:1,subCategoryId:21,embedDetail:!0});const v=M(m.items,o);d.push($(o,i,v))}}catch(o){console.log(o)}finally{t||(l.value=!1)}},k=async()=>{l.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await w(e.id,e.description,!0))),l.value=!1};return(e,s)=>(G(),A(E,null,{default:D(()=>[h(O,{title:x.value,"section-value":b},null,8,["title"]),h(R,{"active-spin":l.value},null,8,["active-spin"]),h(X,{baseFilter:b,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:w,onExecuteRemove:Q}),u("div",j,[h(L,{title:x.value,"section-value":b,pointValue:S.value,pointTitle:"Cuestionario General de Salud GHQ-12 de Goldberg",pointSubtitle:"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg","point-type":5},null,8,["title","pointValue"]),u("div",z,[u("div",W,[l.value?T("",!0):(G(),A(Y,{key:0,chartType:"bar",optionsAxisX:P.value,optionsAxisY:C.value,plotOptions:H.value,tooltip:F.value,series:d},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),h(N,{class:"card-preguntas"},{default:D(()=>[J,K,U,Z]),_:1})])])]),_:1}))}};export{ce as default};
