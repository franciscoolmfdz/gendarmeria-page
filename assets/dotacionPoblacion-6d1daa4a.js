import{g as i,h as J,o as $,f as K,j as O,_ as Q,l as g,x as W,b,m as r,n as X,C as Y,c as Z,a as ee,e as te,B as ae}from"./index-dddf95f5.js";import{_ as oe}from"./subSideNav-e2789a0c.js";import{_ as se}from"./CHeaderBar-f5fe19ca.js";import{_ as L}from"./CButton-48472d48.js";import{_ as ie}from"./CTable-f5a47528.js";import{s as le}from"./filterSituacion-1f76b514.js";import"./CChartDonutSection-05a248b3.js";const ne={class:"content-poblacion-header"},re={class:"selected-options"},ce={key:0,class:"c-option-volver"},de={class:"table-section-principal"},ue={class:"content__section"},p=3,B=30,E=29,je={__name:"dotacionPoblacion",setup(pe){const h=i("Estado situación carcelaria / Dotación vs población"),s=le(),y=i(null),l=i({id:15,description:"Región Metropolitana de Santiago"}),j=i([]);i(0);const H=i(0),I=i(),C=i(),v=i(!1),k=i([{description:"Centro penitenciario",colspan:1},{description:"Dotación total",colspan:1},{description:"Total PPL. 24h",colspan:3},{description:"En % relación dotación vs total ppl",colspan:2}]),F=i([{rowReference:"establecimiento",description:""},{rowReference:"dotacionTotal",description:""},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"dotacionRotacion",description:"Cantidad internos por funcionario"},{rowReference:"porcRotacionDotacionInfo",description:"En % relación dotación vs total ppl"}]),f=i([]),c=e=>e<85?"class-verde":e>85&&e<99?"class-ambar":"class-rojo",A=()=>{te.push("/situacionCarcelaria")},d=e=>e?`${Math.round(e*100)/100} %`:"0 %",N=(e,t)=>{const a=s.listadoCarceles.find(o=>o.id===e.carcelId);if(a&&(a!=null&&a.id)){let o=0;t.filter(_=>_.carcelId===a.id).map(_=>o+=_.licenseActiveTotal+_.licenseDisabledTotal);const n=e.imputadoHombre+e.condenadoHombre+e.procesadoHombre+e.detenidoHombre,M=e.imputadoMujer+e.condenadoMujer+e.procesadoMujer+e.detenidoMujer,u=n+M,P=e.imputadoHombre+e.imputadoMujer,m=e.pplMaxMujer+e.pplMaxHombre,R=n&&e.pplMaxHombre?d(n*100/e.pplMaxHombre):0,x=M&&e.pplMaxMujer?d(M*100/e.pplMaxMujer):0,T=u&&m?d(u*100/m):0,D=e.imputadoHombre&&e.pplMaxHombre?d(e.imputadoHombre*100/e.pplMaxHombre):0,S=e.imputadoMujer&&e.pplMaxMujer?d(e.imputadoMujer*100/e.pplMaxMujer):0,V=P&&m?d(P*100/m):0;return{dotacionTotal:o,carcelId:a.id,establecimiento:a.description,imputadoHombre:e.imputadoHombre,imputadoMujer:e.imputadoMujer,imputadoTotal:e.imputadoHombre+e.imputadoMujer,totalPplHombre:{data:n,class:"ppl-datatable"},totalPplMujer:{data:M,class:"ppl-datatable"},totalPplTotal:{data:u,class:"ppl-datatable"},capacidadHombre:e.pplMaxHombre,capacidadMujer:e.pplMaxMujer,capacidadTotal:m,usoCapacidadHombre:{data:R+"%",class:c(R)},usoCapacidadMujer:{data:x+"%",class:c(x)},usoCapacidadTotal:{data:T+"%",class:c(T)},usoImputadoHombre:{data:D+"%",class:c(D)},usoImputadoMujer:{data:S+"%",class:c(S)},usoImputadoTotal:{data:V+"%",class:c(V)},dotacionRotacion:Math.round(u/o),porcRotacionDotacion:Math.round(o/u*100),porcRotacionDotacionInfo:Math.round(o/u*100)+"%"}}},U=async()=>{var a,o,n;let e={categoryId:p,historySubCategoryId:B,lastPeriod:!0};I.value||(I.value=await g(e));let t={categoryId:p,historySubCategoryId:E,lastPeriod:!0};return C.value||(C.value=await g(t)),e={categoryId:p,historySubCategoryId:B,historyId:I.value.id,embedPopulation:!0},t={categoryId:p,historySubCategoryId:E,historyId:C.value.id,embedLicenses:!0},l.value?(e.regionId=(a=l.value)!=null&&a.id?l.value.id:l.value,t.regionId=(o=l.value)!=null&&o.id?l.value.id:l.value):(n=s==null?void 0:s.regionSelected)!=null&&n.id&&(e.regionId=s.regionSelected.id,t.regionId=s.regionSelected.id),H.value&&(e.carcelId=H.value,t.carcelId=H.value),await q(),{filtersPoblacion:e,filtersLicencias:t}},q=async()=>{if(!s.listadoCarceles.length){let e=await ae();s.setCarcelesList(e)}},z=()=>{let e=0;f.value.map(t=>e+=t.porcRotacionDotacion),e=e/f.value.length,y.value=`${parseFloat((e/100*5).toFixed(1))} / 5`},w=async()=>{try{const e=await U();if(l){let t=await g(e.filtersPoblacion),a=await g(e.filtersLicencias);f.value=t.items.map(o=>N(o,(a==null?void 0:a.items)??[])).filter(o=>o),z()}}catch(e){console.log(e)}},G=async e=>{if(!s.listadoRegiones.length>0){let t=await W();j.value=t,s.setRegionesList(t)}else j.value=s.listadoRegiones};return J(async()=>{v.value=!0,l.value=s.regionSelected,await G(),await w(),v.value=!1}),(e,t)=>($(),K(Q,{class:"contenido-dotacion-poblacion"},{default:O(()=>[b("div",ne,[r(se,{title:h.value,"section-value":p},null,8,["title"]),r(X,{"active-spin":v.value},null,8,["active-spin"]),b("div",re,[r(Y,{class:"select-region",options:j.value,modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a)},null,8,["options","modelValue"]),r(L,{class:"btn-search",title:"",onExecuteAction:w})]),!v.value&&e.topPosition!==0?($(),Z("div",ce,[r(L,{class:"btn-volver",title:"Volver",onExecuteAction:A,disabled:e.blockButton},null,8,["disabled"])])):ee("",!0)]),b("div",de,[r(oe,{class:"subsection-poblacion",title:h.value,"section-value":p,"point-label":y.value,"point-disabled":!0,pointTitle:"Dotación vs población",pointSubtitle:""},null,8,["title","point-label"]),b("div",ue,[r(ie,{"parent-columns":k.value,columns:F.value,rows:f.value},null,8,["parent-columns","columns","rows"])])])]),_:1}))}};export{je as default};
