import{s as x,f as i,D as A,_ as F,a as M,b as N}from"./files-06f3f86a.js";import{g as s,h,i as I,o as _,f,j as r,_ as V,m as o,b as l,K as k,L as S}from"./index-d5d29b93.js";import{_ as B}from"./CHeaderBar-c99abf49.js";import{_ as L}from"./CFileManagement-0f2aa20b.js";import{_ as R}from"./CTable-476ea2e0.js";const T=l("i",{class:"large material-icons"},"arrow_upward",-1),H={class:"content-document__section"},p=8,K=1,z={__name:"MarcoLegal",setup(O){const g=s("Marco legal"),u=s(),c=s(null),v=s([{rowReference:"createdBy",description:"Autor"},{rowReference:"name",description:"Título"},{rowReference:"fechaCreacion",description:"Año"},{rowReference:"resumen",description:"Contenido "}]),w=x(),d=s(w.documentData),y=()=>[{name:"descargar",iconName:"pageview"}],b=()=>{},C=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",K),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await i.postFiles(e,a),await m()},D=()=>{u.value.open()},$=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},t={download:!0},n=await i.getFiles(a,t);window.open(n,"_blank")}else e.actionName},m=async()=>{let e=await i.getFiles({categoryId:p});e=e.map(a=>{let t=A.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=t,a.actions=y(),a}),d.value=e};return h(async()=>{await m()}),(e,a)=>{const t=I("router-view");return _(),f(V,{class:"grafic-content"},{default:r(()=>[o(B,{title:g.value},null,8,["title"]),l("button",{onClick:D,class:"btn agregar__archivo"},[k("Agregar registro "),T]),o(N,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:b,onSubmit:a[1]||(a[1]=n=>C())},{default:r(()=>[o(F,null,{default:r(()=>[o(M,null,{default:r(()=>[o(L,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",H,[o(t,null,{default:r(({Component:n})=>[(_(),f(S,null,[o(R,{columns:v.value,rows:d.value,"actions-active":"",onExecuteActionlist:$},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{z as default};
