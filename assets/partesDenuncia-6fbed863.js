import{u as k,g as s,h as x,o as f,f as R,j as B,_ as L,q as N,l as I,b as u,m as n,n as J,x as T,a as C,c as z,e as H,C as O}from"./index-f4124e79.js";import{_ as j}from"./CHeaderBar-e62534a5.js";import{_ as q}from"./subSideNav-ba5cbd5b.js";import{_ as S}from"./CButton-33aeb8f9.js";import{_ as U}from"./CTable-149f3711.js";import{s as G}from"./filterSituacion-7f8223e4.js";import"./CChartDonutSection-564b2824.js";const K={class:"content-header-partes"},Q={class:"selected-options"},W={key:0,class:"c-option-volver"},X={class:"table-section-principal"},Y={class:"content__section"},d=3,h=32,re={__name:"partesDenuncia",setup(Z){const i=G(),m=k(),r=s(!1),o=s({id:15,description:"Región Metropolitana de Santiago"}),p=s([]),v=s(0),l=s(null),c=s(null),_=s(""),g=s("Estado situación carcelaria / Resumen partes ley 20.000"),D=s([{description:"Centro penitenciario",colspan:1},{description:_,colspan:12},{description:"Resumen",colspan:3}]),V=s([{rowReference:"establecimiento",description:"Establecimiento"},{rowReference:"dataEnero",description:"Enero"},{rowReference:"dataFebrero",description:"Feb"},{rowReference:"dataMarzo",description:"Marzo"},{rowReference:"dataAbril",description:"Abril"},{rowReference:"dataMayo",description:"Mayo"},{rowReference:"dataJunio",description:"Junio"},{rowReference:"dataJulio",description:"Julio"},{rowReference:"dataAgosto",description:"Agosto"},{rowReference:"dataSeptiembre",description:"Septiembre"},{rowReference:"dataOctubre",description:"Octubre"},{rowReference:"dataNoviembre",description:"Nombiembre"},{rowReference:"dataDiciembre",description:"Diciembre"},{rowReference:"leyVeinteMil",description:"Ley 20.000"},{rowReference:"total",description:"Total"}]),w=s([]),$=()=>{H.push("/situacionCarcelaria")},A=async()=>{i.changeRegionSelected(o.value),await b(),await y()},E=async e=>{if(!i.listadoRegiones.length>0){let t={regionId:null};l.value&&(t.regionId=l.value);let a=await N(t);p.value=a,i.setRegionesList(a)}else p.value=i.listadoRegiones},b=async()=>{let e=await O();i.setCarcelesList(e)},F=async()=>{var t,a;let e={categoryId:d,historySubCategoryId:h,lastPeriod:!0};return v.value||(v.value=await I(e)),e={categoryId:d,historySubCategoryId:h,historyId:v.value.id,embedLawParts:!0},o.value?e.regionId=(t=o.value)!=null&&t.id?o.value.id:o.value:(a=i==null?void 0:i.regionSelected)!=null&&a.id&&(e.regionId=i.regionSelected.id),c.value&&(e.carcelId=c.value),await b(),e},y=async()=>{try{const e=await F(),t=await I(e);_.value=`Año ${t.period}`,w.value=t.items.map(a=>{const M=i.listadoCarceles.find(P=>P.id==a.carcelId);return a.establecimiento=M.description,a})}catch(e){console.log(e)}};return x(async()=>{r.value=!0,o.value=i.regionSelected;const e=m.user.restrictions.find(a=>a.typeId===2),t=m.user.restrictions.find(a=>a.typeId===3);e?l.value=parseInt(e.restriction):t?c.value=parseInt(t.restriction):(c.value=null,l.value=null),o.value=i.regionSelected.value,await E(),await y(),r.value=!1}),(e,t)=>(f(),R(L,{class:"contenido-partes"},{default:B(()=>[u("div",K,[n(j,{title:g.value,"section-value":d},null,8,["title"]),n(J,{"active-spin":r.value},null,8,["active-spin"]),u("div",Q,[r.value?C("",!0):(f(),R(T,{key:0,class:"select-region",options:p.value,modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value=a)},null,8,["options","modelValue"])),n(S,{class:"btn-search",title:"",onExecuteAction:t[1]||(t[1]=a=>A())})]),!r.value&&e.topPosition!==0?(f(),z("div",W,[n(S,{class:"btn-volver",title:"Volver",onExecuteAction:$,disabled:e.blockButton},null,8,["disabled"])])):C("",!0)]),u("div",X,[n(q,{class:"subsection-partes",title:g.value,"section-value":d,pointValue:e.pointCalculated,pointTitle:"Partes denuncia ley 20.000",pointSubtitle:""},null,8,["title","pointValue"]),u("div",Y,[n(U,{"parent-columns":D.value,columns:V.value,rows:w.value},null,8,["parent-columns","columns","rows"])])])]),_:1}))}};export{re as default};