import{i as V,h as s,k as w,o as N,f as T,j as f,_ as R,g as t,b as c}from"./index-81990198.js";import{_ as h}from"./CHeaderBar-c05e4acb.js";import{_ as x}from"./CCard-45074258.js";import{_ as U}from"./CSelect.vue_vue_type_style_index_0_lang-f7ab962f.js";import{_ as m}from"./CSelect-97c825b8.js";import{_ as A}from"./CTable-236659fc.js";import{a as v}from"./api-ec658a74.js";const I="/dmm/dimension-history-aggression",B=async(e,n)=>{if(e!=null&&e.id){let a=`${I}/${e.id}`;return v(a,"GET",null,n)}let l=I,o=null;return e!=null&&e.regionId&&(o?o=`${o}&regionId=${e.regionId}`:o=`regionId=${e.regionId}`),e!=null&&e.carcelId&&(o?o=`${o}&carcelId=${e.carcelId}`:o=`carcelId=${e.regionId}`),e!=null&&e.aggresionTypeId&&(o?o=`${o}&aggresionTypeId=${e.aggresionTypeId}`:o=`aggresionTypeId=${e.regionId}`),o&&(l=`${l}?${o}`),v(l,"GET",null,n)};const E={class:"selected-options"},M={class:"information__section"},P=c("span",{class:"card-title"},"Registro eventos",-1),k=c("span",null," Cantidad y tipo de registros de eventos registrados ",-1),D={class:"content__section"},L=3,H={__name:"registroViolencia",setup(e){V();const n=s({id:15,description:"Región Metropolitana de Santiago"}),l=s([{id:15,description:"Región Metropolitana de Santiago"}]),o=s({id:16,description:"CCP Colina 1"}),a=s([{id:16,description:"CCP Colina 1"},{id:17,description:"CCP Colina 2"}]),d=s({id:1,description:"N° de eventos de riñas en el período."}),$=s([{id:1,description:"N° de eventos de riñas en el período."},{id:2,description:"N° de agresiones con resultado de muerte en el año t."},{id:3,description:"N° de funcionarios que en ejercicio de sus funciones resulten heridos o lesionados por uno o más internos."},{id:4,description:"N° de decesos por suicidio."},{id:5,description:"N° de decesos por enfermedades"},{id:6,description:"N° de decesos por otras causas."},{id:7,description:"N° de decesos por accidentes."}]),y=s("Estado situación carcelaria / Registro violencia"),C=s([{rowReference:"year",description:"Año"},{rowReference:"month",description:"Mes"},{rowReference:"gender",description:"sexo"},{rowReference:"quantity",description:"Cantidad"}]),u=s([]),_=async()=>{var p,i,r;try{if(n.value){const g={regionId:((p=n.value)==null?void 0:p.id)??n.value,carcelId:((i=o.value)==null?void 0:i.id)??o.value,aggresionTypeId:((r=d.value)==null?void 0:r.id)??d.value};u.value=await B(g)}else u.value=[]}catch(g){console.log(g)}};return w(async()=>{await _()}),(p,i)=>(N(),T(R,null,{default:f(()=>[t(h,{title:y.value,"section-value":L},null,8,["title"]),c("div",E,[t(m,{options:l.value,modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=r=>n.value=r)},null,8,["options","modelValue"]),t(m,{options:a.value,modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=r=>o.value=r)},null,8,["options","modelValue"]),t(m,{options:$.value,modelValue:d.value,"onUpdate:modelValue":i[2]||(i[2]=r=>d.value=r)},null,8,["options","modelValue"]),t(U,{title:"Buscar centros",onExecuteAction:_})]),c("div",M,[t(x,{class:"card-information"},{default:f(()=>[P,k]),_:1})]),c("div",D,[t(A,{columns:C.value,rows:u.value},null,8,["columns","rows"])])]),_:1}))}};export{H as default};
