import{g as i,h as w,o as L,f as R,j as u,_ as h,I as T,E as V,m as s,b as o,A as y}from"./index-cf584654.js";import{_ as D}from"./CHeaderBar-ad209272.js";import{_ as $}from"./CCard-bf1f3c07.js";import{_ as b}from"./CButton-014b4ef1.js";import{_ as x}from"./CTable-988382c0.js";import{s as A}from"./filterSituacion-a73346f1.js";const E={class:"selected-options"},S={class:"information__section"},j=o("span",{class:"card-title"},"Dotación efectiva del personal",-1),B=o("span",null," Dotación de licencias efectiva del personal, en base a la ubicación física y desempeño ",-1),I={class:"content__section"},M=3,z={__name:"licencias",setup(k){const c=A(),t=i({id:15,description:"Región Metropolitana de Santiago"}),d=i(),p=i("Estado situación carcelaria / Licencias del personal"),f=i([{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"tieneLicencia",description:"Licencia vigente"},{rowReference:"noLicenciaVigente",description:"Sin licencia vigente"},{rowReference:"licenciaTotal",description:"Totales"},{rowReference:"porcentajeLicencia",description:"% Licencias"}]),l=i([]),m=n=>n?`${Math.round(n*100)/100} %`:"0 %",_=async()=>{var n;try{if(t.value){const e={regionId:((n=t.value)==null?void 0:n.id)??t.value},r=await T(e);l.value=r.map(a=>{a.tieneLicencia=a.licenseActiveTotal,a.noLicenciaVigente=a.licenseDisabledTotal,a.licenciaTotal=a.licenseTotal;const g=a.licenseActiveTotal/a.licenseTotal*100;return a.porcentajeLicencia=m(g),a})}else l.value=[]}catch(e){console.log(e)}},v=async n=>{if(!c.listadoRegiones.length>0){let e=await V();d.value=e,c.setRegionesList(e)}};return w(async()=>{t.value=c.regionSelected,await v(),await _()}),(n,e)=>(L(),R(h,{class:"contenido-licencia"},{default:u(()=>[s(D,{title:p.value,"section-value":M},null,8,["title"]),o("div",E,[s(y,{class:"select-region",options:d.value,modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value=r)},null,8,["options","modelValue"]),s(b,{class:"btn-search",title:"",onExecuteAction:_})]),o("div",S,[s($,{class:"card-information"},{default:u(()=>[j,B]),_:1})]),o("div",I,[s(x,{columns:f.value,rows:l.value},null,8,["columns","rows"])])]),_:1}))}};export{z as default};
