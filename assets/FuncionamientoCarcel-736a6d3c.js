import{r as e,f as b,o as x,d as F,w as l,_ as A,b as i,a as s}from"./index-550390c3.js";import{_ as I}from"./CHeaderBar-e1a2dee2.js";import{u as w,_ as E,a as u}from"./CCard-e1ffe2f1.js";import{_ as P}from"./CColunmChart-335fed63.js";import{g as C}from"./dimensionHistory-a722060f.js";import"./exporting-07a52087.js";import"./api-7944baea.js";const S={class:"funcionamiento-carcel"},$={class:"chart-section"},D=s("span",{class:"card-title"},"Promedio respuestas funcionamiento de la carcel",-1),L=s("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),M=s("span",{class:"card-title"},"Preguntas",-1),k=s("span",{class:"question--value"},"7.1 Mi vida en esta cárcel es aburrida ",-1),B=s("span",{class:"question--value"},"7.2 En esta cárcel he sufrido mucho ",-1),H=s("span",{class:"question--value"},"7.3 En este lugar he pensado en el suicidio ",-1),O=s("span",{class:"question--value"},"7.4 Hay mucho consumo de drogas en esta cárcel ",-1),X=s("span",{class:"question--value"},"7.5 Acá te mandan al castigo por cualquier cosa ",-1),Y=s("span",{class:"question--value"},"7.6 Siento que esta cárcel funciona bien ",-1),z=s("span",{class:"question--value"},"7.7 El ambiente de esta cárcel es es tenso ",-1),N=s("span",{class:"question--value"},"7.8 En esta cárcel las cosas se mueven con plata ",-1),T=s("span",{class:"question--value"},"7.9 Los gendarmes son justos en su trato con nosotros aquí ",-1),U=s("span",{class:"question--value"},"7.10 Aquí tratan bien a las visitas ",-1),p=1,ss={__name:"FuncionamientoCarcel",setup(V){const t=w(),_=e("Calidad de vida de los internos / Funcionamiento de la carcel"),m=e({categories:["7.1","7.2","7.3","7.4","7.5","7.6","7.7","7.8","7.9","7.10"],crosshair:!1}),f=e({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),h=e({column:{pointPadding:.2,borderWidth:3}}),v=e({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),a=e([{name:"",data:[],dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),r=async()=>{var c;try{const o=((c=t==null?void 0:t.penitenciaria)==null?void 0:c.id)??null,d=t.historyId;if(d&&o){let g=await C({historyId:d,carcelId:o,categoryId:1,subCategoryId:7});a.value[0].name=t.penitenciaria.description;let y=g.filter(n=>n.poundUsed===1);a.value[0].data=[],y.map(n=>{const q=Math.round((n==null?void 0:n.promPound)*100)/100;a.value[0].data.push(q)})}else a.value[0].data=[]}catch(o){console.log(o)}};return b(async()=>{await r()}),(c,o)=>(x(),F(A,null,{default:l(()=>[i(I,{title:_.value,"section-value":p},null,8,["title"]),i(E,{baseFilter:p,onExecuteAction:r}),s("div",S,[s("div",$,[i(u,{class:"card-information"},{default:l(()=>[D,L]),_:1}),i(P,{optionsAxisX:m.value,optionsAxisY:f.value,plotOptions:h.value,tooltip:v.value,series:a.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),i(u,{class:"card-preguntas"},{default:l(()=>[M,k,B,H,O,X,Y,z,N,T,U]),_:1})])]),_:1}))}};export{ss as default};
