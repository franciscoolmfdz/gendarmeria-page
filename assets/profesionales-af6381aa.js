import{u as A,g as s,h as L,o as T,f as N,j as v,_ as q,q as U,l as j,b as n,m as l,n as z,x as G,c as J,a as K,e as O,C as Q}from"./index-2677aad2.js";import{_ as W}from"./subSideNav-1ef977ec.js";import{_ as X}from"./CHeaderBar-6fbbd370.js";import{a as y}from"./CChartDonutSection-0687b7c0.js";import{_ as D}from"./CButton-4f402cad.js";import{_ as I}from"./CTable-28bf1a6b.js";import{s as Y}from"./filterSituacion-ff1458a2.js";const Z={class:"content-header-profesionales"},ee={class:"selected-options"},ae={key:0,class:"c-option-volver"},te={class:"table-section-principal"},oe={class:"table-section"},se={class:"content__section"},le=n("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),ie={class:"content__section"},ne=n("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),re={class:"content__section"},ce=n("span",{class:"card-title"},"Dotación efectiva Total",-1),m=3,S=28,be={__name:"profesionales",setup(ue){A();const i=Y(),c=s({id:15,description:"Región Metropolitana de Santiago"});s(null);const C=s(null),d=s([]),V=s([{rowReference:"totalProfesionalHombre",description:"Hombre"},{rowReference:"totalProfesionalMujer",description:"Mujer"},{rowReference:"total",description:"Total"}]),H=s(null),g=s(0),b=s([]),M=s("Estado situación carcelaria / Personal de reinserción"),P=s([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"}]),p=s([]),f=s([]),$=()=>{O.push("/situacionCarcelaria")},x=async e=>{if(!i.listadoRegiones.length>0){let r=await U();b.value=r,i.setRegionesList(r)}else b.value=i.listadoRegiones},B=async()=>{var r,u;let e={categoryId:m,historySubCategoryId:S,lastPeriod:!0};return g.value||(g.value=await j(e)),e={categoryId:m,historySubCategoryId:S,historyId:g.value.id,embedProfesionals:!0},c.value?e.regionId=(r=c.value)!=null&&r.id?c.value.id:c.value:(u=i==null?void 0:i.regionSelected)!=null&&u.id&&(e.regionId=i.regionSelected.id),H.value&&(e.carcelId=H.value),await E(),e},R=async()=>{try{if(c.value){const e=await B();let u=(await j(e)).items.map(a=>{const k=i.listadoCarceles.find(F=>F.id==a.carcelId);return a.carcel=k.description,a}),t=0,o=0,h=0,w=0,_=0;p.value=u.filter(a=>a.profesionalTypeId===1).map(a=>(t+=a.profesionalHombre,o+=a.profesionalMujer,a)),d.value.push({totalProfesionalHombre:t,totalProfesionalMujer:o,total:t+o}),p.value.push({id:999,carcel:{data:"Total",class:"total"},profesionalHombre:{data:t,class:"total"},profesionalMujer:{data:o,class:"total"},profesionalTypeId:1}),h+=t,w+=o,_+=t+o,t=0,o=0,f.value=u.filter(a=>a.profesionalTypeId===2).map(a=>(t+=a.profesionalHombre,o+=a.profesionalMujer,a)),h+=t,w+=o,_+=t+o,C.value=_,d.value.push({totalProfesionalHombre:t,totalProfesionalMujer:o,total:t+o}),d.value.push({totalProfesionalHombre:h,totalProfesionalMujer:w,total:_}),f.value.push({id:999,carcel:{data:"Total",class:"total"},profesionalHombre:{data:t,class:"total"},profesionalMujer:{data:o,class:"total"},profesionalTypeId:2})}else p.value=[],f.value=[]}catch(e){console.log(e)}},E=async()=>{if(!i.listadoCarceles.length){let e=await Q();i.setCarcelesList(e)}};return L(async()=>{c.value=i.regionSelected,await x(),await R()}),(e,r)=>(T(),N(q,{class:"contenido-profesionales"},{default:v(()=>[n("div",Z,[l(X,{title:M.value,"section-value":m},null,8,["title"]),l(z,{"active-spin":e.activeSpin},null,8,["active-spin"]),n("div",ee,[l(G,{class:"select-region",options:b.value,modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=u=>c.value=u)},null,8,["options","modelValue"]),l(D,{class:"btn-search",title:"",onExecuteAction:R})]),!e.activeSpin&&e.topPosition!==0?(T(),J("div",ae,[l(D,{class:"btn-volver",title:"Volver",onExecuteAction:$})])):K("",!0)]),n("div",te,[l(W,{class:"subsection-profesional",title:M.value,"section-value":m,pointValue:C.value,pointTitle:"Personal de reinserción",pointSubtitle:""},null,8,["title","pointValue"]),n("div",oe,[n("div",se,[l(y,{class:"card-information"},{default:v(()=>[le]),_:1}),l(I,{class:"table-psicologia",columns:P.value,rows:p.value},null,8,["columns","rows"])]),n("div",ie,[l(y,{class:"card-information"},{default:v(()=>[ne]),_:1}),l(I,{class:"table-asistente",columns:P.value,rows:f.value},null,8,["columns","rows"])]),n("div",re,[l(y,{class:"card-information"},{default:v(()=>[ce]),_:1}),l(I,{class:"table-asistente",columns:V.value,rows:d.value},null,8,["columns","rows"])])])])]),_:1}))}};export{be as default};
