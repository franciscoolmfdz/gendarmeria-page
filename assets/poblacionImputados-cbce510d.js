import{g as c,h as U,o as P,f as q,j as z,_ as G,s as J,l as R,b,m as i,n as K,y as O,c as Q,a as W,e as X,D as Y}from"./index-1c9b6d67.js";import{_ as Z}from"./subSideNav-55c06948.js";import{_ as ee}from"./CHeaderBar-902e7fed.js";import{_ as V}from"./CButton-03239594.js";import{_ as ae}from"./CTable-a21e50a4.js";import{s as oe}from"./filterSituacion-837e74ee.js";import"./CChartDonutSection-613d7e10.js";const te={class:"content-imputados"},se={class:"selected-options"},ne={key:0,class:"c-option-volver"},ce={class:"table-section-principal"},re={class:"content__section"},v=3,S=30,fe={__name:"poblacionImputados",setup(ie){const t=oe(),j=c("Estado situación carcelaria / Tasa de ocupación"),D=c(!1),o=c({id:15,description:"Región Metropolitana de Santiago"});c();const H=c(),f=c([]),M=c(0),g=c(!1),u=c(0),$=c([{description:"Centro penitenciario",colspan:1},{description:"Condenados",colspan:3},{description:"Imputados",colspan:3},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:1},{description:"% Uso capacidad total",colspan:3}]),B=c([{rowReference:"establecimiento",description:""},{rowReference:"condenadoHombre",description:"Hombre"},{rowReference:"condenadoMujer",description:"Mujer"},{rowReference:"condenadoTotal",description:"Total"},{rowReference:"imputadoHombre",description:"Hombre"},{rowReference:"imputadoMujer",description:"Mujer"},{rowReference:"imputadoTotal",description:"Total"},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"usoCapacidadHombre",description:"Hombre"},{rowReference:"usoCapacidadMujer",description:"Mujer"},{rowReference:"usoCapacidadTotal",description:"Total"}]),p=c([]),k=()=>{X.push("/situacionCarcelaria")},l=e=>e?Math.round(e*100)/100:0,d=e=>e<85?"class-verde":e>85&&e<99?"class-ambar":"class-rojo",E=e=>{const a=t.listadoCarceles.find(N=>N.id===e.carcelId),s=e.imputadoHombre+e.condenadoHombre+e.procesadoHombre+e.detenidoHombre,n=e.imputadoMujer+e.condenadoMujer+e.procesadoMujer+e.detenidoMujer,r=s+n,T=e.imputadoHombre+e.imputadoMujer,m=e.pplMaxMujer+e.pplMaxHombre,C=s&&e.pplMaxHombre?l(s*100/e.pplMaxHombre):0,I=n&&e.pplMaxMujer?l(n*100/e.pplMaxMujer):0,_=r&&m?l(r*100/m):0,y=e.imputadoHombre&&e.pplMaxHombre?l(e.imputadoHombre*100/e.pplMaxHombre):0,h=e.imputadoMujer&&e.pplMaxMujer?l(e.imputadoMujer*100/e.pplMaxMujer):0,x=T&&m?l(T*100/m):0;if(a&&(a!=null&&a.id))return u.value+=_,{carcelId:a.id,establecimiento:a.description,condenadoHombre:{data:e.condenadoHombre,class:"ppl-datatable"},condenadoMujer:{data:e.condenadoMujer,class:"ppl-datatable"},condenadoTotal:{data:e.condenadoHombre+e.condenadoMujer,class:"ppl-datatable"},imputadoHombre:e.imputadoHombre,imputadoMujer:e.imputadoMujer,imputadoTotal:e.imputadoMujer+e.imputadoHombre,totalPplHombre:{data:s,class:"ppl-datatable"},totalPplMujer:{data:n,class:"ppl-datatable"},totalPplTotal:{data:s+n,class:"ppl-datatable"},capacidadHombre:e.pplMaxHombre,capacidadMujer:e.pplMaxMujer,capacidadTotal:{data:m,class:"diseno-datatable"},usoCapacidadHombre:{data:C+"%",class:d(C)},usoCapacidadMujer:{data:I+"%",class:d(I)},usoCapacidadTotal:{data:_+"%",class:d(_)},usoImputadoHombre:{data:y+"%",class:d(y)},usoImputadoMujer:{data:h+"%",class:d(h)},usoImputadoTotal:{data:x+"%",class:d(x)}}},L=async e=>{if(!t.listadoRegiones.length>0){let a=await J();f.value=a,t.setRegionesList(a)}else f.value=t.listadoRegiones},A=async()=>{let e=await Y();t.setCarcelesList(e)},F=async()=>{var a,s,n;let e={categoryId:v,historySubCategoryId:S,lastPeriod:!0};return M.value||(M.value=await R(e)),e={categoryId:v,historySubCategoryId:S,historyId:M.value.id,embedPopulation:!0},o.value?e.regionId=(a=o.value)!=null&&a.id?o.value.id:o.value:(s=t==null?void 0:t.regionSelected)!=null&&s.id?(e.regionId=t.regionSelected.id,o.value=t.regionSelected):o!=null&&o.value&&(e.regionId=(n=o==null?void 0:o.value)!=null&&n.id?o.value.id:o==null?void 0:o.value),H.value&&(e.carcelId=H.value),await A(),e},w=async()=>{var e,a;try{if((e=t==null?void 0:t.regionSelected)!=null&&e.id){const s=await F();let n=await R(s);(a=n==null?void 0:n.items)!=null&&a.length?(p.value=n.items.map(r=>E(r)).filter(r=>r==null?void 0:r.carcelId),console.log(p.value)):p.value=[],console.log(u.value),u.value=(u.value/p.value.length).toFixed(1)}}catch(s){console.log(s)}};return U(async()=>{o.value=t.regionSelected,await L(),await w(),D.value=!0}),(e,a)=>(P(),q(G,{class:"contenido-imputados"},{default:z(()=>[b("div",te,[i(ee,{title:j.value,"section-value":v},null,8,["title"]),i(K,{"active-spin":g.value},null,8,["active-spin"]),b("div",se,[i(O,{class:"select-region",options:f.value,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s)},null,8,["options","modelValue"]),i(V,{class:"btn-search",title:"",onExecuteAction:w})]),!g.value&&e.topPosition!==0?(P(),Q("div",ne,[i(V,{class:"btn-volver",title:"Volver",onExecuteAction:k,disabled:e.blockButton},null,8,["disabled"])])):W("",!0)]),b("div",ce,[i(Z,{class:"subsection-imputados",title:j.value,"section-value":v,pointValue:u.value,pointTitle:"Tasa de ocupación",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),b("div",re,[i(ae,{"parent-columns":$.value,columns:B.value,rows:p.value},null,8,["parent-columns","columns","rows"])])])]),_:1}))}};export{fe as default};