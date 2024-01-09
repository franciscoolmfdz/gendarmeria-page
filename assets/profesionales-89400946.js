import{u as A,g as l,h as L,o as P,f as N,j as v,_ as U,x as q,l as j,b as n,m as i,n as z,C as G,c as J,a as K,e as O,y as Q}from"./index-5f425c6a.js";import{_ as W}from"./subSideNav-60745070.js";import{_ as X}from"./CHeaderBar-ae039085.js";import{a as w}from"./CChartDonutSection-09a7c30d.js";import{_ as S}from"./CButton-9b8ff62a.js";import{_ as T}from"./CTable-583262ee.js";import{s as Y}from"./filterSituacion-00ed8337.js";const Z={class:"content-header-profesionales"},ee={class:"selected-options"},ae={key:0,class:"c-option-volver"},te={class:"table-section-principal"},oe={class:"table-section"},se={class:"content__section"},le=n("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),ie={class:"content__section"},ne=n("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),re={class:"content__section"},ce=n("span",{class:"card-title"},"Dotación efectiva Total",-1),m=3,D=28,be={__name:"profesionales",setup(ue){A();const s=Y(),r=l({id:15,description:"Región Metropolitana de Santiago"});l(null);const I=l(null),d=l([]),V=l([{rowReference:"title",description:"Totales"},{rowReference:"totalProfesionalHombre",description:"Hombre"},{rowReference:"totalProfesionalMujer",description:"Mujer"},{rowReference:"total",description:"Total"}]),R=l(null),g=l(0),b=l([]),C=l("Estado situación carcelaria / Personal de reinserción"),H=l([{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"}]),p=l([]),f=l([]),$=()=>{O.push("/situacionCarcelaria")},x=async e=>{if(!s.listadoRegiones.length>0){let c=await q();b.value=c,s.setRegionesList(c)}else b.value=s.listadoRegiones},B=async()=>{var c,u;let e={categoryId:m,historySubCategoryId:D,lastPeriod:!0};return g.value||(g.value=await j(e)),e={categoryId:m,historySubCategoryId:D,historyId:g.value.id,embedProfesionals:!0},r.value?e.regionId=(c=r.value)!=null&&c.id?r.value.id:r.value:(u=s==null?void 0:s.regionSelected)!=null&&u.id&&(e.regionId=s.regionSelected.id,r.value=s.regionSelected),R.value&&(e.carcelId=R.value),await E(),e},M=async()=>{try{if(r.value){const e=await B();let u=(await j(e)).items.map(a=>{const k=s.listadoCarceles.find(F=>F.id==a.carcelId);return a.carcel=k.description,a}),t=0,o=0,h=0,y=0,_=0;p.value=u.filter(a=>a.profesionalTypeId===1).map(a=>(t+=a.profesionalHombre,o+=a.profesionalMujer,a)),d.value.push({title:"Total personal psicología",totalProfesionalHombre:t,totalProfesionalMujer:o,total:t+o}),p.value.push({id:999,carcel:{data:"Total",class:"total"},profesionalHombre:{data:t,class:"total"},profesionalMujer:{data:o,class:"total"},profesionalTypeId:1}),h+=t,y+=o,_+=t+o,t=0,o=0,f.value=u.filter(a=>a.profesionalTypeId===2).map(a=>(t+=a.profesionalHombre,o+=a.profesionalMujer,a)),h+=t,y+=o,_+=t+o,I.value=_+" profesionales",d.value.push({title:"Total personal asistente social",totalProfesionalHombre:t,totalProfesionalMujer:o,total:t+o}),d.value.push({title:"Total dotación personal",totalProfesionalHombre:h,totalProfesionalMujer:y,total:_}),f.value.push({id:999,carcel:{data:"Total",class:"total"},profesionalHombre:{data:t,class:"total"},profesionalMujer:{data:o,class:"total"},profesionalTypeId:2})}else p.value=[],f.value=[]}catch(e){console.log(e)}},E=async()=>{if(!s.listadoCarceles.length){let e=await Q();s.setCarcelesList(e)}};return L(async()=>{r.value=s.regionSelected,await x(),await M()}),(e,c)=>(P(),N(U,{class:"contenido-profesionales"},{default:v(()=>[n("div",Z,[i(X,{title:C.value,"section-value":m},null,8,["title"]),i(z,{"active-spin":e.activeSpin},null,8,["active-spin"]),n("div",ee,[i(G,{class:"select-region",options:b.value,modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=u=>r.value=u)},null,8,["options","modelValue"]),i(S,{class:"btn-search",title:"",onExecuteAction:M})]),!e.activeSpin&&e.topPosition!==0?(P(),J("div",ae,[i(S,{class:"btn-volver",title:"Volver",onExecuteAction:$})])):K("",!0)]),n("div",te,[i(W,{class:"subsection-profesional",title:C.value,"point-type":3,"section-value":m,"point-label":I.value,pointTitle:"Personal de reinserción",pointSubtitle:"","point-disabled":!0},null,8,["title","point-label"]),n("div",oe,[n("div",se,[i(w,{class:"card-information"},{default:v(()=>[le]),_:1}),i(T,{class:"table-psicologia",columns:H.value,rows:p.value},null,8,["columns","rows"])]),n("div",ie,[i(w,{class:"card-information"},{default:v(()=>[ne]),_:1}),i(T,{class:"table-asistente",columns:H.value,rows:f.value},null,8,["columns","rows"])]),n("div",re,[i(w,{class:"card-information"},{default:v(()=>[ce]),_:1}),i(T,{class:"table-asistente",columns:V.value,rows:d.value},null,8,["columns","rows"])])])])]),_:1}))}};export{be as default};
