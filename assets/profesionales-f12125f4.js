import{s as $,g as l,h as R,o as b,f as T,j as u,_ as I,G as x,m as i,b as t,z as E}from"./index-4bd6d820.js";import{_ as M}from"./CHeaderBar-12e5ecf4.js";import{_ as p}from"./CCard-fa4c3a9e.js";import{_ as V}from"./CButton-8cd8b6c3.js";import{_ as h}from"./CTable-388a7dda.js";import{s as j}from"./filterSituacion-1be6527c.js";const y="/dmm/dimension-history-profesional",B=async(e,r)=>{if(e!=null&&e.id){let _=`${y}/${e.id}`;return $(_,"GET",null,r)}let s=y,o=null;return e!=null&&e.regionId&&(o?o=`${o}&regionId=${e.regionId}`:o=`regionId=${e.regionId}`),o&&(s=`${s}?${o}`),$(s,"GET",null,r)};const G={class:"selected-options"},H={class:"information__section"},L=t("span",{class:"card-title"},"Dotación efectiva del personal areas de intervención",-1),P=t("span",null," Dotación de licencias efectiva del personal, en base a la ubicación física y desempeño ",-1),U={class:"content__section"},k=t("span",{class:"card-title"},"Dotación efectiva del personal psicología",-1),A={class:"content__section"},C=t("span",{class:"card-title"},"Dotación efectiva del personal asistente social",-1),N=3,O={__name:"profesionales",setup(e){const r=j(),s=l({id:15,description:"Región Metropolitana de Santiago"}),o=l([]),_=l("Estado situación carcelaria / Personal areas de intervención"),m=l([{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"profesionalHombre",description:"Hombre"},{rowReference:"profesionalMujer",description:"Mujer"},{rowReference:"profesionalTotal",description:"Total"}]),f=l([]),d=l([]),D=async c=>{if(!r.listadoRegiones.length>0){let n=await x();o.value=n,r.setRegionesList(n)}},v=async()=>{var c;try{if(s.value){const n={regionId:((c=s.value)==null?void 0:c.id)??s.value};let w=(await B(n)).map(a=>(a.profesionalTotal=a.profesionalHombre+a.profesionalMujer,a));f.value=w.filter(a=>a.profesionalType===1),d.value=w.filter(a=>a.profesionalType===2)}else f.value=[],d.value=[]}catch(n){console.log(n)}};return R(async()=>{await D(),await v()}),(c,n)=>(b(),T(I,null,{default:u(()=>[i(M,{title:_.value,"section-value":N},null,8,["title"]),t("div",G,[i(E,{options:o.value,modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=g=>s.value=g)},null,8,["options","modelValue"]),i(V,{title:"Buscar profesionales",onExecuteAction:v})]),t("div",H,[i(p,{class:"card-information"},{default:u(()=>[L,P]),_:1})]),t("div",U,[i(p,{class:"card-information"},{default:u(()=>[k]),_:1}),i(h,{columns:m.value,rows:f.value},null,8,["columns","rows"])]),t("div",A,[i(p,{class:"card-information"},{default:u(()=>[C]),_:1}),i(h,{columns:m.value,rows:d.value},null,8,["columns","rows"])])]),_:1}))}};export{O as default};