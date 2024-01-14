import{u as G,g as s,h as J,o as b,f as $,j as g,_ as K,x as O,l as x,b as u,m as r,n as Q,c as k,C as W,a as M,e as X,y as Y}from"./index-ec234649.js";import{_ as Z}from"./subSideNav-fcfccd94.js";import{_ as ee}from"./CHeaderBar-928d38c3.js";import{a as j}from"./CChartDonutSection-452a9270.js";import{_ as B}from"./CButton-0f682ad0.js";import{_ as P}from"./CTable-9ffd256d.js";import{s as ae}from"./filterSituacion-46d41b52.js";const oe={class:"content-header-profesionales"},te={key:0,class:"selected-options"},se={key:1,class:"c-option-volver"},le={class:"table-section-principal"},ie={class:"table-section"},ne={class:"content__section"},re=u("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),ce={class:"content__section"},ue=u("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),de={class:"content__section"},pe=u("span",{class:"card-title"},"Dotación efectiva Total",-1),y=3,E=28,we={__name:"profesionales",setup(fe){const T=G(),d=s(null),l=ae(),c=s({id:15,description:"Región Metropolitana de Santiago"}),R=s(null),p=s(null),C=s(null),f=s([]),F=s([{rowReference:"title",description:"Totales"},{rowReference:"totalProfesionalHombre",description:"Hombre"},{rowReference:"totalProfesionalMujer",description:"Mujer"},{rowReference:"total",description:"Total"}]),h=s(0),w=s([]),D=s("Estado situación carcelaria / Personal de reinserción"),S=s([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"}]),v=s([]),_=s([]),A=()=>{X.push("/situacionCarcelaria")},L=async a=>{if(!l.listadoRegiones.length>0){let i=await O();w.value=i,l.setRegionesList(i)}else w.value=l.listadoRegiones},N=async()=>{var i,n;let a={categoryId:y,historySubCategoryId:E,lastPeriod:!0};return h.value||(h.value=await x(a)),a={categoryId:y,historySubCategoryId:E,historyId:h.value.id,embedProfesionals:!0},c.value?a.regionId=(i=c.value)!=null&&i.id?c.value.id:c.value:(n=l==null?void 0:l.regionSelected)!=null&&n.id&&(a.regionId=l.regionSelected.id,c.value=l.regionSelected),p.value&&(a.carcelId=p.value),await U(),a},V=async()=>{try{if(c.value){f.value=[];const a=await N();let n=(await x(a)).items.map(e=>{const q=l.listadoCarceles.find(z=>z.id==e.carcelId);return e.carcel=q.description,e.profesionalHombre=e.profesionalHombre+0,e.profesionalMujer=e.profesionalMujer+0,e}),o=0,t=0,H=0,I=0,m=0;v.value=n.filter(e=>e.profesionalTypeId===1).map(e=>(e.profesionalHombre=e.profesionalHombre+0,e.profesionalMujer=e.profesionalMujer+0,o+=e.profesionalHombre,t+=e.profesionalMujer,e)),f.value.push({title:"Total personal psicología",totalProfesionalHombre:{class:"sub-value",data:o??"0"},totalProfesionalMujer:{class:"sub-value",data:t??"0"},total:o+t}),v.value.push({id:999,carcel:{data:"Total",class:"total"},profesionalHombre:{data:o,class:"total"},profesionalMujer:{data:t,class:"total"},profesionalTypeId:1}),H+=o,I+=t,m+=o+t,o=0,t=0,_.value=n.filter(e=>e.profesionalTypeId===2).map(e=>(o+=e.profesionalHombre,t+=e.profesionalMujer,e)),H+=o,I+=t,m+=o+t,C.value=m+" profesionales",f.value.push({title:"Total personal asistente social",totalProfesionalHombre:{class:"sub-value",data:o??"0"},totalProfesionalMujer:{class:"sub-value",data:t??"0"},total:o+t}),f.value.push({title:{class:"total",data:"Total dotación personal"},totalProfesionalHombre:{data:H,class:"total"},totalProfesionalMujer:{data:I,class:"total"},total:{data:m,class:"total"}}),_.value.push({id:999,carcel:{data:"Total",class:"total"},profesionalHombre:{data:o,class:"total"},profesionalMujer:{data:t,class:"total"},profesionalTypeId:2})}else v.value=[],_.value=[]}catch(a){console.log(a)}},U=async()=>{if(!l.listadoCarceles.length){let a=await Y();l.setCarcelesList(a)}};return J(async()=>{d.value=!0;const a=T.user.restrictions.find(n=>n.typeId===2),i=T.user.restrictions.find(n=>n.typeId===3);a?(R.value=parseInt(a.restriction),c.value=l.regionSelected.id):i?p.value=parseInt(i.restriction):(p.value=null,R.value=null),await L(),await V(),d.value=!1}),(a,i)=>(b(),$(K,{class:"contenido-profesionales"},{default:g(()=>[u("div",oe,[r(ee,{title:D.value,"section-value":y},null,8,["title"]),r(Q,{"active-spin":d.value},null,8,["active-spin"]),!d.value&&!p.value?(b(),k("div",te,[d.value?M("",!0):(b(),$(W,{key:0,ref:"region",class:"select-region",options:w.value,modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=n=>c.value=n)},null,8,["options","modelValue"])),r(B,{class:"btn-search",title:"",onExecuteAction:V})])):M("",!0),!d.value&&a.topPosition!==0?(b(),k("div",se,[r(B,{class:"btn-volver",title:"Volver",onExecuteAction:A})])):M("",!0)]),u("div",le,[r(Z,{class:"subsection-profesional",title:D.value,"point-type":3,"section-value":y,"point-label":C.value,pointTitle:"Personal de reinserción",pointSubtitle:"","point-disabled":!0},null,8,["title","point-label"]),u("div",ie,[u("div",ne,[r(j,{class:"card-information"},{default:g(()=>[re]),_:1}),r(P,{class:"table-psicologia",columns:S.value,rows:v.value},null,8,["columns","rows"])]),u("div",ce,[r(j,{class:"card-information"},{default:g(()=>[ue]),_:1}),r(P,{class:"table-asistente",columns:S.value,rows:_.value},null,8,["columns","rows"])]),u("div",de,[r(j,{class:"card-information"},{default:g(()=>[pe]),_:1}),r(P,{class:"table-asistente",columns:F.value,rows:f.value},null,8,["columns","rows"])])])])]),_:1}))}};export{we as default};