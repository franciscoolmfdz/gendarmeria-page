import{g as t,h as w,o as R,f as b,j as d,_ as h,l as D,E as y,m as a,b as i,z as P}from"./index-21166dae.js";import{_ as T}from"./CHeaderBar-25b66bad.js";import{_ as j}from"./CCard-2679b4c0.js";import{_ as H}from"./CButton-02a38a2a.js";import{_ as M}from"./CTable-c7b4edc9.js";import{s as S}from"./filterSituacion-0ea11808.js";const V={class:"selected-options"},$={class:"information__section"},x=i("span",{class:"card-title"},"Dotación vs población",-1),E=i("span",null," Tasa de dotación de profesionales activos por población penitenciaria ",-1),L={class:"content__section"},B=3,O={__name:"dotacionPoblacion",setup(C){const n=S(),s=t({id:15,description:"Región Metropolitana de Santiago"}),r=t([]),p=t("Estado situación carcelaria / Dotación vs población"),u=t([{description:"Centro penitenciario",colspan:1},{description:"Dotación total",colspan:1},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:3},{description:"Rrelación dotación/ Total PPL. 24H ",colspan:1},{description:"En % relación dotación vs total ppl",colspan:1}]),_=t([{rowReference:"establecimiento",description:""},{rowReference:"dotacionTotal",description:""},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadHombre",description:"Hombre"},{rowReference:"capacidadMujer",description:"Mujer"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"dotacionRotacion",description:"(cantidad de internos por funcionario)"},{rowReference:"porcRotacionDotacion",description:""}]),m=t([]),f=o=>{o.map(e=>{})},l=async(o=null)=>{try{if(o){activeSpin.value=!0;let c=await D({year:2022,month:12,regionId:o,embedPopulation:!0});const g=f(c.items);optionSeries.push(newOptionsSeries(carcelId,carcelDescription,g))}}catch(e){console.log(e)}},v=async o=>{if(!n.listadoRegiones.length>0){let e=await y();r.value=e,n.setRegionesList(e)}};return w(async()=>{s.value=n.regionSelected,await v(),await l()}),(o,e)=>(R(),b(h,{class:"contenido-dotacion"},{default:d(()=>[a(T,{title:p.value,"section-value":B},null,8,["title"]),i("div",V,[a(P,{class:"select-region",options:r.value,modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=c=>s.value=c)},null,8,["options","modelValue"]),a(H,{class:"btn-search",title:"",onExecuteAction:l})]),i("div",$,[a(j,{class:"card-information"},{default:d(()=>[x,E]),_:1})]),i("div",L,[a(M,{"parent-columns":u.value,columns:_.value,rows:m.value},null,8,["parent-columns","columns","rows"])])]),_:1}))}};export{O as default};
