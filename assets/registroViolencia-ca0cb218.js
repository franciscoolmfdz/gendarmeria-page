import{s as M,g as t,h as N,o as f,f as k,j as L,_ as Y,y as z,b as v,m as i,n as I,C as x,c as P,a as C,e as X}from"./index-f62bec79.js";import{_ as J}from"./CHeaderBar-768ede49.js";import{_ as U}from"./subSideNav-a149f5ab.js";import{_ as A}from"./CButton-49b6c568.js";import{_ as j}from"./CTable-be98243d.js";import{_ as G}from"./CColunmChart-c9b61f21.js";import{g as H}from"./dimensionAggression-57d79de5.js";import{s as K}from"./filterSituacion-5abea756.js";import"./CChartDonutSection-340f5160.js";const Q="/dmm/aggression-types",W=async(R,m)=>M(Q,"GET",null,m);const Z={class:"content-header-eventos"},ee={class:"selected-options"},te={key:0,class:"c-option-volver"},ae={class:"table-section-principal"},oe={class:"content__section"},T=3,ve={__name:"registroViolencia",setup(R){const m=K(),w=t({id:15,description:"Región Metropolitana de Santiago"});t([]);const r=t({id:16,description:"CCP Colina 1"}),y=t([]),d=t({id:1,description:"N° de eventos de riñas en el período."}),l=t(!1),b=t([]),h=t("Estado situación carcelaria / Registro de eventos violentos"),q=t([{rowReference:"year",description:"Año"},{rowReference:"quantity",description:"Cantidad"}]),_=t(0),c=t([]),O=t({categories:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],crosshair:!1}),S=t({min:0,title:{text:"Registro violencia por año"}}),$=t({column:{stacking:"normal",dataLabels:{enabled:!0}}}),D=t({headerFormat:'<span style="font-size:10px">{point.x} ({series.userOptions.stack}): {point.stackTotal} </span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr></b>',footerFormat:'</table> <span style="font-size:10px">Total: {point.stackTotal}  </span>',useHTML:!0}),n=t([]),E=()=>{X.push("/situacionCarcelaria")},F=async()=>{let s={};y.value=await z(s)},B=s=>{c.value=[],n.value=[],_.value=0;let e=0,a=0;const u={name:"",data:[0,0,0,0,0,0,0,0,0,0,0,0],stack:"Registro violencia"};let p=[0,0,0,0,0,0,0,0,0,0,0,0];for(let g=0;g<s.length;g++){let o=s[g];_.value+=o.quantity,e||(e=o.year),o.year===e?(a+=o.quantity,p[o.month-1]=o.quantity):(c.value.push({year:e,quantity:a}),u.name=e,console.log(n.value,u),n.value.push({name:e,data:p,stack:"Registro violencia"}),console.log(n.value),e=o.year,u.name=o.year,a=o.quantity,p=[0,0,0,0,0,0,0,0,0,0,0,0],p[o.month-1]=o.quantity)}c.value.push({year:e,quantity:a}),n.value.push({name:e,data:p,stack:"Registro violencia"})},V=async()=>{var s,e;try{if(r.value){const a={carcelId:((s=r.value)==null?void 0:s.id)??r.value,aggresionTypeId:((e=d.value)==null?void 0:e.id)??d.value};l.value=!0;const u=await H(a);l.value=!1,B(u)}else c.value=[]}catch(a){console.log(a)}};return N(async()=>{l.value=!0,w.value=m.regionSelected.id,b.value=await W(),await F(),await V(),l.value=!1}),(s,e)=>(f(),k(Y,{class:"contenido-eventos"},{default:L(()=>[v("div",Z,[i(J,{title:h.value,"section-value":T},null,8,["title"]),i(I,{"active-spin":l.value},null,8,["active-spin"]),v("div",ee,[i(x,{class:"select-carcel",options:y.value,modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a)},null,8,["options","modelValue"]),i(x,{class:"select-question",options:b.value,modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=a=>d.value=a)},null,8,["options","modelValue"]),i(A,{class:"btn-search",title:"",onExecuteAction:V})]),!l.value&&s.topPosition!==0?(f(),P("div",te,[i(A,{class:"btn-volver",title:"Volver",onExecuteAction:E,disabled:s.blockButton},null,8,["disabled"])])):C("",!0)]),v("div",ae,[i(U,{class:"subsection-eventos",title:h.value,"section-value":T,"point-label":_.value,"point-disabled":!0,pointTitle:"Registro de eventos violentos",pointSubtitle:""},null,8,["title","point-label"]),v("div",oe,[l.value?C("",!0):(f(),k(G,{key:0,optionsAxisX:O.value,optionsAxisY:S.value,plotOptions:$.value,tooltip:D.value,series:n.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])),i(j,{columns:q.value,rows:c.value},null,8,["columns","rows"])])])]),_:1}))}};export{ve as default};