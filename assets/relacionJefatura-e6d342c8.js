import{u as M,g as n,r as w,o as C,f as D,j as F,_ as O,m as u,n as B,b as i,a as N,k as R}from"./index-4bd6d820.js";import{_ as X}from"./subSideNav-bee2ce3e.js";import{_ as Y}from"./CHeaderBar-12e5ecf4.js";import{_ as z}from"./CFilterbar-704137cb.js";import{_ as H}from"./CCard-fa4c3a9e.js";import{_ as J}from"./CColunmChart-c205778e.js";import"./CChartDonutSection-b011d11d.js";import"./CButton-8cd8b6c3.js";const W={class:"chart-section-principal"},U={class:"relacion-jefatura"},G={class:"chart-section"},K=i("span",{class:"card-title"},"Preguntas",-1),Q=i("span",{class:"question--value"},"fp1 La comunicación entre el personal y los oficiales que dirigen esta cárcel es buena",-1),Z=i("span",{class:"question--value"},"fp3 El ánimo (la moral) del personal es buena en esta cárcel",-1),ee=i("span",{class:"question--value"},"fp4 Tengo una buena relación con los oficiales jefe (alcaide, jefe operativo, jefe internos, etc.) aquí",-1),te=i("span",{class:"question--value"},"fp5 Me siento respetado por los oficiales de esta prisión.",-1),p=2,de={__name:"relacionJefatura",setup(ae){const e=M(),a=n(!1),d=n("Calidad de vida de los funcionarios / Comunicación y relación con la jefatura"),f=n(""),_=n(0),P=n({categories:["fp1","fp3","fp4","fp5"],crosshair:!1}),V=n({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),$=n({column:{pointPadding:.2,borderWidth:3}}),q=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=w([]),A=(t,c,s)=>w({id:t,name:c,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async t=>{a.value=!0;const c=l.filter(s=>s.id!==t);l.splice(0,l.length),c.map(s=>l.push(s)),await e.sleep(50),a.value=!1},T=t=>t?Math.round(t*100)/100:0,m=async(t,c,s)=>{var v,h;try{let r=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,y=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,g=e.historyId;if(s&&(r=t,y=c),g&&r){a.value=!0;let E=await R({historyId:g,carcelId:r,categoryId:p,subCategoryId:9});const b=[];let x=0,S=E.filter(o=>o.poundUsed===1);S.map(o=>{const j=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;x+=j,b.push(j)}),_.value+=x/S.length;let L=T(_.value/e.carcelesSelected.length);f.value=L.toString(),l.push(A(r,y,b))}}catch(r){console.log(r)}finally{s||(a.value=!1)}},k=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),a.value=!1};return(t,c)=>(C(),D(O,null,{default:F(()=>[u(Y,{title:d.value,"section-value":p},null,8,["title"]),u(B,{"active-spin":a.value},null,8,["active-spin"]),u(z,{baseFilter:p,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:m,onExecuteRemove:I}),i("div",W,[u(X,{class:"subsection-funcionarios",title:d.value,"section-value":p,pointValue:f.value,pointTitle:"Relación con jefatura",pointSubtitle:"Frecuencia respuestas comunicación y relación con la jefatura"},null,8,["title","pointValue"]),i("div",U,[i("div",G,[a.value?N("",!0):(C(),D(J,{key:0,chartType:"bar",optionsAxisX:P.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:q.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(H,{class:"card-preguntas"},{default:F(()=>[K,Q,Z,ee,te]),_:1})])])]),_:1}))}};export{de as default};