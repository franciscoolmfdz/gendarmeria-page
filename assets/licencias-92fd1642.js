import{i as g,h as o,m as v,o as L,f as w,j as d,_ as b,G as y,g as c,b as t}from"./index-c619b897.js";import{_ as R}from"./CHeaderBar-1d33da3e.js";import{_ as T}from"./CCard-1c845476.js";import{_ as V}from"./CSelect.vue_vue_type_style_index_0_lang-b9870a27.js";import{_ as h}from"./CSelect-f9a2a604.js";import{_ as A}from"./CTable-0e1712c0.js";const $={class:"selected-options"},B={class:"information__section"},D=t("span",{class:"card-title"},"Dotación efectiva del personal",-1),M=t("span",null," Dotación de licencias efectiva del personal, en base a la ubicación física y desempeño ",-1),x={class:"content__section"},C=3,P={__name:"licencias",setup(S){g();const n=o({id:15,description:"Región Metropolitana de Santiago"}),p=o([{id:1,description:"Arica y Parinacota"},{id:2,description:"Tarapacá"},{id:3,description:"Antofagasta"},{id:4,description:"Atacama"},{id:5,description:"Coquimbo"},{id:6,description:"Valparaíso"},{id:7,description:"Libertador General Bernardo O’Higgins"},{id:8,description:"Maule"},{id:9,description:"Biobío"},{id:10,description:"La Araucanía"},{id:11,description:"Los Ríos"},{id:12,description:"Los Lagos"},{id:13,description:"Aysén del Gral. Carlos Ibáñez del Campo"},{id:14,description:"Magallanes y de la Antártica Chilena"},{id:15,description:"Región Metropolitana de Santiago"},{id:16,description:"Region de ñuble"}]),_=o("Estado situación carcelaria / Licencias del personal"),u=o([{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenciaTotal",description:"Totales"},{rowReference:"porcentajeLicencia",description:"% Licencias"}]),s=o([]),f=a=>a?`${Math.round(a*100)/100} %`:"0 %",r=async()=>{var a;try{if(n.value){const i={regionId:((a=n.value)==null?void 0:a.id)??n.value},l=await y(i);s.value=l.map(e=>{e.tieneLicencia=e.licenseActiveTotal,e.noLicenciaVigente=e.licenseDisabledTotal,e.licenciaTotal=e.licenseTotal;const m=e.licenseActiveTotal/e.licenseTotal*100;return e.porcentajeLicencia=f(m),e})}else s.value=[]}catch(i){console.log(i)}};return v(async()=>{await r()}),(a,i)=>(L(),w(b,null,{default:d(()=>[c(R,{title:_.value,"section-value":C},null,8,["title"]),t("div",$,[c(h,{options:p.value,modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=l=>n.value=l)},null,8,["options","modelValue"]),c(V,{title:"Buscar licencias",onExecuteAction:r})]),t("div",B,[c(T,{class:"card-information"},{default:d(()=>[D,M]),_:1})]),t("div",x,[c(A,{columns:u.value,rows:s.value},null,8,["columns","rows"])])]),_:1}))}};export{P as default};
