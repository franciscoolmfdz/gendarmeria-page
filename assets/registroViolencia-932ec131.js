import{i as V,h as s,k as w,o as N,f as T,j as f,_ as R,g as l,b as c}from"./index-56444a41.js";import{_ as h}from"./CHeaderBar-ce0ad327.js";import{a as _,b as x,_ as U}from"./CCard-394f244e.js";import{_ as A}from"./CTable-f867ef9b.js";import{a as v}from"./api-ec658a74.js";const I="/dmm/dimension-history-aggression",B=async(e,n)=>{if(e!=null&&e.id){let a=`${I}/${e.id}`;return v(a,"GET",null,n)}let t=I,o=null;return e!=null&&e.regionId&&(o?o=`${o}&regionId=${e.regionId}`:o=`regionId=${e.regionId}`),e!=null&&e.carcelId&&(o?o=`${o}&carcelId=${e.carcelId}`:o=`carcelId=${e.regionId}`),e!=null&&e.aggresionTypeId&&(o?o=`${o}&aggresionTypeId=${e.aggresionTypeId}`:o=`aggresionTypeId=${e.regionId}`),o&&(t=`${t}?${o}`),v(t,"GET",null,n)};const E={class:"selected-options"},M={class:"information__section"},P=c("span",{class:"card-title"},"Registro violencia",-1),b=c("span",null," Cantidad y tipo de registros de violencia registrados ",-1),k={class:"content__section"},D=3,F={__name:"registroViolencia",setup(e){V();const n=s({id:15,description:"Región Metropolitana de Santiago"}),t=s([{id:15,description:"Región Metropolitana de Santiago"}]),o=s({id:16,description:"CCP Colina 1"}),a=s([{id:16,description:"CCP Colina 1"},{id:17,description:"CCP Colina 2"}]),d=s({id:1,description:"N° de eventos de riñas en el período."}),$=s([{id:1,description:"N° de eventos de riñas en el período."},{id:2,description:"N° de agresiones con resultado de muerte en el año t."},{id:3,description:"N° de funcionarios que en ejercicio de sus funciones resulten heridos o lesionados por uno o más internos."},{id:4,description:"N° de decesos por suicidio."},{id:5,description:"N° de decesos por enfermedades"},{id:6,description:"N° de decesos por otras causas."},{id:7,description:"N° de decesos por accidentes."}]),y=s("Estado situación carcelaria / Registro violencia"),C=s([{rowReference:"year",description:"Año"},{rowReference:"month",description:"Mes"},{rowReference:"gender",description:"sexo"},{rowReference:"quantity",description:"Cantidad"}]),u=s([]),m=async()=>{var p,i,r;try{if(n.value){const g={regionId:((p=n.value)==null?void 0:p.id)??n.value,carcelId:((i=o.value)==null?void 0:i.id)??o.value,aggresionTypeId:((r=d.value)==null?void 0:r.id)??d.value};u.value=await B(g)}else u.value=[]}catch(g){console.log(g)}};return w(async()=>{await m()}),(p,i)=>(N(),T(R,null,{default:f(()=>[l(h,{title:y.value,"section-value":D},null,8,["title"]),c("div",E,[l(_,{options:t.value,modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=r=>n.value=r)},null,8,["options","modelValue"]),l(_,{options:a.value,modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=r=>o.value=r)},null,8,["options","modelValue"]),l(_,{options:$.value,modelValue:d.value,"onUpdate:modelValue":i[2]||(i[2]=r=>d.value=r)},null,8,["options","modelValue"]),l(x,{title:"Buscar centros",onExecuteAction:m})]),c("div",M,[l(U,{class:"card-information"},{default:f(()=>[P,b]),_:1})]),c("div",k,[l(A,{columns:C.value,rows:u.value},null,8,["columns","rows"])])]),_:1}))}};export{F as default};
