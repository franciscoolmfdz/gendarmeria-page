import{s as $,f as l,D as x,_ as F,a as M,b as A}from"./files-b6ba613d.js";import{g as o,h as B,i as I,o as _,f,j as c,_ as N,m as t,n as S,b as V,K as h}from"./index-1bb1a5ad.js";import{_ as k}from"./CHeaderBar-fc183519.js";import{_ as R}from"./CFileManagement-e1004cb7.js";import{_ as H}from"./CTable-96cf030b.js";const L={class:"content-document__section"},u=8,T=1,J={__name:"MarcoLegal",setup(K){const r=o(!1),p=o("Marco legal"),v=o(),i=o(null),y=o([{rowReference:"createdBy",description:"Autor"},{rowReference:"name",description:"Título"},{rowReference:"fechaCreacion",description:"Año"},{rowReference:"resumen",description:"Contenido "}]),g=$(),d=o(g.documentData),w=()=>[{name:"descargar",iconName:"pageview"}],D=()=>{},C=async()=>{const a=new FormData;a.append("archivo",i.value),a.append("categoryId",u),a.append("usrId",T),a.append("extendedData",JSON.stringify({period:"2023-07"}));const e={ignoreHeader:!0};await l.postFiles(a,e),await m()},b=async a=>{if(a.actionName==="descargar"){const e={id:a.request.id},n={download:!0},s=await l.getFiles(e,n);window.open(s,"_blank")}else a.actionName},m=async()=>{let a=await l.getFiles({categoryId:u});a=a.map(e=>{W;let n=x.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.createdBy=e.extendedData.createdBy,e.fechaCreacion=n,e.resumen=e.extendedData.resumen,e.actions=w(),e}),d.value=a};return B(async()=>{r.value=!0,await m(),r.value=!1}),(a,e)=>{const n=I("router-view");return _(),f(N,{class:"grafic-content"},{default:c(()=>[t(S,{"active-spin":r.value},null,8,["active-spin"]),t(k,{title:p.value,"section-value":u},null,8,["title"]),t(A,{ref_key:"modalForm",ref:v,title:"Subir documento",onClose:D,onSubmit:e[1]||(e[1]=s=>C())},{default:c(()=>[t(F,null,{default:c(()=>[t(M,null,{default:c(()=>[t(R,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=s=>i.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),V("div",L,[t(n,null,{default:c(({Component:s})=>[(_(),f(h,null,[t(H,{columns:y.value,rows:d.value,"actions-active":"",onExecuteActionlist:b},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{J as default};