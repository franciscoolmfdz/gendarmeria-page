import{r as t,f as x,o as F,d as I,w as c,_ as q,b as n,a as o}from"./index-550390c3.js";import{_ as w}from"./CHeaderBar-e1a2dee2.js";import{u as z,_ as C,a as p}from"./CCard-e1ffe2f1.js";import{_ as P}from"./CColunmChart-335fed63.js";import{g as A}from"./dimensionHistory-a722060f.js";import"./exporting-07a52087.js";import"./api-7944baea.js";const $={class:"regimen-carcel"},D={class:"chart-section"},L=o("span",{class:"card-title"},"Frecuencia respuestas Confianza y valoración",-1),M=o("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),S=o("span",{class:"card-title"},"Preguntas",-1),V=o("span",{class:"question--value"},"fp2 Confío en los oficiales que dirigen esta prisión",-1),k=o("span",{class:"question--value"},"fp6 Los oficiales son accesibles cuando necesito discutir un problema con ellos",-1),B=o("span",{class:"question--value"},"fp7 Me siento valorado por mi jefatura",-1),u=2,j={__name:"confianzaValoracion",setup(O){const s=z(),f=t("Calidad de vida de los funcionarios / Confianza y valoración"),_=t({categories:["fp2","fp6","fp7"],crosshair:!1}),m=t({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),v=t({column:{pointPadding:.2,borderWidth:3}}),h=t({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),e=t([{name:"",data:[],dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),r=async()=>{var l;try{const i=((l=s==null?void 0:s.penitenciaria)==null?void 0:l.id)??null,d=s.historyId;if(d&&i){let y=await A({historyId:d,carcelId:i,categoryId:2,subCategoryId:10});e.value[0].name=s.penitenciaria.description;let g=y.filter(a=>a.poundUsed===1);e.value[0].data=[],g.map(a=>{const b=a!=null&&a.promPound?Math.round((a==null?void 0:a.promPound)*100)/100:0;e.value[0].data.push(b)})}else e.value[0].data=[]}catch(i){console.log(i)}};return x(async()=>{await r()}),(l,i)=>(F(),I(q,null,{default:c(()=>[n(w,{title:f.value,"section-value":u},null,8,["title"]),n(C,{baseFilter:u,onExecuteAction:r}),o("div",$,[o("div",D,[n(p,{class:"card-information"},{default:c(()=>[L,M]),_:1}),n(P,{optionsAxisX:_.value,optionsAxisY:m.value,plotOptions:v.value,tooltip:h.value,series:e.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),n(p,{class:"card-preguntas"},{default:c(()=>[S,V,k,B]),_:1})])]),_:1}))}};export{j as default};
