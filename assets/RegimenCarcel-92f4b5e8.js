import{g as l,u as O,r as A,o as P,f as I,j as w,_ as T,m as p,n as z,b as s,a as B,k as M}from"./index-45ccebc1.js";import{_ as X}from"./subSideNav-b0532d57.js";import{_ as Y}from"./CHeaderBar-26ed6fbc.js";import{_ as j}from"./CFilterbar-8a96129f.js";import{_ as H}from"./CCard-67b7bef7.js";import{_ as W}from"./CColunmChart-aef5517e.js";import"./CChartDonutSection-a9b194f7.js";import"./CButton-a3569a76.js";const U={class:"chart-section-principal"},G={class:"regimen-carcel"},J={class:"chart-section"},K=s("span",{class:"card-title"},"Preguntas",-1),Q=s("span",{class:"question--value"},"6.1 Conozco los pasos a seguir para hacer un reclamo",-1),Z=s("span",{class:"question--value"},"6.2 Siento que las reglas de esta cárcel son claras",-1),ee=s("span",{class:"question--value"},"6.3 En esta cárcel me siento discriminado (ya sea por mi orientación sexual, país de origen, delito u otra)",-1),te=s("span",{class:"question--value"},"6.4 Acá responden rápido a los escritos de los internos",-1),ae=s("span",{class:"question--value"},"6.5 Los gendarmes responden rápido cuando hay una emergencia",-1),se=s("span",{class:"question--value"},"6.6 Aquí cada gendarme pone sus propias reglas",-1),oe=s("span",{class:"question--value"},"6.7 En esta cárcel recibo un trato justo y se respetan mis derechos",-1),d=1,fe={__name:"RegimenCarcel",setup(ne){const o=l(!1),a=O(),_=l("Calidad de vida de los internos / Regimen de la carcel"),m=l(""),u=l([]),R=l({categories:["6.1","6.2","6.3","6.4","6.5","6.6","6.7"],crosshair:!1}),V=l({type:"category",min:0,title:{text:""},left:"-10%",categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"],max:4}),$=l({column:{pointPadding:.2,borderWidth:3}}),D=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=A([]),F=(e,n,t)=>A({id:e,name:n,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:0,style:{inside:!1,fontSize:"12px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async e=>{o.value=!0;const n=r.filter(t=>t.id!==e);u.value=u.value.filter(t=>t.carcelId!==e),f(),r.splice(0,r.length),n.map(t=>r.push(t)),await a.sleep(50),o.value=!1},E=e=>e?Math.round(e*100)/100:0,f=()=>{let e=u.value.reduce((n,t)=>n+t.pointCarcel,0);e=e/u.value.length,e=E(e),m.value=e.toString()},v=async(e,n,t)=>{var h,g;try{let c=((h=a==null?void 0:a.penitenciaria)==null?void 0:h.id)??null,y=((g=a==null?void 0:a.penitenciaria)==null?void 0:g.description)??null,x=a.historyId;if(t&&(c=e,y=n),x&&c){o.value=!0;let N=await M({historyId:x,carcelId:c,categoryId:1,subCategoryId:6});const b=[];let C=0,S=N.filter(i=>i.poundUsed===1);S.map(i=>{const q=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;C+=q,b.push(q)}),u.value.push({carcelId:c,pointCarcel:C/S.length}),f(),r.push(F(c,y,b))}}catch(c){console.log(c)}finally{t||(o.value=!1)}},L=async()=>{o.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),o.value=!1};return(e,n)=>(P(),I(T,null,{default:w(()=>[p(Y,{title:_.value,"section-value":d},null,8,["title"]),p(z,{"active-spin":o.value},null,8,["active-spin"]),p(j,{baseFilter:d,multipleDisabled:!1,onExecuteMount:L,onExecuteAction:v,onExecuteRemove:k}),s("div",U,[p(X,{title:_.value,"section-value":d,pointValue:m.value,pointTitle:"Regimen de la carcel",pointSubtitle:"Promedio respuestas Regimen de la carcel"},null,8,["title","pointValue"]),s("div",G,[s("div",J,[o.value?B("",!0):(P(),I(W,{key:0,chartType:"bar",optionsAxisX:R.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:D.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(H,{class:"card-preguntas"},{default:w(()=>[K,Q,Z,ee,te,ae,se,oe]),_:1})])])]),_:1}))}};export{fe as default};