import{h as o,i as B,r as q,o as I,f as S,j as f,_ as H,g as r,b as e,a as U}from"./index-e11d2db0.js";import{_ as W}from"./CHeaderBar-7430ddcb.js";import{_ as j}from"./CFilterbar-bbe1765b.js";import{_}from"./CCard-e78a7983.js";import{_ as O}from"./CColunmChart-fee3e7a8.js";import{g as G}from"./dimensionHistory-30900885.js";import{_ as J}from"./CSpinner-68c13a5e.js";import"./exporting-9b377c6a.js";import"./api-7944baea.js";const K={class:"infraestructura-section"},Q={class:"chart-section"},Z=e("span",{class:"card-title"},"Promedio respuestas Infrastructura de la carcel",-1),ee=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),te=e("span",{class:"card-title"},"Preguntas",-1),ae=e("span",{class:"question--value"},"2.1 Aquí recibo una buena cantidad de comida",-1),se=e("span",{class:"question--value"},"2.2 Cuento con un baño (wáter) decente ",-1),oe=e("span",{class:"question--value"},"2.3 Duermo en un lugar limpio ",-1),ie=e("span",{class:"question--value"},"2.4 En mi módulo hay una temperatura adecuada (ni mucho frío ni mucho calor) ",-1),ne=e("span",{class:"question--value"},"2.5 Recibo comida en buen estado ",-1),le=e("span",{class:"question--value"},"2.6 Recibo luz natural en mi celda o módulo ",-1),re=e("span",{class:"question--value"},"2.7 Mi celda tiene buena ventilación ",-1),ce={class:"chart-section"},ue=e("span",{class:"card-title"},"Respuestas por stack Infrastructura de la carcel",-1),de=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elitquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",-1),A=1,Ce={__name:"InfraestructuraCarcel",setup(pe){const i=o(!1),t=B(),w=o("Calidad de vida de los internos / Infrastructura carcel"),D=o({categories:["2.1","2.2","2.3","2.4","2.5","2.6","2.7"],crosshair:!1}),F=o({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),L=o({column:{pointPadding:.2,borderWidth:3}}),P=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} </b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=q([]),T=(a,u,n)=>q({id:a,name:u,data:n,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),R=o({categories:["2.1","2.2","2.3","2.4","2.5","2.6","2.7"],crosshair:!1}),X=o({min:0,title:{text:"Respuestas por categoría"},stackLabels:{enabled:!0}}),Y=o({column:{stacking:"normal",dataLabels:{enabled:!0}}}),$=o({headerFormat:"<b> Total: {point.x}</b><br/>",pointFormat:"<b>Penitenciaría: {series.stack} </b> <br/>{series.name}: {point.y}<br/>Total: {point.stackTotal}",useHTML:!0}),p=o([{name:"Siempre",data:[],stack:"Colina 1"},{name:"Casi siempre",data:[],stack:"Colina 1"},{name:"A veces",data:[],stack:"Colina 1"},{name:"Casi nunca",data:[],stack:"Colina 2"},{name:"Nunca",data:[],stack:"Colina 2"}]),E={enabled:!0,color:"#fff",align:"center",y:0,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}},N=a=>a?Math.round(a*100)/100:0,V=async a=>{i.value=!0;const u=c.filter(n=>n.id!==a);c.splice(0,c.length),u.map(n=>c.push(n)),await t.sleep(50),i.value=!1},v=async(a,u,n)=>{var h,b;try{let d=((h=t==null?void 0:t.penitenciaria)==null?void 0:h.id)??null,g=((b=t==null?void 0:t.penitenciaria)==null?void 0:b.description)??null,y=t.historyId;if(n&&(d=a,g=u),y&&d){i.value=!0;let x=await G({historyId:y,carcelId:d,categoryId:1,subCategoryId:2});const k=[];x.filter(s=>s.poundUsed===1).map(s=>{const l=N(s==null?void 0:s.promPound);k.push(l)}),c.push(T(d,g,k));let C=5;for(let s=0;s<=4;s++)p.value[s].stack=t.penitenciaria.description,p.value[s].dataLabels=E,p.value[s].data=x.filter(l=>l.valueUsed===C).sort((l,M)=>l.dimensionId-M.dimensionId).map(l=>l.value),C--}else for(let m=0;m<=4;m++)p.value[m].data=[]}catch(d){console.log(d)}finally{n||(i.value=!1)}},z=async()=>{i.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async a=>await v(a.id,a.description,!0))),i.value=!1};return(a,u)=>(I(),S(H,null,{default:f(()=>[r(W,{title:w.value,"section-value":A},null,8,["title"]),r(J,{"active-spin":i.value},null,8,["active-spin"]),r(j,{baseFilter:A,onExecuteMount:z,multipleDisabled:!1,onExecuteAction:v,onExecuteRemove:V}),e("div",K,[e("div",Q,[r(_,{class:"card-information"},{default:f(()=>[Z,ee]),_:1}),i.value?U("",!0):(I(),S(O,{key:0,optionsAxisX:D.value,optionsAxisY:F.value,plotOptions:L.value,tooltip:P.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),r(_,{class:"card-preguntas"},{default:f(()=>[te,ae,se,oe,ie,ne,le,re]),_:1}),e("div",ce,[r(_,{class:"card-information"},{default:f(()=>[ue,de]),_:1}),r(O,{optionsAxisX:R.value,optionsAxisY:X.value,plotOptions:Y.value,tooltip:$.value,series:p.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])])])]),_:1}))}};export{Ce as default};
