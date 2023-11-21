import{u as q,g as u,r as V,o as D,f as G,j as P,_ as E,m as g,n as N,b as p,a as R,l as T}from"./index-47b30902.js";import{_ as B}from"./subSideNav-7fd919fe.js";import{_ as L}from"./CHeaderBar-8086222b.js";import{_ as O}from"./CFilterbar-24b16cbf.js";import{_ as X}from"./CCard-b923f4a4.js";import{_ as Y}from"./CColunmChart-9de26bb9.js";import"./CChartDonutSection-92782cbd.js";import"./CButton-3fe15e8f.js";const j={class:"chart-section-principal"},z={class:"cuestionario-ghq-funcionario"},W={class:"chart-section"},J=p("span",{class:"card-title"},"Escala de evaluación",-1),K=p("span",{class:"question--value"},"Ausencia de psicopatología: 0 a 2 puntos.",-1),U=p("span",{class:"question--value"},"Sospecha de psicopatología: 3 a 6 puntos.",-1),Z=p("span",{class:"question--value"},"Indicativo de presencia de psicopatología: 7 ó mas puntos.",-1),b=2,re={__name:"cuestionarioIGHQ",setup(ee){const s=q(),c=u(!1),x=u("Calidad de vida de los funcionarios / Cuestionario de Salud GHQ-12 de Goldberg"),h=u([]),S=u(0),A=u({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),C=u({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población"}}),M=u({column:{pointPadding:.2,borderWidth:3}}),F=u({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),f=V([]),H=(e,a,t)=>V({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:12,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),$=async e=>{c.value=!0;const a=f.filter(t=>t.id!==e);h.value=h.value.filter(t=>t.carcelId!=e),I(),f.splice(0,f.length),a.map(t=>f.push(t)),await s.sleep(50),c.value=!1},I=()=>{let e=h.value.reduce((a,t)=>a.pointValue.map((i,n)=>i+t.pointValue[n]));e=(e==null?void 0:e.pointValue)??e,e=e.map(a=>a/h.value.length),S.value=e},Q=(e,a)=>{let t=e[0].recordId,i=0,n=0,o=0,l=0,m=0,y=0;for(let v=0;v<e.length;v++){let d=e[v];d.pound>=0&&(m+=d.pound,y++),d.recordId==t&&d.pound>=0?l+=d.pound:(l<2?i++:l>2&&l<=6?n++:l>6&&o++,l=d.pound,t=d.recordId)}m=m*10/y;const r=i+n+o;return h.value.push({carcelId:a,pointValue:[Math.round(_(i/r*100)),Math.round(_(n/r*100)),Math.round(_(o/r*100))]}),I(),[Math.round(_(i/r*100)),Math.round(_(n/r*100)),Math.round(_(o/r*100))]},_=e=>e?Math.round(e*100)/100:0,w=async(e,a,t)=>{var i,n;try{let o=((i=s==null?void 0:s.penitenciaria)==null?void 0:i.id)??null,l=((n=s==null?void 0:s.penitenciaria)==null?void 0:n.description)??null,m=s.historyId;if(t&&(o=e,l=a),m&&o){c.value=!0;let r=await T({historyId:m,carcelId:o,categoryId:2,subCategoryId:22,embedDetail:!0});const v=Q(r.items,o);f.push(H(o,l,v))}}catch(o){console.log(o)}finally{t||(c.value=!1)}},k=async()=>{c.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await w(e.id,e.description,!0))),c.value=!1};return(e,a)=>(D(),G(E,null,{default:P(()=>[g(L,{title:x.value,"section-value":b},null,8,["title"]),g(N,{"active-spin":c.value},null,8,["active-spin"]),g(O,{baseFilter:b,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:w,onExecuteRemove:$}),p("div",j,[g(B,{class:"subsection-funcionarios",title:x.value,"section-value":b,piePoints:S.value,circleDisabled:!0,pointTitle:"Cuestionario General de Salud GHQ-12 de Goldberg",pointSubtitle:"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg","point-type":5},null,8,["title","piePoints"]),p("div",z,[p("div",W,[c.value?R("",!0):(D(),G(Y,{key:0,chartType:"bar",optionsAxisX:A.value,optionsAxisY:C.value,plotOptions:M.value,tooltip:F.value,series:f},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),g(X,{class:"card-preguntas"},{default:P(()=>[J,K,U,Z]),_:1})])])]),_:1}))}};export{re as default};
