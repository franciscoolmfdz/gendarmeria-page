import{i,j as v,o as b,f as R,g as r,_ as w,q as y,m as a,b as t,z as h}from"./index-8b3b860b.js";import{_ as D}from"./CHeaderBar-85f316bd.js";import{_ as P}from"./CCard-7570d00c.js";import{_ as T}from"./CButton-dc656842.js";import{_ as M}from"./CTable-1d35a353.js";import{s as A}from"./filterSituacion-b75dc11a.js";const L={class:"selected-options"},C={class:"information__section"},H=t("span",{class:"card-title"},"Dotación vs población",-1),V=t("span",null," Tasa de dotación de profesionales activos por población penitenciaria ",-1),j={class:"content__section"},B=3,z={__name:"dotacionPoblacion",setup(S){A();const s=i({id:15,description:"Región Metropolitana de Santiago"}),l=i([{id:1,description:"Arica y Parinacota"},{id:2,description:"Tarapacá"},{id:3,description:"Antofagasta"},{id:4,description:"Atacama"},{id:5,description:"Coquimbo"},{id:6,description:"Valparaíso"},{id:7,description:"Libertador General Bernardo O’Higgins"},{id:8,description:"Maule"},{id:9,description:"Biobío"},{id:10,description:"La Araucanía"},{id:11,description:"Los Ríos"},{id:12,description:"Los Lagos"},{id:13,description:"Aysén del Gral. Carlos Ibáñez del Campo"},{id:14,description:"Magallanes y de la Antártica Chilena"},{id:15,description:"Región Metropolitana de Santiago"},{id:16,description:"Region de ñuble"}]),d=i("Estado situación carcelaria / Dotación vs población"),p=i([{description:"Centro penitenciario",colspan:1},{description:"Dotación total",colspan:1},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:3},{description:"Rrelación dotación/ Total PPL. 24H ",colspan:1},{description:"En % relación dotación vs total ppl",colspan:1}]),u=i([{rowReference:"establecimiento",description:""},{rowReference:"dotacionTotal",description:""},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadHombre",description:"Hombre"},{rowReference:"capacidadMujer",description:"Mujer"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"dotacionRotacion",description:"(cantidad de internos por funcionario)"},{rowReference:"porcRotacionDotacion",description:""}]),m=i([]),_=e=>{e.map(o=>{})},f=async e=>{},c=async(e=null)=>{try{if(e){activeSpin.value=!0;let n=await y({year:2022,month:12,regionId:e,embedPopulation:!0});const g=_(n.items);optionSeries.push(newOptionsSeries(carcelId,carcelDescription,g))}}catch(o){console.log(o)}};return v(async()=>{await f(),await c()}),(e,o)=>(b(),R(w,null,{default:r(()=>[a(D,{title:d.value,"section-value":B},null,8,["title"]),t("div",L,[a(h,{options:l.value,modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=n=>s.value=n)},null,8,["options","modelValue"]),a(T,{title:"Buscar",onExecuteAction:c})]),t("div",C,[a(P,{class:"card-information"},{default:r(()=>[H,V]),_:1})]),t("div",j,[a(M,{"parent-columns":p.value,columns:u.value,rows:m.value},null,8,["parent-columns","columns","rows"])])]),_:1}))}};export{z as default};
