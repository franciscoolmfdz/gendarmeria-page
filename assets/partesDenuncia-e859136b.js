import{_ as Y}from"./CColunmChart-f961e988.js";import{u as z,g as o,r as H,h as J,o as f,f as y,j,_ as q,q as U,l as V,b as u,m as r,n as G,x as K,a as w,c as Q,e as W,C as Z}from"./index-c0c6dc58.js";import{_ as ee}from"./CHeaderBar-c7eae6ad.js";import{_ as te}from"./subSideNav-37b119f4.js";import{_ as $}from"./CButton-5d0fce41.js";import{_ as oe}from"./CTable-d803f6d3.js";import{s as ae}from"./filterSituacion-e456c981.js";import"./CChartDonutSection-22d9718c.js";const se={class:"content-header-partes"},ie={class:"selected-options"},ne={key:0,class:"c-option-volver"},le={class:"table-section-principal"},re={class:"content__section"},ce={class:"chart-section"},m=3,D=32,we={__name:"partesDenuncia",setup(ue){const s=ae(),R=z(),l=o(!1),i=o({id:15,description:"Región Metropolitana de Santiago"}),_=o([]),g=o(0),d=o(null),p=o(null),c=o(""),b=o(""),h=o("Estado situación carcelaria / Resumen partes ley 20.000"),P=o([{description:"Centro penitenciario",colspan:1},{description:b,colspan:12},{description:"Resumen",colspan:3}]),A=o([{rowReference:"establecimiento",description:"Establecimiento"},{rowReference:"dataEnero",description:"1"},{rowReference:"dataFebrero",description:"2"},{rowReference:"dataMarzo",description:"3"},{rowReference:"dataAbril",description:"4"},{rowReference:"dataMayo",description:"5"},{rowReference:"dataJunio",description:"6"},{rowReference:"dataJulio",description:"7"},{rowReference:"dataAgosto",description:"8"},{rowReference:"dataSeptiembre",description:"9"},{rowReference:"dataOctubre",description:"10"},{rowReference:"dataNoviembre",description:"11"},{rowReference:"dataDiciembre",description:"12"},{rowReference:"otros",description:"Otros"},{rowReference:"leyVeinteMil",description:"Ley 20.000"},{rowReference:"total",description:"Total"}]),I=o([]),T=o({}),k=o({}),B=o({series:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,distance:-40,format:"{point.percentage:.1f}%",style:{fontSize:"1.2em",textOutline:"none",opacity:.7},filter:{operator:">",property:"percentage",value:10}}}}),L=o({}),v=H([{name:"Totales",colorByPoint:!0,data:[]}]),M=()=>{W.push("/situacionCarcelaria")},O=async()=>{s.changeRegionSelected(i.value),await S(),await C()},E=async e=>{if(!s.listadoRegiones.length>0){let t={regionId:null};d.value&&(t.regionId=d.value);let a=await U(t);_.value=a,s.setRegionesList(a)}else _.value=s.listadoRegiones},S=async()=>{let e=await Z();s.setCarcelesList(e)},F=async()=>{var t,a;let e={categoryId:m,historySubCategoryId:D,lastPeriod:!0};return g.value||(g.value=await V(e)),e={categoryId:m,historySubCategoryId:D,historyId:g.value.id,embedLawParts:!0},i.value?e.regionId=(t=i.value)!=null&&t.id?i.value.id:i.value:(a=s==null?void 0:s.regionSelected)!=null&&a.id&&(e.regionId=s.regionSelected.id,i.value=s.regionSelected),p.value&&(e.carcelId=p.value),await S(),e},C=async()=>{try{let e=0,t=0;c.value=0;const a=await F(),x=await V(a);b.value=`Año ${x.period}`,I.value=x.items.map(n=>{const N=s.listadoCarceles.find(X=>X.id==n.carcelId);return n.establecimiento=N.description,n.otros=n.total-n.leyVeinteMil,e+=n.leyVeinteMil,t+=n.otros,c.value+=n.total,n}),c.value=`Total: ${c.value}`,v[0].data=[],v[0].data.push({name:"Otros",y:t}),v[0].data.push({name:"Ley 20.000",y:e})}catch(e){console.log(e)}};return J(async()=>{l.value=!0,i.value=s.regionSelected;const e=R.user.restrictions.find(a=>a.typeId===2),t=R.user.restrictions.find(a=>a.typeId===3);e?d.value=parseInt(e.restriction):t?p.value=parseInt(t.restriction):(p.value=null,d.value=null),i.value=s.regionSelected.value,await E(),await C(),l.value=!1}),(e,t)=>(f(),y(q,{class:"contenido-partes"},{default:j(()=>[u("div",se,[r(ee,{title:h.value,"section-value":m},null,8,["title"]),r(G,{"active-spin":l.value},null,8,["active-spin"]),u("div",ie,[l.value?w("",!0):(f(),y(K,{key:0,class:"select-region",options:_.value,modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a)},null,8,["options","modelValue"])),r($,{class:"btn-search",title:"",onExecuteAction:t[1]||(t[1]=a=>O())})]),!l.value&&e.topPosition!==0?(f(),Q("div",ne,[r($,{class:"btn-volver",title:"Volver",onExecuteAction:M,disabled:e.blockButton},null,8,["disabled"])])):w("",!0)]),u("div",le,[r(te,{class:"subsection-partes",title:h.value,"section-value":m,"point-label":c.value,pointTitle:"Partes denuncia ley 20.000",pointSubtitle:"","point-disabled":!0},null,8,["title","point-label"]),u("div",re,[r(oe,{"parent-columns":P.value,columns:A.value,rows:I.value},null,8,["parent-columns","columns","rows"]),u("div",ce,[l.value?w("",!0):(f(),y(Y,{key:0,chartType:"pie",optionsAxisX:T.value,optionsAxisY:k.value,plotOptions:B.value,tooltip:L.value,series:v},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])])]),_:1}))}};export{we as default};
