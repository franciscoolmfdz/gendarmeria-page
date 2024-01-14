import{u as G,g as o,h as J,o as g,f as $,j as b,_ as K,x as O,l as x,b as u,m as r,n as Q,c as k,C as W,a as C,e as X,y as Y}from"./index-517d81b5.js";import{_ as Z}from"./subSideNav-e8b173ec.js";import{_ as ee}from"./CHeaderBar-9e488358.js";import{a as H}from"./CChartDonutSection-682f2bb4.js";import{_ as B}from"./CButton-9d782e0a.js";import{_ as M}from"./CTable-3edd57c8.js";import{s as te}from"./filterSituacion-cc2f1baa.js";const ae={class:"content-header-profesionales"},se={key:0,class:"selected-options"},oe={key:1,class:"c-option-volver"},le={class:"table-section-principal"},ie={class:"table-section"},ne={class:"content__section"},re=u("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),ce={class:"content__section"},ue=u("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),de={class:"content__section"},pe=u("span",{class:"card-title"},"Dotación efectiva Total",-1),y=3,E=28,we={__name:"profesionales",setup(fe){const P=G(),d=o(null),l=te(),c=o({id:15,description:"Región Metropolitana de Santiago"}),h=o(null),p=o(null),j=o(null),f=o([]),F=o([{rowReference:"title",description:"Totales"},{rowReference:"totalProfesionalHombre",description:"Hombre"},{rowReference:"totalProfesionalMujer",description:"Mujer"},{rowReference:"total",description:"Total"}]),w=o(0),I=o([]),D=o("Estado situación carcelaria / Personal de reinserción"),S=o([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"}]),v=o([]),_=o([]),A=()=>{X.push("/situacionCarcelaria")},L=async e=>{if(!l.listadoRegiones.length>0){let i=await O();I.value=i,l.setRegionesList(i)}else I.value=l.listadoRegiones},N=async()=>{var i,n;let e={categoryId:y,historySubCategoryId:E,lastPeriod:!0};return w.value||(w.value=await x(e)),e={categoryId:y,historySubCategoryId:E,historyId:w.value.id,embedProfesionals:!0},c.value?e.regionId=(i=c.value)!=null&&i.id?c.value.id:c.value:(n=l==null?void 0:l.regionSelected)!=null&&n.id&&(e.regionId=l.regionSelected.id,c.value=l.regionSelected),p.value&&(e.carcelId=p.value),await U(),e},V=async()=>{try{if(c.value){f.value=[];const e=await N();let n=(await x(e)).items.map(t=>{const q=l.listadoCarceles.find(z=>z.id==t.carcelId);return t.carcel=q.description,t}),a=0,s=0,T=0,R=0,m=0;v.value=n.filter(t=>t.profesionalTypeId===1).map(t=>(a+=t.profesionalHombre,s+=t.profesionalMujer,t)),f.value.push({title:"Total personal psicología",totalProfesionalHombre:a,totalProfesionalMujer:s,total:a+s}),v.value.push({id:999,carcel:{data:"Total",class:"total"},profesionalHombre:{data:a,class:"total"},profesionalMujer:{data:s,class:"total"},profesionalTypeId:1}),T+=a,R+=s,m+=a+s,a=0,s=0,_.value=n.filter(t=>t.profesionalTypeId===2).map(t=>(a+=t.profesionalHombre,s+=t.profesionalMujer,t)),T+=a,R+=s,m+=a+s,j.value=m+" profesionales",f.value.push({title:"Total personal asistente social",totalProfesionalHombre:a,totalProfesionalMujer:s,total:a+s}),f.value.push({title:{class:"total",data:"Total dotación personal"},totalProfesionalHombre:{data:T,class:"total"},totalProfesionalMujer:{data:R,class:"total"},total:{data:m,class:"total"}}),_.value.push({id:999,carcel:{data:"Total",class:"total"},profesionalHombre:{data:a,class:"total"},profesionalMujer:{data:s,class:"total"},profesionalTypeId:2})}else v.value=[],_.value=[]}catch(e){console.log(e)}},U=async()=>{if(!l.listadoCarceles.length){let e=await Y();l.setCarcelesList(e)}};return J(async()=>{d.value=!0;const e=P.user.restrictions.find(n=>n.typeId===2),i=P.user.restrictions.find(n=>n.typeId===3);e?(h.value=parseInt(e.restriction),c.value=l.regionSelected.id):i?p.value=parseInt(i.restriction):(p.value=null,h.value=null),await L(),await V(),d.value=!1}),(e,i)=>(g(),$(K,{class:"contenido-profesionales"},{default:b(()=>[u("div",ae,[r(ee,{title:D.value,"section-value":y},null,8,["title"]),r(Q,{"active-spin":d.value},null,8,["active-spin"]),!d.value&&!p.value?(g(),k("div",se,[d.value?C("",!0):(g(),$(W,{key:0,ref:"region",class:"select-region",options:I.value,modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=n=>c.value=n),disabled:h.value},null,8,["options","modelValue","disabled"])),r(B,{class:"btn-search",title:"",onExecuteAction:V})])):C("",!0),!d.value&&e.topPosition!==0?(g(),k("div",oe,[r(B,{class:"btn-volver",title:"Volver",onExecuteAction:A})])):C("",!0)]),u("div",le,[r(Z,{class:"subsection-profesional",title:D.value,"point-type":3,"section-value":y,"point-label":j.value,pointTitle:"Personal de reinserción",pointSubtitle:"","point-disabled":!0},null,8,["title","point-label"]),u("div",ie,[u("div",ne,[r(H,{class:"card-information"},{default:b(()=>[re]),_:1}),r(M,{class:"table-psicologia",columns:S.value,rows:v.value},null,8,["columns","rows"])]),u("div",ce,[r(H,{class:"card-information"},{default:b(()=>[ue]),_:1}),r(M,{class:"table-asistente",columns:S.value,rows:_.value},null,8,["columns","rows"])]),u("div",de,[r(H,{class:"card-information"},{default:b(()=>[pe]),_:1}),r(M,{class:"table-asistente",columns:F.value,rows:f.value},null,8,["columns","rows"])])])])]),_:1}))}};export{we as default};
