import{u as B,g as u,r as V,o as w,f as P,j as D,_ as E,m as g,n as N,b as p,a as R,l as T}from"./index-9ece5f00.js";import{_ as O}from"./subSideNav-849ce6fa.js";import{_ as X}from"./CHeaderBar-c560d413.js";import{_ as Y}from"./CFilterbar-0a385611.js";import{a as j}from"./CChartDonutSection-8542dc28.js";import{_ as z}from"./CColunmChart-2e8ec6dd.js";import"./CButton-f27b5fc8.js";const M={class:"chart-section-principal"},W={class:"cuestionario-ghq-funcionario"},J={class:"chart-section"},K=p("span",{class:"card-title"},"Escala de evaluación",-1),U=p("span",{class:"question--value"},"Ausencia de psicopatología: 0 a 2 puntos.",-1),Z=p("span",{class:"question--value"},"Sospecha de psicopatología: 3 a 6 puntos.",-1),ee=p("span",{class:"question--value"},"Indicativo de presencia de psicopatología: 7 ó mas puntos.",-1),b=2,re={__name:"cuestionarioIGHQ",setup(te){const s=B(),c=u(!1),x=u("Calidad de vida de los funcionarios / Cuestionario de Salud GHQ-12 de Goldberg"),v=u([]),F=u(0),G=u({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),A=["#6ad172","#337e4c","#878787"],C=u({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población"}}),H=u({column:{pointPadding:.2,borderWidth:3}}),$=u({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),f=V([]),L=(e,t,o)=>V({id:e,name:t,data:o,colorByPoint:!0,dataLabels:{enabled:!0,color:"#000",align:"center",x:12,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),Q=async e=>{c.value=!0;const t=f.filter(o=>o.id!==e);v.value=v.value.filter(o=>o.carcelId!=e),S(),f.splice(0,f.length),t.map(o=>f.push(o)),await s.sleep(50),c.value=!1},S=()=>{let e=v.value.reduce((t,o)=>t!=null&&t.pointValue?t.pointValue.map((i,l)=>i+o.pointValue[l]):t.map((i,l)=>i+o.pointValue[l]));e=(e==null?void 0:e.pointValue)??e,e=e.map(t=>parseFloat((t/v.value.length).toFixed(1))),F.value=e},k=(e,t)=>{let o=e[0].recordId,i=0,l=0,a=0,n=0,_=0,y=0;for(let h=0;h<e.length;h++){let d=e[h];d.pound>=0&&(_+=d.pound,y++),d.recordId==o&&d.pound>=0?n+=d.pound:(n<2?i++:n>2&&n<=6?l++:n>6&&a++,n=d.pound,o=d.recordId)}_=_*10/y;const r=i+l+a;return v.value.push({carcelId:t,pointValue:[parseFloat(m(i/r*100).toFixed(1)),parseFloat(m(l/r*100).toFixed(1)),parseFloat(m(a/r*100).toFixed(1))]}),S(),[parseFloat(m(i/r*100).toFixed(1)),parseFloat(m(l/r*100).toFixed(1)),parseFloat(m(a/r*100).toFixed(1))]},m=e=>e?Math.round(e*100)/100:0,I=async(e,t,o)=>{var i,l;try{let a=((i=s==null?void 0:s.penitenciaria)==null?void 0:i.id)??null,n=((l=s==null?void 0:s.penitenciaria)==null?void 0:l.description)??null,_=s.historyId;if(o&&(a=e,n=t),_&&a){c.value=!0;let r=await T({historyId:_,carcelId:a,categoryId:2,subCategoryId:22,embedDetail:!0});const h=k(r.items,a);f.push(L(a,n,h))}}catch(a){console.log(a)}finally{o||(c.value=!1)}},q=async()=>{c.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await I(e.id,e.description,!0))),c.value=!1};return(e,t)=>(w(),P(E,null,{default:D(()=>[g(X,{title:x.value,"section-value":b},null,8,["title"]),g(N,{"active-spin":c.value},null,8,["active-spin"]),g(Y,{baseFilter:b,multipleDisabled:!1,onExecuteMount:q,onExecuteAction:I,onExecuteRemove:Q}),p("div",M,[g(O,{class:"subsection-funcionarios",title:x.value,"section-value":b,piePoints:F.value,circleDisabled:!0,pointTitle:"Cuestionario General de Salud GHQ-12 de Goldberg",pointSubtitle:"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg","point-type":5},null,8,["title","piePoints"]),p("div",W,[p("div",J,[c.value?R("",!0):(w(),P(z,{key:0,chartType:"bar",optionsAxisX:G.value,optionsAxisY:C.value,plotOptions:H.value,tooltip:$.value,series:f,colorList:A},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),g(j,{class:"card-preguntas"},{default:D(()=>[K,U,Z,ee]),_:1})])])]),_:1}))}};export{re as default};
