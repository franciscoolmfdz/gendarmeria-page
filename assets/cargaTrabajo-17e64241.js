import{r as t,f as x,o as q,d as j,w as l,_ as F,b as n,a}from"./index-550390c3.js";import{_ as I}from"./CHeaderBar-e1a2dee2.js";import{u as w,_ as P,a as p}from"./CCard-e1ffe2f1.js";import{_ as A}from"./CColunmChart-335fed63.js";import{g as T}from"./dimensionHistory-a722060f.js";import"./exporting-07a52087.js";import"./api-7944baea.js";const $={class:"regimen-carcel"},C={class:"chart-section"},D=a("span",{class:"card-title"},"Frecuencia respuestas carga de trabajo",-1),M=a("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),S=a("span",{class:"card-title"},"Preguntas",-1),k=a("span",{class:"question--value"},"fp10 Me dan una cantidad de responsabilidad adecuada en esta cárcel",-1),z=a("span",{class:"question--value"},"fp11 Tengo el nivel apropiado de autoridad para hacer mi trabajo correctamente.",-1),B=a("span",{class:"question--value"},"fp12 Estoy satisfecho/a con la formación que he recibido para hacer mi trabajo",-1),E=a("span",{class:"question--value"},"fp13 Recibo el apoyo y respaldo necesario (desde la jefatura/institución) para las labores que debo realizar",-1),u=2,W={__name:"cargaTrabajo",setup(L){const o=w(),_=t("Calidad de vida de los funcionarios / Carga de trabajo"),f=t({categories:["fp10","fp11","fp12","fp13"],crosshair:!1}),m=t({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),h=t({column:{pointPadding:.2,borderWidth:3}}),g=t({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),s=t([{name:"",data:[],dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),c=async()=>{var r;try{const i=((r=o==null?void 0:o.penitenciaria)==null?void 0:r.id)??null,d=o.historyId;if(d&&i){let v=await T({historyId:d,carcelId:i,categoryId:2,subCategoryId:12});s.value[0].name=o.penitenciaria.description;let y=v.filter(e=>e.poundUsed===1);s.value[0].data=[],y.map(e=>{const b=e!=null&&e.promPound?Math.round((e==null?void 0:e.promPound)*100)/100:0;s.value[0].data.push(b)})}else s.value[0].data=[]}catch(i){console.log(i)}};return x(async()=>{await c()}),(r,i)=>(q(),j(F,null,{default:l(()=>[n(I,{title:_.value,"section-value":u},null,8,["title"]),n(P,{baseFilter:u,onExecuteAction:c}),a("div",$,[a("div",C,[n(p,{class:"card-information"},{default:l(()=>[D,M]),_:1}),n(A,{optionsAxisX:f.value,optionsAxisY:m.value,plotOptions:h.value,tooltip:g.value,series:s.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),n(p,{class:"card-preguntas"},{default:l(()=>[S,k,z,B,E]),_:1})])]),_:1}))}};export{W as default};
