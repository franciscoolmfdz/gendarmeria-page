import{u as M,g as l,r as E,o as P,f as A,j as C,_ as N,m as u,n as X,b as r,a as Y,k as z}from"./index-b814b26e.js";import{_ as G}from"./subSideNav-bd48cdb7.js";import{_ as H}from"./CHeaderBar-cd50a8db.js";import{_ as R}from"./CFilterbar-06228a72.js";import{_ as W}from"./CCard-47d5f6f7.js";import{_ as j}from"./CColunmChart-0a92d872.js";import"./CChartDonutSection-2992fb45.js";import"./CButton-2da5c8f1.js";const U={class:"chart-section-principal"},J={class:"evaluacion-general"},K={class:"chart-section"},Q=r("span",{class:"card-title"},"Preguntas",-1),Z=r("span",{class:"question--value"},"8.1 A pesar de todo, le he podido dar un sentido a mi vida en esta cárcel",-1),ee=r("span",{class:"question--value"},"8.2 Siento que estar acá me ha ayudado a salir adelante",-1),d=1,ue={__name:"EvalGeneral",setup(te){const e=M(),a=l(!1),p=l("Calidad de vida de los internos / Evaluación general"),_=l(""),f=l(0),D=l({categories:["8.1","8.2"],crosshair:!1}),I=l({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),V=l({column:{pointPadding:.2,borderWidth:3}}),$=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=E([]),F=(t,i,s)=>E({id:t,name:i,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async t=>{a.value=!0;const i=n.filter(s=>s.id!==t);n.splice(0,n.length),i.map(s=>n.push(s)),await e.sleep(50),a.value=!1},T=t=>t?Math.round(t*100)/100:0,m=async(t,i,s)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,g=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,y=e.historyId;if(s&&(c=t,g=i),y&&c){a.value=!0;const q={historyId:y,carcelId:c,categoryId:1,subCategoryId:8};let x=0,B=await z(q);const b=[];let S=B.filter(o=>o.poundUsed===1);S.map(o=>{const w=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;x+=w,b.push(w)}),f.value+=x/S.length;let L=T(f.value/e.carcelesSelected.length);_.value=L.toString(),n.push(F(c,g,b))}}catch(c){console.log(c)}finally{s||(a.value=!1)}},O=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),a.value=!1};return(t,i)=>(P(),A(N,null,{default:C(()=>[u(H,{title:p.value,"section-value":d},null,8,["title"]),u(X,{"active-spin":a.value},null,8,["active-spin"]),u(R,{baseFilter:d,multipleDisabled:!1,onExecuteMount:O,onExecuteAction:m,onExecuteRemove:k}),r("div",U,[u(G,{title:p.value,"section-value":d,pointValue:_.value,pointTitle:"Evaluación general",pointSubtitle:"Promedio respuestas evaluación general"},null,8,["title","pointValue"]),r("div",J,[r("div",K,[a.value?Y("",!0):(P(),A(j,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:I.value,plotOptions:V.value,tooltip:$.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(W,{class:"card-preguntas"},{default:C(()=>[Q,Z,ee]),_:1})])])]),_:1}))}};export{ue as default};
