import{u as P,g as p,r as h,o as g,f as y,j as b,_ as k,l as m,m as E,b as f,a as L,n as N}from"./index-b9c74f25.js";import{_ as Q}from"./CHeaderBar-1bcb54ea.js";import{_ as B}from"./CFilterbar-6149653d.js";import{_ as O}from"./CCard-6e956990.js";import{_ as R}from"./CColunmChart-df6333d1.js";import"./CSelect.vue_vue_type_style_index_0_lang-9aa73486.js";import"./CSelect-0254b8e1.js";import"./carceles-7aded4be.js";const X={class:"evaluacion-general"},Y={class:"chart-section"},q=f("span",{class:"card-title"},"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg",-1),z=f("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),x=1,te={__name:"cuestionarioIGHQ",setup(M){const s=P(),i=p(!1),I=p("Calidad de vida de los funcionarios / Cuestionario de Salud GHQ-12 de Goldberg"),S=p({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),w=p({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),D=p({column:{pointPadding:.2,borderWidth:3}}),G=p({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b>%</td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=h([]),A=(e,o,t)=>h({id:e,name:o,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=async e=>{i.value=!0;const o=r.filter(t=>t.id!==e);r.splice(0,r.length),o.map(t=>r.push(t)),await s.sleep(50),i.value=!1},F=e=>{let o=e[0].recordId,t=0,n=0,l=0,a=0;for(let d=0;d<e.length;d++){let u=e[d];u.recordId==o&&u.pound>=0?a+=u.pound:(a<2?t++:a>2&&a<=6?n++:a>6&&l++,a=u.pound,o=u.recordId)}const c=t+n+l;return t=t/c*100,n=n/c*100,l=l/c*100,[_(t),_(n),_(l)]},_=e=>e?Math.round(e*100)/100:0,v=async(e,o,t)=>{var n,l;try{let a=((n=s==null?void 0:s.penitenciaria)==null?void 0:n.id)??null,c=((l=s==null?void 0:s.penitenciaria)==null?void 0:l.description)??null,d=s.historyId;if(t&&(a=e,c=o),d&&a){i.value=!0;let V=await N({historyId:d,carcelId:a,categoryId:2,subCategoryId:22,embedDetail:!0});const $=F(V.items);r.push(A(a,c,$))}}catch(a){console.log(a)}finally{t||(i.value=!1)}},H=async()=>{i.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),i.value=!1};return(e,o)=>(g(),y(k,null,{default:b(()=>[m(Q,{title:I.value,"section-value":x},null,8,["title"]),m(E,{"active-spin":i.value},null,8,["active-spin"]),m(B,{baseFilter:x,multipleDisabled:!1,onExecuteMount:H,onExecuteAction:v,onExecuteRemove:C}),f("div",X,[f("div",Y,[m(O,{class:"card-information"},{default:b(()=>[q,z]),_:1}),i.value?L("",!0):(g(),y(R,{key:0,optionsAxisX:S.value,optionsAxisY:w.value,plotOptions:D.value,tooltip:G.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{te as default};
