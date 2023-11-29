import{u as O,g as r,r as A,o as I,f as w,j as E,_ as z,m,n as B,b as f,a as L,l as X}from"./index-f4124e79.js";import{_ as Y}from"./CHeaderBar-e62534a5.js";import{_ as j}from"./CFilterbar-f064e562.js";import{_ as H}from"./subSideNav-ba5cbd5b.js";import{a as W}from"./CChartDonutSection-564b2824.js";import{_ as q}from"./CColunmChart-756fa4f4.js";import"./CButton-33aeb8f9.js";const J={class:"chart-section-principal"},R={class:"tiempo-encierro"},G={class:"chart-section"},K=f("span",{class:"card-title"},"Pregunta",-1),Q=f("span",{class:"question--value"},"6. ¿Cuánto tiempo lleva en esta cárcel?",-1),h=7,ne={__name:"tiempoEncierro",setup(U){const a=O(),n=r(!1),b=r("Antecedentes y trayectorias / Tiempo en Cárcel"),x=r(""),u=r([]),M=r({categories:["Menos de 6 meses","Entre 6 meses y 1 año","Entre 1 y 2 años","Más de 2 años","No asignado"],crosshair:!1}),F=r({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),T=r({column:{pointPadding:0,borderWidth:3}}),$=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),C=()=>{let e=u.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/u.value.length,e=Math.round(V(e)),x.value=M.value.categories[e]},P=(e,s)=>{let t=0,p=0,d=0,i=0,_=0,o=0;for(let l=0;l<e.length;l++)e[l].value===1&&(t++,o++),e[l].value===2&&(p++,o++),e[l].value===3&&(d++,o++),e[l].value===4&&(i++,o++),e[l].value===-1&&(_+=e[l].value*-1);const v=[Math.round(t*100/o),Math.round(p*100/o),Math.round(d*100/o),Math.round(i*100/o)],y=Math.max(...v),g=v.indexOf(y);return u.value.push({carcelId:s,pointCarcel:g}),C(),v},V=e=>e?Math.round(e*100)/100:0,c=A([]),D=(e,s,t)=>A({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async e=>{n.value=!0;const s=c.filter(t=>t.id!==e);c.splice(0,c.length),u.value=u.value.filter(t=>t.carcelId!==e),C(),s.map(t=>c.push(t)),await a.sleep(50),n.value=!1},S=async(e,s,t)=>{var p,d;try{let i=((p=a==null?void 0:a.penitenciaria)==null?void 0:p.id)??null,_=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.description)??null,o=a.historyId;if(t&&(i=e,_=s),o&&i){n.value=!0;let y=await X({historyId:o,carcelId:i,categoryId:h,subCategoryId:23,embedDetail:!0,dimensionId:129});const g=P(y.items,i);c.push(D(i,_,g))}}catch(i){console.log(i)}finally{t||(n.value=!1)}},N=async()=>{n.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await S(e.id,e.description,!0))),n.value=!1};return(e,s)=>(I(),w(z,null,{default:E(()=>[m(Y,{title:b.value,"section-value":h},null,8,["title"]),m(B,{"active-spin":n.value},null,8,["active-spin"]),m(j,{baseFilter:h,multipleDisabled:!1,onExecuteMount:N,onExecuteAction:S,onExecuteRemove:k}),f("div",J,[m(H,{class:"subsection-trayectoria",title:b.value,"section-value":h,"point-label":x.value,"point-disabled":!0,pointTitle:"Tiempo en Cárcel",pointSubtitle:"","point-type":2},null,8,["title","point-label"]),f("div",R,[f("div",G,[n.value?L("",!0):(I(),w(q,{key:0,chartType:"bar",optionsAxisX:M.value,optionsAxisY:F.value,plotOptions:T.value,tooltip:$.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),m(W,{class:"card-preguntas"},{default:E(()=>[K,Q]),_:1})])])]),_:1}))}};export{ne as default};
