import{r as e,d as q,o as x,e as A,w as c,_ as F,b as i,a}from"./index-5069a134.js";import{_ as P}from"./CHeaderBar-83c7dd95.js";import{u as I,_ as w,a as p}from"./CCard-056742a4.js";import{_ as $}from"./CColunmChart-292cec65.js";import{g as D}from"./dimensionHistory-eedeeb76.js";import"./api-5b4ce668.js";import"./exporting-82a152bc.js";const E={class:"acceso-programas"},S={class:"chart-section"},k=a("span",{class:"card-title"},"Promedio respuestas acceso a programas",-1),B=a("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),C=a("span",{class:"card-title"},"Preguntas",-1),L=a("span",{class:"question--value"},"3.1 Aquí he podido trabajar y ganar algo de plata",-1),M=a("span",{class:"question--value"},"3.2 En esta cárcel he recibido capacitación laboral ",-1),O=a("span",{class:"question--value"},"3.3 Aquí he podido hablar con asistente social",-1),X=a("span",{class:"question--value"},"3.4 Aquí he podido conversar con la psicóloga",-1),Y=a("span",{class:"question--value"},"3.5 Aquí puedo ir donde el paramédico si lo necesito",-1),z=a("span",{class:"question--value"},"3.6 En esta cárcel he podido ir a la escuela o liceo penal",-1),H=a("span",{class:"question--value"},"3.7 Aquí se puede ir a talleres de alcohol o drogas si se necesita",-1),u=1,K={__name:"AccesoProgramas",setup(N){const o=I(),_=e("Calidad de vida de los internos / Acceso a programas"),m=e({categories:["3.1","3.2","3.3","3.4","3.5","3.6","3.7"],crosshair:!1}),h=e({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),f=e({column:{pointPadding:.2,borderWidth:3}}),g=e({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=e([{name:"",data:[],dataLabels:{enabled:!0,color:"#FFFFFF",align:"center",y:80,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),r=async()=>{var l;try{const t=((l=o==null?void 0:o.penitenciaria)==null?void 0:l.id)??null,d=o.historyId;if(d&&t){let v=await D({historyId:d,carcelId:t,categoryId:1,subCategoryId:3});n.value[0].name=o.penitenciaria.description;let y=v.filter(s=>s.poundUsed===1);n.value[0].data=[],y.map(s=>{const b=s!=null&&s.promPound?Math.round((s==null?void 0:s.promPound)*100)/100:0;n.value[0].data.push(b)})}}catch(t){console.log(t)}};return q(async()=>{await r()}),(l,t)=>(x(),A(F,null,{default:c(()=>[i(P,{title:_.value,"section-value":u},null,8,["title"]),i(w,{baseFilter:u,onExecuteAction:r}),a("div",E,[a("div",S,[i(p,{class:"card-information"},{default:c(()=>[k,B]),_:1}),i($,{optionsAxisX:m.value,optionsAxisY:h.value,plotOptions:f.value,tooltip:g.value,series:n.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),i(p,{class:"card-preguntas"},{default:c(()=>[C,L,M,O,X,Y,z,H]),_:1})])]),_:1}))}};export{K as default};
