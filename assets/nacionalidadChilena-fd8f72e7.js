import{u as k,g as s,r as x,o as S,f as C,j as V,_ as E,m as u,n as B,b as p,a as L,l as O}from"./index-55c36585.js";import{_ as X}from"./CHeaderBar-fe98073c.js";import{_ as Y}from"./CFilterbar-d8883c57.js";import{_ as j}from"./subSideNav-e227cb4c.js";import{_ as z}from"./CCard-994e3cf2.js";import{_ as H}from"./CColunmChart-d0cda8fe.js";import"./CButton-f23aba14.js";import"./CChartDonutSection-e72e6124.js";const W={class:"chart-section-principal section-nacionalidad"},q={class:"seccion-nacionalidad"},R={class:"chart-section"},G=p("span",{class:"card-title"},"Pregunta",-1),J=p("span",{class:"question--value"},"4. ¿Es chileno?",-1),_=7,se={__name:"nacionalidadChilena",setup(K){const a=k(),n=s(!1),h=s("Antecedentes y trayectorias / Nacionalidad del interno"),v=s(""),d=s([]),w=s({categories:["Sí","No","No Asignado"],crosshair:!1}),A=s({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),I=s({column:{pointPadding:.2,borderWidth:3}}),N=s({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),f=e=>e?Math.round(e*100)/100:0,y=()=>{let e=d.value.reduce((o,t)=>o+t.pointCarcel,0);e=e/d.value.length,e=Math.round(f(e)),v.value=e.toString()},c=x([]),F=(e,o,t)=>x({id:e,name:o,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async e=>{n.value=!0;const o=c.filter(t=>t.id!==e);c.splice(0,c.length),d.value=d.value.filter(t=>t.carcelId!==e),y(),o.map(t=>c.push(t)),await a.sleep(50),n.value=!1},D=(e,o)=>{let t=0,r=0,m=0;for(let l=0;l<e.length;l++)e[l].value===0&&t++,e[l].value===1&&r++;const i=e.length-m;return d.value.push({carcelId:o,pointCarcel:Math.round(f(r*100/i))}),y(),[Math.round(f(r*100/i)),Math.round(f(t*100/i))]},g=async(e,o,t)=>{var r,m;try{let i=((r=a==null?void 0:a.penitenciaria)==null?void 0:r.id)??null,l=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,b=a.historyId;if(t&&(i=e,l=o),b&&i){n.value=!0;let P=await O({historyId:b,carcelId:i,categoryId:_,subCategoryId:23,embedDetail:!0,dimensionId:127});const T=D(P.items,i);c.push(F(i,l,T))}}catch(i){console.log(i)}finally{t||(n.value=!1)}},M=async()=>{n.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),n.value=!1};return(e,o)=>(S(),C(E,null,{default:V(()=>[u(X,{title:h.value,"section-value":_},null,8,["title"]),u(B,{"active-spin":n.value},null,8,["active-spin"]),u(Y,{baseFilter:_,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:g,onExecuteRemove:$}),p("div",W,[u(j,{class:"subsection-nacionalidad",title:h.value,"section-value":_,pointValue:v.value,pointTitle:"Nacionalidad del interno (Chileno)",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue","pointTitle"]),p("div",q,[p("div",R,[n.value?L("",!0):(S(),C(H,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:A.value,plotOptions:I.value,tooltip:N.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(z,{class:"card-preguntas"},{default:V(()=>[G,J]),_:1})])])]),_:1}))}};export{se as default};
