import{i as P,h as p,r as h,o as g,f as y,j as b,_ as k,g as m,b as f,a as E}from"./index-3af9b964.js";import{_ as L}from"./CSpinner-3836f3fe.js";import{_ as N}from"./CHeaderBar-d4bf5098.js";import{_ as Q}from"./CFilterbar-4a7dd182.js";import{_ as B}from"./CCard-cce35b69.js";import{_ as O}from"./CColunmChart-3dd00787.js";import{a as R}from"./dimensionHistory-76a7be62.js";import"./exporting-ab33cfd3.js";import"./api-5b4ce668.js";const X={class:"evaluacion-general"},Y={class:"chart-section"},q=f("span",{class:"card-title"},"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg",-1),z=f("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),x=1,ae={__name:"cuestionarioIGHQ",setup(M){const o=P(),i=p(!1),I=p("Calidad de vida de los funcionarios / Cuestionario de Salud GHQ-12 de Goldberg"),S=p({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),w=p({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),D=p({column:{pointPadding:.2,borderWidth:3}}),G=p({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b>%</td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=h([]),A=(e,s,t)=>h({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=async e=>{i.value=!0;const s=r.filter(t=>t.id!==e);r.splice(0,r.length),s.map(t=>r.push(t)),await o.sleep(50),i.value=!1},F=e=>{let s=e[0].recordId,t=0,n=0,l=0,a=0;for(let d=0;d<e.length;d++){let u=e[d];u.recordId==s&&u.pound>=0?a+=u.pound:(a<2?t++:a>2&&a<=6?n++:a>6&&l++,a=u.pound,s=u.recordId)}const c=t+n+l;return t=t/c*100,n=n/c*100,l=l/c*100,[_(t),_(n),_(l)]},_=e=>e?Math.round(e*100)/100:0,v=async(e,s,t)=>{var n,l;try{let a=((n=o==null?void 0:o.penitenciaria)==null?void 0:n.id)??null,c=((l=o==null?void 0:o.penitenciaria)==null?void 0:l.description)??null,d=o.historyId;if(t&&(a=e,c=s),d&&a){i.value=!0;let V=await R({historyId:d,carcelId:a,categoryId:2,subCategoryId:22,embedDetail:!0});const $=F(V.items);r.push(A(a,c,$))}}catch(a){console.log(a)}finally{t||(i.value=!1)}},H=async()=>{i.value=!0,o.carcelesSelected&&o.carcelesSelected.length>0&&await Promise.all(o.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),i.value=!1};return(e,s)=>(g(),y(k,null,{default:b(()=>[m(N,{title:I.value,"section-value":x},null,8,["title"]),m(L,{"active-spin":i.value},null,8,["active-spin"]),m(Q,{baseFilter:x,multipleDisabled:!1,onExecuteMount:H,onExecuteAction:v,onExecuteRemove:C}),f("div",X,[f("div",Y,[m(B,{class:"card-information"},{default:b(()=>[q,z]),_:1}),i.value?E("",!0):(g(),y(O,{key:0,optionsAxisX:S.value,optionsAxisY:w.value,plotOptions:D.value,tooltip:G.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{ae as default};
