import{s as F,f as i,D as N,_ as $,a as x,b as M}from"./files-98c32937.js";import{h as s,m as I,p as V,o as _,f,j as r,_ as k,g as o,b as l,J as A,K as S}from"./index-c619b897.js";import{_ as B}from"./CHeaderBar-1d33da3e.js";import{_ as H}from"./CFileManagement-0a76a3d8.js";import{_ as L}from"./CTable-0e1712c0.js";const T=l("i",{class:"large material-icons"},"arrow_upward",-1),J={class:"content-document__section"},p=8,K=1,z={__name:"MarcoLegal",setup(O){const g=s("Marco legal"),u=s(),c=s(null),v=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),w=F(),m=s(w.documentData),y=()=>[{name:"descargar",iconName:"pageview"}],b=()=>{},C=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",K),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await i.postFiles(e,a),await d()},D=()=>{u.value.open()},h=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},t={download:!0},n=await i.getFiles(a,t);window.open(n,"_blank")}else e.actionName},d=async()=>{let e=await i.getFiles({categoryId:p});e=e.map(a=>{let t=N.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=t,a.actions=y(),a}),m.value=e};return I(async()=>{await d()}),(e,a)=>{const t=V("router-view");return _(),f(k,{class:"grafic-content"},{default:r(()=>[o(B,{title:g.value},null,8,["title"]),l("button",{onClick:D,class:"btn agregar__archivo"},[A("Agregar registro "),T]),o(M,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:b,onSubmit:a[1]||(a[1]=n=>C())},{default:r(()=>[o($,null,{default:r(()=>[o(x,null,{default:r(()=>[o(H,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",J,[o(t,null,{default:r(({Component:n})=>[(_(),f(S,null,[o(L,{columns:v.value,rows:m.value,"actions-active":"",onExecuteActionlist:h},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{z as default};