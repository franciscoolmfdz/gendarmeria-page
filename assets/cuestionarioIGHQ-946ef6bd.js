import{u as q,g as l,r as V,o as G,f as A,j as D,_ as E,m as h,n as N,b as u,a as R,l as T}from"./index-67698df1.js";import{_ as B}from"./subSideNav-8965c7e0.js";import{_ as L}from"./CHeaderBar-7c918a1e.js";import{_ as O}from"./CFilterbar-85744cae.js";import{_ as X}from"./CCard-49a68dc5.js";import{_ as Y}from"./CColunmChart-ab054045.js";import"./CChartDonutSection-29309af5.js";import"./CButton-3cb90a0a.js";const j={class:"chart-section-principal"},z={class:"cuestionario-ghq-funcionario"},W={class:"chart-section"},J=u("span",{class:"card-title"},"Escala de evaluación",-1),K=u("span",{class:"question--value"},"Ausencia de psicopatología: 0 a 2 puntos.",-1),U=u("span",{class:"question--value"},"Sospecha de psicopatología: 3 a 6 puntos.",-1),Z=u("span",{class:"question--value"},"Indicativo de presencia de psicopatología: 7 ó mas puntos.",-1),b=2,re={__name:"cuestionarioIGHQ",setup(ee){const a=q(),n=l(!1),x=l("Calidad de vida de los funcionarios / Cuestionario de Salud GHQ-12 de Goldberg"),_=l([]),S=l(0),C=l({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),P=l({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población"}}),F=l({column:{pointPadding:.2,borderWidth:3}}),H=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),d=V([]),$=(e,s,t)=>V({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:12,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),M=async e=>{n.value=!0;const s=d.filter(t=>t.id!==e);_.value=_.value.filter(t=>t.carcelId!=e),I(),d.splice(0,d.length),s.map(t=>d.push(t)),await a.sleep(50),n.value=!1},I=()=>{let e=_.value.reduce((s,t)=>s+t.pointValue,0);e=e/_.value.length,e=g(e),S.value=e.toString()},Q=(e,s)=>{let t=e[0].recordId,p=0,f=0,o=0,i=0,c=0,y=0;for(let v=0;v<e.length;v++){let r=e[v];r.pound>=0&&(c+=r.pound,y++),r.recordId==t&&r.pound>=0?i+=r.pound:(i<2?p++:i>2&&i<=6?f++:i>6&&o++,i=r.pound,t=r.recordId)}c=c*10/y;const m=p+f+o;return _.value.push({carcelId:s,pointValue:c}),I(),[Math.round(g(p/m*100)),Math.round(g(f/m*100)),Math.round(g(o/m*100))]},g=e=>e?Math.round(e*100)/100:0,w=async(e,s,t)=>{var p,f;try{let o=((p=a==null?void 0:a.penitenciaria)==null?void 0:p.id)??null,i=((f=a==null?void 0:a.penitenciaria)==null?void 0:f.description)??null,c=a.historyId;if(t&&(o=e,i=s),c&&o){n.value=!0;let m=await T({historyId:c,carcelId:o,categoryId:2,subCategoryId:22,embedDetail:!0});const v=Q(m.items,o);d.push($(o,i,v))}}catch(o){console.log(o)}finally{t||(n.value=!1)}},k=async()=>{n.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await w(e.id,e.description,!0))),n.value=!1};return(e,s)=>(G(),A(E,null,{default:D(()=>[h(L,{title:x.value,"section-value":b},null,8,["title"]),h(N,{"active-spin":n.value},null,8,["active-spin"]),h(O,{baseFilter:b,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:w,onExecuteRemove:M}),u("div",j,[h(B,{class:"subsection-funcionarios",title:x.value,"section-value":b,pointValue:S.value,pointTitle:"Cuestionario General de Salud GHQ-12 de Goldberg",pointSubtitle:"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg","point-type":5},null,8,["title","pointValue"]),u("div",z,[u("div",W,[n.value?R("",!0):(G(),A(Y,{key:0,chartType:"bar",optionsAxisX:C.value,optionsAxisY:P.value,plotOptions:F.value,tooltip:H.value,series:d},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),h(X,{class:"card-preguntas"},{default:D(()=>[J,K,U,Z]),_:1})])])]),_:1}))}};export{re as default};
