import{g as o,h as C,o as N,f as $,j as f,_ as h,E as x,y as I,G as A,m as i,b as a,z as p}from"./index-c8938612.js";import{_ as D}from"./CHeaderBar-52290071.js";import{_ as L}from"./CCard-96aa4865.js";import{_ as T}from"./CButton-1d70cd49.js";import{_ as q}from"./CTable-ae528a0b.js";import{s as B}from"./filterSituacion-1e2475b9.js";const E={class:"selected-options"},M={class:"information__section"},S=a("span",{class:"card-title"},"Registro eventos",-1),U=a("span",null," Cantidad y tipo de registros de eventos registrados ",-1),b={class:"content__section"},j=3,K={__name:"registroViolencia",setup(k){const c=B(),t=o({id:15,description:"Región Metropolitana de Santiago"}),m=o([]),l=o({id:16,description:"CCP Colina 1"}),_=o([]),r=o({id:1,description:"N° de eventos de riñas en el período."}),y=o([{id:1,description:"N° de eventos de riñas en el período."},{id:2,description:"N° de agresiones con resultado de muerte en el año t."},{id:3,description:"N° de funcionarios que en ejercicio de sus funciones resulten heridos o lesionados por uno o más internos."},{id:4,description:"N° de decesos por suicidio."},{id:5,description:"N° de decesos por enfermedades"},{id:6,description:"N° de decesos por otras causas."},{id:7,description:"N° de decesos por accidentes."}]),V=o("Estado situación carcelaria / Registro de eventos"),w=o([{rowReference:"year",description:"Año"},{rowReference:"month",description:"Mes"},{rowReference:"gender",description:"sexo"},{rowReference:"quantity",description:"Cantidad"}]),d=o([]),R=async n=>{if(!c.listadoRegiones.length>0){let e=await x();m.value=e,c.setRegionesList(e)}},g=async()=>{const n={regionId:t.value};_.value=await I(n)},v=async()=>{var n,e,s;try{if(t.value){const u={regionId:((n=t.value)==null?void 0:n.id)??t.value,carcelId:((e=l.value)==null?void 0:e.id)??l.value,aggresionTypeId:((s=r.value)==null?void 0:s.id)??r.value};d.value=await A(u)}else d.value=[]}catch(u){console.log(u)}};return C(async()=>{t.value=c.regionSelected.id,await R(),await g(),await v()}),(n,e)=>(N(),$(h,{class:"contenido-eventos"},{default:f(()=>[i(D,{title:V.value,"section-value":j},null,8,["title"]),a("div",E,[i(p,{class:"select-region",options:m.value,modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),onChangeValue:e[1]||(e[1]=s=>g())},null,8,["options","modelValue"]),i(p,{class:"select-carcel",options:_.value,modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=s=>l.value=s)},null,8,["options","modelValue"]),i(p,{class:"select-question",options:y.value,modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=s=>r.value=s)},null,8,["options","modelValue"]),i(T,{class:"btn-search",title:"",onExecuteAction:v})]),a("div",M,[i(L,{class:"card-information"},{default:f(()=>[S,U]),_:1})]),a("div",b,[i(q,{columns:w.value,rows:d.value},null,8,["columns","rows"])])]),_:1}))}};export{K as default};