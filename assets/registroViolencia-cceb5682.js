import{u as V,g as o,h as y,o as N,f as w,j as _,_ as R,E as x,m as i,b as n,z as u}from"./index-dd4685c7.js";import{_ as $}from"./CHeaderBar-a2769ce8.js";import{_ as h}from"./CCard-68034043.js";import{_ as A}from"./CButton-4bbc2b87.js";import{_ as B}from"./CTable-1200ac42.js";const I={class:"selected-options"},M={class:"information__section"},T=n("span",{class:"card-title"},"Registro eventos",-1),D=n("span",null," Cantidad y tipo de registros de eventos registrados ",-1),E={class:"content__section"},L=3,b={__name:"registroViolencia",setup(P){V();const t=o({id:15,description:"Región Metropolitana de Santiago"}),m=o([{id:15,description:"Región Metropolitana de Santiago"}]),a=o({id:16,description:"CCP Colina 1"}),v=o([{id:16,description:"CCP Colina 1"},{id:17,description:"CCP Colina 2"}]),d=o({id:1,description:"N° de eventos de riñas en el período."}),g=o([{id:1,description:"N° de eventos de riñas en el período."},{id:2,description:"N° de agresiones con resultado de muerte en el año t."},{id:3,description:"N° de funcionarios que en ejercicio de sus funciones resulten heridos o lesionados por uno o más internos."},{id:4,description:"N° de decesos por suicidio."},{id:5,description:"N° de decesos por enfermedades"},{id:6,description:"N° de decesos por otras causas."},{id:7,description:"N° de decesos por accidentes."}]),f=o("Estado situación carcelaria / Registro de eventos"),C=o([{rowReference:"year",description:"Año"},{rowReference:"month",description:"Mes"},{rowReference:"gender",description:"sexo"},{rowReference:"quantity",description:"Cantidad"}]),r=o([]),p=async()=>{var l,e,s;try{if(t.value){const c={regionId:((l=t.value)==null?void 0:l.id)??t.value,carcelId:((e=a.value)==null?void 0:e.id)??a.value,aggresionTypeId:((s=d.value)==null?void 0:s.id)??d.value};r.value=await x(c)}else r.value=[]}catch(c){console.log(c)}};return y(async()=>{await p()}),(l,e)=>(N(),w(R,null,{default:_(()=>[i($,{title:f.value,"section-value":L},null,8,["title"]),n("div",I,[i(u,{options:m.value,modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s)},null,8,["options","modelValue"]),i(u,{options:v.value,modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=s=>a.value=s)},null,8,["options","modelValue"]),i(u,{options:g.value,modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=s=>d.value=s)},null,8,["options","modelValue"]),i(A,{title:"Buscar centros",onExecuteAction:p})]),n("div",M,[i(h,{class:"card-information"},{default:_(()=>[T,D]),_:1})]),n("div",E,[i(B,{columns:C.value,rows:r.value},null,8,["columns","rows"])])]),_:1}))}};export{b as default};
