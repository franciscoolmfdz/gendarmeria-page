import{u,g as n,h as g,o as f,f as C,j as d,_ as S,J as P,m as s,b as o,z as T}from"./index-32237ca5.js";import{_ as v}from"./CHeaderBar-314fbfbd.js";import{_ as R}from"./CCard-d1e39816.js";import{_ as J}from"./CButton-9b5b716d.js";import{_ as E}from"./CTable-301619d5.js";const w={class:"selected-options"},A={class:"information__section"},h=o("span",{class:"card-title"},"Programas en los establecimientos del país",-1),L=o("span",null,"PPL : Programa de reinserción social para personas privadas de libertad",-1),b=o("span",null,"PRS : Programa Ministerio del Interior",-1),y=o("span",null,"CET C : CET Cerrado",-1),N=o("span",null,"CET S : CET Semiabierto",-1),B=o("span",null,"CTA : Centro de tratamiento de adicciones",-1),M=o("span",null,"SSJJ : Secciones Juveniles",-1),V=o("span",null,"CJ : Creciendo Juntos",-1),$={class:"content__section"},x=4,q={__name:"programasEstablecimientos",setup(I){u();const r=n({id:15,description:"Región Metropolitana de Santiago"}),p=n([{id:1,description:"Arica y Parinacota"},{id:2,description:"Tarapacá"},{id:3,description:"Antofagasta"},{id:4,description:"Atacama"},{id:5,description:"Coquimbo"},{id:6,description:"Valparaíso"},{id:7,description:"Libertador General Bernardo O’Higgins"},{id:8,description:"Maule"},{id:9,description:"Biobío"},{id:10,description:"La Araucanía"},{id:11,description:"Los Ríos"},{id:12,description:"Los Lagos"},{id:13,description:"Aysén del Gral. Carlos Ibáñez del Campo"},{id:14,description:"Magallanes y de la Antártica Chilena"},{id:15,description:"Región Metropolitana de Santiago"},{id:16,description:"Region de ñuble"}]),_=n("Elementos de reinserción / Programas en los establecimientos del país"),m=n([{rowReference:"region",description:"Región"},{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"programPPL",description:"PPL"},{rowReference:"programPLS",description:"PRS"},{rowReference:"programCETC",description:"CET C"},{rowReference:"programCETSA",description:"CET SA"},{rowReference:"programCTA",description:"CTA"},{rowReference:"programSSJJ",description:"SSJJ"},{rowReference:"programCJ",description:"CJ"},{rowReference:"total",description:"Total en funcionamiento"},{rowReference:"promedio",description:"Total en funcionamiento"}]),i=n([]),l=async()=>{var t;try{if(r.value){const a={regionId:((t=r.value)==null?void 0:t.id)??r.value},c=await P(a);i.value=c.map(e=>(e.programPPL=e.programPPL?"Sí":"No",e.programPLS=e.programPLS?"Sí":"No",e.programCETC=e.programCETC?"Sí":"No",e.programCETSA=e.programCETSA?"Sí":"No",e.programCTA=e.programCTA?"Sí":"No",e.programSSJJ=e.programSSJJ?"Sí":"No",e.programCJ=e.programCJ?"Sí":"No",e))}else i.value=[]}catch(a){console.log(a)}};return g(async()=>{await l()}),(t,a)=>(f(),C(S,null,{default:d(()=>[s(v,{title:_.value,"section-value":x},null,8,["title"]),o("div",w,[s(T,{options:p.value,modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=c=>r.value=c)},null,8,["options","modelValue"]),s(J,{title:"Buscar centros",onExecuteAction:l})]),o("div",A,[s(R,{class:"card-information"},{default:d(()=>[h,L,b,y,N,B,M,V]),_:1})]),o("div",$,[s(E,{columns:m.value,rows:i.value},null,8,["columns","rows"])])]),_:1}))}};export{q as default};
