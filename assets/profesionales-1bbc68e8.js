import{r,g as $,o as h,e as D,w as d,_ as R,b as a,a as n}from"./index-c0caa7b8.js";import{_ as T}from"./CHeaderBar-e2a8dc15.js";import{u as A,a as I,b as M,_ as f}from"./CCard-d62b6639.js";import{_ as b}from"./CTable-dd271ca6.js";import{a as w}from"./api-7944baea.js";const y="/dmm/dimension-history-profesional",L=async(e,o)=>{if(e!=null&&e.id){let c=`${y}/${e.id}`;return w(c,"GET",null,o)}let l=y,i=null;return e!=null&&e.regionId&&(i?i=`${i}&regionId=${e.regionId}`:i=`regionId=${e.regionId}`),i&&(l=`${l}?${i}`),w(l,"GET",null,o)};const B={class:"selected-options"},C={class:"information__section"},V=n("span",{class:"card-title"},"Dotación efectiva del personal areas de intervención",-1),x=n("span",null," Dotación de licencias efectiva del personal, en base a la ubicación física y desempeño ",-1),E={class:"content__section"},G=n("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),H={class:"content__section"},P=n("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),j=3,z={__name:"profesionales",setup(e){A();const o=r({id:15,description:"Región Metropolitana de Santiago"}),l=r([{id:1,description:"Arica y Parinacota"},{id:2,description:"Tarapacá"},{id:3,description:"Antofagasta"},{id:4,description:"Atacama"},{id:5,description:"Coquimbo"},{id:6,description:"Valparaíso"},{id:7,description:"Libertador General Bernardo O’Higgins"},{id:8,description:"Maule"},{id:9,description:"Biobío"},{id:10,description:"La Araucanía"},{id:11,description:"Los Ríos"},{id:12,description:"Los Lagos"},{id:13,description:"Aysén del Gral. Carlos Ibáñez del Campo"},{id:14,description:"Magallanes y de la Antártica Chilena"},{id:15,description:"Región Metropolitana de Santiago"},{id:16,description:"Region de ñuble"}]),i=r("Estado situación carcelaria / Personal areas de intervención"),c=r([{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"},{rowReference:"profesionalTotal",description:"Total"}]),p=r([]),u=r([]),m=async()=>{var _;try{if(o.value){const t={regionId:((_=o.value)==null?void 0:_.id)??o.value};let g=(await L(t)).map(s=>(s.profesionalTotal=s.profesionalHombre+s.profesionalMujer,s));p.value=g.filter(s=>s.profesionalType===1),u.value=g.filter(s=>s.profesionalType===2)}else p.value=[],u.value=[]}catch(t){console.log(t)}};return $(async()=>{await m()}),(_,t)=>(h(),D(R,null,{default:d(()=>[a(T,{title:i.value,"section-value":j},null,8,["title"]),n("div",B,[a(I,{options:l.value,modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=v=>o.value=v)},null,8,["options","modelValue"]),a(M,{title:"Buscar profesionales",onExecuteAction:m})]),n("div",C,[a(f,{class:"card-information"},{default:d(()=>[V,x]),_:1})]),n("div",E,[a(f,{class:"card-information"},{default:d(()=>[G]),_:1}),a(b,{columns:c.value,rows:p.value},null,8,["columns","rows"])]),n("div",H,[a(f,{class:"card-information"},{default:d(()=>[P]),_:1}),a(b,{columns:c.value,rows:u.value},null,8,["columns","rows"])])]),_:1}))}};export{z as default};
