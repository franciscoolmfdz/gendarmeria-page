import{u as g,g as o,h as v,o as L,f as w,j as d,_ as b,G as y,l as c,b as t,z as R}from"./index-156a2515.js";import{_ as T}from"./CHeaderBar-44e391f7.js";import{_ as V}from"./CCard-ca6b3add.js";import{_ as h}from"./CButton-15782861.js";import{_ as A}from"./CTable-e4af5c2a.js";const $={class:"selected-options"},B={class:"information__section"},D=t("span",{class:"card-title"},"Dotación efectiva del personal",-1),M=t("span",null," Dotación de licencias efectiva del personal, en base a la ubicación física y desempeño ",-1),x={class:"content__section"},C=3,z={__name:"licencias",setup(S){g();const n=o({id:15,description:"Región Metropolitana de Santiago"}),p=o([{id:1,description:"Arica y Parinacota"},{id:2,description:"Tarapacá"},{id:3,description:"Antofagasta"},{id:4,description:"Atacama"},{id:5,description:"Coquimbo"},{id:6,description:"Valparaíso"},{id:7,description:"Libertador General Bernardo O’Higgins"},{id:8,description:"Maule"},{id:9,description:"Biobío"},{id:10,description:"La Araucanía"},{id:11,description:"Los Ríos"},{id:12,description:"Los Lagos"},{id:13,description:"Aysén del Gral. Carlos Ibáñez del Campo"},{id:14,description:"Magallanes y de la Antártica Chilena"},{id:15,description:"Región Metropolitana de Santiago"},{id:16,description:"Region de ñuble"}]),u=o("Estado situación carcelaria / Licencias del personal"),_=o([{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenciaTotal",description:"Totales"},{rowReference:"porcentajeLicencia",description:"% Licencias"}]),s=o([]),f=a=>a?`${Math.round(a*100)/100} %`:"0 %",r=async()=>{var a;try{if(n.value){const i={regionId:((a=n.value)==null?void 0:a.id)??n.value},l=await y(i);s.value=l.map(e=>{e.tieneLicencia=e.licenseActiveTotal,e.noLicenciaVigente=e.licenseDisabledTotal,e.licenciaTotal=e.licenseTotal;const m=e.licenseActiveTotal/e.licenseTotal*100;return e.porcentajeLicencia=f(m),e})}else s.value=[]}catch(i){console.log(i)}};return v(async()=>{await r()}),(a,i)=>(L(),w(b,null,{default:d(()=>[c(T,{title:u.value,"section-value":C},null,8,["title"]),t("div",$,[c(R,{options:p.value,modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=l=>n.value=l)},null,8,["options","modelValue"]),c(h,{title:"Buscar licencias",onExecuteAction:r})]),t("div",B,[c(V,{class:"card-information"},{default:d(()=>[D,M]),_:1})]),t("div",x,[c(A,{columns:_.value,rows:s.value},null,8,["columns","rows"])])]),_:1}))}};export{z as default};
