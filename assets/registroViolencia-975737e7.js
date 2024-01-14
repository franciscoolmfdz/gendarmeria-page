import{s as N,g as t,h as Y,o as f,f as k,j as z,_ as I,x as P,y as X,b as m,m as i,n as J,C as x,c as U,a as C,e as j}from"./index-f9e34e91.js";import{_ as G}from"./CHeaderBar-f9222f17.js";import{_ as H}from"./subSideNav-3f124ec6.js";import{_ as w}from"./CButton-72e5be54.js";import{_ as K}from"./CTable-26524ad6.js";import{_ as Q}from"./CColunmChart-d26dc5f5.js";import{g as W}from"./dimensionAggression-ee589422.js";import{s as Z}from"./filterSituacion-36c9e076.js";import"./CChartDonutSection-56b85ea0.js";const ee="/dmm/aggression-types",te=async(T,n)=>N(ee,"GET",null,n);const se={class:"content-header-eventos"},ae={class:"selected-options"},oe={key:0,class:"c-option-volver"},ie={class:"table-section-principal"},le={class:"content__section"},A=3,_e={__name:"registroViolencia",setup(T){const n=Z(),q=t({id:15,description:"Región Metropolitana de Santiago"}),y=t([]),c=t({id:16,description:"CCP Colina 1"}),b=t([]),v=t({id:1,description:"N° de eventos de riñas en el período."}),l=t(!1),h=t([]),R=t("Estado situación carcelaria / Registro de eventos violentos"),O=t([{rowReference:"year",description:"Año"},{rowReference:"quantity",description:"Cantidad"}]),g=t(0),u=t([]),S=t({categories:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],crosshair:!1}),$=t({min:0,title:{text:"Registro violencia por año"}}),D=t({column:{stacking:"normal",dataLabels:{enabled:!0}}}),E=t({headerFormat:'<span style="font-size:10px">{point.x} ({series.userOptions.stack}): {point.stackTotal} </span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr></b>',footerFormat:'</table> <span style="font-size:10px">Total: {point.stackTotal}  </span>',useHTML:!0}),r=t([]),F=()=>{j.push("/situacionCarcelaria")},L=async a=>{if(!n.listadoRegiones.length>0){let e=await P();y.value=e,n.setRegionesList(e)}else y.value=n.listadoRegiones},B=async()=>{let a={};b.value=await X(a)},M=a=>{u.value=[],r.value=[],g.value=0;let e=0,s=0;const p={name:"",data:[0,0,0,0,0,0,0,0,0,0,0,0],stack:"Registro violencia"};let d=[0,0,0,0,0,0,0,0,0,0,0,0];for(let _=0;_<a.length;_++){let o=a[_];g.value+=o.quantity,e||(e=o.year),o.year===e?(s+=o.quantity,d[o.month-1]=o.quantity):(u.value.push({year:e,quantity:s}),p.name=e,console.log(r.value,p),r.value.push({name:e,data:d,stack:"Registro violencia"}),console.log(r.value),e=o.year,p.name=o.year,s=o.quantity,d=[0,0,0,0,0,0,0,0,0,0,0,0],d[o.month-1]=o.quantity)}u.value.push({year:e,quantity:s}),r.value.push({name:e,data:d,stack:"Registro violencia"})},V=async()=>{var a,e;try{if(c.value){const s={carcelId:((a=c.value)==null?void 0:a.id)??c.value,aggresionTypeId:((e=v.value)==null?void 0:e.id)??v.value};l.value=!0;const p=await W(s);l.value=!1,M(p)}else u.value=[]}catch(s){console.log(s)}};return Y(async()=>{l.value=!0,q.value=n.regionSelected.id,h.value=await te(),await L(),await B(),await V(),l.value=!1}),(a,e)=>(f(),k(I,{class:"contenido-eventos"},{default:z(()=>[m("div",se,[i(G,{title:R.value,"section-value":A},null,8,["title"]),i(J,{"active-spin":l.value},null,8,["active-spin"]),m("div",ae,[i(x,{class:"select-carcel",options:b.value,modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=s=>c.value=s)},null,8,["options","modelValue"]),i(x,{class:"select-question",options:h.value,modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=s=>v.value=s)},null,8,["options","modelValue"]),i(w,{class:"btn-search",title:"",onExecuteAction:V})]),!l.value&&a.topPosition!==0?(f(),U("div",oe,[i(w,{class:"btn-volver",title:"Volver",onExecuteAction:F,disabled:a.blockButton},null,8,["disabled"])])):C("",!0)]),m("div",ie,[i(H,{class:"subsection-eventos",title:R.value,"section-value":A,"point-label":g.value,"point-disabled":!0,pointTitle:"Registro de eventos violentos",pointSubtitle:""},null,8,["title","point-label"]),m("div",le,[l.value?C("",!0):(f(),k(Q,{key:0,optionsAxisX:S.value,optionsAxisY:$.value,plotOptions:D.value,tooltip:E.value,series:r.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])),i(K,{columns:O.value,rows:u.value},null,8,["columns","rows"])])])]),_:1}))}};export{_e as default};