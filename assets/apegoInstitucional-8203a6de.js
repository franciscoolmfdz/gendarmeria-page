import{r,d as y,o as x,e as b,w as p,_ as k,b as d,a as i,f as E}from"./index-986a4269.js";import{_ as L}from"./CSpinner-d1b0c2f6.js";import{_ as V}from"./CHeaderBar-e3b0e061.js";import{u as B,_ as M,a as S}from"./CCard-63501cdd.js";import{_ as N}from"./CColunmChart-964976fc.js";import{g as X}from"./dimensionHistory-d5c47017.js";import"./exporting-f737d7ca.js";import"./api-7944baea.js";const Y={class:"regimen-carcel"},z={class:"chart-section"},H=i("span",{class:"card-title"},"Frecuencia de respuestas apego institucional",-1),R=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),T=i("span",{class:"card-title"},"Preguntas",-1),U=i("span",{class:"question--value"},"fp8 Me identifico con las metas y objetivos de la institución",-1),W=i("span",{class:"question--value"},"fp9 Siento compromiso con lo que pase en esta cárcel",-1),u=2,ie={__name:"apegoInstitucional",setup(j){const e=B(),s=r(!1),w=r("Calidad de vida de los funcionarios / Apego institucional"),I=r({categories:["fp8","fp9"],crosshair:!1}),D=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),A=(t,l,a)=>y({id:t,name:l,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async t=>{s.value=!0;const l=n.filter(a=>a.id!==t);n.splice(0,n.length),l.map(a=>n.push(a)),await e.sleep(50),s.value=!1},f=async(t,l,a)=>{var m,_;try{let c=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(a&&(c=t,v=l),h&&c){s.value=!0;let C=await X({historyId:h,carcelId:c,categoryId:u,subCategoryId:11});const g=[];C.filter(o=>o.poundUsed===1).map(o=>{const O=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;g.push(O)}),n.push(A(c,v,g))}}catch(c){console.log(c)}finally{a||(s.value=!1)}},q=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await f(t.id,t.description,!0))),s.value=!1};return(t,l)=>(x(),b(k,null,{default:p(()=>[d(V,{title:w.value,"section-value":u},null,8,["title"]),d(L,{"active-spin":s.value},null,8,["active-spin"]),d(M,{baseFilter:u,multipleDisabled:!1,onExecuteMount:q,onExecuteAction:f,onExecuteRemove:$}),i("div",Y,[i("div",z,[d(S,{class:"card-information"},{default:p(()=>[H,R]),_:1}),s.value?E("",!0):(x(),b(N,{key:0,optionsAxisX:I.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:P.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(S,{class:"card-preguntas"},{default:p(()=>[T,U,W]),_:1})])]),_:1}))}};export{ie as default};
