import{y as m,g as r,h as E,o as V,f as S,j as A,_ as k,q as B,C as U,b as d,m as a,n as x,x as v,c as D,a as L,e as N}from"./index-4db8e7f1.js";import{_ as q}from"./CHeaderBar-c13a152f.js";import{_ as G}from"./subSideNav-ecbc9dc1.js";import{_ as w}from"./CButton-82bc19c5.js";import{_ as M}from"./CTable-7e0e18b1.js";import{s as P}from"./filterSituacion-e1949475.js";import"./CChartDonutSection-e923d460.js";const C="/dmm/dimension-history-aggression",j=async(e,l)=>{if(e!=null&&e.id){let c=`${C}/${e.id}`;return m(c,"GET",null,l)}let i=C,s=null;return e!=null&&e.regionId&&(s?s=`${s}&regionId=${e.regionId}`:s=`regionId=${e.regionId}`),e!=null&&e.carcelId&&(s?s=`${s}&carcelId=${e.carcelId}`:s=`carcelId=${e.carcelId}`),e!=null&&e.aggresionTypeId&&(s?s=`${s}&aggresionTypeId=${e.aggresionTypeId}`:s=`aggresionTypeId=${e.aggresionTypeId}`),e!=null&&e.year&&(s?s=`${s}&year=${e.year}`:s=`year=${e.year}`),s&&(i=`${i}?${s}`),m(i,"GET",null,l)},F="/dmm/aggression-types",z=async(e,l)=>m(F,"GET",null,l);const H={class:"content-header-eventos"},J={class:"selected-options"},K={key:0,class:"c-option-volver"},O={class:"table-section-principal"},Q={class:"content__section"},T=3,ie={__name:"registroViolencia",setup(e){const l=P(),i=r({id:15,description:"Región Metropolitana de Santiago"}),s=r([]),c=r({id:16,description:"CCP Colina 1"}),f=r([]),u=r({id:1,description:"N° de eventos de riñas en el período."}),_=r([]),y=r("Estado situación carcelaria / Registro de eventos"),R=r([{rowReference:"year",description:"Año"},{rowReference:"month",description:"Mes"},{rowReference:"gender",description:"Sexo"},{rowReference:"quantity",description:"Cantidad"}]),g=r([]),b=()=>{N.push("/situacionCarcelaria")},h=async n=>{if(!l.listadoRegiones.length>0){let o=await B();s.value=o,l.setRegionesList(o)}else s.value=l.listadoRegiones},$=async()=>{const n={regionId:i.value};f.value=await U(n)},I=async()=>{var n,o,t;try{if(i.value){const p={regionId:((n=i.value)==null?void 0:n.id)??i.value,carcelId:((o=c.value)==null?void 0:o.id)??c.value,aggresionTypeId:((t=u.value)==null?void 0:t.id)??u.value};g.value=await j(p)}else g.value=[]}catch(p){console.log(p)}};return E(async()=>{i.value=l.regionSelected.id,_.value=await z(),await h(),await $(),await I()}),(n,o)=>(V(),S(k,{class:"contenido-eventos"},{default:A(()=>[d("div",H,[a(q,{title:y.value,"section-value":T},null,8,["title"]),a(x,{"active-spin":n.activeSpin},null,8,["active-spin"]),d("div",J,[a(v,{class:"select-region",options:s.value,modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=t=>i.value=t),onChangeValue:o[1]||(o[1]=t=>$())},null,8,["options","modelValue"]),a(v,{class:"select-carcel",options:f.value,modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=t=>c.value=t)},null,8,["options","modelValue"]),a(v,{class:"select-question",options:_.value,modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=t=>u.value=t)},null,8,["options","modelValue"]),a(w,{class:"btn-search",title:"",onExecuteAction:I})]),!n.activeSpin&&n.topPosition!==0?(V(),D("div",K,[a(w,{class:"btn-volver",title:"Volver",onExecuteAction:b,disabled:n.blockButton},null,8,["disabled"])])):L("",!0)]),d("div",O,[a(G,{class:"subsection-eventos",title:y.value,"section-value":T,pointValue:n.pointCalculated,pointTitle:"Registro de eventos",pointSubtitle:""},null,8,["title","pointValue"]),d("div",Q,[a(M,{columns:R.value,rows:g.value},null,8,["columns","rows"])])])]),_:1}))}};export{ie as default};