import{r as d,d as $,o as H,e as N,w as u,_ as B,b as n,a as t}from"./index-5069a134.js";import{_ as P}from"./CHeaderBar-83c7dd95.js";import{u as V,_ as k,a as f}from"./CCard-056742a4.js";import{_ as A}from"./CTable-3d708b67.js";import{a as M}from"./dimensionHistory-eedeeb76.js";import"./api-5b4ce668.js";const T={class:"information__section"},j=t("span",{class:"card-title"},"Preguntas",-1),L=t("span",{class:"question--value"},"1.1 ¿Cuántos años tiene actualmente?",-1),Q=t("span",{class:"question--value"},"1.2 Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),z=t("span",{class:"question--value"},"1.3 ¿Recuerda el nombre de algún programa o Centro donde estuvo?",-1),G=t("span",{class:"question--value"},"1.4 ¿Hasta qué curso llegó (en la calle)?",-1),J=t("span",{class:"question--value"},"1.5 ¿Es chileno?",-1),K=t("span",{class:"question--value"},"1.6 Antes de estar en esta cárcel, ¿había estado preso(a)? (como adulto)",-1),O=t("span",{class:"question--value"},"1.7 ¿Cuánto tiempo lleva en esta cárcel?",-1),U=t("span",{class:"question--value"},"1.8 ¿Qué año saldría en libertad (cumplido)?",-1),W={class:"content__section"},p=1,ae={__name:"InfoPersonal",setup(X){const r=V(),v=d("Calidad de vida de los internos / Información personal"),h=d([{rowReference:"sex",description:"Sexo"},{rowReference:"age",description:"1.1 Edad"},{rowReference:"formacionCentro",description:"1.2"},{rowReference:"programaCentro",description:"1.3"},{rowReference:"nivelInstruccion",description:"1.4"},{rowReference:"nacionalidadChilena",description:"1.5"},{rowReference:"reincidensia",description:"1.6"},{rowReference:"tiempoEncarcelado",description:"1.7"},{rowReference:"libertadFecha",description:"1.8"}]),i=d([]),I=s=>s?"Hombre":"Mujer",g=s=>{switch(s){case 0:return"sin estudios formales";case 1:return"primero básico";case 2:return"segundo básico";case 3:return"tercero básico";case 4:return"cuarto básico";case 5:case 6:return"sexto básico";case 7:return"séptimo básico";case 8:return"octavo básico";case 9:return"I medio";case 10:return"II medio";case 11:return"III medio";case 12:return"IV medio completo";case 13:return"superior incompleta";case 14:return"superior completa";default:return""}},c=s=>s===1?"Si":s===-1?"":"No",b=s=>{switch(s){case 1:return"sin estudios formales";case 2:return"entre 6 meses y 1 año";case 3:return"[3]	entre 1 y 2 años";case 4:return"más de 2 años";default:return""}},w=s=>{switch(s){case 1:return"2022";case 2:return"2023";case 3:return"2024";case 4:return"2025 o más";default:return""}},m=async()=>{var s;try{const a=((s=r==null?void 0:r.penitenciaria)==null?void 0:s.id)??null,_=r.historyId;if(_&&a){const C={historyId:_.value,carcelId:a,categoryId:1,subCategoryId:1,embedDetail:!0};let o=await M(C);i.value=[];const l=o.items.filter(e=>e.dimensionId===1),y=o.items.filter(e=>e.dimensionId===2),q=o.items.filter(e=>e.dimensionId===3),x=o.items.filter(e=>e.dimensionId===4),R=o.items.filter(e=>e.dimensionId===5),D=o.items.filter(e=>e.dimensionId===6),S=o.items.filter(e=>e.dimensionId===7),E=o.items.filter(e=>e.dimensionId===8),F=o.items.filter(e=>e.dimensionId===56);for(let e=0;e<l.length;e++)i.value.push({sex:I(F[e].value),age:l[e].value>0?l[e].value:"",formacionCentro:c(y[e].value),programaCentro:c(q[e].value),nivelInstruccion:g(x[e].value),nacionalidadChilena:c(R[e].value),reincidensia:c(D[e].value),tiempoEncarcelado:b(S[e].value),libertadFecha:w(E[e].value)})}else i.value=[]}catch(a){console.log(a)}};return $(async()=>{await m()}),(s,a)=>(H(),N(B,null,{default:u(()=>[n(P,{title:v.value,"section-value":p},null,8,["title"]),n(k,{baseFilter:p,onExecuteAction:m}),t("div",T,[n(f,{class:"card-information"},{default:u(()=>[j,L,Q,z]),_:1}),n(f,{class:"card-questions"},{default:u(()=>[G,J,K,O,U]),_:1})]),t("div",W,[n(A,{columns:h.value,rows:i.value},null,8,["columns","rows"])])]),_:1}))}};export{ae as default};
