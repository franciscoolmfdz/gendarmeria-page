import{s as F,f as i,D as $,_ as h,a as x,b as I}from"./files-c7a20b31.js";import{r as s,f as V,q as k,o as _,d as f,w as r,_ as A,b as o,a as l,s as S,K as M}from"./index-550390c3.js";import{_ as B}from"./CHeaderBar-e1a2dee2.js";import{_ as G}from"./CFileManagement-771d8973.js";import{_ as H}from"./CTable-e1ebd6b0.js";import"./api-7944baea.js";const T=l("i",{class:"large material-icons"},"arrow_upward",-1),q={class:"content-document__section"},p=5,K=1,z={__name:"GestionCarcel",setup(O){const v=s("Gestión de carcel"),m=s(),c=s(null),g=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),w=F(),u=s(w.documentData),y=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],b=()=>{},C=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",K),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await i.postFiles(e,a),await d()},D=()=>{m.value.open()},N=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},t={download:!0},n=await i.getFiles(a,t);window.open(n,"_blank")}else e.actionName},d=async()=>{let e=await i.getFiles({categoryId:p});e=e.map(a=>{let t=$.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=t,a.actions=y(),a}),u.value=e};return V(async()=>{await d()}),(e,a)=>{const t=k("router-view");return _(),f(A,null,{default:r(()=>[o(B,{title:v.value},null,8,["title"]),l("button",{onClick:D,class:"btn agregar__archivo"},[S("Agregar registro "),T]),o(I,{ref_key:"modalForm",ref:m,title:"Subir documento",onClose:b,onSubmit:a[1]||(a[1]=n=>C())},{default:r(()=>[o(h,null,{default:r(()=>[o(x,null,{default:r(()=>[o(G,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",q,[o(t,null,{default:r(({Component:n})=>[(_(),f(M,null,[o(H,{columns:g.value,rows:u.value,"actions-active":"",onExecuteActionlist:N},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{z as default};
