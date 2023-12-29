import{g as s,h as $,o as w,f as x,j as B,_ as k,I as E,l as A,C as P,q as j,b as r,m as c,n as F,x as M,c as N,a as H,e as q}from"./index-106b661f.js";import{_ as U}from"./subSideNav-74b06d6b.js";import{_ as z}from"./CHeaderBar-ccd49ff3.js";import{_ as y}from"./CButton-2aa861ab.js";import{_ as G}from"./CTable-591f28f0.js";import{s as J}from"./filterSituacion-47aaad71.js";import"./CChartDonutSection-3f16d68f.js";const K={class:"content-licencia-header"},O={class:"selected-options"},Q={key:0,class:"c-option-volver"},W={class:"table-section-principal"},X={class:"content__section"},u=3,b=29,oe={__name:"licencias",setup(Y){const i=J(),n=s({id:15,description:"Región Metropolitana de Santiago"}),d=s(),l=s(!1),p=s(0),f=s(0),v=s(),g=s("Estado situación carcelaria / Licencias del personal"),L=s([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenseTotal",description:"Totales"},{rowReference:"porcentajeLicencia",description:"% Licencias"}]),_=s([]),C=()=>{q.push("/situacionCarcelaria")},V=e=>e?`${Math.round(e*100)/100} %`:"0 %",m=async()=>{try{if(n.value){const e=await I(),t=await E(e);let o=0;_.value=t.map(a=>{const T=i.listadoCarceles.find(D=>D.id==a.carcelId);a.carcel=T.description,a.tieneLicencia=a.licenseActiveTotal,a.noLicenciaVigente=a.licenseDisabledTotal,a.licenseTotal=a.licenseActiveTotal+a.licenseDisabledTotal;const h=a.tieneLicencia/a.licenseTotal*100;return a.porcentajeLicencia=V(h),o+=h,a}),p.value=(o/t.length).toFixed(1),console.log(p,o,t.length)}else _.value=[]}catch(e){console.log(e)}},I=async()=>{var t,o;let e={categoryId:u,historySubCategoryId:b,lastPeriod:!0};return v.value||(v.value=await A(e)),e={categoryId:u,historySubCategoryId:b,historyId:v.value.id,embedLicenses:!0},n.value?e.regionId=(t=n.value)!=null&&t.id?n.value.id:n.value:(o=i==null?void 0:i.regionSelected)!=null&&o.id&&(e.regionId=i.regionSelected.id),f.value&&(e.carcelId=f.value),await R(),e},R=async()=>{if(!i.listadoCarceles.length){const e={regionId:i.regionSelected.id};let t=await P(e);i.setCarcelesList(t)}},S=async e=>{if(!i.listadoRegiones.length>0){let t=await j();d.value=t,i.setRegionesList(t)}else d.value=i.listadoRegiones};return $(async()=>{l.value=!0,n.value=i.regionSelected,await S(),await m(),l.value=!1}),(e,t)=>(w(),x(k,{class:"contenido-licencia"},{default:B(()=>[r("div",K,[c(z,{title:g.value,"section-value":u},null,8,["title"]),c(F,{"active-spin":l.value},null,8,["active-spin"]),r("div",O,[c(M,{class:"select-region",options:d.value,modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o)},null,8,["options","modelValue"]),c(y,{class:"btn-search",title:"",onExecuteAction:m})]),!l.value&&e.topPosition!==0?(w(),N("div",Q,[c(y,{class:"btn-volver",title:"Volver",onExecuteAction:C,disabled:e.blockButton},null,8,["disabled"])])):H("",!0)]),r("div",W,[c(U,{class:"subsection-licencias",title:g.value,"section-value":u,"point-type":2,pointValue:p.value,"point-is-percent":!0,pointTitle:"Dotación efectiva del personal",pointSubtitle:""},null,8,["title","pointValue"]),r("div",X,[c(G,{columns:L.value,rows:_.value},null,8,["columns","rows"])])])]),_:1}))}};export{oe as default};