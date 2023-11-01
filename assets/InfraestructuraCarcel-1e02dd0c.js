import{g as a,u as H,r as F,o as T,f as q,j as P,_ as W,m as d,n as X,b as o,a as Y,k as U}from"./index-16ad8c53.js";import{_ as j}from"./CHeaderBar-3cb4d6a0.js";import{_ as G}from"./CFilterbar-052402ab.js";import{_ as J}from"./subSideNav-309f19b3.js";import{_ as K}from"./CCard-4b439096.js";import{_ as Q}from"./CColunmChart-72699445.js";import"./CButton-2c0f70bc.js";import"./CChartDonutSection-fb456158.js";const Z={class:"chart-section-principal"},ee={class:"infraestructura-section"},ae={class:"chart-section"},te=o("span",{class:"card-title"},"Preguntas",-1),se=o("span",{class:"question--value"},"2.1 Aquí recibo una buena cantidad de comida",-1),oe=o("span",{class:"question--value"},"2.2 Cuento con un baño (wáter) decente ",-1),ne=o("span",{class:"question--value"},"2.3 Duermo en un lugar limpio ",-1),ie=o("span",{class:"question--value"},"2.4 En mi módulo hay una temperatura adecuada (ni mucho frío ni mucho calor) ",-1),le=o("span",{class:"question--value"},"2.5 Recibo comida en buen estado ",-1),ce=o("span",{class:"question--value"},"2.6 Recibo luz natural en mi celda o módulo ",-1),re=o("span",{class:"question--value"},"2.7 Mi celda tiene buena ventilación ",-1),f=1,ye={__name:"InfraestructuraCarcel",setup(ue){const n=a(!1),e=H(),_=a("Calidad de vida de los internos / Infrastructura carcel"),v=a(""),h=a(0),L=a({categories:["2.1","2.2","2.3","2.4","2.5","2.6","2.7"],crosshair:!1}),V=a({min:0,allowDecimals:!1,title:{text:""},categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"]}),$=a({column:{pointPadding:.2,borderWidth:3}}),N=a({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} </b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),O=(t,r,i)=>F({id:t,name:r,data:i,dataLabels:{enabled:!0,color:"#fff",align:"center",x:20,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}});a({categories:["2.1","2.2","2.3","2.4","2.5","2.6","2.7"],crosshair:!1}),a({min:0,title:{text:"Respuestas por categoría"},stackLabels:{enabled:!0}}),a({column:{stacking:"normal",dataLabels:{enabled:!0}}}),a({headerFormat:"<b> Total: {point.x}</b><br/>",pointFormat:"<b>Penitenciaría: {series.stack} </b> <br/>{series.name}: {point.y}<br/>Total: {point.stackTotal}",useHTML:!0});const p=a([{name:"Siempre",data:[],stack:"Colina 1"},{name:"Casi siempre",data:[],stack:"Colina 1"},{name:"A veces",data:[],stack:"Colina 1"},{name:"Casi nunca",data:[],stack:"Colina 2"},{name:"Nunca",data:[],stack:"Colina 2"}]),R={enabled:!0,color:"#fff",align:"center",y:0,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}},b=t=>t?Math.round(t*100)/100:0,z=async t=>{n.value=!0;const r=c.filter(i=>i.id!==t);c.splice(0,c.length),r.map(i=>c.push(i)),await e.sleep(50),n.value=!1},y=async(t,r,i)=>{var g,x;try{let u=((g=e==null?void 0:e.penitenciaria)==null?void 0:g.id)??null,C=((x=e==null?void 0:e.penitenciaria)==null?void 0:x.description)??null,S=e.historyId;if(i&&(u=t,C=r),S&&u){n.value=!0;let k=await U({historyId:S,carcelId:u,categoryId:1,subCategoryId:2});const I=[];let w=k.filter(s=>s.poundUsed===1),A=0;w.map(s=>{const l=b(s==null?void 0:s.promPound);A+=l,I.push(l)}),h.value+=A/w.length;let M=b(h.value/e.carcelesSelected.length);v.value=M.toString(),c.push(O(u,C,I));let D=5;for(let s=0;s<=4;s++)p.value[s].stack=e.penitenciaria.description,p.value[s].dataLabels=R,p.value[s].data=k.filter(l=>l.valueUsed===D).sort((l,B)=>l.dimensionId-B.dimensionId).map(l=>l.value),D--}else for(let m=0;m<=4;m++)p.value[m].data=[]}catch(u){console.log(u)}finally{i||(n.value=!1)}},E=async()=>{n.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await y(t.id,t.description,!0))),n.value=!1};return(t,r)=>(T(),q(W,null,{default:P(()=>[d(j,{title:_.value,"section-value":f},null,8,["title"]),d(X,{"active-spin":n.value},null,8,["active-spin"]),d(G,{baseFilter:f,onExecuteMount:E,multipleDisabled:!1,onExecuteAction:y,onExecuteRemove:z}),o("div",Z,[d(J,{title:_.value,"section-value":f,pointValue:v.value,pointTitle:"Infrastructura de la carcel",pointSubtitle:"Promedio respuestas Infrastructura de la carcel"},null,8,["title","pointValue"]),o("div",ee,[o("div",ae,[n.value?Y("",!0):(T(),q(Q,{key:0,chartType:"bar",optionsAxisX:L.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:N.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(K,{class:"card-preguntas"},{default:P(()=>[te,se,oe,ne,ie,le,ce,re]),_:1})])])]),_:1}))}};export{ye as default};
