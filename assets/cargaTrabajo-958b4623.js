import{u as A,g as c,r as g,o as b,f as x,j as p,_ as E,l as d,m as O,b as t,a as T,k as L}from"./index-b9c74f25.js";import{_ as V}from"./CHeaderBar-1bcb54ea.js";import{_ as z}from"./CFilterbar-6149653d.js";import{_ as S}from"./CCard-6e956990.js";import{_ as B}from"./CColunmChart-df6333d1.js";import"./CSelect.vue_vue_type_style_index_0_lang-9aa73486.js";import"./CSelect-0254b8e1.js";import"./carceles-7aded4be.js";const M={class:"regimen-carcel"},N={class:"chart-section"},R=t("span",{class:"card-title"},"Frecuencia respuestas carga de trabajo",-1),X=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),Y=t("span",{class:"card-title"},"Preguntas",-1),H=t("span",{class:"question--value"},"fp10 Me dan una cantidad de responsabilidad adecuada en esta cárcel",-1),U=t("span",{class:"question--value"},"fp11 Tengo el nivel apropiado de autoridad para hacer mi trabajo correctamente.",-1),W=t("span",{class:"question--value"},"fp12 Estoy satisfecho/a con la formación que he recibido para hacer mi trabajo",-1),G=t("span",{class:"question--value"},"fp13 Recibo el apoyo y respaldo necesario (desde la jefatura/institución) para las labores que debo realizar",-1),u=2,le={__name:"cargaTrabajo",setup(J){const e=A(),s=c(!1),j=c("Calidad de vida de los funcionarios / Carga de trabajo"),q=c({categories:["fp10","fp11","fp12","fp13"],crosshair:!1}),w=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),D=c({column:{pointPadding:.2,borderWidth:3}}),F=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),P=(a,l,o)=>g({id:a,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),C=async a=>{s.value=!0;const l=n.filter(o=>o.id!==a);n.splice(0,n.length),l.map(o=>n.push(o)),await e.sleep(50),s.value=!1},f=async(a,l,o)=>{var _,m;try{let r=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.id)??null,h=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,v=e.historyId;if(o&&(r=a,h=l),v&&r){s.value=!0;let $=await L({historyId:v,carcelId:r,categoryId:u,subCategoryId:12});const y=[];$.filter(i=>i.poundUsed===1).map(i=>{const k=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;y.push(k)}),n.push(P(r,h,y))}}catch(r){console.log(r)}finally{o||(s.value=!1)}},I=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async a=>await f(a.id,a.description,!0))),s.value=!1};return(a,l)=>(b(),x(E,null,{default:p(()=>[d(V,{title:j.value,"section-value":u},null,8,["title"]),d(O,{"active-spin":s.value},null,8,["active-spin"]),d(z,{baseFilter:u,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:f,onExecuteRemove:C}),t("div",M,[t("div",N,[d(S,{class:"card-information"},{default:p(()=>[R,X]),_:1}),s.value?T("",!0):(b(),x(B,{key:0,optionsAxisX:q.value,optionsAxisY:w.value,plotOptions:D.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(S,{class:"card-preguntas"},{default:p(()=>[Y,H,U,W,G]),_:1})])]),_:1}))}};export{le as default};
