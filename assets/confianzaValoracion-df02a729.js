import{i as k,h as r,r as g,o as x,f as b,j as p,_ as A,g as d,b as i,a as L,k as O}from"./index-ea41498e.js";import{_ as E}from"./CSpinner-f0b0a17e.js";import{_ as B}from"./CHeaderBar-9e1a4280.js";import{_ as M}from"./CFilterbar-da4f705e.js";import{_ as S}from"./CCard-3b7f55b7.js";import{_ as N}from"./CColunmChart-51b138b0.js";import"./CSelect.vue_vue_type_style_index_0_lang-ea3e1c73.js";import"./CSelect-64d8cf1d.js";import"./carceles-4edea485.js";import"./exporting-a6d722f2.js";const X={class:"regimen-carcel"},Y={class:"chart-section"},j=i("span",{class:"card-title"},"Frecuencia respuestas Confianza y valoración",-1),H=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=i("span",{class:"card-title"},"Preguntas",-1),T=i("span",{class:"question--value"},"fp2 Confío en los oficiales que dirigen esta prisión",-1),U=i("span",{class:"question--value"},"fp6 Los oficiales son accesibles cuando necesito discutir un problema con ellos",-1),W=i("span",{class:"question--value"},"fp7 Me siento valorado por mi jefatura",-1),u=2,ce={__name:"confianzaValoracion",setup(G){const e=k(),t=r(!1),w=r("Calidad de vida de los funcionarios / Confianza y valoración"),C=r({categories:["fp2","fp6","fp7"],crosshair:!1}),D=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),q=(a,l,s)=>g({id:a,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),z=async a=>{t.value=!0;const l=n.filter(s=>s.id!==a);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),t.value=!1},f=async(a,l,s)=>{var _,m;try{let c=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.id)??null,v=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,h=e.historyId;if(s&&(c=a,v=l),h&&c){t.value=!0;let V=await O({historyId:h,carcelId:c,categoryId:u,subCategoryId:10});const y=[];V.filter(o=>o.poundUsed===1).map(o=>{const $=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;y.push($)}),n.push(q(c,v,y))}}catch(c){console.log(c)}finally{s||(t.value=!1)}},I=async()=>{t.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async a=>await f(a.id,a.description,!0))),t.value=!1};return(a,l)=>(x(),b(A,null,{default:p(()=>[d(B,{title:w.value,"section-value":u},null,8,["title"]),d(E,{"active-spin":t.value},null,8,["active-spin"]),d(M,{baseFilter:u,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:f,onExecuteRemove:z}),i("div",X,[i("div",Y,[d(S,{class:"card-information"},{default:p(()=>[j,H]),_:1}),t.value?L("",!0):(x(),b(N,{key:0,optionsAxisX:C.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:P.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(S,{class:"card-preguntas"},{default:p(()=>[R,T,U,W]),_:1})])]),_:1}))}};export{ce as default};
