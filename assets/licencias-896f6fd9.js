import{g as n,h as T,o as g,f as D,j as $,_ as B,J as k,l as x,C as E,q as A,b as l,m as o,n as j,x as M,c as N,a as P,e as F}from"./index-71331f0e.js";import{_ as H}from"./subSideNav-79ca7b35.js";import{_ as q}from"./CHeaderBar-b2149a61.js";import{_ as m}from"./CButton-9a1b4a0a.js";import{_ as J}from"./CTable-69f0bf54.js";import{s as U}from"./filterSituacion-140d3b27.js";import"./CChartDonutSection-8f8edfee.js";const z={class:"content-licencia-header"},G={class:"selected-options"},K={key:0,class:"c-option-volver"},O={class:"table-section-principal"},Q={class:"content__section"},r=3,w=29,se={__name:"licencias",setup(W){const i=U(),s=n({id:15,description:"Región Metropolitana de Santiago"}),d=n(),c=n(!1),p=n(0),u=n(),_=n("Estado situación carcelaria / Licencias del personal"),y=n([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenseTotal",description:"Totales"},{rowReference:"porcentajeLicencia",description:"% Licencias"}]),v=n([]),b=()=>{F.push("/situacionCarcelaria")},h=e=>e?`${Math.round(e*100)/100} %`:"0 %",f=async()=>{try{if(s.value){const e=await L(),a=await k(e);v.value=a.map(t=>{const R=i.listadoCarceles.find(S=>S.id==t.carcelId);t.carcel=R.description,t.tieneLicencia=t.licenseActiveTotal,t.noLicenciaVigente=t.licenseDisabledTotal,t.licenseTotal=t.licenseActiveTotal+t.licenseDisabledTotal;const I=t.tieneLicencia/t.licenseTotal*100;return t.porcentajeLicencia=h(I),t})}else v.value=[]}catch(e){console.log(e)}},L=async()=>{var a,t;let e={categoryId:r,historySubCategoryId:w,lastPeriod:!0};return u.value||(u.value=await x(e)),e={categoryId:r,historySubCategoryId:w,historyId:u.value.id,embedLicenses:!0},s.value?e.regionId=(a=s.value)!=null&&a.id?s.value.id:s.value:(t=i==null?void 0:i.regionSelected)!=null&&t.id&&(e.regionId=i.regionSelected.id),p.value&&(e.carcelId=p.value),await C(),e},C=async()=>{if(!i.listadoCarceles.length){const e={regionId:i.regionSelected.id};let a=await E(e);i.setCarcelesList(a)}},V=async e=>{if(!i.listadoRegiones.length>0){let a=await A();d.value=a,i.setRegionesList(a)}else d.value=i.listadoRegiones};return T(async()=>{c.value=!0,s.value=i.regionSelected,await V(),await f(),c.value=!1}),(e,a)=>(g(),D(B,{class:"contenido-licencia"},{default:$(()=>[l("div",z,[o(q,{title:_.value,"section-value":r},null,8,["title"]),o(j,{"active-spin":c.value},null,8,["active-spin"]),l("div",G,[o(M,{class:"select-region",options:d.value,modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=t=>s.value=t)},null,8,["options","modelValue"]),o(m,{class:"btn-search",title:"",onExecuteAction:f})]),!c.value&&e.topPosition!==0?(g(),N("div",K,[o(m,{class:"btn-volver",title:"Volver",onExecuteAction:b,disabled:e.blockButton},null,8,["disabled"])])):P("",!0)]),l("div",O,[o(H,{class:"subsection-licencias",title:_.value,"section-value":r,pointValue:e.pointCalculated,pointTitle:"Dotación efectiva del personal",pointSubtitle:""},null,8,["title","pointValue"]),l("div",Q,[o(J,{columns:y.value,rows:v.value},null,8,["columns","rows"])])])]),_:1}))}};export{se as default};
