import{s as $,f as i,D as x,_ as F,a as M,b as A}from"./files-fa3c7bf2.js";import{g as o,h as B,i as I,o as _,f,j as c,_ as N,m as t,n as S,b as V,K as h}from"./index-caf32ba9.js";import{_ as k}from"./CHeaderBar-d352756e.js";import{_ as R}from"./CFileManagement-fd408fcc.js";import{_ as H}from"./CTable-0b9142cc.js";const L={class:"content-document__section"},u=8,T=1,J={__name:"MarcoLegal",setup(K){const r=o(!1),p=o("Marco legal"),v=o(),l=o(null),g=o([{rowReference:"createdBy",description:"Autor"},{rowReference:"name",description:"Título"},{rowReference:"fechaCreacion",description:"Año"},{rowReference:"resumen",description:"Contenido "}]),y=$(),d=o(y.documentData),w=()=>[{name:"descargar",iconName:"pageview"}],D=()=>{},C=async()=>{const a=new FormData;a.append("archivo",l.value),a.append("categoryId",u),a.append("usrId",T),a.append("extendedData",JSON.stringify({period:"2023-07"}));const e={ignoreHeader:!0};await i.postFiles(a,e),await m()},b=async a=>{if(a.actionName==="descargar"){const e={id:a.request.id},n={download:!0},s=await i.getFiles(e,n);window.open(s,"_blank")}else a.actionName},m=async()=>{let a=await i.getFiles({categoryId:u});a=a.map(e=>{console.log(e);let n=x.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.createdBy=e.extendedData.createdBy,e.fechaCreacion=n,e.resumen=e.extendedData.resumen,e.actions=w(),e}),d.value=a};return B(async()=>{r.value=!0,await m(),r.value=!1}),(a,e)=>{const n=I("router-view");return _(),f(N,{class:"grafic-content"},{default:c(()=>[t(S,{"active-spin":r.value},null,8,["active-spin"]),t(k,{title:p.value,"section-value":u},null,8,["title"]),t(A,{ref_key:"modalForm",ref:v,title:"Subir documento",onClose:D,onSubmit:e[1]||(e[1]=s=>C())},{default:c(()=>[t(F,null,{default:c(()=>[t(M,null,{default:c(()=>[t(R,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),V("div",L,[t(n,null,{default:c(({Component:s})=>[(_(),f(h,null,[t(H,{columns:g.value,rows:d.value,"actions-active":"",onExecuteActionlist:b},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{J as default};
