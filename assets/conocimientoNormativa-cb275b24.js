import{u as B,g as s,r as w,o as A,f as F,j as I,_ as L,m as p,n as M,b as r,a as X,k as Y}from"./index-45ccebc1.js";import{_ as q}from"./subSideNav-b0532d57.js";import{_ as H}from"./CHeaderBar-26ed6fbc.js";import{_ as R}from"./CFilterbar-8a96129f.js";import{_ as W}from"./CCard-67b7bef7.js";import{_ as j}from"./CColunmChart-aef5517e.js";import"./CChartDonutSection-a9b194f7.js";import"./CButton-a3569a76.js";const U={class:"chart-section-principal"},G={class:"conocimiento-notmativa"},J={class:"chart-section"},K=r("span",{class:"card-title"},"Preguntas",-1),Q=r("span",{class:"question--value"},"fp40 Conozco la normativa penitenciaria atingente a mis funciones dentro del recinto",-1),Z=r("span",{class:"question--value"},"fp41 Entiendo / comprendo la normativa atingente a mis funciones ",-1),d=2,ue={__name:"conocimientoNormativa",setup(ee){const a=B(),o=s(!1),f=s("Calidad de vida de los funcionarios / Conocimiento de la normativa penitenciaria"),m=s(""),u=s([]),V=s({categories:["fp40","fp41"],crosshair:!1}),$=s({type:"category",min:0,title:{text:""},left:"-10%",categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"],max:4}),D=s({column:{pointPadding:.2,borderWidth:3}}),N=s({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=w([]),k=(e,i,t)=>w({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),E=async e=>{o.value=!0;const i=c.filter(t=>t.id!==e);u.value=u.value.filter(t=>t.carcelId!==e),_(),c.splice(0,c.length),i.map(t=>c.push(t)),await a.sleep(50),o.value=!1},O=e=>e?Math.round(e*100)/100:0,_=()=>{let e=u.value.reduce((i,t)=>i+t.pointCarcel,0);e=e/u.value.length,e=O(e),m.value=e.toString()},v=async(e,i,t)=>{var h,y;try{let l=((h=a==null?void 0:a.penitenciaria)==null?void 0:h.id)??null,g=((y=a==null?void 0:a.penitenciaria)==null?void 0:y.description)??null,x=a.historyId;if(t&&(l=e,g=i),x&&l){o.value=!0;let z=await Y({historyId:x,carcelId:l,categoryId:d,subCategoryId:19});const b=[];let C=0,S=z.filter(n=>n.poundUsed===1);S.map(n=>{const P=n!=null&&n.valuePound?Math.round((n==null?void 0:n.valuePound)*100)/100:0;C+=P,b.push(P)}),u.value.push({carcelId:l,pointCarcel:C/S.length}),_(),c.push(k(l,g,b))}}catch(l){console.log(l)}finally{t||(o.value=!1)}},T=async()=>{o.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),o.value=!1};return(e,i)=>(A(),F(L,null,{default:I(()=>[p(H,{title:f.value,"section-value":d},null,8,["title"]),p(M,{"active-spin":o.value},null,8,["active-spin"]),p(R,{baseFilter:d,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:v,onExecuteRemove:E}),r("div",U,[p(q,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:m.value,pointTitle:"Conocimiento de la normativa penitenciaria",pointSubtitle:"Frecuencia respuestas Conocimiento de la normativa penitenciaria"},null,8,["title","pointValue"]),r("div",G,[r("div",J,[o.value?X("",!0):(A(),F(j,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:$.value,plotOptions:D.value,tooltip:N.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(W,{class:"card-preguntas"},{default:I(()=>[K,Q,Z]),_:1})])])]),_:1}))}};export{ue as default};
