import{g as c,h as U,o as P,f as q,j as z,_ as G,x as J,l as R,b,m as i,n as K,C as O,c as Q,a as W,e as X,B as Y}from"./index-360e99ca.js";import{_ as Z}from"./subSideNav-83b68ade.js";import{_ as ee}from"./CHeaderBar-d039016f.js";import{_ as V}from"./CButton-120a3296.js";import{_ as ae}from"./CTable-9bb09de1.js";import{s as oe}from"./filterSituacion-45f6cc39.js";import"./CChartDonutSection-b7e9946b.js";const te={class:"content-imputados"},ne={class:"selected-options"},se={key:0,class:"c-option-volver"},ce={class:"table-section-principal"},re={class:"content__section"},v=3,S=30,fe={__name:"poblacionImputados",setup(ie){const t=oe(),j=c("Estado situación carcelaria / Tasa de ocupación"),B=c(!1),o=c({id:15,description:"Región Metropolitana de Santiago"});c();const H=c(),f=c([]),M=c(0),g=c(!1),u=c(0),$=c([{description:"Centro penitenciario",colspan:1},{description:"Condenados",colspan:3},{description:"Imputados",colspan:3},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:1},{description:"% Uso capacidad total",colspan:3}]),D=c([{rowReference:"establecimiento",description:""},{rowReference:"condenadoHombre",description:"Hombre"},{rowReference:"condenadoMujer",description:"Mujer"},{rowReference:"condenadoTotal",description:"Total"},{rowReference:"imputadoHombre",description:"Hombre"},{rowReference:"imputadoMujer",description:"Mujer"},{rowReference:"imputadoTotal",description:"Total"},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"usoCapacidadHombre",description:"Hombre"},{rowReference:"usoCapacidadMujer",description:"Mujer"},{rowReference:"usoCapacidadTotal",description:"Total"}]),p=c([]),k=()=>{X.push("/situacionCarcelaria")},l=e=>e?Math.round(e*100)/100:0,d=e=>e<85?"class-verde":e>85&&e<99?"class-ambar":"class-rojo",E=e=>{const a=t.listadoCarceles.find(N=>N.id===e.carcelId),n=e.imputadoHombre+e.condenadoHombre+e.procesadoHombre+e.detenidoHombre,s=e.imputadoMujer+e.condenadoMujer+e.procesadoMujer+e.detenidoMujer,r=n+s,C=e.imputadoHombre+e.imputadoMujer,m=e.pplMaxMujer+e.pplMaxHombre,T=n&&e.pplMaxHombre?l(n*100/e.pplMaxHombre):0,I=s&&e.pplMaxMujer?l(s*100/e.pplMaxMujer):0,_=r&&m?l(r*100/m):0,y=e.imputadoHombre&&e.pplMaxHombre?l(e.imputadoHombre*100/e.pplMaxHombre):0,x=e.imputadoMujer&&e.pplMaxMujer?l(e.imputadoMujer*100/e.pplMaxMujer):0,h=C&&m?l(C*100/m):0;if(a&&(a!=null&&a.id))return u.value+=_,{carcelId:a.id,establecimiento:a.description,condenadoHombre:{data:e.condenadoHombre,class:"ppl-datatable"},condenadoMujer:{data:e.condenadoMujer,class:"ppl-datatable"},condenadoTotal:{data:e.condenadoHombre+e.condenadoMujer,class:"ppl-datatable"},imputadoHombre:e.imputadoHombre,imputadoMujer:e.imputadoMujer,imputadoTotal:e.imputadoMujer+e.imputadoHombre,totalPplHombre:{data:n,class:"ppl-datatable"},totalPplMujer:{data:s,class:"ppl-datatable"},totalPplTotal:{data:n+s,class:"ppl-datatable"},capacidadHombre:e.pplMaxHombre,capacidadMujer:e.pplMaxMujer,capacidadTotal:{data:m,class:"diseno-datatable"},usoCapacidadHombre:{data:T+"%",class:d(T)},usoCapacidadMujer:{data:I+"%",class:d(I)},usoCapacidadTotal:{data:_+"%",class:d(_)},usoImputadoHombre:{data:y+"%",class:d(y)},usoImputadoMujer:{data:x+"%",class:d(x)},usoImputadoTotal:{data:h+"%",class:d(h)}}},L=async e=>{if(!t.listadoRegiones.length>0){let a=await J();f.value=a,t.setRegionesList(a)}else f.value=t.listadoRegiones},A=async()=>{let e=await Y();t.setCarcelesList(e)},F=async()=>{var a,n,s;let e={categoryId:v,historySubCategoryId:S,lastPeriod:!0};return M.value||(M.value=await R(e)),e={categoryId:v,historySubCategoryId:S,historyId:M.value.id,embedPopulation:!0},o.value?e.regionId=(a=o.value)!=null&&a.id?o.value.id:o.value:(n=t==null?void 0:t.regionSelected)!=null&&n.id?(e.regionId=t.regionSelected.id,o.value=t.regionSelected):o!=null&&o.value&&(e.regionId=(s=o==null?void 0:o.value)!=null&&s.id?o.value.id:o==null?void 0:o.value),H.value&&(e.carcelId=H.value),await A(),e},w=async()=>{var e,a;try{if((e=t==null?void 0:t.regionSelected)!=null&&e.id){const n=await F();let s=await R(n);(a=s==null?void 0:s.items)!=null&&a.length?(p.value=s.items.map(r=>E(r)).filter(r=>r==null?void 0:r.carcelId),console.log(p.value)):p.value=[],console.log(u.value),u.value=(u.value/p.value.length).toFixed(1)}}catch(n){console.log(n)}};return U(async()=>{o.value=t.regionSelected,await L(),await w(),B.value=!0}),(e,a)=>(P(),q(G,{class:"contenido-imputados"},{default:z(()=>[b("div",te,[i(ee,{title:j.value,"section-value":v},null,8,["title"]),i(K,{"active-spin":g.value},null,8,["active-spin"]),b("div",ne,[i(O,{class:"select-region",options:f.value,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n)},null,8,["options","modelValue"]),i(V,{class:"btn-search",title:"",onExecuteAction:w})]),!g.value&&e.topPosition!==0?(P(),Q("div",se,[i(V,{class:"btn-volver",title:"Volver",onExecuteAction:k,disabled:e.blockButton},null,8,["disabled"])])):W("",!0)]),b("div",ce,[i(Z,{class:"subsection-imputados",title:j.value,"section-value":v,pointValue:u.value,pointTitle:"Tasa de ocupación",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),b("div",re,[i(ae,{"parent-columns":$.value,columns:D.value,rows:p.value},null,8,["parent-columns","columns","rows"])])])]),_:1}))}};export{fe as default};
