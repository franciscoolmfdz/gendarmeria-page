import{u as q,g as n,r as w,o as V,f as G,j as D,_ as E,m as h,n as R,b as r,a as T,l as B}from"./index-45ccebc1.js";import{_ as L}from"./subSideNav-b0532d57.js";import{_ as N}from"./CCard-67b7bef7.js";import{_ as O}from"./CHeaderBar-26ed6fbc.js";import{_ as X}from"./CFilterbar-8a96129f.js";import{_ as Y}from"./CColunmChart-aef5517e.js";import"./CChartDonutSection-a9b194f7.js";import"./CButton-a3569a76.js";const z={class:"chart-section-principal"},M={class:"cuestionario-ghq"},W={class:"chart-section"},j=r("span",{class:"card-title"},"Escala de evaluación",-1),J=r("span",{class:"question--value"},"Ausencia de psicopatología: De 0 a 2 puntos.",-1),K=r("span",{class:"question--value"},"Sospecha de psicopatología: 3 a 6 puntos.",-1),U=r("span",{class:"question--value"},"Indicativo de presencia de psicopatología: 7 ó mas puntos.",-1),y=1,ce={__name:"cuestionarioInternosGHQ",setup(Z){const s=q(),l=n(!1),b=n("Calidad de vida de los internos / Cuestionario de Salud GHQ-12 de Goldberg"),f=n([]),x=n(0),A=n({categories:["Ausencia","Sospecha","Presencia"],crosshair:!1}),C=n({min:0,allowDecimals:!1,title:{text:""}}),H=n({column:{pointPadding:.2,borderWidth:3}}),P=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),u=w([]),$=(e,o,t)=>w({id:e,name:o,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-10,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async e=>{l.value=!0;const o=u.filter(t=>t.id!==e);f.value=f.value.filter(t=>t.carcelId!=e),S(),u.splice(0,u.length),o.map(t=>u.push(t)),await s.sleep(50),l.value=!1},_=e=>e?Math.round(e*100)/100:0,S=()=>{let e=f.value.reduce((o,t)=>o+t.pointValue,0);e=e/f.value.length,e=_(e),x.value=e.toString()},Q=e=>{let o=e[0].recordId,t=0,d=0,p=0,a=0,c=0,m=0;for(let v=0;v<e.length;v++){let i=e[v];i.recordId==o&&i.pound>=0?(a+=i.pound,c+=i.value,m++):(a<2?t++:a>2&&a<=6?d++:a>6&&p++,a=i.pound,o=i.recordId)}c=(c+1.3)/m;const g=t+d+p;return[_(t/g*100),_(d/g*100),_(p/g*100),c]},I=async(e,o,t)=>{var d,p;try{let a=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,c=((p=s==null?void 0:s.penitenciaria)==null?void 0:p.description)??null,m=s.historyId;if(t&&(a=e,c=o),m&&a){l.value=!0;let v=await B({historyId:m,carcelId:a,categoryId:1,subCategoryId:21,embedDetail:!0});const i=Q(v.items);f.value.push({carcelId:a,pointValue:_(i[3])}),S(),u.push($(a,c,i.slice(0,-1)))}}catch(a){console.log(a)}finally{t||(l.value=!1)}},k=async()=>{l.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await I(e.id,e.description,!0))),l.value=!1};return(e,o)=>(V(),G(E,null,{default:D(()=>[h(O,{title:b.value,"section-value":y},null,8,["title"]),h(R,{"active-spin":l.value},null,8,["active-spin"]),h(X,{baseFilter:y,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:I,onExecuteRemove:F}),r("div",z,[h(L,{title:b.value,"section-value":y,pointValue:x.value,pointTitle:"Cuestionario General de Salud GHQ-12 de Goldberg",pointSubtitle:"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg"},null,8,["title","pointValue"]),r("div",M,[r("div",W,[l.value?T("",!0):(V(),G(Y,{key:0,chartType:"bar",optionsAxisX:A.value,optionsAxisY:C.value,plotOptions:H.value,tooltip:P.value,series:u},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),h(N,{class:"card-preguntas"},{default:D(()=>[j,J,K,U]),_:1})])])]),_:1}))}};export{ce as default};
