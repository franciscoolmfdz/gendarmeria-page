import{i as C,h as t,k as S,o as T,f as P,j as g,_ as v,g as c,b as o}from"./index-aa05dffe.js";import{_ as E}from"./CHeaderBar-519cc880.js";import{a as R,b as w,_ as J}from"./CCard-411be956.js";import{_ as A}from"./CTable-410db5be.js";import{a as u}from"./api-5f293200.js";const f="/dmm/dimension-history-program",b=async(r,n)=>{if(r!=null&&r.id){let l=`${f}/${r.id}`;return u(l,"GET",null,n)}let a=f,i=null;return r!=null&&r.regionId&&(i?i=`${i}&regionId=${r.regionId}`:i=`regionId=${r.regionId}`),i&&(a=`${a}?${i}`),u(a,"GET",null,n)};const h={class:"selected-options"},L={class:"information__section"},$=o("span",{class:"card-title"},"Programas en los establecimientos del país",-1),y=o("span",null,"PPL : Programa de reinserción social para personas privadas de libertad",-1),I=o("span",null,"PRS : Programa Ministerio del Interior",-1),N=o("span",null,"CET C : CET Cerrado",-1),B=o("span",null,"CET S : CET Semiabierto",-1),M=o("span",null,"CTA : Centro de tratamiento de adicciones",-1),V=o("span",null,"SSJJ : Secciones Juveniles",-1),x=o("span",null,"CJ : Creciendo Juntos",-1),G={class:"content__section"},k=4,F={__name:"programasEstablecimientos",setup(r){C();const n=t({id:15,description:"Región Metropolitana de Santiago"}),a=t([{id:1,description:"Arica y Parinacota"},{id:2,description:"Tarapacá"},{id:3,description:"Antofagasta"},{id:4,description:"Atacama"},{id:5,description:"Coquimbo"},{id:6,description:"Valparaíso"},{id:7,description:"Libertador General Bernardo O’Higgins"},{id:8,description:"Maule"},{id:9,description:"Biobío"},{id:10,description:"La Araucanía"},{id:11,description:"Los Ríos"},{id:12,description:"Los Lagos"},{id:13,description:"Aysén del Gral. Carlos Ibáñez del Campo"},{id:14,description:"Magallanes y de la Antártica Chilena"},{id:15,description:"Región Metropolitana de Santiago"},{id:16,description:"Region de ñuble"}]),i=t("Elementos de reinserción / Programas en los establecimientos del país"),l=t([{rowReference:"region",description:"Región"},{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"programPPL",description:"PPL"},{rowReference:"programPLS",description:"PRS"},{rowReference:"programCETC",description:"CET C"},{rowReference:"programCETSA",description:"CET SA"},{rowReference:"programCTA",description:"CTA"},{rowReference:"programSSJJ",description:"SSJJ"},{rowReference:"programCJ",description:"CJ"},{rowReference:"total",description:"Total en funcionamiento"},{rowReference:"promedio",description:"Total en funcionamiento"}]),d=t([]),_=async()=>{var p;try{if(n.value){const s={regionId:((p=n.value)==null?void 0:p.id)??n.value},m=await b(s);d.value=m.map(e=>(e.programPPL=e.programPPL?"Sí":"No",e.programPLS=e.programPLS?"Sí":"No",e.programCETC=e.programCETC?"Sí":"No",e.programCETSA=e.programCETSA?"Sí":"No",e.programCTA=e.programCTA?"Sí":"No",e.programSSJJ=e.programSSJJ?"Sí":"No",e.programCJ=e.programCJ?"Sí":"No",e))}else d.value=[]}catch(s){console.log(s)}};return S(async()=>{await _()}),(p,s)=>(T(),P(v,null,{default:g(()=>[c(E,{title:i.value,"section-value":k},null,8,["title"]),o("div",h,[c(R,{options:a.value,modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=m=>n.value=m)},null,8,["options","modelValue"]),c(w,{title:"Buscar centros",onExecuteAction:_})]),o("div",L,[c(J,{class:"card-information"},{default:g(()=>[$,y,I,N,B,M,V,x]),_:1})]),o("div",G,[c(A,{columns:l.value,rows:d.value},null,8,["columns","rows"])])]),_:1}))}};export{F as default};
