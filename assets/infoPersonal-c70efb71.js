import{i as F,h as u,k as $,o as B,f as E,j as d,_ as H,g as n,b as t}from"./index-e11d2db0.js";import{_ as N}from"./CHeaderBar-7430ddcb.js";import{_ as k}from"./CFilterbar-bbe1765b.js";import{_ as f}from"./CCard-e78a7983.js";import{_ as V}from"./CTable-b8910b10.js";import{a as j}from"./dimensionHistory-30900885.js";import"./api-7944baea.js";const A={class:"information__section"},M=t("span",{class:"card-title"},"Preguntas",-1),T=t("span",{class:"question--value"},"P1 ¿Cuántos años tiene actualmente?",-1),L=t("span",{class:"question--value"},"P2 Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),Q=t("span",{class:"question--value"},"P2b ¿Recuerda el nombre de algún programa o Centro donde estuvo?",-1),z=t("span",{class:"question--value"},"P3 ¿Hasta qué curso llegó (en la calle)?",-1),G=t("span",{class:"question--value"},"P4 ¿Es chileno?",-1),J=t("span",{class:"question--value"},"P5 Antes de estar en esta cárcel, ¿había estado preso(a)? (como adulto)",-1),K=t("span",{class:"question--value"},"P6 ¿Cuánto tiempo lleva en esta cárcel?",-1),O=t("span",{class:"question--value"},"P7 ¿Qué año saldría en libertad (cumplido)?",-1),U={class:"content__section"},p=7,ne={__name:"infoPersonal",setup(W){const r=F(),v=u("Dimensión trayectoria"),h=u([{rowReference:"sex",description:"Sexo"},{rowReference:"age",description:"P1"},{rowReference:"formacionCentro",description:"P2"},{rowReference:"programaCentro",description:"P2B"},{rowReference:"nivelInstruccion",description:"P3"},{rowReference:"nacionalidadChilena",description:"P4"},{rowReference:"reincidensia",description:"P5"},{rowReference:"tiempoEncarcelado",description:"P6"},{rowReference:"libertadFecha",description:"P7"}]),i=u([]),I=s=>s?"Hombre":"Mujer",g=s=>{switch(s){case 0:return"sin estudios formales";case 1:return"primero básico";case 2:return"segundo básico";case 3:return"tercero básico";case 4:return"cuarto básico";case 5:case 6:return"sexto básico";case 7:return"séptimo básico";case 8:return"octavo básico";case 9:return"I medio";case 10:return"II medio";case 11:return"III medio";case 12:return"IV medio completo";case 13:return"superior incompleta";case 14:return"superior completa";default:return""}},c=s=>s===1?"Si":s===-1?"":"No",b=s=>{switch(s){case 1:return"sin estudios formales";case 2:return"entre 6 meses y 1 año";case 3:return"[3]	entre 1 y 2 años";case 4:return"más de 2 años";default:return""}},P=s=>{switch(s){case 1:return"2022";case 2:return"2023";case 3:return"2024";case 4:return"2025 o más";default:return""}},m=async()=>{var s;try{const a=((s=r==null?void 0:r.penitenciaria)==null?void 0:s.id)??null,_=r.historyId;if(_&&a){const w={historyId:_.value,carcelId:a,categoryId:7,subCategoryId:23,embedDetail:!0};let o=await j(w);i.value=[];const l=o.items.filter(e=>e.dimensionId===124),y=o.items.filter(e=>e.dimensionId===125),C=o.items.filter(e=>e.dimensionId===126),q=o.items.filter(e=>e.dimensionId===127),x=o.items.filter(e=>e.dimensionId===128),R=o.items.filter(e=>e.dimensionId===129),D=o.items.filter(e=>e.dimensionId===130),X=o.items.filter(e=>e.dimensionId===131),S=o.items.filter(e=>e.dimensionId===132);for(let e=0;e<l.length;e++)i.value.push({sex:I(S[e].value),age:l[e].value>0?l[e].value:"",formacionCentro:c(y[e].value),programaCentro:"",nivelInstruccion:g(C[e].value),nacionalidadChilena:c(q[e].value),reincidensia:c(x[e].value),tiempoEncarcelado:b(R[e].value),libertadFecha:P(D[e].value)})}else i.value=[]}catch(a){console.log(a)}};return $(async()=>{await m()}),(s,a)=>(B(),E(H,null,{default:d(()=>[n(N,{title:v.value,"section-value":p},null,8,["title"]),n(k,{baseFilter:p,onExecuteAction:m}),t("div",A,[n(f,{class:"card-information"},{default:d(()=>[M,T,L,Q]),_:1}),n(f,{class:"card-questions"},{default:d(()=>[z,G,J,K,O]),_:1})]),t("div",U,[n(V,{columns:h.value,rows:i.value},null,8,["columns","rows"])])]),_:1}))}};export{ne as default};
