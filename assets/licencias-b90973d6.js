import{g as n,h as $,o as y,f as x,j as B,_ as k,I as E,l as A,C as P,q as F,b as r,m as l,n as M,x as N,c as j,a as H,e as q}from"./index-3287c5b5.js";import{_ as U}from"./subSideNav-e61a18ab.js";import{_ as z}from"./CHeaderBar-934324ac.js";import{_ as w}from"./CButton-f1a1bfa9.js";import{_ as G}from"./CTable-e27a5447.js";import{s as J}from"./filterSituacion-5535d006.js";import"./CChartDonutSection-726ede49.js";const K={class:"content-licencia-header"},O={class:"selected-options"},Q={key:0,class:"c-option-volver"},W={class:"table-section-principal"},X={class:"content__section"},u=3,b=29,oe={__name:"licencias",setup(Y){const a=J(),s=n({id:15,description:"Región Metropolitana de Santiago"}),d=n(),c=n(!1),v=n(0),g=n(0),p=n(),f=n("Estado situación carcelaria / Licencias del personal"),C=n([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenseTotal",description:"Totales"}]),_=n([]),V=()=>{q.push("/situacionCarcelaria")},L=e=>e?`${Math.round(e*100)/100} %`:"0 %",m=async()=>{try{if(s.value){const e=await I(),t=await E(e);let o=0;_.value=t.map(i=>{const T=a.listadoCarceles.find(D=>D.id==i.carcelId);i.carcel=T.description,i.tieneLicencia=i.licenseActiveTotal,i.noLicenciaVigente=i.licenseDisabledTotal,i.licenseTotal=i.licenseActiveTotal+i.licenseDisabledTotal;const h=i.tieneLicencia/i.licenseTotal*100;return i.porcentajeLicencia=L(h),o+=h,i}),v.value=(o/t.length).toFixed(1),console.log(v,o,t.length)}else _.value=[]}catch(e){console.log(e)}},I=async()=>{var t,o;let e={categoryId:u,historySubCategoryId:b,lastPeriod:!0};return p.value||(p.value=await A(e)),e={categoryId:u,historySubCategoryId:b,historyId:p.value.id,embedLicenses:!0},s.value?e.regionId=(t=s.value)!=null&&t.id?s.value.id:s.value:(o=a==null?void 0:a.regionSelected)!=null&&o.id&&(e.regionId=a.regionSelected.id,s.value=a.regionSelected),g.value&&(e.carcelId=g.value),await S(),e},S=async()=>{if(!a.listadoCarceles.length){const e={regionId:a.regionSelected.id};let t=await P(e);a.setCarcelesList(t)}},R=async e=>{if(!a.listadoRegiones.length>0){let t=await F();d.value=t,a.setRegionesList(t)}else d.value=a.listadoRegiones};return $(async()=>{c.value=!0,s.value=a.regionSelected,await R(),await m(),c.value=!1}),(e,t)=>(y(),x(k,{class:"contenido-licencia"},{default:B(()=>[r("div",K,[l(z,{title:f.value,"section-value":u},null,8,["title"]),l(M,{"active-spin":c.value},null,8,["active-spin"]),r("div",O,[l(N,{class:"select-region",options:d.value,modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o)},null,8,["options","modelValue"]),l(w,{class:"btn-search",title:"",onExecuteAction:m})]),!c.value&&e.topPosition!==0?(y(),j("div",Q,[l(w,{class:"btn-volver",title:"Volver",onExecuteAction:V,disabled:e.blockButton},null,8,["disabled"])])):H("",!0)]),r("div",W,[l(U,{class:"subsection-licencias",title:f.value,"section-value":u,"point-type":2,pointValue:v.value,"point-is-percent":!0,pointTitle:"Dotación efectiva del personal",pointSubtitle:""},null,8,["title","pointValue"]),r("div",X,[l(G,{columns:C.value,rows:_.value},null,8,["columns","rows"])])])]),_:1}))}};export{oe as default};
