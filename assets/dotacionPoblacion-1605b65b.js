import{i as u,h as o,k as m,o as f,f as b,j as s,_ as v,g as e,b as i}from"./index-5fb026f8.js";import{_ as R}from"./CHeaderBar-c86c0776.js";import{a as g,b as w,_ as T}from"./CCard-e566a356.js";import{_ as y}from"./CTable-21e72f98.js";const P={class:"selected-options"},h={class:"information__section"},M=i("span",{class:"card-title"},"Dotación vs población",-1),L=i("span",null," Tasa de dotación de profesionales activos por población penitenciaria ",-1),A={class:"content__section"},C=3,x={__name:"dotacionPoblacion",setup(D){u();const a=o({id:15,description:"Región Metropolitana de Santiago"}),c=o([{id:1,description:"Arica y Parinacota"},{id:2,description:"Tarapacá"},{id:3,description:"Antofagasta"},{id:4,description:"Atacama"},{id:5,description:"Coquimbo"},{id:6,description:"Valparaíso"},{id:7,description:"Libertador General Bernardo O’Higgins"},{id:8,description:"Maule"},{id:9,description:"Biobío"},{id:10,description:"La Araucanía"},{id:11,description:"Los Ríos"},{id:12,description:"Los Lagos"},{id:13,description:"Aysén del Gral. Carlos Ibáñez del Campo"},{id:14,description:"Magallanes y de la Antártica Chilena"},{id:15,description:"Región Metropolitana de Santiago"},{id:16,description:"Region de ñuble"}]),r=o("Estado situación carcelaria / Dotación vs población"),d=o([{description:"Centro penitenciario",colspan:1},{description:"Dotación total",colspan:1},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:3},{description:"Rrelación dotación/ Total PPL. 24H ",colspan:1},{description:"En % relación dotación vs total ppl",colspan:1}]),l=o([{rowReference:"establecimiento",description:""},{rowReference:"dotacionTotal",description:""},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadHombre",description:"Hombre"},{rowReference:"capacidadMujer",description:"Mujer"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"dotacionRotacion",description:"(cantidad de internos por funcionario)"},{rowReference:"porcRotacionDotacion",description:""}]),p=o([]),n=async()=>{};return m(async()=>{await n()}),(j,t)=>(f(),b(v,null,{default:s(()=>[e(R,{title:r.value,"section-value":C},null,8,["title"]),i("div",P,[e(g,{options:c.value,modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=_=>a.value=_)},null,8,["options","modelValue"]),e(w,{title:"Buscar",onExecuteAction:n})]),i("div",h,[e(T,{class:"card-information"},{default:s(()=>[M,L]),_:1})]),i("div",A,[e(y,{"parent-columns":d.value,columns:l.value,rows:p.value},null,8,["parent-columns","columns","rows"])])]),_:1}))}};export{x as default};
