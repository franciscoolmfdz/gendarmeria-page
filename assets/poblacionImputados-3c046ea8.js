import{g as s,h as U,o as x,f as F,j as q,_ as z,q as G,l as R,b as p,m as n,n as J,x as K,c as O,a as Q,e as W,C as X}from"./index-27498bb2.js";import{_ as Y}from"./subSideNav-ab04d332.js";import{_ as Z}from"./CHeaderBar-5da83c53.js";import{_ as P}from"./CButton-b35e2b14.js";import{_ as ee}from"./CTable-c05e5067.js";import{s as oe}from"./filterSituacion-5108fd71.js";import"./CChartDonutSection-bcde11d7.js";const ae={class:"content-imputados"},te={class:"selected-options"},se={key:0,class:"c-option-volver"},re={class:"table-section-principal"},ce={class:"content__section"},m=3,V=30,fe={__name:"poblacionImputados",setup(ie){const c=oe(),M=s("Estado situación carcelaria / Tasa de ocupación imputados Vs Total"),S=s(!1),a=s();s();const _=s(),b=s([]),f=s(0),j=s(!1),$=s([{description:"Centro penitenciario",colspan:1},{description:"Imputados",colspan:3},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:3},{description:"% Uso capacidad total",colspan:3},{description:"% Uso imputado",colspan:3}]),B=s([{rowReference:"establecimiento",description:""},{rowReference:"imputadoHombre",description:"Hombre"},{rowReference:"imputadoMujer",description:"Mujer"},{rowReference:"imputadoTotal",description:"Total"},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadHombre",description:"Hombre"},{rowReference:"capacidadMujer",description:"Mujer"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"usoCapacidadHombre",description:"Hombre"},{rowReference:"usoCapacidadMujer",description:"Mujer"},{rowReference:"usoCapacidadTotal",description:"Total"},{rowReference:"usoImputadoHombre",description:"Hombre"},{rowReference:"usoImputadoMujer",description:"Mujer"},{rowReference:"usoImputadoTotal",description:"Total"}]),v=s([]),D=()=>{W.push("/situacionCarcelaria")},l=e=>e?Math.round(e*100)/100:0,u=e=>e<85?"class-verde":e>85&&e<99?"class-ambar":"class-rojo",k=e=>{const o=c.listadoCarceles.find(N=>N.id===e.carcelId),t=e.imputadoHombre+e.condenadoHombre+e.procesadoHombre+e.detenidoHombre,r=e.imputadoMujer+e.condenadoMujer+e.procesadoMujer+e.detenidoMujer,i=t+r,w=e.imputadoHombre+e.imputadoMujer,d=e.pplMaxMujer+e.pplMaxHombre,I=t&&e.pplMaxHombre?l(t*100/e.pplMaxHombre):0,C=r&&e.pplMaxMujer?l(r*100/e.pplMaxMujer):0,T=i&&d?l(i*100/d):0,g=e.imputadoHombre&&e.pplMaxHombre?l(e.imputadoHombre*100/e.pplMaxHombre):0,y=e.imputadoMujer&&e.pplMaxMujer?l(e.imputadoMujer*100/e.pplMaxMujer):0,h=w&&d?l(w*100/d):0;if(o&&(o!=null&&o.id))return{carcelId:o.id,establecimiento:o.description,imputadoHombre:e.imputadoHombre,imputadoMujer:e.imputadoMujer,imputadoTotal:e.imputadoHombre+e.imputadoMujer,totalPplHombre:t,totalPplMujer:r,totalPplTotal:t+r,capacidadHombre:e.pplMaxHombre,capacidadMujer:e.pplMaxMujer,capacidadTotal:d,usoCapacidadHombre:{data:I+"%",class:u(I)},usoCapacidadMujer:{data:C+"%",class:u(C)},usoCapacidadTotal:{data:T+"%",class:u(T)},usoImputadoHombre:{data:g+"%",class:u(g)},usoImputadoMujer:{data:y+"%",class:u(y)},usoImputadoTotal:{data:h+"%",class:u(h)}}},E=async e=>{if(!c.listadoRegiones.length>0){let o=await G();b.value=o,c.setRegionesList(o)}else b.value=c.listadoRegiones},L=async()=>{let e=await X();c.setCarcelesList(e)},A=async()=>{var o,t;let e={categoryId:m,historySubCategoryId:V,lastPeriod:!0};return f.value||(f.value=await R(e)),e={categoryId:m,historySubCategoryId:V,historyId:f.value.id,embedPopulation:!0},a.value?e.regionId=(o=a.value)!=null&&o.id?a.value.id:a.value:a!=null&&a.value&&(e.regionId=(t=a==null?void 0:a.value)!=null&&t.id?a.value.id:a==null?void 0:a.value),_.value&&(e.carcelId=_.value),await L(),e},H=async()=>{var e,o;try{if((e=c==null?void 0:c.regionSelected)!=null&&e.id){const t=await A();let r=await R(t);(o=r==null?void 0:r.items)!=null&&o.length?v.value=r.items.map(i=>k(i)).filter(i=>i==null?void 0:i.carcelId):v.value=[]}}catch(t){console.log(t)}};return U(async()=>{a.value=c.regionSelected,await E(),await H(),S.value=!0}),(e,o)=>(x(),F(z,{class:"contenido-imputados"},{default:q(()=>[p("div",ae,[n(Z,{title:M.value,"section-value":m},null,8,["title"]),n(J,{"active-spin":j.value},null,8,["active-spin"]),p("div",te,[n(K,{class:"select-region",options:b.value,modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t)},null,8,["options","modelValue"]),n(P,{class:"btn-search",title:"",onExecuteAction:H})]),!j.value&&e.topPosition!==0?(x(),O("div",se,[n(P,{class:"btn-volver",title:"Volver",onExecuteAction:D,disabled:e.blockButton},null,8,["disabled"])])):Q("",!0)]),p("div",re,[n(Y,{class:"subsection-imputados",title:M.value,"section-value":m,pointValue:e.pointCalculated,pointTitle:"Tasa de ocupación",pointSubtitle:""},null,8,["title","pointValue"]),p("div",ce,[n(ee,{"parent-columns":$.value,columns:B.value,rows:v.value},null,8,["parent-columns","columns","rows"])])])]),_:1}))}};export{fe as default};
