import{i as A,h as r,r as g,o as x,f as b,j as d,_ as L,g as p,b as i,a as O}from"./index-81990198.js";import{_ as k}from"./CSpinner-bfff3c1b.js";import{_ as E}from"./CHeaderBar-c05e4acb.js";import{_ as B}from"./CFilterbar-cf066549.js";import{_ as S}from"./CCard-45074258.js";import{_ as M}from"./CColunmChart-e1a7329a.js";import{g as N}from"./dimensionHistory-2874fc68.js";import"./CSelect.vue_vue_type_style_index_0_lang-f7ab962f.js";import"./CSelect-97c825b8.js";import"./carceles-fea03c35.js";import"./api-ec658a74.js";import"./exporting-32b7d0aa.js";const X={class:"regimen-carcel"},Y={class:"chart-section"},j=i("span",{class:"card-title"},"Frecuencia respuestas Confianza y valoración",-1),H=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=i("span",{class:"card-title"},"Preguntas",-1),T=i("span",{class:"question--value"},"fp2 Confío en los oficiales que dirigen esta prisión",-1),U=i("span",{class:"question--value"},"fp6 Los oficiales son accesibles cuando necesito discutir un problema con ellos",-1),W=i("span",{class:"question--value"},"fp7 Me siento valorado por mi jefatura",-1),u=2,pe={__name:"confianzaValoracion",setup(G){const e=A(),a=r(!1),w=r("Calidad de vida de los funcionarios / Confianza y valoración"),C=r({categories:["fp2","fp6","fp7"],crosshair:!1}),D=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),q=(t,l,s)=>g({id:t,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),z=async t=>{a.value=!0;const l=n.filter(s=>s.id!==t);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),a.value=!1},f=async(t,l,s)=>{var m,_;try{let c=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(s&&(c=t,v=l),h&&c){a.value=!0;let V=await N({historyId:h,carcelId:c,categoryId:u,subCategoryId:10});const y=[];V.filter(o=>o.poundUsed===1).map(o=>{const $=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;y.push($)}),n.push(q(c,v,y))}}catch(c){console.log(c)}finally{s||(a.value=!1)}},I=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await f(t.id,t.description,!0))),a.value=!1};return(t,l)=>(x(),b(L,null,{default:d(()=>[p(E,{title:w.value,"section-value":u},null,8,["title"]),p(k,{"active-spin":a.value},null,8,["active-spin"]),p(B,{baseFilter:u,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:f,onExecuteRemove:z}),i("div",X,[i("div",Y,[p(S,{class:"card-information"},{default:d(()=>[j,H]),_:1}),a.value?O("",!0):(x(),b(M,{key:0,optionsAxisX:C.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:P.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(S,{class:"card-preguntas"},{default:d(()=>[R,T,U,W]),_:1})])]),_:1}))}};export{pe as default};