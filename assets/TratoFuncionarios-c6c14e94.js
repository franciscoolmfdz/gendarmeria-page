import{r as e,d as x,o as q,f as F,w as c,_ as I,b as i,a as s}from"./index-af54f42b.js";import{_ as P}from"./CHeaderBar-5e3101d4.js";import{u as S,_ as w,a as u}from"./CCard-ecc4dd49.js";import{_ as E}from"./CColunmChart-fd6c9b97.js";import{g as A}from"./dimensionHistory-a722060f.js";import"./exporting-282e35a5.js";import"./api-7944baea.js";const T={class:"trato-funcionarios"},$={class:"chart-section"},D=s("span",{class:"card-title"},"Promedio respuestas de trato con funcionarios",-1),M=s("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),k=s("span",{class:"card-title"},"Preguntas",-1),B=s("span",{class:"question--value"},"5.1 Soy tratado con respeto por los funcionarios",-1),C=s("span",{class:"question--value"},"5.2 He recibido tratos humillantes en esta cárcel",-1),H=s("span",{class:"question--value"},"5.3 Soy tratado como un ser humano en esta cárcel",-1),L=s("span",{class:"question--value"},"5.4 En esta cárcel se abusa de los internos más débiles",-1),O=s("span",{class:"question--value"},"5.5 Me llevo bien con los gendarmes de mi módulo",-1),X=s("span",{class:"question--value"},"5.6 Siento que los funcionarios confían en mí",-1),Y=s("span",{class:"question--value"},"5.7 En esta cárcel los funcionarios son honestos",-1),z=s("span",{class:"question--value"},"5.8 En esta cárcel recibo apoyo del personal cuando lo necesito",-1),N=s("span",{class:"question--value"},"5.9 En esta cárcel los gendarmes se preocupan por mí",-1),p=1,Z={__name:"TratoFuncionarios",setup(U){const t=S(),_=e("Calidad de vida de los internos / Trato con funcionario interno"),m=e({categories:["5.1","5.2","5.3","5.4","5.5","5.6","5.7"],crosshair:!1}),f=e({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),h=e({column:{pointPadding:.2,borderWidth:3}}),v=e({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),a=e([{name:"",data:[],dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),r=async()=>{var l;try{const n=((l=t==null?void 0:t.penitenciaria)==null?void 0:l.id)??null,d=t.historyId;if(d&&n){let y=await A({historyId:d,carcelId:n,categoryId:1,subCategoryId:5});a.value[0].name=t.penitenciaria.description;let g=y.filter(o=>o.poundUsed===1);a.value[0].data=[],g.map(o=>{const b=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;a.value[0].data.push(b)})}else a.value[0].data=[]}catch(n){console.log(n)}};return x(async()=>{await r()}),(l,n)=>(q(),F(I,null,{default:c(()=>[i(P,{title:_.value,"section-value":p},null,8,["title"]),i(w,{baseFilter:p,onExecuteAction:r}),s("div",T,[s("div",$,[i(u,{class:"card-information"},{default:c(()=>[D,M]),_:1}),i(E,{optionsAxisX:m.value,optionsAxisY:f.value,plotOptions:h.value,tooltip:v.value,series:a.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),i(u,{class:"card-preguntas"},{default:c(()=>[k,B,C,H,L,O,X,Y,z,N]),_:1})])]),_:1}))}};export{Z as default};