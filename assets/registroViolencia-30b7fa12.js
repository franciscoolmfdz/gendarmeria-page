import{s as N,u as L,g as t,h as Y,o as y,f as x,j as z,_ as P,y as X,b as f,m as i,n as J,C as k,c as U,a as A,e as j}from"./index-54860183.js";import{_ as G}from"./CHeaderBar-501feae6.js";import{_ as H}from"./subSideNav-d9c416bd.js";import{_ as I}from"./CButton-b5f860aa.js";import{_ as K}from"./CTable-46d404db.js";import{_ as Q}from"./CColunmChart-4777448a.js";import{g as W}from"./dimensionAggression-c7632c74.js";import{s as Z}from"./filterSituacion-a22c3d24.js";import"./CChartDonutSection-db332b04.js";const ee="/dmm/aggression-types",te=async(T,p)=>N(ee,"GET",null,p);const se={class:"content-header-eventos"},ae={class:"selected-options"},oe={key:0,class:"c-option-volver"},ie={class:"table-section-principal"},le={class:"content__section"},R=3,_e={__name:"registroViolencia",setup(T){const p=L(),w=Z(),q=t({id:15,description:"Región Metropolitana de Santiago"}),d=t(null),c=t(null),r=t({id:16,description:"CCP Colina 1"}),b=t([]),v=t({id:1,description:"N° de eventos de riñas en el período."}),l=t(!1),h=t([]),C=t("Estado situación carcelaria / Registro de eventos violentos"),O=t([{rowReference:"year",description:"Año"},{rowReference:"quantity",description:"Cantidad"}]),_=t(0),u=t([]),S=t({categories:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],crosshair:!1}),F=t({min:0,title:{text:"Registro violencia por año"}}),$=t({column:{stacking:"normal",dataLabels:{enabled:!0}}}),E=t({headerFormat:'<span style="font-size:10px">{point.x} ({series.userOptions.stack}): {point.stackTotal} </span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr></b>',footerFormat:'</table> <span style="font-size:10px">Total: {point.stackTotal}  </span>',useHTML:!0}),m=t([]),B=()=>{j.push("/situacionCarcelaria")},D=async()=>{let a={};d.value&&(a.regionId=d.value),c.value&&(a.carcelId=c.value),b.value=await X(a)},M=a=>{u.value=[],m.value=[],_.value=0;let e=0,s=0,n=[0,0,0,0,0,0,0,0,0,0,0,0];for(let g=0;g<a.length;g++){let o=a[g];_.value+=o.quantity,e||(e=o.year),o.year===e?(s+=o.quantity,n[o.month-1]=o.quantity):(u.value.push({year:e,quantity:s}),m.value.push({name:e,data:n,stack:"Registro violencia"}),e=o.year,o.year,s=o.quantity,n=[0,0,0,0,0,0,0,0,0,0,0,0],n[o.month-1]=o.quantity)}u.value.push({year:e,quantity:s}),m.value.push({name:e,data:n,stack:"Registro violencia"})},V=async()=>{var a,e;try{if(r.value){const s={carcelId:((a=r.value)==null?void 0:a.id)??r.value,aggresionTypeId:((e=v.value)==null?void 0:e.id)??v.value};l.value=!0;const n=await W(s);l.value=!1,M(n)}else u.value=[]}catch(s){console.log(s)}};return Y(async()=>{l.value=!0;const a=p.user.restrictions.find(s=>s.typeId===2),e=p.user.restrictions.find(s=>s.typeId===3);a?(d.value=parseInt(a.restriction),q.value=w.regionSelected.id):e?(c.value=parseInt(e.restriction),r.value=parseInt(e.restriction)):(c.value=null,d.value=null),h.value=await te(),await D(),await V(),l.value=!1}),(a,e)=>(y(),x(P,{class:"contenido-eventos"},{default:z(()=>[f("div",se,[i(G,{title:C.value,"section-value":R},null,8,["title"]),i(J,{"active-spin":l.value},null,8,["active-spin"]),f("div",ae,[i(k,{class:"select-carcel",options:b.value,modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s),disabled:!!c.value},null,8,["options","modelValue","disabled"]),i(k,{class:"select-question",options:h.value,modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=s=>v.value=s)},null,8,["options","modelValue"]),i(I,{class:"btn-search",title:"",onExecuteAction:V})]),!l.value&&a.topPosition!==0?(y(),U("div",oe,[i(I,{class:"btn-volver",title:"Volver",onExecuteAction:B,disabled:a.blockButton},null,8,["disabled"])])):A("",!0)]),f("div",ie,[i(H,{class:"subsection-eventos",title:C.value,"section-value":R,"point-label":_.value,"point-disabled":!0,pointTitle:"Registro de eventos violentos",pointSubtitle:""},null,8,["title","point-label"]),f("div",le,[l.value?A("",!0):(y(),x(Q,{key:0,optionsAxisX:S.value,optionsAxisY:F.value,plotOptions:$.value,tooltip:E.value,series:m.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])),i(K,{columns:O.value,rows:u.value},null,8,["columns","rows"])])])]),_:1}))}};export{_e as default};
