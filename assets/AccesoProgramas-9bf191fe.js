import{u as L,g as i,r as S,o as P,f as w,j as C,_ as M,l as u,m as N,b as t,a as X,k as Y}from"./index-156a2515.js";import{_ as j}from"./subSideNav-f9491fc1.js";import{_ as z}from"./CHeaderBar-44e391f7.js";import{_ as H}from"./CFilterbar-076f859d.js";import{_ as R}from"./CCard-ca6b3add.js";import{_ as W}from"./CColunmChart-547630b8.js";import"./CButton-15782861.js";const U={class:"chart-section-principal"},G={class:"acceso-programas"},J={class:"chart-section"},K=t("span",{class:"card-title"},"Preguntas",-1),Q=t("span",{class:"question--value"},"3.1 Aquí he podido trabajar y ganar algo de plata",-1),Z=t("span",{class:"question--value"},"3.2 En esta cárcel he recibido capacitación laboral ",-1),ee=t("span",{class:"question--value"},"3.3 Aquí he podido hablar con asistente social",-1),ae=t("span",{class:"question--value"},"3.4 Aquí he podido conversar con la psicóloga",-1),te=t("span",{class:"question--value"},"3.5 Aquí puedo ir donde el paramédico si lo necesito",-1),se=t("span",{class:"question--value"},"3.6 En esta cárcel he podido ir a la escuela o liceo penal",-1),oe=t("span",{class:"question--value"},"3.7 Aquí se puede ir a talleres de alcohol o drogas si se necesita",-1),p=1,fe={__name:"AccesoProgramas",setup(le){const e=L(),s=i(!1),d=i("Calidad de vida de los internos / Acceso a programas"),_=i(""),f=i(0),D=i({categories:["3.1","3.2","3.3","3.4","3.5","3.6","3.7"],crosshair:!1}),V=i({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),$=i({column:{pointPadding:.2,borderWidth:3}}),E=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=S([]),F=(a,c,o)=>S({id:a,name:c,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async a=>{s.value=!0;const c=n.filter(o=>o.id!==a);n.splice(0,n.length),c.map(o=>n.push(o)),await e.sleep(50),s.value=!1},k=a=>a?Math.round(a*100)/100:0,m=async(a,c,o)=>{var h,v;try{let r=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.id)??null,g=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.description)??null,y=e.historyId;if(o&&(r=a,g=c),y&&r){s.value=!0;let O=await Y({historyId:y,carcelId:r,categoryId:p,subCategoryId:3});const b=[];let x=0,A=O.filter(l=>l.poundUsed===1);A.map(l=>{const q=l!=null&&l.promPound?Math.round((l==null?void 0:l.promPound)*100)/100:0;x+=q,b.push(q)}),f.value+=x/A.length;let B=k(f.value/e.carcelesSelected.length);_.value=B.toString(),n.push(F(r,g,b))}}catch(r){console.log(r)}finally{o||(s.value=!1)}},T=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async a=>await m(a.id,a.description,!0))),s.value=!1};return(a,c)=>(P(),w(M,null,{default:C(()=>[u(z,{title:d.value,"section-value":p},null,8,["title"]),u(N,{"active-spin":s.value},null,8,["active-spin"]),u(H,{baseFilter:p,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:m,onExecuteRemove:I}),t("div",U,[u(j,{title:d.value,"section-value":p,pointValue:_.value,pointTitle:"Acceso a programas",pointSubtitle:"Promedio respuestas sobre acceso a programas"},null,8,["title","pointValue"]),t("div",G,[t("div",J,[s.value?X("",!0):(P(),w(W,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:E.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(R,{class:"card-preguntas"},{default:C(()=>[K,Q,Z,ee,ae,te,se,oe]),_:1})])])]),_:1}))}};export{fe as default};