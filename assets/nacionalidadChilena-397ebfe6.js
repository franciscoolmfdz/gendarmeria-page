import{u as T,g as n,r as x,o as S,f as C,j as I,_ as k,m as d,n as B,b as p,a as L,l as O}from"./index-268772aa.js";import{_ as X}from"./CHeaderBar-873738c0.js";import{_ as Y}from"./CFilterbar-bf69c50e.js";import{_ as z}from"./subSideNav-11a5ce54.js";import{_ as H}from"./CCard-23aa0275.js";import{_ as W}from"./CColunmChart-fc62ac14.js";import"./CButton-9395e1c7.js";import"./CChartDonutSection-d5669898.js";const j={class:"chart-section-principal"},q={class:"seccion-nacionalidad"},R={class:"chart-section"},G=p("span",{class:"card-title"},"Pregunta",-1),J=p("span",{class:"question--value"},"4. ¿Es chileno?",-1),_=7,ne={__name:"nacionalidadChilena",setup(K){const a=T(),s=n(!1),h=n("Antecedentes y trayectorias / Nacionalidad del Interno"),v=n(""),u=n([]),V=n({categories:["Sí","No","No Asignado"],crosshair:!1}),w=n({min:0,allowDecimals:!1,title:{text:""}}),A=n({column:{pointPadding:.2,borderWidth:3}}),F=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),f=e=>e?Math.round(e*100)/100:0,y=()=>{let e=u.value.reduce((o,t)=>o+t.pointCarcel,0);e=e/u.value.length,e=Math.round(f(e)),v.value=e.toString()},c=x([]),N=(e,o,t)=>x({id:e,name:o,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async e=>{s.value=!0;const o=c.filter(t=>t.id!==e);c.splice(0,c.length),u.value=u.value.filter(t=>t.carcelId!==e),y(),o.map(t=>c.push(t)),await a.sleep(50),s.value=!1},D=(e,o)=>{let t=0,r=0,m=0;for(let l=0;l<e.length;l++)e[l].value===0&&t++,e[l].value===1&&r++;const i=e.length-m;return u.value.push({carcelId:o,pointCarcel:Math.round(f(r*100/i))}),y(),[Math.round(f(r*100/i)),Math.round(f(t*100/i))]},g=async(e,o,t)=>{var r,m;try{let i=((r=a==null?void 0:a.penitenciaria)==null?void 0:r.id)??null,l=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,b=a.historyId;if(t&&(i=e,l=o),b&&i){s.value=!0;let E=await O({historyId:b,carcelId:i,categoryId:_,subCategoryId:23,embedDetail:!0,dimensionId:127});const P=D(E.items,i);c.push(N(i,l,P))}}catch(i){console.log(i)}finally{t||(s.value=!1)}},M=async()=>{s.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),s.value=!1};return(e,o)=>(S(),C(k,null,{default:I(()=>[d(X,{title:h.value,"section-value":_},null,8,["title"]),d(B,{"active-spin":s.value},null,8,["active-spin"]),d(Y,{baseFilter:_,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:g,onExecuteRemove:$}),p("div",j,[d(z,{class:"subsection-nacionalidad",title:h.value,"section-value":_,pointValue:v.value,pointTitle:"4. 	¿Es chileno?",pointSubtitle:"",type:2},null,8,["title","pointValue","pointTitle"]),p("div",q,[p("div",R,[s.value?L("",!0):(S(),C(W,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:w.value,plotOptions:A.value,tooltip:F.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(H,{class:"card-preguntas"},{default:I(()=>[G,J]),_:1})])])]),_:1}))}};export{ne as default};
