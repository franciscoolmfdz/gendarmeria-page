import{u as E,g as o,h as P,o as y,f as k,j as _,_ as x,q as H,l as w,b as n,m as t,n as M,x as j,c as A,a as F,e as L,C as N}from"./index-f4124e79.js";import{_ as q}from"./subSideNav-ba5cbd5b.js";import{_ as U}from"./CHeaderBar-e62534a5.js";import{a as b}from"./CChartDonutSection-564b2824.js";import{_ as C}from"./CButton-33aeb8f9.js";import{_ as I}from"./CTable-149f3711.js";import{s as z}from"./filterSituacion-7f8223e4.js";const G={class:"content-header-profesionales"},J={class:"selected-options"},K={key:0,class:"c-option-volver"},O={class:"table-section-principal"},Q={class:"table-section"},W={class:"content__section"},X=n("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),Y={class:"content__section"},Z=n("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),r=3,D=28,ce={__name:"profesionales",setup(ee){E();const s=z(),i=o({id:15,description:"Región Metropolitana de Santiago"});o(null);const v=o(null),d=o(0),u=o([]),m=o("Estado situación carcelaria / Personal areas de intervención"),g=o([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"},{rowReference:"profesionalTotal",description:"Total"}]),p=o([]),f=o([]),R=()=>{L.push("/situacionCarcelaria")},S=async e=>{if(!s.listadoRegiones.length>0){let a=await H();u.value=a,s.setRegionesList(a)}else u.value=s.listadoRegiones},V=async()=>{var a,l;let e={categoryId:r,historySubCategoryId:D,lastPeriod:!0};return d.value||(d.value=await w(e)),e={categoryId:r,historySubCategoryId:D,historyId:d.value.id,embedProfesionals:!0},i.value?e.regionId=(a=i.value)!=null&&a.id?i.value.id:i.value:(l=s==null?void 0:s.regionSelected)!=null&&l.id&&(e.regionId=s.regionSelected.id),v.value&&(e.carcelId=v.value),await $(),e},h=async()=>{try{if(i.value){const e=await V();let l=(await w(e)).items.map(c=>{const T=s.listadoCarceles.find(B=>B.id==c.carcelId);return c.carcel=T.description,c});p.value=l.filter(c=>c.profesionalTypeId===1),f.value=l.filter(c=>c.profesionalTypeId===2)}else p.value=[],f.value=[]}catch(e){console.log(e)}},$=async()=>{if(!s.listadoCarceles.length){let e=await N();s.setCarcelesList(e)}};return P(async()=>{i.value=s.regionSelected,await S(),await h()}),(e,a)=>(y(),k(x,{class:"contenido-profesionales"},{default:_(()=>[n("div",G,[t(U,{title:m.value,"section-value":r},null,8,["title"]),t(M,{"active-spin":e.activeSpin},null,8,["active-spin"]),n("div",J,[t(j,{class:"select-region",options:u.value,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l)},null,8,["options","modelValue"]),t(C,{class:"btn-search",title:"",onExecuteAction:h})]),!e.activeSpin&&e.topPosition!==0?(y(),A("div",K,[t(C,{class:"btn-volver",title:"Volver",onExecuteAction:R})])):F("",!0)]),n("div",O,[t(q,{class:"subsection-profesional",title:m.value,"section-value":r,pointValue:e.pointCalculated,pointTitle:"Dotación efectiva del personal areas de intervención",pointSubtitle:""},null,8,["title","pointValue"]),n("div",Q,[n("div",W,[t(b,{class:"card-information"},{default:_(()=>[X]),_:1}),t(I,{columns:g.value,rows:p.value},null,8,["columns","rows"])]),n("div",Y,[t(b,{class:"card-information"},{default:_(()=>[Z]),_:1}),t(I,{columns:g.value,rows:f.value},null,8,["columns","rows"])])])])]),_:1}))}};export{ce as default};
