import{_ as F}from"./subSideNav-b11c4333.js";import{u as V,g as i,h as H,o as M,f as N,j as d,_ as B,l as P,m as n,b as t}from"./index-2e2a9dba.js";import{_ as T}from"./CHeaderBar-37ce39b2.js";import{_ as j}from"./CFilterbar-f14b943f.js";import{a as v}from"./CChartDonutSection-a704b69e.js";import{_ as k}from"./CTable-3c807551.js";import"./CButton-beaffc52.js";const A={class:"chart-section-principal info-personal"},L={class:"informacion-personal"},Q={class:"information__section"},z=t("span",{class:"card-title"},"Preguntas",-1),G=t("span",{class:"question--value"},"1.1 ¿Cuántos años tiene actualmente?",-1),J=t("span",{class:"question--value"},"1.2 Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),K=t("span",{class:"question--value"},"1.3 ¿Recuerda el nombre de algún programa o Centro donde estuvo?",-1),O=t("span",{class:"question--value"},"1.4 ¿Hasta qué curso llegó (en la calle)?",-1),U=t("span",{class:"question--value"},"1.5 ¿Es chileno?",-1),W=t("span",{class:"question--value"},"1.6 Antes de estar en esta cárcel, ¿había estado preso(a)? (como adulto)",-1),X=t("span",{class:"question--value"},"1.7 ¿Cuánto tiempo lleva en esta cárcel?",-1),Y=t("span",{class:"question--value"},"1.8 ¿Qué año saldría en libertad (cumplido)?",-1),Z={class:"content__section"},m=1,ce={__name:"InfoPersonal",setup(ee){const r=V(),_=i("Calidad de vida de los internos / Información personal"),h=i("-");i(0);const I=i([{rowReference:"sex",description:"Sexo"},{rowReference:"age",description:"1.1 Edad"},{rowReference:"formacionCentro",description:"1.2"},{rowReference:"programaCentro",description:"1.3"},{rowReference:"nivelInstruccion",description:"1.4"},{rowReference:"nacionalidadChilena",description:"1.5"},{rowReference:"reincidensia",description:"1.6"},{rowReference:"tiempoEncarcelado",description:"1.7"},{rowReference:"libertadFecha",description:"1.8"}]),c=i([]),g=s=>s?"Hombre":"Mujer",b=s=>{switch(s){case 0:return"sin estudios formales";case 1:return"primero básico";case 2:return"segundo básico";case 3:return"tercero básico";case 4:return"cuarto básico";case 5:case 6:return"sexto básico";case 7:return"séptimo básico";case 8:return"octavo básico";case 9:return"I medio";case 10:return"II medio";case 11:return"III medio";case 12:return"IV medio completo";case 13:return"superior incompleta";case 14:return"superior completa";default:return""}},l=s=>s===1?"Si":s===-1?"":"No",w=s=>{switch(s){case 1:return"Menos de 6 meses";case 2:return"Entre 6 meses y 1 año";case 3:return"Entre 1 y 2 años";case 4:return"Más de 2 años";default:return""}},C=s=>{switch(s){case 1:return"2022";case 2:return"2023";case 3:return"2024";case 4:return"2025 o más";default:return""}},p=async()=>{var s;try{const a=((s=r==null?void 0:r.penitenciaria)==null?void 0:s.id)??null,f=r.historyId;if(f&&a){const y={historyId:f.value,carcelId:a,categoryId:1,subCategoryId:1,embedDetail:!0};let o=await P(y);c.value=[];const u=o.items.filter(e=>e.dimensionId===1),q=o.items.filter(e=>e.dimensionId===2),x=o.items.filter(e=>e.dimensionId===4),R=o.items.filter(e=>e.dimensionId===5),D=o.items.filter(e=>e.dimensionId===6),E=o.items.filter(e=>e.dimensionId===7),S=o.items.filter(e=>e.dimensionId===8),$=o.items.filter(e=>e.dimensionId===56);for(let e=0;e<u.length;e++)c.value.push({sex:g($[e].value),age:u[e].value>0?u[e].value:"",formacionCentro:l(q[e].value),programaCentro:"",nivelInstruccion:b(x[e].value),nacionalidadChilena:l(R[e].value),reincidensia:l(D[e].value),tiempoEncarcelado:w(E[e].value),libertadFecha:C(S[e].value)})}else c.value=[]}catch(a){console.log(a)}};return H(async()=>{await p()}),(s,a)=>(M(),N(B,null,{default:d(()=>[n(T,{title:_.value,"section-value":m},null,8,["title"]),n(j,{baseFilter:m,onExecuteAction:p}),t("div",A,[n(F,{title:_.value,"section-value":m,pointValue:h.value,pointTitle:"Información personal",pointSubtitle:"Información personal de los internos"},null,8,["title","pointValue"]),t("div",L,[t("div",Q,[n(v,{class:"card-information"},{default:d(()=>[z,G,J,K]),_:1}),n(v,{class:"card-questions"},{default:d(()=>[O,U,W,X,Y]),_:1})]),t("div",Z,[n(k,{columns:I.value,rows:c.value},null,8,["columns","rows"])])])])]),_:1}))}};export{ce as default};
