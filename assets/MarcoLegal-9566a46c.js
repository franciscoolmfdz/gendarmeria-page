import{s as F,f as i,D as N,_ as $,a as x,b as M}from"./files-5c31efa6.js";import{h as s,k,l as A,o as _,f,j as r,_ as I,g as o,b as l,A as V,K as S}from"./index-3d38bb09.js";import{_ as B}from"./CHeaderBar-91227b8c.js";import{_ as H}from"./CFileManagement-bfe5c0c7.js";import{_ as L}from"./CTable-431d4ee6.js";import"./api-ec658a74.js";const T=l("i",{class:"large material-icons"},"arrow_upward",-1),K={class:"content-document__section"},p=8,O=1,G={__name:"MarcoLegal",setup(R){const g=s("Marco legal"),u=s(),c=s(null),v=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),w=F(),m=s(w.documentData),y=()=>[{name:"descargar",iconName:"pageview"}],b=()=>{},C=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",O),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await i.postFiles(e,a),await d()},D=()=>{u.value.open()},h=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},t={download:!0},n=await i.getFiles(a,t);window.open(n,"_blank")}else e.actionName},d=async()=>{let e=await i.getFiles({categoryId:p});e=e.map(a=>{let t=N.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=t,a.actions=y(),a}),m.value=e};return k(async()=>{await d()}),(e,a)=>{const t=A("router-view");return _(),f(I,null,{default:r(()=>[o(B,{title:g.value},null,8,["title"]),l("button",{onClick:D,class:"btn agregar__archivo"},[V("Agregar registro "),T]),o(M,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:b,onSubmit:a[1]||(a[1]=n=>C())},{default:r(()=>[o($,null,{default:r(()=>[o(x,null,{default:r(()=>[o(H,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",K,[o(t,null,{default:r(({Component:n})=>[(_(),f(S,null,[o(L,{columns:v.value,rows:m.value,"actions-active":"",onExecuteActionlist:h},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{G as default};
