import{i as $,h as r,k as h,o as D,f as R,j as d,_ as T,g as a,b as n}from"./index-56444a41.js";import{_ as A}from"./CHeaderBar-ce0ad327.js";import{a as I,b as M,_ as f}from"./CCard-394f244e.js";import{_ as b}from"./CTable-f867ef9b.js";import{a as y}from"./api-ec658a74.js";const w="/dmm/dimension-history-profesional",L=async(e,i)=>{if(e!=null&&e.id){let c=`${w}/${e.id}`;return y(c,"GET",null,i)}let l=w,o=null;return e!=null&&e.regionId&&(o?o=`${o}&regionId=${e.regionId}`:o=`regionId=${e.regionId}`),o&&(l=`${l}?${o}`),y(l,"GET",null,i)};const B={class:"selected-options"},C={class:"information__section"},V=n("span",{class:"card-title"},"Dotación efectiva del personal areas de intervención",-1),x=n("span",null," Dotación de licencias efectiva del personal, en base a la ubicación física y desempeño ",-1),E={class:"content__section"},j=n("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),G={class:"content__section"},H=n("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),P=3,z={__name:"profesionales",setup(e){$();const i=r({id:15,description:"Región Metropolitana de Santiago"}),l=r([{id:1,description:"Arica y Parinacota"},{id:2,description:"Tarapacá"},{id:3,description:"Antofagasta"},{id:4,description:"Atacama"},{id:5,description:"Coquimbo"},{id:6,description:"Valparaíso"},{id:7,description:"Libertador General Bernardo O’Higgins"},{id:8,description:"Maule"},{id:9,description:"Biobío"},{id:10,description:"La Araucanía"},{id:11,description:"Los Ríos"},{id:12,description:"Los Lagos"},{id:13,description:"Aysén del Gral. Carlos Ibáñez del Campo"},{id:14,description:"Magallanes y de la Antártica Chilena"},{id:15,description:"Región Metropolitana de Santiago"},{id:16,description:"Region de ñuble"}]),o=r("Estado situación carcelaria / Personal areas de intervención"),c=r([{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"},{rowReference:"profesionalTotal",description:"Total"}]),p=r([]),u=r([]),m=async()=>{var _;try{if(i.value){const t={regionId:((_=i.value)==null?void 0:_.id)??i.value};let g=(await L(t)).map(s=>(s.profesionalTotal=s.profesionalHombre+s.profesionalMujer,s));p.value=g.filter(s=>s.profesionalType===1),u.value=g.filter(s=>s.profesionalType===2)}else p.value=[],u.value=[]}catch(t){console.log(t)}};return h(async()=>{await m()}),(_,t)=>(D(),R(T,null,{default:d(()=>[a(A,{title:o.value,"section-value":P},null,8,["title"]),n("div",B,[a(I,{options:l.value,modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=v=>i.value=v)},null,8,["options","modelValue"]),a(M,{title:"Buscar profesionales",onExecuteAction:m})]),n("div",C,[a(f,{class:"card-information"},{default:d(()=>[V,x]),_:1})]),n("div",E,[a(f,{class:"card-information"},{default:d(()=>[j]),_:1}),a(b,{columns:c.value,rows:p.value},null,8,["columns","rows"])]),n("div",G,[a(f,{class:"card-information"},{default:d(()=>[H]),_:1}),a(b,{columns:c.value,rows:u.value},null,8,["columns","rows"])])]),_:1}))}};export{z as default};
