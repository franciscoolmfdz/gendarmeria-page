import{g as t,h as w,o as L,f as R,j as u,_ as h,I as T,G as V,m as s,b as o,z as y}from"./index-dd4685c7.js";import{_ as D}from"./CHeaderBar-a2769ce8.js";import{_ as $}from"./CCard-68034043.js";import{_ as b}from"./CButton-4bbc2b87.js";import{_ as x}from"./CTable-1200ac42.js";import{s as B}from"./filterSituacion-f8d6646a.js";const j={class:"selected-options"},A={class:"information__section"},E=o("span",{class:"card-title"},"Dotación efectiva del personal",-1),I=o("span",null," Dotación de licencias efectiva del personal, en base a la ubicación física y desempeño ",-1),M={class:"content__section"},S=3,U={__name:"licencias",setup(k){const r=B(),i=t({id:15,description:"Región Metropolitana de Santiago"}),_=t(),p=t("Estado situación carcelaria / Licencias del personal"),f=t([{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenciaTotal",description:"Totales"},{rowReference:"porcentajeLicencia",description:"% Licencias"}]),c=t([]),m=n=>n?`${Math.round(n*100)/100} %`:"0 %",d=async()=>{var n;try{if(i.value){const e={regionId:((n=i.value)==null?void 0:n.id)??i.value},l=await T(e);c.value=l.map(a=>{a.tieneLicencia=a.licenseActiveTotal,a.noLicenciaVigente=a.licenseDisabledTotal,a.licenciaTotal=a.licenseTotal;const g=a.licenseActiveTotal/a.licenseTotal*100;return a.porcentajeLicencia=m(g),a})}else c.value=[]}catch(e){console.log(e)}},v=async n=>{if(!r.listadoRegiones.length>0){let e=await V();_.value=e,r.setRegionesList(e)}};return w(async()=>{await v(),await d()}),(n,e)=>(L(),R(h,null,{default:u(()=>[s(D,{title:p.value,"section-value":S},null,8,["title"]),o("div",j,[s(y,{options:_.value,modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l)},null,8,["options","modelValue"]),s(b,{title:"Buscar licencias",onExecuteAction:d})]),o("div",A,[s($,{class:"card-information"},{default:u(()=>[E,I]),_:1})]),o("div",M,[s(x,{columns:f.value,rows:c.value},null,8,["columns","rows"])])]),_:1}))}};export{U as default};
