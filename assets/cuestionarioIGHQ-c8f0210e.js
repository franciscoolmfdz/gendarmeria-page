import{i as P,h as p,r as h,o as g,f as y,j as b,_ as k,g as m,b as f,a as E}from"./index-81990198.js";import{_ as L}from"./CSpinner-bfff3c1b.js";import{_ as N}from"./CHeaderBar-c05e4acb.js";import{_ as Q}from"./CFilterbar-cf066549.js";import{_ as B}from"./CCard-45074258.js";import{_ as O}from"./CColunmChart-e1a7329a.js";import{a as R}from"./dimensionHistory-2874fc68.js";import"./CSelect.vue_vue_type_style_index_0_lang-f7ab962f.js";import"./CSelect-97c825b8.js";import"./carceles-fea03c35.js";import"./api-ec658a74.js";import"./exporting-32b7d0aa.js";const X={class:"evaluacion-general"},Y={class:"chart-section"},q=f("span",{class:"card-title"},"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg",-1),z=f("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),x=1,se={__name:"cuestionarioIGHQ",setup(M){const a=P(),s=p(!1),I=p("Calidad de vida de los funcionarios / Cuestionario de Salud GHQ-12 de Goldberg"),S=p({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),w=p({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),D=p({column:{pointPadding:.2,borderWidth:3}}),G=p({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b>%</td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=h([]),A=(e,i,t)=>h({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=async e=>{s.value=!0;const i=r.filter(t=>t.id!==e);r.splice(0,r.length),i.map(t=>r.push(t)),await a.sleep(50),s.value=!1},F=e=>{let i=e[0].recordId,t=0,n=0,l=0,o=0;for(let d=0;d<e.length;d++){let u=e[d];u.recordId==i&&u.pound>=0?o+=u.pound:(o<2?t++:o>2&&o<=6?n++:o>6&&l++,o=u.pound,i=u.recordId)}const c=t+n+l;return t=t/c*100,n=n/c*100,l=l/c*100,[_(t),_(n),_(l)]},_=e=>e?Math.round(e*100)/100:0,v=async(e,i,t)=>{var n,l;try{let o=((n=a==null?void 0:a.penitenciaria)==null?void 0:n.id)??null,c=((l=a==null?void 0:a.penitenciaria)==null?void 0:l.description)??null,d=a.historyId;if(t&&(o=e,c=i),d&&o){s.value=!0;let V=await R({historyId:d,carcelId:o,categoryId:2,subCategoryId:22,embedDetail:!0});const $=F(V.items);r.push(A(o,c,$))}}catch(o){console.log(o)}finally{t||(s.value=!1)}},H=async()=>{s.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),s.value=!1};return(e,i)=>(g(),y(k,null,{default:b(()=>[m(N,{title:I.value,"section-value":x},null,8,["title"]),m(L,{"active-spin":s.value},null,8,["active-spin"]),m(Q,{baseFilter:x,multipleDisabled:!1,onExecuteMount:H,onExecuteAction:v,onExecuteRemove:C}),f("div",X,[f("div",Y,[m(B,{class:"card-information"},{default:b(()=>[q,z]),_:1}),s.value?E("",!0):(g(),y(O,{key:0,optionsAxisX:S.value,optionsAxisY:w.value,plotOptions:D.value,tooltip:G.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{se as default};
