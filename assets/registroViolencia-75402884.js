import{y,g as t,h as k,o as T,f as B,j as D,_ as U,q as x,C as L,b as g,m as a,n as N,x as f,c as G,a as P,e as F}from"./index-67eed0ab.js";import{_ as M}from"./CHeaderBar-d68a262d.js";import{_ as j}from"./subSideNav-5b9a9492.js";import{_ as h}from"./CButton-9e3ba2d4.js";import{_ as R}from"./CTable-0226543d.js";import{s as Y}from"./filterSituacion-32c57da3.js";import"./CChartDonutSection-5dbbc148.js";const b="/dmm/dimension-history-aggression",z=async(e,r)=>{if(e!=null&&e.id){let d=`${b}/${e.id}`;return y(d,"GET",null,r)}let l=b,s=null;return e!=null&&e.regionId&&(s?s=`${s}&regionId=${e.regionId}`:s=`regionId=${e.regionId}`),e!=null&&e.carcelId&&(s?s=`${s}&carcelId=${e.carcelId}`:s=`carcelId=${e.carcelId}`),e!=null&&e.aggresionTypeId&&(s?s=`${s}&aggresionTypeId=${e.aggresionTypeId}`:s=`aggresionTypeId=${e.aggresionTypeId}`),e!=null&&e.year&&(s?s=`${s}&year=${e.year}`:s=`year=${e.year}`),s&&(l=`${l}?${s}`),y(l,"GET",null,r)},H="/dmm/aggression-types",J=async(e,r)=>y(H,"GET",null,r);const K={class:"content-header-eventos"},O={class:"selected-options"},Q={key:0,class:"c-option-volver"},W={class:"table-section-principal"},X={class:"content__section"},Z={class:"content__section"},q=3,ae={__name:"registroViolencia",setup(e){const r=Y(),l=t({id:15,description:"Región Metropolitana de Santiago"}),s=t([]),d=t({id:16,description:"CCP Colina 1"}),_=t([]),p=t({id:1,description:"N° de eventos de riñas en el período."}),$=t([]),I=t("Estado situación carcelaria / Registro de eventos violentos"),V=t([{rowReference:"year",description:"Año"},{rowReference:"quantity",description:"Cantidad"}]),m=t(0),u=t([]),E=()=>{F.push("/situacionCarcelaria")},A=async i=>{if(!r.listadoRegiones.length>0){let o=await x();s.value=o,r.setRegionesList(o)}else s.value=r.listadoRegiones},w=async()=>{const i={regionId:l.value};_.value=await L(i)},S=i=>{u.value=[],m.value=0;let o=0,n=0;for(let v=0;v<i.length;v++){let c=i[v];m.value+=c.quantity,o||(o=c.year),c.year===o?n+=c.quantity:(u.value.push({year:o,quantity:n}),console.log(u),o=c.year,n=c.quantity)}u.value.push({year:o,quantity:n})},C=async()=>{var i,o,n;try{if(l.value){const v={regionId:((i=l.value)==null?void 0:i.id)??l.value,carcelId:((o=d.value)==null?void 0:o.id)??d.value,aggresionTypeId:((n=p.value)==null?void 0:n.id)??p.value},c=await z(v);S(c)}else u.value=[]}catch(v){console.log(v)}};return k(async()=>{l.value=r.regionSelected.id,$.value=await J(),await A(),await w(),await C()}),(i,o)=>(T(),B(U,{class:"contenido-eventos"},{default:D(()=>[g("div",K,[a(M,{title:I.value,"section-value":q},null,8,["title"]),a(N,{"active-spin":i.activeSpin},null,8,["active-spin"]),g("div",O,[a(f,{class:"select-region",options:s.value,modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),onChangeValue:o[1]||(o[1]=n=>w())},null,8,["options","modelValue"]),a(f,{class:"select-carcel",options:_.value,modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=n=>d.value=n)},null,8,["options","modelValue"]),a(f,{class:"select-question",options:$.value,modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=n=>p.value=n)},null,8,["options","modelValue"]),a(h,{class:"btn-search",title:"",onExecuteAction:C})]),!i.activeSpin&&i.topPosition!==0?(T(),G("div",Q,[a(h,{class:"btn-volver",title:"Volver",onExecuteAction:E,disabled:i.blockButton},null,8,["disabled"])])):P("",!0)]),g("div",W,[a(j,{class:"subsection-eventos",title:I.value,"section-value":q,pointValue:m.value,pointTitle:"Registro de eventos violentos",pointSubtitle:""},null,8,["title","pointValue"]),g("div",X,[a(R,{columns:V.value,rows:u.value},null,8,["columns","rows"])])]),g("div",Z,[a(R,{columns:V.value,rows:u.value},null,8,["columns","rows"])])]),_:1}))}};export{ae as default};
