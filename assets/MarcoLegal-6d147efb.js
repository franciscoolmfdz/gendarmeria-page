import{s as N,f as i,D as $,_ as h,a as x,b as M}from"./files-3e35fc25.js";import{r as s,d as I,q as V,o as _,e as p,w as r,_ as k,b as o,a as l,s as A,K as S}from"./index-a9a230e5.js";import{_ as B}from"./CHeaderBar-a689629b.js";import{_ as H}from"./CFileManagement-d5c86bf7.js";import{_ as L}from"./CTable-30bfad90.js";import"./api-7944baea.js";const T=l("i",{class:"large material-icons"},"arrow_upward",-1),q={class:"content-document__section"},f=8,K=1,G={__name:"MarcoLegal",setup(O){const g=s("Marco legal"),u=s(),c=s(null),v=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),w=N(),m=s(w.documentData),y=()=>[{name:"descargar",iconName:"pageview"}],b=()=>{},C=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",f),e.append("usrId",K),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await i.postFiles(e,a),await d()},D=()=>{u.value.open()},F=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},t={download:!0},n=await i.getFiles(a,t);window.open(n,"_blank")}else e.actionName},d=async()=>{let e=await i.getFiles({categoryId:f});e=e.map(a=>{let t=$.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=t,a.actions=y(),a}),m.value=e};return I(async()=>{await d()}),(e,a)=>{const t=V("router-view");return _(),p(k,null,{default:r(()=>[o(B,{title:g.value},null,8,["title"]),l("button",{onClick:D,class:"btn agregar__archivo"},[A("Agregar registro "),T]),o(M,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:b,onSubmit:a[1]||(a[1]=n=>C())},{default:r(()=>[o(h,null,{default:r(()=>[o(x,null,{default:r(()=>[o(H,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",q,[o(t,null,{default:r(({Component:n})=>[(_(),p(S,null,[o(L,{columns:v.value,rows:m.value,"actions-active":"",onExecuteActionlist:F},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{G as default};
