import{i as E,h as c,r as y,o as b,f as x,j as p,_ as O,g as d,b as i,a as L,k as V}from"./index-ea41498e.js";import{_ as j}from"./CHeaderBar-9e1a4280.js";import{_ as B}from"./CSpinner-f0b0a17e.js";import{_ as M}from"./CFilterbar-da4f705e.js";import{_ as P}from"./CCard-3b7f55b7.js";import{_ as N}from"./CColunmChart-51b138b0.js";import"./CSelect.vue_vue_type_style_index_0_lang-ea3e1c73.js";import"./CSelect-64d8cf1d.js";import"./carceles-4edea485.js";import"./exporting-a6d722f2.js";const R={class:"regimen-carcel"},T={class:"chart-section"},X=i("span",{class:"card-title"},"Promedio respuestas Regimen de la carcel",-1),Y=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),z=i("span",{class:"card-title"},"Preguntas",-1),H=i("span",{class:"question--value"},"fp21 Temo por mi seguridad al trabajar aquí",-1),U=i("span",{class:"question--value"},"fp22 El ambiente en general de esta cárcel es tenso",-1),W=i("span",{class:"question--value"},"fp23 Me siento seguro al terminar mi turno de trabajo y salir de la cárcel (me siento seguro/a en la calle)",-1),u=2,re={__name:"seguridadPersonal",setup(G){const e=E(),a=c(!1),S=c("Calidad de vida de los funcionarios / Seguridad personal"),w=c({categories:["fp21","fp22","fp23"],crosshair:!1}),D=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),q=c({column:{pointPadding:.2,borderWidth:3}}),F=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),I=(t,l,s)=>y({id:t,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async t=>{a.value=!0;const l=n.filter(s=>s.id!==t);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),a.value=!1},m=async(t,l,s)=>{var f,_;try{let r=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(s&&(r=t,v=l),h&&r){a.value=!0;let A=await V({historyId:h,carcelId:r,categoryId:u,subCategoryId:15});const g=[];A.filter(o=>o.poundUsed===1).map(o=>{const C=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;g.push(C)}),n.push(I(r,v,g))}}catch(r){console.log(r)}finally{s||(a.value=!1)}},k=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),a.value=!1};return(t,l)=>(b(),x(O,null,{default:p(()=>[d(j,{title:S.value,"section-value":u},null,8,["title"]),d(B,{"active-spin":a.value},null,8,["active-spin"]),d(M,{baseFilter:u,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:m,onExecuteRemove:$}),i("div",R,[i("div",T,[d(P,{class:"card-information"},{default:p(()=>[X,Y]),_:1}),a.value?L("",!0):(b(),x(N,{key:0,optionsAxisX:w.value,optionsAxisY:D.value,plotOptions:q.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(P,{class:"card-preguntas"},{default:p(()=>[z,H,U,W]),_:1})])]),_:1}))}};export{re as default};