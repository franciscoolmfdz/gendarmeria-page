import{s as h,f as i,D as F,_ as $,a as x,b as S}from"./files-91d4f3dd.js";import{r as s,g as I,h as V,o as _,e as f,w as r,_ as k,b as o,a as l,y as A,K as M}from"./index-835fa660.js";import{_ as B}from"./CHeaderBar-557e815f.js";import{_ as H}from"./CFileManagement-be6a5bf7.js";import{_ as T}from"./CTable-0b1ac0c1.js";import"./api-7944baea.js";const E=l("i",{class:"large material-icons"},"arrow_upward",-1),K={class:"content-document__section"},p=3,O=1,G={__name:"SituacionCarcelaria",setup(R){const v=s("Estado situación carcelaria"),u=s(),c=s(null),g=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),w=h(),m=s(w.documentData),y=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],b=()=>{},C=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",O),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await i.postFiles(e,a),await d()},D=()=>{u.value.open()},N=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},t={download:!0},n=await i.getFiles(a,t);window.open(n,"_blank")}else e.actionName},d=async()=>{let e=await i.getFiles({categoryId:p});e=e.map(a=>{let t=F.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=t,a.actions=y(),a}),m.value=e};return I(async()=>{await d()}),(e,a)=>{const t=V("router-view");return _(),f(k,null,{default:r(()=>[o(B,{title:v.value},null,8,["title"]),l("button",{onClick:D,class:"btn agregar__archivo"},[A("Agregar registro "),E]),o(S,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:b,onSubmit:a[1]||(a[1]=n=>C())},{default:r(()=>[o($,null,{default:r(()=>[o(x,null,{default:r(()=>[o(H,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",K,[o(t,null,{default:r(({Component:n})=>[(_(),f(M,null,[o(T,{columns:g.value,rows:m.value,"actions-active":"",onExecuteActionlist:N},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{G as default};
