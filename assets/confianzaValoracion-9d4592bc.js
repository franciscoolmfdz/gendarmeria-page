import{u as O,g as n,r as z,o as w,f as F,j as d,_ as B,m as u,n as N,b as t,a as X,k as Y}from"./index-58934414.js";import{_ as j}from"./subSideNav-039fa2ee.js";import{_ as H}from"./CHeaderBar-54785921.js";import{_ as R}from"./CFilterbar-ef9ca298.js";import{_ as D}from"./CCard-167a5880.js";import{_ as U}from"./CColunmChart-0b0cf76e.js";import"./CChartDonutSection-081addcb.js";import"./CButton-4e52f6ba.js";const W={class:"chart-section-principal"},G={class:"confianzaValoracion"},J={class:"chart-section"},K=t("span",{class:"card-title"},"Frecuencia respuestas Confianza y valoración",-1),Q=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),Z=t("span",{class:"card-title"},"Preguntas",-1),ee=t("span",{class:"question--value"},"fp2 Confío en los oficiales que dirigen esta prisión",-1),ae=t("span",{class:"question--value"},"fp6 Los oficiales son accesibles cuando necesito discutir un problema con ellos",-1),te=t("span",{class:"question--value"},"fp7 Me siento valorado por mi jefatura",-1),p=2,fe={__name:"confianzaValoracion",setup(se){const e=O(),s=n(!1),f=n("Calidad de vida de los funcionarios / Confianza y valoración"),_=n(""),m=n(0),P=n({categories:["fp2","fp6","fp7"],crosshair:!1}),$=n({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),q=n({column:{pointPadding:.2,borderWidth:3}}),A=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=z([]),I=(a,c,o)=>z({id:a,name:c,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async a=>{s.value=!0;const c=l.filter(o=>o.id!==a);l.splice(0,l.length),c.map(o=>l.push(o)),await e.sleep(50),s.value=!1},L=a=>a?Math.round(a*100)/100:0,v=async(a,c,o)=>{var h,y;try{let r=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.id)??null,g=((y=e==null?void 0:e.penitenciaria)==null?void 0:y.description)??null,b=e.historyId;if(o&&(r=a,g=c),b&&r){s.value=!0;let E=await Y({historyId:b,carcelId:r,categoryId:p,subCategoryId:10});const x=[];let C=0,S=E.filter(i=>i.poundUsed===1);S.map(i=>{const V=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;C+=V,x.push(V)}),m.value+=C/S.length;let M=L(m.value/e.carcelesSelected.length);_.value=M.toString(),l.push(I(r,g,x))}}catch(r){console.log(r)}finally{o||(s.value=!1)}},T=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async a=>await v(a.id,a.description,!0))),s.value=!1};return(a,c)=>(w(),F(B,null,{default:d(()=>[u(H,{title:f.value,"section-value":p},null,8,["title"]),u(N,{"active-spin":s.value},null,8,["active-spin"]),u(R,{baseFilter:p,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:v,onExecuteRemove:k}),t("div",W,[u(j,{class:"subsection-funcionarios",title:f.value,"section-value":p,pointValue:_.value,pointTitle:"Confianza y valoración",pointSubtitle:"Frecuencia respuestas Confianza y valoración"},null,8,["title","pointValue"]),t("div",G,[t("div",J,[u(D,{class:"card-information"},{default:d(()=>[K,Q]),_:1}),s.value?X("",!0):(w(),F(U,{key:0,chartType:"bar",optionsAxisX:P.value,optionsAxisY:$.value,plotOptions:q.value,tooltip:A.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(D,{class:"card-preguntas"},{default:d(()=>[Z,ee,ae,te]),_:1})])])]),_:1}))}};export{fe as default};
