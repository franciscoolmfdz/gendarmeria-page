import{u as H,g as s,h as q,o as p,f as C,j as U,_ as z,q as G,l as J,y as K,x as O,b as y,m as c,n as Q,c as S,C as W,a as b,e as X}from"./index-52e225e7.js";import{_ as Y}from"./subSideNav-1f575ce5.js";import{_ as Z}from"./CHeaderBar-91e42f1f.js";import{_ as D}from"./CButton-72cce2bd.js";import{_ as ee}from"./CTable-6d2470ca.js";import{s as te}from"./filterSituacion-b378589b.js";import"./CChartDonutSection-2123addb.js";const ae={class:"content-licencia-header"},ie={key:0,class:"selected-options"},se={key:1,class:"c-option-volver"},le={class:"table-section-principal"},ne={class:"content__section"},_=3,P=29,fe={__name:"licencias",setup(oe){const h=H(),n=te(),l=s({id:15,description:"Región Metropolitana de Santiago"}),r=s(null),u=s(null),f=s([]),w=s([]),o=s(!1),I=s(0),g=s(),T=s("Estado situación carcelaria / Porcentaje de licencias"),$=s([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenseTotal",description:"Totales"}]),d=s([]),k=()=>{X.push("/situacionCarcelaria")},x=e=>e?`${Math.round(e*100)/100} %`:"0 %",V=async()=>{try{if(l.value){const e=await A(),t=await G(e);let i=0,v=0,m=0;d.value=t.map(a=>{const j=w.value.find(N=>N.id==a.carcelId);a.carcel=j.description,a.tieneLicencia=a.licenseActiveTotal,v+=a.licenseActiveTotal,m+=a.licenseDisabledTotal,a.noLicenciaVigente=a.licenseDisabledTotal,a.licenseTotal=a.licenseActiveTotal+a.licenseDisabledTotal;const R=a.tieneLicencia/a.licenseTotal*100;return a.porcentajeLicencia=x(R),i+=R,a});const L=v+m;d.value.push({carcel:{class:"total",data:"Total"},tieneLicencia:{data:v,class:"total"},noLicenciaVigente:{data:m,class:"total"},licenseTotal:{data:L,class:"total"}});let M=v/L;I.value=B(M*100,1)}else d.value=[]}catch(e){console.log(e)}},B=(e,t)=>{const i=Math.pow(10,t||0);return Math.round(e*i)/i},A=async()=>{var t,i;let e={categoryId:_,historySubCategoryId:P,lastPeriod:!0};return await E(),g.value||(g.value=await J(e)),e={categoryId:_,historySubCategoryId:P,historyId:g.value.id,embedLicenses:!0},l.value?e.regionId=(t=l.value)!=null&&t.id?l.value.id:l.value:(i=n==null?void 0:n.regionSelected)!=null&&i.id&&(e.regionId=n.regionSelected.id,l.value=n.regionSelected),r.value&&(e.regionId=r.value),u.value&&(e.carcelId=u.value),e},E=async()=>{const e={regionId:l.value.id};let t=await K(e);w.value=t},F=async e=>{if(!n.listadoRegiones.length>0){let t=await O();f.value=t,n.setRegionesList(t)}else f.value=n.listadoRegiones};return q(async()=>{o.value=!0;const e=h.user.restrictions.find(i=>i.typeId===2),t=h.user.restrictions.find(i=>i.typeId===3);e?(r.value=parseInt(e.restriction),l.value=n.regionSelected.id):t?u.value=parseInt(t.restriction):(u.value=null,r.value=null),await F(),await V(),o.value=!1}),(e,t)=>(p(),C(z,{class:"contenido-licencia"},{default:U(()=>[y("div",ae,[c(Z,{title:T.value,"section-value":_},null,8,["title"]),c(Q,{"active-spin":o.value},null,8,["active-spin"]),!o.value&&!u.value?(p(),S("div",ie,[o.value?b("",!0):(p(),C(W,{key:0,class:"select-region",options:f.value,modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=i=>l.value=i),disabled:r.value},null,8,["options","modelValue","disabled"])),c(D,{class:"btn-search",title:"",onExecuteAction:V})])):b("",!0),!o.value&&e.topPosition!==0?(p(),S("div",se,[c(D,{class:"btn-volver",title:"Volver",onExecuteAction:k,disabled:e.blockButton},null,8,["disabled"])])):b("",!0)]),y("div",le,[c(Y,{class:"subsection-licencias",title:T.value,"section-value":_,"point-type":2,pointValue:I.value,"point-is-percent":!0,pointTitle:"Porcentaje de licencias",pointSubtitle:""},null,8,["title","pointValue"]),y("div",ne,[c(ee,{columns:$.value,rows:d.value},null,8,["columns","rows"])])])]),_:1}))}};export{fe as default};
