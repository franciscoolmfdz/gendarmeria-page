import{i as O,h as c,r as g,o as x,f as b,j as p,_ as E,g as d,k as L,b as i,a as V,l as B}from"./index-c619b897.js";import{_ as N}from"./CHeaderBar-1d33da3e.js";import{_ as X}from"./CFilterbar-55fa5467.js";import{_ as D}from"./CCard-1c845476.js";import{_ as Y}from"./CColunmChart-24d17a08.js";import"./CSelect.vue_vue_type_style_index_0_lang-b9870a27.js";import"./CSelect-f9a2a604.js";import"./carceles-3b8ad7b2.js";import"./exporting-0eb74ff7.js";const j={class:"regimen-carcel"},z={class:"chart-section"},H=i("span",{class:"card-title"},"Frecuencia respuestas presión para tomar decisiones",-1),M=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=i("span",{class:"card-title"},"Preguntas",-1),T=i("span",{class:"question--value"},"fp42 Cuando tengo que adoptar alguna decisión me siento presionado/a directa o indirectamente por los medios",-1),U=i("span",{class:"question--value"},"fp43 Al adoptar decisiones en mi trabajo me siento presionado/a por las repercusiones que dicha decisión puede tener en mi carrera",-1),u=2,ne={__name:"tomaDesiciones",setup(W){const e=O(),s=c(!1),S=c("Calidad de vida de los funcionarios / Presión para tomar decisiones"),w=c({categories:["fp42","fp43"],crosshair:!1}),P=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=c({column:{pointPadding:.2,borderWidth:3}}),q=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),A=(t,l,a)=>g({id:t,name:l,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=async t=>{s.value=!0;const l=n.filter(a=>a.id!==t);n.splice(0,n.length),l.map(a=>n.push(a)),await e.sleep(50),s.value=!1},m=async(t,l,a)=>{var f,_;try{let r=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(a&&(r=t,v=l),h&&r){s.value=!0;let $=await B({historyId:h,carcelId:r,categoryId:u,subCategoryId:20});const y=[];$.filter(o=>o.poundUsed===1).map(o=>{const k=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;y.push(k)}),n.push(A(r,v,y))}}catch(r){console.log(r)}finally{a||(s.value=!1)}},I=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),s.value=!1};return(t,l)=>(x(),b(E,null,{default:p(()=>[d(N,{title:S.value,"section-value":u},null,8,["title"]),d(L,{"active-spin":s.value},null,8,["active-spin"]),d(X,{baseFilter:u,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:m,onExecuteRemove:C}),i("div",j,[i("div",z,[d(D,{class:"card-information"},{default:p(()=>[H,M]),_:1}),s.value?V("",!0):(x(),b(Y,{key:0,optionsAxisX:w.value,optionsAxisY:P.value,plotOptions:F.value,tooltip:q.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(D,{class:"card-preguntas"},{default:p(()=>[R,T,U]),_:1})])]),_:1}))}};export{ne as default};
