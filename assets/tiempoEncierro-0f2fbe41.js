import{u as N,g as c,r as x,o as S,f as I,j as A,_ as P,m,n as z,b as f,a as B,l as L}from"./index-d5d29b93.js";import{_ as O}from"./CHeaderBar-c99abf49.js";import{_ as X}from"./CFilterbar-6fdaab9f.js";import{_ as Y}from"./subSideNav-7690126a.js";import{_ as H}from"./CCard-fa753b4a.js";import{_ as R}from"./CColunmChart-9503d52d.js";import"./CButton-1f0b74cb.js";import"./CChartDonutSection-be9d7933.js";const W={class:"chart-section-principal"},j={class:"tiempo-encierro"},q={class:"chart-section"},J=f("span",{class:"card-title"},"Pregunta",-1),G=f("span",{class:"question--value"},"6. ¿Cuánto tiempo lleva en esta cárcel?",-1),v=7,ie={__name:"tiempoEncierro",setup(K){const s=N(),n=c(!1),h=c("Trayectoria / ¿Cuánto tiempo lleva en esta cárcel?"),y=c(""),w=c({categories:["menos de 6 meses","entre 6 meses y 1 año","entre 1 y 2 años","más de 2 años","No asignado"],crosshair:!1}),C=c({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),T=c({column:{pointPadding:0,borderWidth:3}}),V=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),$=e=>{let o=0,a=0,p=0,d=0,l=0,r=0,t=0;for(let i=0;i<e.length;i++)e[i].value===1&&(o++,r+=0,t++),e[i].value===2&&(a++,r+=1,t++),e[i].value===3&&(p++,r+=1.6,t++),e[i].value===4&&(d++,r+=2.6,t++),e[i].value===-1&&(l+=e[i].value*-1);const b=[_(o,t),_(a,t),_(p,t),_(d,t)];return y.value=F(r/t),b},_=(e,o)=>e?parseInt(Math.round(e*100)/o):0,F=e=>e?Math.round(e*100)/100:0,u=x([]),D=(e,o,a)=>x({id:e,name:o,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),E=async e=>{n.value=!0;const o=u.filter(a=>a.id!==e);u.splice(0,u.length),o.map(a=>u.push(a)),await s.sleep(50),n.value=!1},g=async(e,o,a)=>{var p,d;try{let l=((p=s==null?void 0:s.penitenciaria)==null?void 0:p.id)??null,r=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.description)??null,t=s.historyId;if(a&&(l=e,r=o),t&&l){n.value=!0;let i=await L({historyId:t,carcelId:l,categoryId:v,subCategoryId:23,embedDetail:!0,dimensionId:129});const k=$(i.items);u.push(D(l,r,k))}}catch(l){console.log(l)}finally{a||(n.value=!1)}},M=async()=>{n.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),n.value=!1};return(e,o)=>(S(),I(P,null,{default:A(()=>[m(O,{title:h.value,"section-value":v},null,8,["title"]),m(z,{"active-spin":n.value},null,8,["active-spin"]),m(X,{baseFilter:v,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:g,onExecuteRemove:E}),f("div",W,[m(Y,{class:"subsection-trayectoria",title:h.value,"section-value":v,pointValue:y.value,pointTitle:"6. ¿Cuánto tiempo lleva en esta cárcel?",pointSubtitle:"",type:1},null,8,["title","pointValue","pointTitle"]),f("div",j,[f("div",q,[n.value?B("",!0):(S(),I(R,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:C.value,plotOptions:T.value,tooltip:V.value,series:u},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),m(H,{class:"card-preguntas"},{default:A(()=>[J,G]),_:1})])])]),_:1}))}};export{ie as default};