import{u as B,g as i,r as A,o as I,f as C,j as D,_ as L,m as u,n as N,b as r,a as X,k as Y}from"./index-5ea9ca80.js";import{_ as j}from"./subSideNav-65496e07.js";import{_ as z}from"./CHeaderBar-7cb89305.js";import{_ as H}from"./CFilterbar-70d05e16.js";import{_ as R}from"./CCard-e5dc31a5.js";import{_ as W}from"./CColunmChart-129f62cb.js";import"./CChartDonutSection-fa8a7a2b.js";import"./CButton-499e7585.js";const U={class:"chart-section-principal"},G={class:"apego-institusion"},J={class:"chart-section"},K=r("span",{class:"card-title"},"Preguntas",-1),Q=r("span",{class:"question--value"},"fp8 Me identifico con las metas y objetivos de la institución",-1),Z=r("span",{class:"question--value"},"fp9 Siento compromiso con lo que pase en esta cárcel",-1),p=2,ue={__name:"apegoInstitucional",setup(ee){const e=B(),a=i(!1),d=i("Calidad de vida de los funcionarios / Apego institucional"),f=i(""),_=i(0),F=i({categories:["fp8","fp9"],crosshair:!1}),P=i({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),V=i({column:{pointPadding:.2,borderWidth:3}}),$=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=A([]),k=(t,l,s)=>A({id:t,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),T=async t=>{a.value=!0;const l=n.filter(s=>s.id!==t);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),a.value=!1},E=t=>t?Math.round(t*100)/100:0,m=async(t,l,s)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,g=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,y=e.historyId;if(s&&(c=t,g=l),y&&c){a.value=!0;let O=await Y({historyId:y,carcelId:c,categoryId:p,subCategoryId:11});const x=[];let b=0,S=O.filter(o=>o.poundUsed===1);S.map(o=>{const w=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;b+=w,x.push(w)}),_.value+=b/S.length;let q=E(_.value/e.carcelesSelected.length);f.value=q.toString(),n.push(k(c,g,x))}}catch(c){console.log(c)}finally{s||(a.value=!1)}},M=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),a.value=!1};return(t,l)=>(I(),C(L,null,{default:D(()=>[u(z,{title:d.value,"section-value":p},null,8,["title"]),u(N,{"active-spin":a.value},null,8,["active-spin"]),u(H,{baseFilter:p,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:m,onExecuteRemove:T}),r("div",U,[u(j,{class:"subsection-funcionarios",title:d.value,"section-value":p,pointValue:f.value,pointTitle:"Apego institucional",pointSubtitle:"Frecuencia de respuestas apego institucional"},null,8,["title","pointValue"]),r("div",G,[r("div",J,[a.value?X("",!0):(I(),C(W,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:P.value,plotOptions:V.value,tooltip:$.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(R,{class:"card-preguntas"},{default:D(()=>[K,Q,Z]),_:1})])])]),_:1}))}};export{ue as default};
