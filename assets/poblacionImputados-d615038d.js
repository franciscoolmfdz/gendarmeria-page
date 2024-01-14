import{u as K,g as t,h as O,o as _,f as k,j as Q,_ as W,x as X,l as $,b as I,m as u,n as Y,c as B,C as Z,a as w,e as ee,y as ae}from"./index-c6cfe71e.js";import{_ as oe}from"./subSideNav-9af33995.js";import{_ as te}from"./CHeaderBar-341e9f0f.js";import{_ as D}from"./CButton-a5ed5892.js";import{_ as se}from"./CTable-9f8a4cb1.js";import{s as ne}from"./filterSituacion-cddc3f3c.js";import"./CChartDonutSection-964682c9.js";const re={class:"content-imputados"},ce={key:0,class:"selected-options"},ie={key:1,class:"c-option-volver"},le={class:"table-section-principal"},de={class:"content__section"},j=3,F=30,je={__name:"poblacionImputados",setup(ue){const C=K(),n=ne(),T=t("Estado situación carcelaria / Tasa de ocupación"),N=t(!1),r=t({id:15,description:"Región Metropolitana de Santiago"}),i=t(),p=t(),H=t([]),g=t(0),v=t(!1),m=t(0),E=t([{description:"Centro penitenciario",colspan:1},{description:"Condenados",colspan:3},{description:"Imputados",colspan:3},{description:"Total PPL. 24h",colspan:3},{description:"Capacidad según diseño (Incluye 24 hrs y juveniles)",colspan:1},{description:"% Uso capacidad total",colspan:3}]),L=t([{rowReference:"establecimiento",description:""},{rowReference:"condenadoHombre",description:"Hombre"},{rowReference:"condenadoMujer",description:"Mujer"},{rowReference:"condenadoTotal",description:"Total"},{rowReference:"imputadoHombre",description:"Hombre"},{rowReference:"imputadoMujer",description:"Mujer"},{rowReference:"imputadoTotal",description:"Total"},{rowReference:"totalPplHombre",description:"Hombre"},{rowReference:"totalPplMujer",description:"Mujer"},{rowReference:"totalPplTotal",description:"Total"},{rowReference:"capacidadTotal",description:"Total"},{rowReference:"usoCapacidadHombre",description:"Hombre"},{rowReference:"usoCapacidadMujer",description:"Mujer"},{rowReference:"usoCapacidadTotal",description:"Total"}]),f=t([]),A=()=>{ee.push("/situacionCarcelaria")},l=e=>e?Math.round(e*100)/100:0,d=e=>e<=100?"class-verde":e>100&&e<200?"class-ambar":"class-rojo",U=e=>{const a=n.listadoCarceles.find(J=>J.id===e.carcelId),o=e.imputadoHombre+e.condenadoHombre+e.procesadoHombre+e.detenidoHombre,s=e.imputadoMujer+e.condenadoMujer+e.procesadoMujer+e.detenidoMujer,c=o+s,R=e.imputadoHombre+e.imputadoMujer,b=e.pplMaxMujer+e.pplMaxHombre,x=o&&e.pplMaxHombre?l(o*100/e.pplMaxHombre):0,h=s&&e.pplMaxMujer?l(s*100/e.pplMaxMujer):0,M=c&&b?l(c*100/b):0,P=e.imputadoHombre&&e.pplMaxHombre?l(e.imputadoHombre*100/e.pplMaxHombre):0,V=e.imputadoMujer&&e.pplMaxMujer?l(e.imputadoMujer*100/e.pplMaxMujer):0,S=R&&b?l(R*100/b):0;if(a&&(a!=null&&a.id))return m.value+=isNaN(M)?0:M,{carcelId:a.id,establecimiento:a.description,condenadoHombre:{data:e.condenadoHombre,class:"ppl-datatable"},condenadoMujer:{data:e.condenadoMujer,class:"ppl-datatable"},condenadoTotal:{data:e.condenadoHombre+e.condenadoMujer,class:"ppl-datatable"},imputadoHombre:e.imputadoHombre,imputadoMujer:e.imputadoMujer,imputadoTotal:e.imputadoMujer+e.imputadoHombre,totalPplHombre:{data:o,class:"ppl-datatable"},totalPplMujer:{data:s,class:"ppl-datatable"},totalPplTotal:{data:o+s,class:"ppl-datatable"},capacidadHombre:e.pplMaxHombre,capacidadMujer:e.pplMaxMujer,capacidadTotal:{data:b,class:"diseno-datatable"},usoCapacidadHombre:{data:x+"%",class:d(x)},usoCapacidadMujer:{data:h+"%",class:d(h)},usoCapacidadTotal:{data:M+"%",class:d(M)},usoImputadoHombre:{data:P+"%",class:d(P)},usoImputadoMujer:{data:V+"%",class:d(V)},usoImputadoTotal:{data:S+"%",class:d(S)}}},q=async e=>{if(!n.listadoRegiones.length>0){let a=await X();H.value=a,n.setRegionesList(a)}else H.value=n.listadoRegiones},z=async()=>{let e=await ae();n.setCarcelesList(e)},G=async()=>{var a;let e={categoryId:j,historySubCategoryId:F,lastPeriod:!0};return g.value||(g.value=await $(e)),e={categoryId:j,historySubCategoryId:F,historyId:g.value.id,embedPopulation:!0},r.value&&(e.regionId=(a=r.value)!=null&&a.id?r.value.id:r.value),i.value&&(e.regionId=i.value,r.value=i.value),p.value&&(e.carcelId=p.value),await z(),e},y=async()=>{var e,a;try{if(m.value=0,(e=n==null?void 0:n.regionSelected)!=null&&e.id){const o=await G();let s=await $(o);(a=s==null?void 0:s.items)!=null&&a.length?f.value=s.items.map(c=>U(c)).filter(c=>c==null?void 0:c.carcelId):f.value=[],m.value=(m.value/f.value.length).toFixed(1)}}catch(o){console.log(o)}};return O(async()=>{const e=C.user.restrictions.find(o=>o.typeId===2),a=C.user.restrictions.find(o=>o.typeId===3);e?(i.value=parseInt(e.restriction),r.value=n.regionSelected.id):a?p.value=parseInt(a.restriction):(p.value=null,i.value=null),await q(),await y(),N.value=!0}),(e,a)=>(_(),k(W,{class:"contenido-imputados"},{default:Q(()=>[I("div",re,[u(te,{title:T.value,"section-value":j},null,8,["title"]),u(Y,{"active-spin":v.value},null,8,["active-spin"]),!v.value&&!p.value?(_(),B("div",ce,[v.value?w("",!0):(_(),k(Z,{key:0,class:"select-region",options:H.value,modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=o=>r.value=o),disabled:i.value},null,8,["options","modelValue","disabled"])),u(D,{class:"btn-search",title:"",onExecuteAction:y})])):w("",!0),!v.value&&e.topPosition!==0?(_(),B("div",ie,[u(D,{class:"btn-volver",title:"Volver",onExecuteAction:A,disabled:e.blockButton},null,8,["disabled"])])):w("",!0)]),I("div",le,[u(oe,{class:"subsection-imputados",title:T.value,"section-value":j,pointValue:m.value,pointTitle:"Tasa de ocupación",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),I("div",de,[u(se,{"parent-columns":E.value,columns:L.value,rows:f.value},null,8,["parent-columns","columns","rows"])])])]),_:1}))}};export{je as default};
