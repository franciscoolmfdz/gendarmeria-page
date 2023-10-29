import{i as O,h as r,r as y,o as b,f as x,j as p,_ as k,g as d,b as e,a as L}from"./index-c7e60c0d.js";import{_ as V}from"./CSpinner-8e67e485.js";import{_ as B}from"./CHeaderBar-f802f93d.js";import{_ as N}from"./CFilterbar-a60f96d0.js";import{_ as q}from"./CCard-9caa2825.js";import{_ as X}from"./CColunmChart-46cb0204.js";import{g as Y}from"./dimensionHistory-893adf31.js";import"./exporting-f3fb0e82.js";import"./api-ec658a74.js";const j={class:"acceso-programas"},z={class:"chart-section"},H=e("span",{class:"card-title"},"Promedio respuestas acceso a programas",-1),M=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=e("span",{class:"card-title"},"Preguntas",-1),T=e("span",{class:"question--value"},"3.1 Aquí he podido trabajar y ganar algo de plata",-1),U=e("span",{class:"question--value"},"3.2 En esta cárcel he recibido capacitación laboral ",-1),W=e("span",{class:"question--value"},"3.3 Aquí he podido hablar con asistente social",-1),G=e("span",{class:"question--value"},"3.4 Aquí he podido conversar con la psicóloga",-1),J=e("span",{class:"question--value"},"3.5 Aquí puedo ir donde el paramédico si lo necesito",-1),K=e("span",{class:"question--value"},"3.6 En esta cárcel he podido ir a la escuela o liceo penal",-1),Q=e("span",{class:"question--value"},"3.7 Aquí se puede ir a talleres de alcohol o drogas si se necesita",-1),u=1,pe={__name:"AccesoProgramas",setup(Z){const s=O(),t=r(!1),A=r("Calidad de vida de los internos / Acceso a programas"),P=r({categories:["3.1","3.2","3.3","3.4","3.5","3.6","3.7"],crosshair:!1}),S=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),w=r({column:{pointPadding:.2,borderWidth:3}}),D=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),E=(a,l,o)=>y({id:a,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async a=>{t.value=!0;const l=n.filter(o=>o.id!==a);n.splice(0,n.length),l.map(o=>n.push(o)),await s.sleep(50),t.value=!1},_=async(a,l,o)=>{var m,f;try{let c=((m=s==null?void 0:s.penitenciaria)==null?void 0:m.id)??null,h=((f=s==null?void 0:s.penitenciaria)==null?void 0:f.description)??null,v=s.historyId;if(o&&(c=a,h=l),v&&c){t.value=!0;let $=await Y({historyId:v,carcelId:c,categoryId:u,subCategoryId:3});const g=[];$.filter(i=>i.poundUsed===1).map(i=>{const C=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;g.push(C)}),n.push(E(c,h,g))}}catch(c){console.log(c)}finally{o||(t.value=!1)}},I=async()=>{t.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await _(a.id,a.description,!0))),t.value=!1};return(a,l)=>(b(),x(k,null,{default:p(()=>[d(B,{title:A.value,"section-value":u},null,8,["title"]),d(V,{"active-spin":t.value},null,8,["active-spin"]),d(N,{baseFilter:u,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:_,onExecuteRemove:F}),e("div",j,[e("div",z,[d(q,{class:"card-information"},{default:p(()=>[H,M]),_:1}),t.value?L("",!0):(b(),x(X,{key:0,optionsAxisX:P.value,optionsAxisY:S.value,plotOptions:w.value,tooltip:D.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(q,{class:"card-preguntas"},{default:p(()=>[R,T,U,W,G,J,K,Q]),_:1})])]),_:1}))}};export{pe as default};