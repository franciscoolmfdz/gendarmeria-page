import{r as e,f as b,o as F,d as I,w as c,_ as w,b as n,a}from"./index-c1545639.js";import{_ as C}from"./CHeaderBar-2b09166b.js";import{u as P,_ as A,a as p}from"./CCard-1ac39f99.js";import{_ as $}from"./CColunmChart-2de5c8f9.js";import{g as q}from"./dimensionHistory-a722060f.js";import"./exporting-f72a385a.js";import"./api-7944baea.js";const D={class:"regimen-carcel"},N={class:"chart-section"},S=a("span",{class:"card-title"},"Frecuencia respuestas Conocimiento de la normativa penitenciaria",-1),k=a("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),z=a("span",{class:"card-title"},"Preguntas",-1),B=a("span",{class:"question--value"},"fp40 Conozco la normativa penitenciaria atingente a mis funciones dentro del recinto",-1),E=a("span",{class:"question--value"},"fp41 Entiendo / comprendo la normativa atingente a mis funciones ",-1),u=2,W={__name:"conocimientoNormativa",setup(L){const o=P(),m=e("Calidad de vida de los funcionarios / Conocimiento de la normativa penitenciaria"),_=e({categories:["fp40","fp41"],crosshair:!1}),f=e({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),v=e({column:{pointPadding:.2,borderWidth:3}}),h=e({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),s=e([{name:"",data:[],dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),l=async()=>{var r;try{const i=((r=o==null?void 0:o.penitenciaria)==null?void 0:r.id)??null,d=o.historyId;if(d&&i){let g=await q({historyId:d,carcelId:i,categoryId:2,subCategoryId:19});s.value[0].name=o.penitenciaria.description;let y=g.filter(t=>t.poundUsed===1);s.value[0].data=[],y.map(t=>{const x=t!=null&&t.promPound?Math.round((t==null?void 0:t.promPound)*100)/100:0;s.value[0].data.push(x)})}else s.value[0].data=[]}catch(i){console.log(i)}};return b(async()=>{await l()}),(r,i)=>(F(),I(w,null,{default:c(()=>[n(C,{title:m.value,"section-value":u},null,8,["title"]),n(A,{baseFilter:u,onExecuteAction:l}),a("div",D,[a("div",N,[n(p,{class:"card-information"},{default:c(()=>[S,k]),_:1}),n($,{optionsAxisX:_.value,optionsAxisY:f.value,plotOptions:v.value,tooltip:h.value,series:s.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),n(p,{class:"card-preguntas"},{default:c(()=>[z,B,E]),_:1})])]),_:1}))}};export{W as default};
