import{h as n,m as B,o as x,f as C,j as I,_ as L,n as k,g as u,b as d,a as N}from"./index-c619b897.js";import{_ as U}from"./CHeaderBar-1d33da3e.js";import{_ as A}from"./CCard-1c845476.js";import{_ as E}from"./CSelect.vue_vue_type_style_index_0_lang-b9870a27.js";import{_ as F}from"./CSelect-f9a2a604.js";import{_ as q}from"./CTable-0e1712c0.js";import{g as z}from"./regiones-a08bc90d.js";import{g as G}from"./carceles-3b8ad7b2.js";import{s as J}from"./filterSituacion-2740de8f.js";const K={class:"selected-options"},O={class:"information__section"},Q=d("span",{class:"card-title"},"Tasa de ocupación",-1),W=d("span",null," Tasa de ocupación total de penitenciarías en contraste con población imputada. ",-1),X={class:"content__section"},Y=3,de={__name:"poblacionImputados",setup(Z){const a=J(),y=n("Estado situación carcelaria / Tasa de ocupación imputados Vs Total"),l=n(!1),p=n(),m=n(),h=n([{description:"Centro penitenciario",colspan:1},{description:"Imputados",colspan:3},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:3},{description:"% Uso capacidad total",colspan:3},{description:"% Uso imputado",colspan:3}]),P=n([{rowReference:"establecimiento",description:""},{rowReference:"imputadoHombre",description:"Hombre"},{rowReference:"imputadoMujer",description:"Mujer"},{rowReference:"imputadoTotal",description:"Total"},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadHombre",description:"Hombre"},{rowReference:"capacidadMujer",description:"Mujer"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"usoCapacidadHombre",description:"Hombre"},{rowReference:"usoCapacidadMujer",description:"Mujer"},{rowReference:"usoCapacidadTotal",description:"Total"},{rowReference:"usoImputadoHombre",description:"Hombre"},{rowReference:"usoImputadoMujer",description:"Mujer"},{rowReference:"usoImputadoTotal",description:"Total"}]),f=n([]),s=e=>e?Math.round(e*100)/100:0,c=e=>e<85?"class-verde":e>85&&e<99?"class-ambar":"class-rojo",V=e=>{const o=a.listadoCarceles.value.find(S=>S.id===e.carcelId),t=e.imputadoHombre+e.condenadoHombre+e.procesadoHombre+e.detenidoHombre,r=e.imputadoMujer+e.condenadoMujer+e.procesadoMujer+e.detenidoMujer,b=t+r,j=e.imputadoHombre+e.imputadoMujer,i=e.pplMaxMujer+e.pplMaxHombre,H=t&&e.pplMaxHombre?s(t*100/e.pplMaxHombre):0,w=r&&e.pplMaxMujer?s(r*100/e.pplMaxMujer):0,g=b&&i?s(b*100/i):0,T=e.imputadoHombre&&e.pplMaxHombre?s(e.imputadoHombre*100/e.pplMaxHombre):0,R=e.imputadoMujer&&e.pplMaxMujer?s(e.imputadoMujer*100/e.pplMaxMujer):0,v=j&&i?s(j*100/i):0;return{establecimiento:o.description,imputadoHombre:e.imputadoHombre,imputadoMujer:e.imputadoMujer,imputadoTotal:e.imputadoHombre+e.imputadoMujer,totalPplHombre:t,totalPplMujer:r,totalPplTotal:t+r,capacidadHombre:e.pplMaxHombre,capacidadMujer:e.pplMaxMujer,capacidadTotal:i,usoCapacidadHombre:{data:H+"%",class:c(H)},usoCapacidadMujer:{data:w+"%",class:c(w)},usoCapacidadTotal:{data:g+"%",class:c(g)},usoImputadoHombre:{data:T+"%",class:c(T)},usoImputadoMujer:{data:R+"%",class:c(R)},usoImputadoTotal:{data:v+"%",class:c(v)}}},D=async()=>{a.changeRegionSelected(p.value),await M(),await _()},$=async e=>{if(!a.listadoRegiones.length>0){let o=await z();m.value=o,a.setRegionesList(o)}},M=async()=>{const e={regionId:a.regionSelected.id};let o=await G(e);a.setCarcelesList(o)},_=async()=>{var e;try{if((e=a==null?void 0:a.regionSelected)!=null&&e.id){const o={year:2022,month:12,regionId:a.regionSelected.id,embedPopulation:!0};await M();let t=await k(o);f.value=t.items.map(r=>V(r))}}catch(o){console.log(o)}};return B(async()=>{p.value=a.regionSelected,await $(),await _(),l.value=!0}),(e,o)=>(x(),C(L,null,{default:I(()=>[u(U,{title:y.value,"section-value":Y},null,8,["title"]),d("div",K,[l.value?(x(),C(F,{key:0,options:m.value,modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=t=>p.value=t)},null,8,["options","modelValue"])):N("",!0),u(E,{title:"Buscar",onExecuteAction:o[1]||(o[1]=t=>D())})]),d("div",O,[u(A,{class:"card-information"},{default:I(()=>[Q,W]),_:1})]),d("div",X,[u(q,{"parent-columns":h.value,columns:P.value,rows:f.value},null,8,["parent-columns","columns","rows"])])]),_:1}))}};export{de as default};
