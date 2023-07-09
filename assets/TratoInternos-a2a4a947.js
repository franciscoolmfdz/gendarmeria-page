import{r as e,d as x,o as q,e as I,w as l,_ as E,b as i,a as s}from"./index-5069a134.js";import{_ as P}from"./CHeaderBar-83c7dd95.js";import{u as w,_ as F,a as u}from"./CCard-056742a4.js";import{_ as A}from"./CColunmChart-292cec65.js";import{g as S}from"./dimensionHistory-eedeeb76.js";import"./api-5b4ce668.js";import"./exporting-82a152bc.js";const T={class:"trato-internos"},$={class:"chart-section"},D=s("span",{class:"card-title"},"Promedio respuestas de trato con otros internos",-1),k=s("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),z=s("span",{class:"card-title"},"Preguntas",-1),B=s("span",{class:"question--value"},"4.1 En esta cárcel me llevo bien con otros internos",-1),C=s("span",{class:"question--value"},"4.2 En esta cárcel me siento inseguro o amenazado",-1),L=s("span",{class:"question--value"},"4.3 Siento que soy tratado con respeto por otros internos",-1),M=s("span",{class:"question--value"},"4.4 En esta cárcel se abusa de los internos más débiles",-1),O=s("span",{class:"question--value"},"4.5 En esta cárcel me siento seguro de agresiones de otros internos",-1),X=s("span",{class:"question--value"},"4.6 En esta cárcel tengo amigos que me ayudan",-1),Y=s("span",{class:"question--value"},"4.7 En esta cárcel temo por mi integridad física ",-1),p=1,K={__name:"TratoInternos",setup(H){const o=w(),_=e("Calidad de vida de los internos / Trato con otros internos"),m=e({categories:["4.1","4.2","4.3","4.4","4.5","4.6","4.7"],crosshair:!1}),f=e({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),h=e({column:{pointPadding:.2,borderWidth:3}}),v=e({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),a=e([{name:"",data:[],dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),c=async()=>{var r;try{const n=((r=o==null?void 0:o.penitenciaria)==null?void 0:r.id)??null,d=o.historyId;if(d&&n){let g=await S({historyId:d,carcelId:n,categoryId:1,subCategoryId:4});a.value[0].name=o.penitenciaria.description;let y=g.filter(t=>t.poundUsed===1);a.value[0].data=[],y.map(t=>{const b=t!=null&&t.promPound?Math.round((t==null?void 0:t.promPound)*100)/100:0;a.value[0].data.push(b)})}else a.value[0].data=[]}catch(n){console.log(n)}};return x(async()=>{await c()}),(r,n)=>(q(),I(E,null,{default:l(()=>[i(P,{title:_.value,"section-value":p},null,8,["title"]),i(F,{baseFilter:p,onExecuteAction:c}),s("div",T,[s("div",$,[i(u,{class:"card-information"},{default:l(()=>[D,k]),_:1}),i(A,{optionsAxisX:m.value,optionsAxisY:f.value,plotOptions:h.value,tooltip:v.value,series:a.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),i(u,{class:"card-preguntas"},{default:l(()=>[z,B,C,L,M,O,X,Y]),_:1})])]),_:1}))}};export{K as default};
