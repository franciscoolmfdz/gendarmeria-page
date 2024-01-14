import{g as n,h as B,o as w,f as P,j as k,_ as A,q as E,l as j,y as N,x as F,b as u,m as l,n as M,C as H,c as q,a as U,e as z}from"./index-f9e34e91.js";import{_ as G}from"./subSideNav-3f124ec6.js";import{_ as J}from"./CHeaderBar-f9222f17.js";import{_ as T}from"./CButton-72e5be54.js";import{_ as K}from"./CTable-26524ad6.js";import{s as O}from"./filterSituacion-36c9e076.js";import"./CChartDonutSection-56b85ea0.js";const Q={class:"content-licencia-header"},W={class:"selected-options"},X={key:0,class:"c-option-volver"},Y={class:"table-section-principal"},Z={class:"content__section"},d=3,V=29,ce={__name:"licencias",setup(ee){const i=O(),s=n({id:15,description:"Región Metropolitana de Santiago"}),v=n(),c=n(!1),f=n(0),m=n(0),p=n(),y=n("Estado situación carcelaria / Porcentaje de licencias"),C=n([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenseTotal",description:"Totales"}]),r=n([]),L=()=>{z.push("/situacionCarcelaria")},S=e=>e?`${Math.round(e*100)/100} %`:"0 %",h=async()=>{try{if(s.value){const e=await I(),a=await E(e);let o=0,_=0,g=0;r.value=a.map(t=>{const $=i.listadoCarceles.find(x=>x.id==t.carcelId);t.carcel=$.description,t.tieneLicencia=t.licenseActiveTotal,_+=t.licenseActiveTotal,g+=t.licenseDisabledTotal,t.noLicenciaVigente=t.licenseDisabledTotal,t.licenseTotal=t.licenseActiveTotal+t.licenseDisabledTotal;const b=t.tieneLicencia/t.licenseTotal*100;return t.porcentajeLicencia=S(b),o+=b,t}),r.value.push({carcel:"Total",tieneLicencia:_,noLicenciaVigente:g,licenseTotal:_+g}),f.value=(o/a.length).toFixed(1)}else r.value=[]}catch(e){console.log(e)}},I=async()=>{var a,o;let e={categoryId:d,historySubCategoryId:V,lastPeriod:!0};return p.value||(p.value=await j(e)),e={categoryId:d,historySubCategoryId:V,historyId:p.value.id,embedLicenses:!0},s.value?e.regionId=(a=s.value)!=null&&a.id?s.value.id:s.value:(o=i==null?void 0:i.regionSelected)!=null&&o.id&&(e.regionId=i.regionSelected.id,s.value=i.regionSelected),m.value&&(e.carcelId=m.value),await R(),e},R=async()=>{if(!i.listadoCarceles.length){const e={regionId:i.regionSelected.id};let a=await N(e);i.setCarcelesList(a)}},D=async e=>{if(!i.listadoRegiones.length>0){let a=await F();v.value=a,i.setRegionesList(a)}else v.value=i.listadoRegiones};return B(async()=>{c.value=!0,s.value=i.regionSelected,await D(),await h(),c.value=!1}),(e,a)=>(w(),P(A,{class:"contenido-licencia"},{default:k(()=>[u("div",Q,[l(J,{title:y.value,"section-value":d},null,8,["title"]),l(M,{"active-spin":c.value},null,8,["active-spin"]),u("div",W,[l(H,{class:"select-region",options:v.value,modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=o=>s.value=o)},null,8,["options","modelValue"]),l(T,{class:"btn-search",title:"",onExecuteAction:h})]),!c.value&&e.topPosition!==0?(w(),q("div",X,[l(T,{class:"btn-volver",title:"Volver",onExecuteAction:L,disabled:e.blockButton},null,8,["disabled"])])):U("",!0)]),u("div",Y,[l(G,{class:"subsection-licencias",title:y.value,"section-value":d,"point-type":2,pointValue:f.value,"point-is-percent":!0,pointTitle:"Porcentaje de licencias",pointSubtitle:""},null,8,["title","pointValue"]),u("div",Z,[l(K,{columns:C.value,rows:r.value},null,8,["columns","rows"])])])]),_:1}))}};export{ce as default};
