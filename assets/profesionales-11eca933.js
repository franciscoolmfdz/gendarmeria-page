import{u as x,g as o,h as B,o as y,f as E,j as f,_ as k,q as H,l as w,b as n,m as t,n as M,x as j,c as A,a as F,e as L,C as N}from"./index-4db8e7f1.js";import{_ as q}from"./subSideNav-ecbc9dc1.js";import{_ as U}from"./CHeaderBar-c13a152f.js";import{a as b}from"./CChartDonutSection-e923d460.js";import{_ as C}from"./CButton-82bc19c5.js";import{_ as I}from"./CTable-7e0e18b1.js";import{s as z}from"./filterSituacion-e1949475.js";const G={class:"content-header-profesionales"},J={class:"selected-options"},K={key:0,class:"c-option-volver"},O={class:"table-section-principal"},Q={class:"table-section"},W={class:"content__section"},X=n("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),Y={class:"content__section"},Z=n("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),r=3,R=28,ce={__name:"profesionales",setup(ee){x();const s=z(),i=o({id:15,description:"Región Metropolitana de Santiago"});o(null);const v=o(null),d=o(0),u=o([]),m=o("Estado situación carcelaria / Personal de reinserción"),g=o([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"},{rowReference:"profesionalTotal",description:"Total"}]),p=o([]),_=o([]),S=()=>{L.push("/situacionCarcelaria")},D=async e=>{if(!s.listadoRegiones.length>0){let a=await H();u.value=a,s.setRegionesList(a)}else u.value=s.listadoRegiones},V=async()=>{var a,l;let e={categoryId:r,historySubCategoryId:R,lastPeriod:!0};return d.value||(d.value=await w(e)),e={categoryId:r,historySubCategoryId:R,historyId:d.value.id,embedProfesionals:!0},i.value?e.regionId=(a=i.value)!=null&&a.id?i.value.id:i.value:(l=s==null?void 0:s.regionSelected)!=null&&l.id&&(e.regionId=s.regionSelected.id),v.value&&(e.carcelId=v.value),await $(),e},h=async()=>{try{if(i.value){const e=await V();let l=(await w(e)).items.map(c=>{const P=s.listadoCarceles.find(T=>T.id==c.carcelId);return c.carcel=P.description,c});p.value=l.filter(c=>c.profesionalTypeId===1),_.value=l.filter(c=>c.profesionalTypeId===2)}else p.value=[],_.value=[]}catch(e){console.log(e)}},$=async()=>{if(!s.listadoCarceles.length){let e=await N();s.setCarcelesList(e)}};return B(async()=>{i.value=s.regionSelected,await D(),await h()}),(e,a)=>(y(),E(k,{class:"contenido-profesionales"},{default:f(()=>[n("div",G,[t(U,{title:m.value,"section-value":r},null,8,["title"]),t(M,{"active-spin":e.activeSpin},null,8,["active-spin"]),n("div",J,[t(j,{class:"select-region",options:u.value,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l)},null,8,["options","modelValue"]),t(C,{class:"btn-search",title:"",onExecuteAction:h})]),!e.activeSpin&&e.topPosition!==0?(y(),A("div",K,[t(C,{class:"btn-volver",title:"Volver",onExecuteAction:S})])):F("",!0)]),n("div",O,[t(q,{class:"subsection-profesional",title:m.value,"section-value":r,pointValue:"",pointTitle:"Personal de reinserción",pointSubtitle:""},null,8,["title"]),n("div",Q,[n("div",W,[t(b,{class:"card-information"},{default:f(()=>[X]),_:1}),t(I,{columns:g.value,rows:p.value},null,8,["columns","rows"])]),n("div",Y,[t(b,{class:"card-information"},{default:f(()=>[Z]),_:1}),t(I,{columns:g.value,rows:_.value},null,8,["columns","rows"])])])])]),_:1}))}};export{ce as default};