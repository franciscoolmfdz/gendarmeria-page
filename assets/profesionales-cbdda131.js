import{s as h,g as c,h as R,o as b,f as T,j as u,_ as I,E,m as i,b as t,z as x}from"./index-5ea9ca80.js";import{_ as M}from"./CHeaderBar-7cb89305.js";import{_ as p}from"./CCard-e5dc31a5.js";import{_ as V}from"./CButton-499e7585.js";import{_ as $}from"./CTable-07b92772.js";import{s as j}from"./filterSituacion-cfdfb0d3.js";const y="/dmm/dimension-history-profesional",B=async(e,l)=>{if(e!=null&&e.id){let _=`${y}/${e.id}`;return h(_,"GET",null,l)}let s=y,o=null;return e!=null&&e.regionId&&(o?o=`${o}&regionId=${e.regionId}`:o=`regionId=${e.regionId}`),o&&(s=`${s}?${o}`),h(s,"GET",null,l)};const H={class:"selected-options"},L={class:"information__section"},P=t("span",{class:"card-title"},"Dotación efectiva del personal areas de intervención",-1),S=t("span",null," Dotación de licencias efectiva del personal, en base a la ubicación física y desempeño ",-1),U={class:"content__section"},k=t("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),A={class:"content__section"},C=t("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),G=3,O={__name:"profesionales",setup(e){const l=j(),s=c({id:15,description:"Región Metropolitana de Santiago"}),o=c([]),_=c("Estado situación carcelaria / Personal areas de intervención"),m=c([{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"},{rowReference:"profesionalTotal",description:"Total"}]),d=c([]),f=c([]),D=async r=>{if(!l.listadoRegiones.length>0){let n=await E();o.value=n,l.setRegionesList(n)}},v=async()=>{var r;try{if(s.value){const n={regionId:((r=s.value)==null?void 0:r.id)??s.value};let w=(await B(n)).map(a=>(a.profesionalTotal=a.profesionalHombre+a.profesionalMujer,a));d.value=w.filter(a=>a.profesionalType===1),f.value=w.filter(a=>a.profesionalType===2)}else d.value=[],f.value=[]}catch(n){console.log(n)}};return R(async()=>{s.value=l.regionSelected,await D(),await v()}),(r,n)=>(b(),T(I,{class:"contenido-profesionales"},{default:u(()=>[i(M,{title:_.value,"section-value":G},null,8,["title"]),t("div",H,[i(x,{class:"select-region",options:o.value,modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=g=>s.value=g)},null,8,["options","modelValue"]),i(V,{class:"btn-search",title:"",onExecuteAction:v})]),t("div",L,[i(p,{class:"card-information"},{default:u(()=>[P,S]),_:1})]),t("div",U,[i(p,{class:"card-information"},{default:u(()=>[k]),_:1}),i($,{columns:m.value,rows:d.value},null,8,["columns","rows"])]),t("div",A,[i(p,{class:"card-information"},{default:u(()=>[C]),_:1}),i($,{columns:m.value,rows:f.value},null,8,["columns","rows"])])]),_:1}))}};export{O as default};
