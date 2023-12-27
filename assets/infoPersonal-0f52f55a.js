import{g as c,u as $,h as V,o as B,f as E,j as d,_ as H,l as N,m as a,b as t}from"./index-1c9b6d67.js";import{_ as T}from"./CHeaderBar-902e7fed.js";import{_ as j}from"./CFilterbar-5fa0829c.js";import{a as v}from"./CChartDonutSection-613d7e10.js";import{_ as k}from"./subSideNav-55c06948.js";import{_ as A}from"./CTable-a21e50a4.js";import"./CButton-03239594.js";const M={class:"chart-section-principal"},L=t("span",{class:"card-title"},"Preguntas",-1),Q=t("span",{class:"question--value"},"P1 ¿Cuántos años tiene actualmente?",-1),z=t("span",{class:"question--value"},"P2 Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),G=t("span",{class:"question--value"},"P2b ¿Recuerda el nombre de algún programa o Centro donde estuvo?",-1),J=t("span",{class:"question--value"},"P3 ¿Hasta qué curso llegó (en la calle)?",-1),K=t("span",{class:"question--value"},"P4 ¿Es chileno?",-1),O=t("span",{class:"question--value"},"P5 Antes de estar en esta cárcel, ¿había estado preso(a)? (como adulto)",-1),U=t("span",{class:"question--value"},"P6 ¿Cuánto tiempo lleva en esta cárcel?",-1),W=t("span",{class:"question--value"},"P7 ¿Qué año saldría en libertad (cumplido)?",-1),X={class:"content__section"},m=7,re={__name:"infoPersonal",setup(Y){const h=c(""),i=$(),p=c("Dimensión trayectoria"),I=c([{rowReference:"sex",description:"Sexo"},{rowReference:"age",description:"P1"},{rowReference:"formacionCentro",description:"P2"},{rowReference:"programaCentro",description:"P2B"},{rowReference:"nivelInstruccion",description:"P3"},{rowReference:"nacionalidadChilena",description:"P4"},{rowReference:"reincidensia",description:"P5"},{rowReference:"tiempoEncarcelado",description:"P6"},{rowReference:"libertadFecha",description:"P7"}]),r=c([]),g=s=>s?"Hombre":"Mujer",b=s=>{switch(s){case 0:return"sin estudios formales";case 1:return"primero básico";case 2:return"segundo básico";case 3:return"tercero básico";case 4:return"cuarto básico";case 5:case 6:return"sexto básico";case 7:return"séptimo básico";case 8:return"octavo básico";case 9:return"I medio";case 10:return"II medio";case 11:return"III medio";case 12:return"IV medio completo";case 13:return"superior incompleta";case 14:return"superior completa";default:return""}},l=s=>s===1?"Si":s===-1?"":"No",P=s=>{switch(s){case 1:return"sin estudios formales";case 2:return"entre 6 meses y 1 año";case 3:return"[3]	entre 1 y 2 años";case 4:return"más de 2 años";default:return""}},w=s=>{switch(s){case 1:return"2022";case 2:return"2023";case 3:return"2024";case 4:return"2025 o más";default:return""}},_=async()=>{var s;try{const n=((s=i==null?void 0:i.penitenciaria)==null?void 0:s.id)??null,f=i.historyId;if(f&&n){const C={historyId:f.value,carcelId:n,categoryId:7,subCategoryId:23,embedDetail:!0};let o=await N(C);r.value=[];const u=o.items.filter(e=>e.dimensionId===124),y=o.items.filter(e=>e.dimensionId===125),x=o.items.filter(e=>e.dimensionId===126),R=o.items.filter(e=>e.dimensionId===127),q=o.items.filter(e=>e.dimensionId===128),D=o.items.filter(e=>e.dimensionId===129),S=o.items.filter(e=>e.dimensionId===130),Z=o.items.filter(e=>e.dimensionId===131),F=o.items.filter(e=>e.dimensionId===132);for(let e=0;e<u.length;e++)r.value.push({sex:g(F[e].value),age:u[e].value>0?u[e].value:"",formacionCentro:l(y[e].value),programaCentro:"",nivelInstruccion:b(x[e].value),nacionalidadChilena:l(R[e].value),reincidensia:l(q[e].value),tiempoEncarcelado:P(D[e].value),libertadFecha:w(S[e].value)})}else r.value=[]}catch(n){console.log(n)}};return V(async()=>{await _()}),(s,n)=>(B(),E(H,null,{default:d(()=>[a(T,{title:p.value,"section-value":m},null,8,["title"]),a(j,{baseFilter:m,onExecuteAction:_}),t("div",M,[a(k,{class:"subsection-trayectoria",title:p.value,"section-value":m,pointValue:h.value,pointTitle:"FP 1 ¿Cuántos años tiene actualmente?",pointSubtitle:""},null,8,["title","pointValue"]),a(v,{class:"card-preguntas"},{default:d(()=>[L,Q,z,G,J]),_:1}),a(v,{class:"card-preguntas"},{default:d(()=>[K,O,U,W]),_:1})]),t("div",X,[a(A,{columns:I.value,rows:r.value},null,8,["columns","rows"])])]),_:1}))}};export{re as default};
