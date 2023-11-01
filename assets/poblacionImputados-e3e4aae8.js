import{g as n,h as V,o as $,f as L,j as g,_ as B,E,l as S,m as u,b as l,z as U,y as k}from"./index-16ad8c53.js";import{_ as A}from"./CHeaderBar-3cb4d6a0.js";import{_ as N}from"./CCard-4b439096.js";import{_ as z}from"./CButton-2c0f70bc.js";import{_ as F}from"./CTable-af71372e.js";import{s as q}from"./filterSituacion-ad7351cd.js";const G={class:"selected-options"},J={class:"information__section"},K=l("span",{class:"card-title"},"Tasa de ocupación",-1),O=l("span",null," Tasa de ocupación total de penitenciarías en contraste con población imputada. ",-1),Q={class:"content__section"},W=3,se={__name:"poblacionImputados",setup(X){const t=q(),R=n("Estado situación carcelaria / Tasa de ocupación imputados Vs Total"),I=n(!1),r=n(),m=n([]),x=n([{description:"Centro penitenciario",colspan:1},{description:"Imputados",colspan:3},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:3},{description:"% Uso capacidad total",colspan:3},{description:"% Uso imputado",colspan:3}]),C=n([{rowReference:"establecimiento",description:""},{rowReference:"imputadoHombre",description:"Hombre"},{rowReference:"imputadoMujer",description:"Mujer"},{rowReference:"imputadoTotal",description:"Total"},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadHombre",description:"Hombre"},{rowReference:"capacidadMujer",description:"Mujer"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"usoCapacidadHombre",description:"Hombre"},{rowReference:"usoCapacidadMujer",description:"Mujer"},{rowReference:"usoCapacidadTotal",description:"Total"},{rowReference:"usoImputadoHombre",description:"Hombre"},{rowReference:"usoImputadoMujer",description:"Mujer"},{rowReference:"usoImputadoTotal",description:"Total"}]),f=n([]),i=e=>e?Math.round(e*100)/100:0,d=e=>e<85?"class-verde":e>85&&e<99?"class-ambar":"class-rojo",h=e=>{const o=t.listadoCarceles.value.find(D=>D.id===e.carcelId),a=e.imputadoHombre+e.condenadoHombre+e.procesadoHombre+e.detenidoHombre,c=e.imputadoMujer+e.condenadoMujer+e.procesadoMujer+e.detenidoMujer,s=a+c,_=e.imputadoHombre+e.imputadoMujer,p=e.pplMaxMujer+e.pplMaxHombre,b=a&&e.pplMaxHombre?i(a*100/e.pplMaxHombre):0,j=c&&e.pplMaxMujer?i(c*100/e.pplMaxMujer):0,H=s&&p?i(s*100/p):0,w=e.imputadoHombre&&e.pplMaxHombre?i(e.imputadoHombre*100/e.pplMaxHombre):0,T=e.imputadoMujer&&e.pplMaxMujer?i(e.imputadoMujer*100/e.pplMaxMujer):0,v=_&&p?i(_*100/p):0;if(o&&(o!=null&&o.id))return{carcelId:o.id,establecimiento:o.description,imputadoHombre:e.imputadoHombre,imputadoMujer:e.imputadoMujer,imputadoTotal:e.imputadoHombre+e.imputadoMujer,totalPplHombre:a,totalPplMujer:c,totalPplTotal:a+c,capacidadHombre:e.pplMaxHombre,capacidadMujer:e.pplMaxMujer,capacidadTotal:p,usoCapacidadHombre:{data:b+"%",class:d(b)},usoCapacidadMujer:{data:j+"%",class:d(j)},usoCapacidadTotal:{data:H+"%",class:d(H)},usoImputadoHombre:{data:w+"%",class:d(w)},usoImputadoMujer:{data:T+"%",class:d(T)},usoImputadoTotal:{data:v+"%",class:d(v)}}},y=async e=>{if(!t.listadoRegiones.length>0){let o=await E();m.value=o,t.setRegionesList(o)}},P=async()=>{var a;const e={regionId:((a=r.value)==null?void 0:a.id)??r.value};let o=await k(e);t.setCarcelesList(o)},M=async()=>{var e,o;try{if((e=t==null?void 0:t.regionSelected)!=null&&e.id){const a={year:2022,month:12,regionId:((o=r.value)==null?void 0:o.id)??r.value,embedPopulation:!0};await P();let c=await S(a);f.value=c.items.map(s=>h(s)).filter(s=>s==null?void 0:s.carcelId)}}catch(a){console.log(a)}};return V(async()=>{r.value=t.regionSelected,await y(),await M(),I.value=!0}),(e,o)=>($(),L(B,{class:"contenido-imputados"},{default:g(()=>[u(A,{title:R.value,"section-value":W},null,8,["title"]),l("div",G,[u(U,{class:"select-region",options:m.value,modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a)},null,8,["options","modelValue"]),u(z,{class:"btn-search",title:"",onExecuteAction:M})]),l("div",J,[u(N,{class:"card-information"},{default:g(()=>[K,O]),_:1})]),l("div",Q,[u(F,{"parent-columns":x.value,columns:C.value,rows:f.value},null,8,["parent-columns","columns","rows"])])]),_:1}))}};export{se as default};
