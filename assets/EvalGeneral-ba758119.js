import{r as t,f as b,o as I,d as P,w as r,_ as w,b as n,a as e}from"./index-550390c3.js";import{_ as A}from"./CHeaderBar-e1a2dee2.js";import{u as F,_ as q,a as u}from"./CCard-e1ffe2f1.js";import{_ as E}from"./CColunmChart-335fed63.js";import{g as S}from"./dimensionHistory-a722060f.js";import"./exporting-07a52087.js";import"./api-7944baea.js";const $={class:"evaluacion-general"},D={class:"chart-section"},k=e("span",{class:"card-title"},"Promedio respuestas evaluación general",-1),B=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),C=e("span",{class:"card-title"},"Preguntas",-1),L=e("span",{class:"question--value"},"8.1 A pesar de todo, le he podido dar un sentido a mi vida en esta cárcel",-1),M=e("span",{class:"question--value"},"8.2 Siento que estar acá me ha ayudado a salir adelante",-1),p=1,V={__name:"EvalGeneral",setup(O){const s=F(),_=t("Calidad de vida de los internos / Evaluación general"),m=t({categories:["8.1","8.2"],crosshair:!1}),f=t({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),v=t({column:{pointPadding:.2,borderWidth:3}}),h=t({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),i=t([{name:"",data:[],dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),c=async()=>{var l;try{const o=((l=s==null?void 0:s.penitenciaria)==null?void 0:l.id)??null,d=s.historyId;if(d&&o){let g=await S({historyId:d,carcelId:o,categoryId:1,subCategoryId:8});i.value[0].name=s.penitenciaria.description;let y=g.filter(a=>a.poundUsed===1);i.value[0].data=[],y.map(a=>{const x=a!=null&&a.promPound?Math.round((a==null?void 0:a.promPound)*100)/100:0;i.value[0].data.push(x)})}}catch(o){console.log(o)}};return b(async()=>{await c()}),(l,o)=>(I(),P(w,null,{default:r(()=>[n(A,{title:_.value,"section-value":p},null,8,["title"]),n(q,{baseFilter:p,onExecuteAction:c}),e("div",$,[e("div",D,[n(u,{class:"card-information"},{default:r(()=>[k,B]),_:1}),n(E,{optionsAxisX:m.value,optionsAxisY:f.value,plotOptions:v.value,tooltip:h.value,series:i.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),n(u,{class:"card-preguntas"},{default:r(()=>[C,L,M]),_:1})])]),_:1}))}};export{V as default};
