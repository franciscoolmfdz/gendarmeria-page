import{g as c,h as U,o as P,f as q,j as z,_ as G,q as J,l as R,b as v,m as i,n as K,x as O,c as Q,a as W,e as X,C as Y}from"./index-c0c6dc58.js";import{_ as Z}from"./subSideNav-37b119f4.js";import{_ as ee}from"./CHeaderBar-c7eae6ad.js";import{_ as V}from"./CButton-5d0fce41.js";import{_ as oe}from"./CTable-d803f6d3.js";import{s as ae}from"./filterSituacion-e456c981.js";import"./CChartDonutSection-22d9718c.js";const te={class:"content-imputados"},ne={class:"selected-options"},se={key:0,class:"c-option-volver"},ce={class:"table-section-principal"},re={class:"content__section"},b=3,S=30,fe={__name:"poblacionImputados",setup(ie){const t=ae(),j=c("Estado situación carcelaria / Tasa de ocupación"),$=c(!1),a=c({id:15,description:"Región Metropolitana de Santiago"});c();const H=c(),f=c([]),M=c(0),g=c(!1),u=c(0),B=c([{description:"Centro penitenciario",colspan:1},{description:"Condenados",colspan:3},{description:"Imputados",colspan:1},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:1},{description:"% Uso capacidad total",colspan:3}]),D=c([{rowReference:"establecimiento",description:""},{rowReference:"condenadoHombre",description:"Hombre"},{rowReference:"condenadoMujer",description:"Mujer"},{rowReference:"condenadoTotal",description:"Total"},{rowReference:"imputadoTotal",description:"Total"},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"usoCapacidadHombre",description:"Hombre"},{rowReference:"usoCapacidadMujer",description:"Mujer"},{rowReference:"usoCapacidadTotal",description:"Total"}]),p=c([]),k=()=>{X.push("/situacionCarcelaria")},l=e=>e?Math.round(e*100)/100:0,d=e=>e<85?"class-verde":e>85&&e<99?"class-ambar":"class-rojo",E=e=>{const o=t.listadoCarceles.find(N=>N.id===e.carcelId),n=e.imputadoHombre+e.condenadoHombre+e.procesadoHombre+e.detenidoHombre,s=e.imputadoMujer+e.condenadoMujer+e.procesadoMujer+e.detenidoMujer,r=n+s,w=e.imputadoHombre+e.imputadoMujer,m=e.pplMaxMujer+e.pplMaxHombre,T=n&&e.pplMaxHombre?l(n*100/e.pplMaxHombre):0,I=s&&e.pplMaxMujer?l(s*100/e.pplMaxMujer):0,_=r&&m?l(r*100/m):0,y=e.imputadoHombre&&e.pplMaxHombre?l(e.imputadoHombre*100/e.pplMaxHombre):0,x=e.imputadoMujer&&e.pplMaxMujer?l(e.imputadoMujer*100/e.pplMaxMujer):0,h=w&&m?l(w*100/m):0;if(o&&(o!=null&&o.id))return u.value+=_,{carcelId:o.id,establecimiento:o.description,condenadoHombre:e.imputadoHombre,condenadoMujer:e.imputadoMujer,condenadoTotal:e.imputadoHombre+e.imputadoMujer,imputadoTotal:e.condenadoHombre+e.condenadoMujer,totalPplHombre:n,totalPplMujer:s,totalPplTotal:n+s,capacidadHombre:e.pplMaxHombre,capacidadMujer:e.pplMaxMujer,capacidadTotal:m,usoCapacidadHombre:{data:T+"%",class:d(T)},usoCapacidadMujer:{data:I+"%",class:d(I)},usoCapacidadTotal:{data:_+"%",class:d(_)},usoImputadoHombre:{data:y+"%",class:d(y)},usoImputadoMujer:{data:x+"%",class:d(x)},usoImputadoTotal:{data:h+"%",class:d(h)}}},L=async e=>{if(!t.listadoRegiones.length>0){let o=await J();f.value=o,t.setRegionesList(o)}else f.value=t.listadoRegiones},A=async()=>{let e=await Y();t.setCarcelesList(e)},F=async()=>{var o,n,s;let e={categoryId:b,historySubCategoryId:S,lastPeriod:!0};return M.value||(M.value=await R(e)),e={categoryId:b,historySubCategoryId:S,historyId:M.value.id,embedPopulation:!0},a.value?e.regionId=(o=a.value)!=null&&o.id?a.value.id:a.value:(n=t==null?void 0:t.regionSelected)!=null&&n.id?(e.regionId=t.regionSelected.id,a.value=t.regionSelected):a!=null&&a.value&&(e.regionId=(s=a==null?void 0:a.value)!=null&&s.id?a.value.id:a==null?void 0:a.value),H.value&&(e.carcelId=H.value),await A(),e},C=async()=>{var e,o;try{if((e=t==null?void 0:t.regionSelected)!=null&&e.id){const n=await F();let s=await R(n);(o=s==null?void 0:s.items)!=null&&o.length?(p.value=s.items.map(r=>E(r)).filter(r=>r==null?void 0:r.carcelId),console.log(p.value)):p.value=[],console.log(u.value),u.value=(u.value/p.value.length).toFixed(1)}}catch(n){console.log(n)}};return U(async()=>{a.value=t.regionSelected,await L(),await C(),$.value=!0}),(e,o)=>(P(),q(G,{class:"contenido-imputados"},{default:z(()=>[v("div",te,[i(ee,{title:j.value,"section-value":b},null,8,["title"]),i(K,{"active-spin":g.value},null,8,["active-spin"]),v("div",ne,[i(O,{class:"select-region",options:f.value,modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=n=>a.value=n)},null,8,["options","modelValue"]),i(V,{class:"btn-search",title:"",onExecuteAction:C})]),!g.value&&e.topPosition!==0?(P(),Q("div",se,[i(V,{class:"btn-volver",title:"Volver",onExecuteAction:k,disabled:e.blockButton},null,8,["disabled"])])):W("",!0)]),v("div",ce,[i(Z,{class:"subsection-imputados",title:j.value,"section-value":b,pointValue:u.value,pointTitle:"Tasa de ocupación",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),v("div",re,[i(oe,{"parent-columns":B.value,columns:D.value,rows:p.value},null,8,["parent-columns","columns","rows"])])])]),_:1}))}};export{fe as default};
