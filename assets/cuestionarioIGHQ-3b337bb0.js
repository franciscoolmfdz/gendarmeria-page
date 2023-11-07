import{u as k,g as n,r as w,o as V,f as D,j as G,_ as q,m as h,n as E,b as c,a as N,l as R}from"./index-fc26754b.js";import{_ as T}from"./subSideNav-9ffd3689.js";import{_ as B}from"./CHeaderBar-9b96237c.js";import{_ as L}from"./CFilterbar-81f2a423.js";import{_ as O}from"./CCard-6c2e717d.js";import{_ as X}from"./CColunmChart-24a48a66.js";import"./CChartDonutSection-0ec9d6f0.js";import"./CButton-8ab6f89a.js";const Y={class:"chart-section-principal"},z={class:"cuestionario-ghq-funcionario"},W={class:"chart-section"},j=c("span",{class:"card-title"},"Escala de evaluación",-1),J=c("span",{class:"question--value"},"Ausencia de psicopatología: De 0 a 2 puntos.",-1),K=c("span",{class:"question--value"},"Sospecha de psicopatología: 3 a 6 puntos.",-1),U=c("span",{class:"question--value"},"Indicativo de presencia de psicopatología: 7 ó mas puntos.",-1),y=2,ce={__name:"cuestionarioIGHQ",setup(Z){const s=k(),l=n(!1),b=n("Calidad de vida de los funcionarios / Cuestionario de Salud GHQ-12 de Goldberg"),f=n([]),x=n(0),A=n({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),C=n({min:0,allowDecimals:!1,title:{text:""}}),H=n({column:{pointPadding:.2,borderWidth:3}}),P=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=w([]),$=(e,o,t)=>w({id:e,name:o,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async e=>{l.value=!0;const o=r.filter(t=>t.id!==e);f.value=f.value.filter(t=>t.carcelId!=e),S(),r.splice(0,r.length),o.map(t=>r.push(t)),await s.sleep(50),l.value=!1},S=()=>{let e=f.value.reduce((o,t)=>o+t.pointValue,0);e=e/f.value.length,e=_(e),x.value=e.toString()},M=e=>{let o=e[0].recordId,t=0,u=0,d=0,a=0,p=0,m=0;for(let v=0;v<e.length;v++){let i=e[v];i.recordId==o&&i.pound>=0?(a+=i.pound,p+=i.value,m++):(a<2?t++:a>2&&a<=6?u++:a>6&&d++,a=i.pound,o=i.recordId)}p=(p+1.3)/m;const g=t+u+d;return[Math.round(_(t/g*100)),Math.round(_(u/g*100)),Math.round(_(d/g*100))]},_=e=>e?Math.round(e*100)/100:0,I=async(e,o,t)=>{var u,d;try{let a=((u=s==null?void 0:s.penitenciaria)==null?void 0:u.id)??null,p=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.description)??null,m=s.historyId;if(t&&(a=e,p=o),m&&a){l.value=!0;let v=await R({historyId:m,carcelId:a,categoryId:2,subCategoryId:22,embedDetail:!0});const i=M(v.items);f.value.push({carcelId:a,pointValue:_(Math.max(...i))}),S(),r.push($(a,p,i.slice(0,-1)))}}catch(a){console.log(a)}finally{t||(l.value=!1)}},Q=async()=>{l.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await I(e.id,e.description,!0))),l.value=!1};return(e,o)=>(V(),D(q,null,{default:G(()=>[h(B,{title:b.value,"section-value":y},null,8,["title"]),h(E,{"active-spin":l.value},null,8,["active-spin"]),h(L,{baseFilter:y,multipleDisabled:!1,onExecuteMount:Q,onExecuteAction:I,onExecuteRemove:F}),c("div",Y,[h(T,{class:"subsection-funcionarios",title:b.value,"section-value":y,pointValue:x.value,pointTitle:"Cuestionario General de Salud GHQ-12 de Goldberg",pointSubtitle:"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),c("div",z,[c("div",W,[l.value?N("",!0):(V(),D(X,{key:0,chartType:"bar",optionsAxisX:A.value,optionsAxisY:C.value,plotOptions:H.value,tooltip:P.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),h(O,{class:"card-preguntas"},{default:G(()=>[j,J,K,U]),_:1})])])]),_:1}))}};export{ce as default};
