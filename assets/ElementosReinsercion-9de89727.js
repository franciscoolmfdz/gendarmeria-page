import{s as F,f as i,D as $,_ as x,a as I,b as V}from"./files-d71488bb.js";import{r as t,g as k,h as A,o as _,e as f,w as r,_ as S,b as o,a as l,y as E,K as M}from"./index-9257cc1f.js";import{_ as R}from"./CHeaderBar-f6f0f2a1.js";import{_ as B}from"./CFileManagement-5e4b8ca9.js";import{_ as H}from"./CTable-07a60b46.js";import"./api-7944baea.js";const T=l("i",{class:"large material-icons"},"arrow_upward",-1),K={class:"content-document__section"},p=4,G={__name:"ElementosReinsercion",setup(O){const v=t("Elementos de reinserción"),g=t(1),m=t(),c=t(null),w=t([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),y=F(),u=t(y.documentData),b=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],C=()=>{},D=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",g),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await i.postFiles(e,a),await d()},N=()=>{m.value.open()},h=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},n={download:!0},s=await i.getFiles(a,n);window.open(s,"_blank")}else e.actionName},d=async()=>{let e=await i.getFiles({categoryId:p});e=e.map(a=>{let n=$.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=n,a.actions=b(),a}),u.value=e};return k(async()=>{await d()}),(e,a)=>{const n=A("router-view");return _(),f(S,null,{default:r(()=>[o(R,{title:v.value},null,8,["title"]),l("button",{onClick:N,class:"btn agregar__archivo"},[E("Agregar registro "),T]),o(V,{ref_key:"modalForm",ref:m,title:"Subir documento",onClose:C,onSubmit:a[1]||(a[1]=s=>D())},{default:r(()=>[o(x,null,{default:r(()=>[o(I,null,{default:r(()=>[o(B,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=s=>c.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",K,[o(n,null,{default:r(({Component:s})=>[(_(),f(M,null,[o(H,{columns:w.value,rows:u.value,"actions-active":"",onExecuteActionlist:h},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{G as default};
