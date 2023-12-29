import{g as l,u as k,r as x,o as S,f as A,j as V,_ as T,m as p,n as B,b as d,a as L,l as O}from"./index-60abcd12.js";import{_ as X}from"./CHeaderBar-2f735b52.js";import{_ as Y}from"./CFilterbar-80d88b3a.js";import{a as j}from"./CChartDonutSection-254b1a03.js";import{_ as z}from"./subSideNav-e25f03bc.js";import{_ as H}from"./CColunmChart-18498762.js";import"./CButton-175216dd.js";const R={class:"chart-section-principal"},W={class:"section-reincidencia"},q={class:"chart-section"},G=d("span",{class:"card-title"},"Pregunta",-1),J=d("span",{class:"question--value"},"5. Antes de estar en esta cárcel, ¿había estado preso(a)?",-1),_=7,oe={__name:"reinsidencia",setup(K){const v=l(""),u=l([]),a=k(),n=l(!1),h=l("Antecedentes y trayectorias / Encarcelamiento previo"),w=l({categories:["Sí","No","No Asignado"],crosshair:!1}),C=l({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),I=l({column:{pointPadding:.2,borderWidth:3}}),F=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),f=e=>e?Math.round(e*100)/100:0,$=(e,s,t)=>x({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),M=async e=>{n.value=!0;const s=r.filter(t=>t.id!==e);r.splice(0,r.length),u.value=u.value.filter(t=>t.carcelId!==e),y(),s.map(t=>r.push(t)),await a.sleep(50),n.value=!1},y=()=>{let e=u.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/u.value.length,e=Math.round(f(e)),v.value=e.toString()},P=(e,s)=>{let t=0,c=0,m=0;for(let o=0;o<e.length;o++)e[o].value===0&&t++,e[o].value===1&&c++,e[o].value===-1&&(m+=e[o].value*-1);const i=t+c;return u.value.push({carcelId:s,pointCarcel:Math.round(f(c*100/i))}),y(),[Math.round(f(c*100/i)),Math.round(f(t*100/i))]},r=x([]),g=async(e,s,t)=>{var c,m;try{let i=((c=a==null?void 0:a.penitenciaria)==null?void 0:c.id)??null,o=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,b=a.historyId;if(t&&(i=e,o=s),b&&i){n.value=!0;let E=await O({historyId:b,carcelId:i,categoryId:_,subCategoryId:23,embedDetail:!0,dimensionId:128});const N=P(E.items,i);r.push($(i,o,N))}}catch(i){console.log(i)}finally{t||(n.value=!1)}},D=async()=>{n.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),n.value=!1};return(e,s)=>(S(),A(T,null,{default:V(()=>[p(X,{title:h.value,"section-value":_},null,8,["title"]),p(B,{"active-spin":n.value},null,8,["active-spin"]),p(Y,{baseFilter:_,multipleDisabled:!1,onExecuteMount:D,onExecuteAction:g,onExecuteRemove:M}),d("div",R,[p(z,{class:"subsection-trayectoria",title:h.value,"section-value":_,pointValue:v.value,pointTitle:"Encarcelamiento previo",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),d("div",W,[d("div",q,[n.value?L("",!0):(S(),A(H,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:C.value,plotOptions:I.value,tooltip:F.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(j,{class:"card-preguntas"},{default:V(()=>[G,J]),_:1})])])]),_:1}))}};export{oe as default};
