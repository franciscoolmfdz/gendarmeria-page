import{g as t,h as w,o as R,f as b,j as d,_ as h,l as D,E as y,m as a,b as i,A as P}from"./index-f4014f88.js";import{_ as T}from"./CHeaderBar-d0b8e6b1.js";import{_ as j}from"./CCard-b7de056c.js";import{_ as H}from"./CButton-3d9ac940.js";import{_ as M}from"./CTable-885f0b93.js";import{s as S}from"./filterSituacion-912b35d9.js";const V={class:"selected-options"},$={class:"information__section"},x=i("span",{class:"card-title"},"Dotación vs población",-1),E=i("span",null," Tasa de dotación de profesionales activos por población penitenciaria ",-1),L={class:"content__section"},A=3,U={__name:"dotacionPoblacion",setup(B){const n=S(),s=t({id:15,description:"Región Metropolitana de Santiago"}),r=t([]),p=t("Estado situación carcelaria / Dotación vs población"),u=t([{description:"Centro penitenciario",colspan:1},{description:"Dotación total",colspan:1},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:3},{description:"Rrelación dotación/ Total PPL. 24H ",colspan:1},{description:"En % relación dotación vs total ppl",colspan:1}]),_=t([{rowReference:"establecimiento",description:""},{rowReference:"dotacionTotal",description:""},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadHombre",description:"Hombre"},{rowReference:"capacidadMujer",description:"Mujer"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"dotacionRotacion",description:"(cantidad de internos por funcionario)"},{rowReference:"porcRotacionDotacion",description:""}]),m=t([]),f=o=>{o.map(e=>{})},l=async(o=null)=>{try{if(o){activeSpin.value=!0;let c=await D({year:2022,month:12,regionId:o,embedPopulation:!0});const g=f(c.items);optionSeries.push(newOptionsSeries(carcelId,carcelDescription,g))}}catch(e){console.log(e)}},v=async o=>{if(!n.listadoRegiones.length>0){let e=await y();r.value=e,n.setRegionesList(e)}};return w(async()=>{s.value=n.regionSelected,await v(),await l()}),(o,e)=>(R(),b(h,{class:"contenido-dotacion"},{default:d(()=>[a(T,{title:p.value,"section-value":A},null,8,["title"]),i("div",V,[a(P,{class:"select-region",options:r.value,modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=c=>s.value=c)},null,8,["options","modelValue"]),a(H,{class:"btn-search",title:"",onExecuteAction:l})]),i("div",$,[a(j,{class:"card-information"},{default:d(()=>[x,E]),_:1})]),i("div",L,[a(M,{"parent-columns":u.value,columns:_.value,rows:m.value},null,8,["parent-columns","columns","rows"])])]),_:1}))}};export{U as default};
