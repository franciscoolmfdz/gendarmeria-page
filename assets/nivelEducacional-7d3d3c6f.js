import{r as o,g as T,o as V,e as X,w as r,_ as Y,b as l,a}from"./index-986a4269.js";import{_ as z}from"./CHeaderBar-e3b0e061.js";import{u as M,_ as N,a as D}from"./CCard-63501cdd.js";import{_ as O}from"./CColunmChart-964976fc.js";import{a as W}from"./dimensionHistory-d5c47017.js";import"./exporting-f737d7ca.js";import"./api-7944baea.js";const U={class:"regimen-carcel"},j={class:"chart-section"},G=a("span",{class:"card-title"},"Suma de p3 ¿Hasta qué curso llegó (en la calle)?",-1),J=a("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),K=a("span",{class:"card-title"},"Pregunta",-1),Q=a("span",{class:"question--value"},"FP 3 ¿Hasta qué curso llegó (en la calle)?",-1),S=7,le={__name:"nivelEducacional",setup(R){const i=M(),E=o("Trayectoria / ¿Hasta qué curso llegó (en la calle)?"),H=o({categories:["sin estudios formales","primero básico","segundo básico","tercero básico","cuarto básico","quinto básico","sexto básico","séptimo básico","octavo básico","I medio","II medio","III medio","IV medio completo","superior incompleta","superior completa","no asignado"],crosshair:!1}),$=o({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),k=o({column:{pointPadding:.2,borderWidth:3}}),P=o({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=o([{name:"",data:[],dataLabels:{enabled:!0,color:"black",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"normal"}}}]),u=async()=>{var c;try{const s=((c=i==null?void 0:i.penitenciaria)==null?void 0:c.id)??null,d=i.historyId;if(d&&s){const C={historyId:d.value,carcelId:s,categoryId:7,subCategoryId:23,embedDetail:!0};let L=await W(C);n.value[0].name=i.penitenciaria.description;const t=L.items.filter(e=>e.dimensionId===126);let m=0,p=0,f=0,_=0,v=0,g=0,b=0,h=0,y=0,I=0,x=0,B=0,q=0,F=0,w=0,A=null;for(let e=0;e<t.length;e++)t[e].value===0&&m++,t[e].value===1&&p++,t[e].value===2&&f++,t[e].value===3&&_++,t[e].value===4&&v++,t[e].value===5&&g++,t[e].value===6&&b++,t[e].value===7&&h++,t[e].value===8&&y++,t[e].value===9&&I++,t[e].value===10&&x++,t[e].value===11&&B++,t[e].value===12&&q++,t[e].value===13&&F++,t[e].value===14&&w++,t[e].value===-1&&(A+=t[e].value*-1);n.value[0].data=[m,p,f,_,v,g,b,h,y,I,x,B,q,F,w,A]}else n.value[0].data=[]}catch(s){console.log(s)}};return T(async()=>{await u()}),(c,s)=>(V(),X(Y,null,{default:r(()=>[l(z,{title:E.value,"section-value":S},null,8,["title"]),l(N,{baseFilter:S,onExecuteAction:u}),a("div",U,[a("div",j,[l(D,{class:"card-information"},{default:r(()=>[G,J]),_:1}),l(O,{optionsAxisX:H.value,optionsAxisY:$.value,plotOptions:k.value,tooltip:P.value,series:n.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),l(D,{class:"card-preguntas"},{default:r(()=>[K,Q]),_:1})])]),_:1}))}};export{le as default};
