import{h as r,i as $,r as g,o as y,f as x,j as u,_ as k,g as d,k as L,b as e,a as O,l as V}from"./index-c619b897.js";import{_ as z}from"./CHeaderBar-1d33da3e.js";import{_ as B}from"./CFilterbar-55fa5467.js";import{_ as b}from"./CCard-1c845476.js";import{_ as N}from"./CColunmChart-24d17a08.js";import"./CSelect.vue_vue_type_style_index_0_lang-b9870a27.js";import"./CSelect-f9a2a604.js";import"./carceles-3b8ad7b2.js";import"./exporting-0eb74ff7.js";const X={class:"regimen-carcel"},Y={class:"chart-section"},j=e("span",{class:"card-title"},"Promedio respuestas Regimen de la carcel",-1),H=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),M=e("span",{class:"card-title"},"Preguntas",-1),T=e("span",{class:"question--value"},"6.1 Conozco los pasos a seguir para hacer un reclamo",-1),U=e("span",{class:"question--value"},"6.2 Siento que las reglas de esta cárcel son claras",-1),W=e("span",{class:"question--value"},"6.3 En esta cárcel me siento discriminado (ya sea por mi orientación sexual, país de origen, delito u otra)",-1),G=e("span",{class:"question--value"},"6.4 Acá responden rápido a los escritos de los internos",-1),J=e("span",{class:"question--value"},"6.5 Los gendarmes responden rápido cuando hay una emergencia",-1),K=e("span",{class:"question--value"},"6.6 Aquí cada gendarme pone sus propias reglas",-1),Q=e("span",{class:"question--value"},"6.7 En esta cárcel recibo un trato justo y se respetan mis derechos",-1),q=1,ue={__name:"RegimenCarcel",setup(Z){const t=r(!1),s=$(),S=r("Calidad de vida de los internos / Regimen de la carcel"),w=r({categories:["6.1","6.2","6.3","6.4","6.5","6.6","6.7"],crosshair:!1}),C=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),P=r({column:{pointPadding:.2,borderWidth:3}}),A=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),D=(a,l,o)=>g({id:a,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async a=>{t.value=!0;const l=n.filter(o=>o.id!==a);n.splice(0,n.length),l.map(o=>n.push(o)),await s.sleep(50),t.value=!1},p=async(a,l,o)=>{var m,_;try{let c=((m=s==null?void 0:s.penitenciaria)==null?void 0:m.id)??null,f=((_=s==null?void 0:s.penitenciaria)==null?void 0:_.description)??null,h=s.historyId;if(o&&(c=a,f=l),h&&c){t.value=!0;let F=await V({historyId:h,carcelId:c,categoryId:1,subCategoryId:6});const v=[];F.filter(i=>i.poundUsed===1).map(i=>{const R=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;v.push(R)}),n.push(D(c,f,v))}}catch(c){console.log(c)}finally{o||(t.value=!1)}},E=async()=>{t.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await p(a.id,a.description,!0))),t.value=!1};return(a,l)=>(y(),x(k,null,{default:u(()=>[d(z,{title:S.value,"section-value":q},null,8,["title"]),d(L,{"active-spin":t.value},null,8,["active-spin"]),d(B,{baseFilter:q,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:p,onExecuteRemove:I}),e("div",X,[e("div",Y,[d(b,{class:"card-information"},{default:u(()=>[j,H]),_:1}),t.value?O("",!0):(y(),x(N,{key:0,optionsAxisX:w.value,optionsAxisY:C.value,plotOptions:P.value,tooltip:A.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(b,{class:"card-preguntas"},{default:u(()=>[M,T,U,W,G,J,K,Q]),_:1})])]),_:1}))}};export{ue as default};
