import{g as i,u as X,h as Y,o as I,f as B,j as Z,_ as ee,l as y,x as te,b as h,m as v,n as ae,c as E,C as oe,a as w,e as se,y as ie}from"./index-c6cfe71e.js";import{_ as le}from"./subSideNav-9af33995.js";import{_ as re}from"./CHeaderBar-341e9f0f.js";import{_ as A}from"./CButton-a5ed5892.js";import{_ as ne}from"./CTable-9f8a4cb1.js";import{s as ce}from"./filterSituacion-cddc3f3c.js";import"./CChartDonutSection-964682c9.js";const de={class:"content-poblacion-header"},ue={key:0,class:"selected-options"},pe={key:1,class:"c-option-volver"},me={class:"table-section-principal"},ve={class:"content__section"},f=3,N=30,U=29,He={__name:"dotacionPoblacion",setup(fe){const P=i("Estado situación carcelaria / Dotación vs población"),R=X(),s=ce(),x=i(null),l=i({id:15,description:"Región Metropolitana de Santiago"}),j=i([]),n=i(0),c=i(0),H=i(),C=i(),d=i(!1),q=i([{description:"Centro penitenciario",colspan:1},{description:"Dotación total",colspan:1},{description:"Total PPL. 24h",colspan:3},{description:"En % relación dotación vs total ppl",colspan:2}]),z=i([{rowReference:"establecimiento",description:""},{rowReference:"dotacionTotal",description:""},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"dotacionRotacion",description:"Cantidad internos por funcionario"},{rowReference:"porcRotacionDotacionInfo",description:"En % relación dotación vs total ppl"}]),_=i([]),u=e=>e<85?"class-verde":e>85&&e<99?"class-ambar":"class-rojo",G=()=>{se.push("/situacionCarcelaria")},p=e=>e?`${Math.round(e*100)/100} %`:"0 %",J=(e,t)=>{const a=s.listadoCarceles.find(o=>o.id===e.carcelId);if(a&&(a!=null&&a.id)){let o=0;t.filter(b=>b.carcelId===a.id).map(b=>o+=b.licenseActiveTotal+b.licenseDisabledTotal);const r=e.imputadoHombre+e.condenadoHombre+e.procesadoHombre+e.detenidoHombre,g=e.imputadoMujer+e.condenadoMujer+e.procesadoMujer+e.detenidoMujer,m=r+g,D=e.imputadoHombre+e.imputadoMujer,M=e.pplMaxMujer+e.pplMaxHombre,S=r&&e.pplMaxHombre?p(r*100/e.pplMaxHombre):0,V=g&&e.pplMaxMujer?p(g*100/e.pplMaxMujer):0,$=m&&M?p(m*100/M):0,L=e.imputadoHombre&&e.pplMaxHombre?p(e.imputadoHombre*100/e.pplMaxHombre):0,k=e.imputadoMujer&&e.pplMaxMujer?p(e.imputadoMujer*100/e.pplMaxMujer):0,F=D&&M?p(D*100/M):0;return{dotacionTotal:o,carcelId:a.id,establecimiento:a.description,imputadoHombre:e.imputadoHombre,imputadoMujer:e.imputadoMujer,imputadoTotal:e.imputadoHombre+e.imputadoMujer,totalPplHombre:{data:r,class:"ppl-datatable"},totalPplMujer:{data:g,class:"ppl-datatable"},totalPplTotal:{data:m,class:"ppl-datatable"},capacidadHombre:e.pplMaxHombre,capacidadMujer:e.pplMaxMujer,capacidadTotal:M,usoCapacidadHombre:{data:S+"%",class:u(S)},usoCapacidadMujer:{data:V+"%",class:u(V)},usoCapacidadTotal:{data:$+"%",class:u($)},usoImputadoHombre:{data:L+"%",class:u(L)},usoImputadoMujer:{data:k+"%",class:u(k)},usoImputadoTotal:{data:F+"%",class:u(F)},dotacionRotacion:Math.round(m/o),porcRotacionDotacion:Math.round(o/m*100),porcRotacionDotacionInfo:Math.round(o/m*100)+"%"}}},K=async()=>{var a,o,r;let e={categoryId:f,historySubCategoryId:N,lastPeriod:!0};H.value||(H.value=await y(e));let t={categoryId:f,historySubCategoryId:U,lastPeriod:!0};return C.value||(C.value=await y(t)),e={categoryId:f,historySubCategoryId:N,historyId:H.value.id,embedPopulation:!0},t={categoryId:f,historySubCategoryId:U,historyId:C.value.id,embedLicenses:!0},l.value?(e.regionId=(a=l.value)!=null&&a.id?l.value.id:l.value,t.regionId=(o=l.value)!=null&&o.id?l.value.id:l.value):(r=s==null?void 0:s.regionSelected)!=null&&r.id&&(e.regionId=s.regionSelected.id,t.regionId=s.regionSelected.id),n.value&&(e.regionId=n.value,t.regionId=n.value),c.value&&(e.carcelId=c.value,t.carcelId=c.value),await O(),{filtersPoblacion:e,filtersLicencias:t}},O=async()=>{if(!s.listadoCarceles.length){let e=await ie();s.setCarcelesList(e)}},Q=()=>{let e=0;_.value.map(t=>e+=t.porcRotacionDotacion),e=e/_.value.length,x.value=`${parseFloat((e/100*5).toFixed(1))} / 5`.replace(".",",")},T=async()=>{try{const e=await K();if(l){let t=await y(e.filtersPoblacion),a=await y(e.filtersLicencias);_.value=t.items.map(o=>J(o,(a==null?void 0:a.items)??[])).filter(o=>o),Q()}}catch(e){console.log(e)}},W=async e=>{if(!s.listadoRegiones.length>0){let t=await te();j.value=t,s.setRegionesList(t)}else j.value=s.listadoRegiones};return Y(async()=>{d.value=!0;const e=R.user.restrictions.find(a=>a.typeId===2),t=R.user.restrictions.find(a=>a.typeId===3);e?(n.value=parseInt(e.restriction),l.value=s.regionSelected.id):t?c.value=parseInt(t.restriction):(c.value=null,n.value=null),await W(),await T(),d.value=!1}),(e,t)=>(I(),B(ee,{class:"contenido-dotacion-poblacion"},{default:Z(()=>[h("div",de,[v(re,{title:P.value,"section-value":f},null,8,["title"]),v(ae,{"active-spin":d.value},null,8,["active-spin"]),!d.value&&!c.value?(I(),E("div",ue,[d.value?w("",!0):(I(),B(oe,{key:0,class:"select-region",options:j.value,modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a),disabled:n.value},null,8,["options","modelValue","disabled"])),v(A,{class:"btn-search",title:"",onExecuteAction:T})])):w("",!0),!d.value&&e.topPosition!==0?(I(),E("div",pe,[v(A,{class:"btn-volver",title:"Volver",onExecuteAction:G,disabled:e.blockButton},null,8,["disabled"])])):w("",!0)]),h("div",me,[v(le,{class:"subsection-poblacion",title:P.value,"section-value":f,"point-label":x.value,"point-disabled":!0,pointTitle:"Dotación vs población",pointSubtitle:""},null,8,["title","point-label"]),h("div",ve,[v(ne,{"parent-columns":q.value,columns:z.value,rows:_.value},null,8,["parent-columns","columns","rows"])])])]),_:1}))}};export{He as default};