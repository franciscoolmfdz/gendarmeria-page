import{s as x,f as c,D as F,_ as $,a as I,b as V}from"./files-ef6c00e8.js";import{r as t,g as k,h as A,o as _,e as f,w as r,_ as S,b as o,a as l,x as T,K as M}from"./index-986a4269.js";import{_ as B}from"./CHeaderBar-e3b0e061.js";import{_ as H}from"./CFileManagement-393ab59e.js";import{_ as K}from"./CTable-23b7abb6.js";import"./api-7944baea.js";const O=l("i",{class:"large material-icons"},"arrow_upward",-1),R={class:"content-document__section"},p=6,G={__name:"DimensionTerritorial",setup(U){const v=t("Dimensión territorial"),g=t(1),m=t(),i=t(null),w=t([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),y=x(),u=t(y.documentData),b=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],D=()=>{},C=async()=>{const e=new FormData;e.append("archivo",i.value),e.append("categoryId",p),e.append("usrId",g),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await c.postFiles(e,a),await d()},N=()=>{m.value.open()},h=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},n={download:!0},s=await c.getFiles(a,n);window.open(s,"_blank")}else e.actionName},d=async()=>{let e=await c.getFiles({categoryId:p});e=e.map(a=>{let n=F.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=n,a.actions=b(),a}),u.value=e};return k(async()=>{await d()}),(e,a)=>{const n=A("router-view");return _(),f(S,null,{default:r(()=>[o(B,{title:v.value},null,8,["title"]),l("button",{onClick:N,class:"btn agregar__archivo"},[T("Agregar registro "),O]),o(V,{ref_key:"modalForm",ref:m,title:"Subir documento",onClose:D,onSubmit:a[1]||(a[1]=s=>C())},{default:r(()=>[o($,null,{default:r(()=>[o(I,null,{default:r(()=>[o(H,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=s=>i.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",R,[o(n,null,{default:r(({Component:s})=>[(_(),f(M,null,[o(K,{columns:w.value,rows:u.value,"actions-active":"",onExecuteActionlist:h},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{G as default};
