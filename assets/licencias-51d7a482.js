import{i as w,h as t,k as $,o as b,f as y,j as f,_ as T,g as l,b as r}from"./index-8a5d36ad.js";import{_ as h}from"./CHeaderBar-6b1a30b0.js";import{a as R,b as V,_ as A}from"./CCard-9d2b732e.js";import{_ as I}from"./CTable-b7b071bb.js";import{a as m}from"./api-ec658a74.js";const g="/dmm/dimension-history-license",B=async(e,n)=>{if(e!=null&&e.id){let d=`${g}/${e.id}`;return m(d,"GET",null,n)}let c=g,o=null;return e!=null&&e.regionId&&(o?o=`${o}&regionId=${e.regionId}`:o=`regionId=${e.regionId}`),o&&(c=`${c}?${o}`),m(c,"GET",null,n)};const C={class:"selected-options"},D={class:"information__section"},M=r("span",{class:"card-title"},"Dotación efectiva del personal",-1),x=r("span",null," Dotación de licencias efectiva del personal, en base a la ubicación física y desempeño ",-1),E={class:"content__section"},G=3,N={__name:"licencias",setup(e){w();const n=t({id:15,description:"Región Metropolitana de Santiago"}),c=t([{id:1,description:"Arica y Parinacota"},{id:2,description:"Tarapacá"},{id:3,description:"Antofagasta"},{id:4,description:"Atacama"},{id:5,description:"Coquimbo"},{id:6,description:"Valparaíso"},{id:7,description:"Libertador General Bernardo O’Higgins"},{id:8,description:"Maule"},{id:9,description:"Biobío"},{id:10,description:"La Araucanía"},{id:11,description:"Los Ríos"},{id:12,description:"Los Lagos"},{id:13,description:"Aysén del Gral. Carlos Ibáñez del Campo"},{id:14,description:"Magallanes y de la Antártica Chilena"},{id:15,description:"Región Metropolitana de Santiago"},{id:16,description:"Region de ñuble"}]),o=t("Estado situación carcelaria / Licencias del personal"),d=t([{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenciaTotal",description:"Totales"},{rowReference:"porcentajeLicencia",description:"% Licencias"}]),p=t([]),v=s=>s?`${Math.round(s*100)/100} %`:"0 %",_=async()=>{var s;try{if(n.value){const a={regionId:((s=n.value)==null?void 0:s.id)??n.value},u=await B(a);p.value=u.map(i=>{i.tieneLicencia=i.licenseActiveTotal,i.noLicenciaVigente=i.licenseDisabledTotal,i.licenciaTotal=i.licenseTotal;const L=i.licenseActiveTotal/i.licenseTotal*100;return i.porcentajeLicencia=v(L),i})}else p.value=[]}catch(a){console.log(a)}};return $(async()=>{await _()}),(s,a)=>(b(),y(T,null,{default:f(()=>[l(h,{title:o.value,"section-value":G},null,8,["title"]),r("div",C,[l(R,{options:c.value,modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u)},null,8,["options","modelValue"]),l(V,{title:"Buscar licencias",onExecuteAction:_})]),r("div",D,[l(A,{class:"card-information"},{default:f(()=>[M,x]),_:1})]),r("div",E,[l(I,{columns:d.value,rows:p.value},null,8,["columns","rows"])])]),_:1}))}};export{N as default};
