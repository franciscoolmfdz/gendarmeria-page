import{u as z,g as i,r as w,o as P,f as D,j as F,_ as B,m as p,n as L,b as n,a as N,k as R}from"./index-fc26754b.js";import{_ as X}from"./subSideNav-9ffd3689.js";import{_ as Y}from"./CHeaderBar-9b96237c.js";import{_ as H}from"./CFilterbar-81f2a423.js";import{_ as W}from"./CCard-6c2e717d.js";import{_ as U}from"./CColunmChart-24a48a66.js";import"./CChartDonutSection-0ec9d6f0.js";import"./CButton-8ab6f89a.js";const G={class:"chart-section-principal"},J={class:"carga-trabajo"},K={class:"chart-section"},Q=n("span",{class:"card-title"},"Preguntas",-1),Z=n("span",{class:"question--value"},"fp10 Me dan una cantidad de responsabilidad adecuada en esta cárcel",-1),ee=n("span",{class:"question--value"},"fp11 Tengo el nivel apropiado de autoridad para hacer mi trabajo correctamente.",-1),ae=n("span",{class:"question--value"},"fp12 Estoy satisfecho/a con la formación que he recibido para hacer mi trabajo",-1),te=n("span",{class:"question--value"},"fp13 Recibo el apoyo y respaldo necesario (desde la jefatura/institución) para las labores que debo realizar",-1),d=2,de={__name:"cargaTrabajo",setup(se){const t=z(),s=i(!1),f=i("Calidad de vida de los funcionarios / Carga de trabajo"),_=i(""),u=i([]),I=i({categories:["fp10","fp11","fp12","fp13"],crosshair:!1}),T=i({min:1,allowDecimals:!1,max:5,title:{text:""}}),V=i({column:{pointPadding:.2,borderWidth:3}}),$=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=w([]),q=(e,o,a)=>w({id:e,name:o,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),A=async e=>{s.value=!0;const o=c.filter(a=>a.id!==e);u.value=u.value.filter(a=>a.carcelId!==e),v(),c.splice(0,c.length),o.map(a=>c.push(a)),await t.sleep(50),s.value=!1},k=e=>e?Math.round(e*100)/100:0,v=()=>{let e=u.value.reduce((o,a)=>o+a.pointCarcel,0);e=e/u.value.length,e=k(e),_.value=e.toString()},m=async(e,o,a)=>{var h,b;try{let r=((h=t==null?void 0:t.penitenciaria)==null?void 0:h.id)??null,g=((b=t==null?void 0:t.penitenciaria)==null?void 0:b.description)??null,y=t.historyId;if(a&&(r=e,g=o),y&&r){s.value=!0;const M={historyId:y,carcelId:r,categoryId:d,subCategoryId:12};let x=0,O=await R(M);const C=[];let S=O.filter(l=>l.poundUsed===1);S.map(l=>{const j=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;x+=j,C.push(j)}),u.value.push({carcelId:r,pointCarcel:x/S.length}),v(),c.push(q(r,g,C))}}catch(r){console.log(r)}finally{a||(s.value=!1)}},E=async()=>{s.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await m(e.id,e.description,!0))),s.value=!1};return(e,o)=>(P(),D(B,null,{default:F(()=>[p(Y,{title:f.value,"section-value":d},null,8,["title"]),p(L,{"active-spin":s.value},null,8,["active-spin"]),p(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:m,onExecuteRemove:A}),n("div",G,[p(X,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:_.value,pointTitle:"Carga de trabajo",pointSubtitle:"Frecuencia respuestas carga de trabajo"},null,8,["title","pointValue"]),n("div",J,[n("div",K,[s.value?N("",!0):(P(),D(U,{key:0,chartType:"bar",optionsAxisX:I.value,optionsAxisY:T.value,plotOptions:V.value,tooltip:$.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(W,{class:"card-preguntas"},{default:F(()=>[Q,Z,ee,ae,te]),_:1})])])]),_:1}))}};export{de as default};