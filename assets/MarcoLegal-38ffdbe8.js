import{s as h,f as i,D as F,_ as $,a as x,b as M}from"./files-91d4f3dd.js";import{r as s,g as I,h as V,o as _,e as f,w as r,_ as k,b as o,a as l,y as A,K as S}from"./index-835fa660.js";import{_ as B}from"./CHeaderBar-557e815f.js";import{_ as H}from"./CFileManagement-be6a5bf7.js";import{_ as L}from"./CTable-0b1ac0c1.js";import"./api-7944baea.js";const T=l("i",{class:"large material-icons"},"arrow_upward",-1),K={class:"content-document__section"},p=8,O=1,G={__name:"MarcoLegal",setup(R){const g=s("Marco legal"),m=s(),c=s(null),v=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),w=h(),u=s(w.documentData),y=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],b=()=>{},C=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",O),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await i.postFiles(e,a),await d()},D=()=>{m.value.open()},N=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},t={download:!0},n=await i.getFiles(a,t);window.open(n,"_blank")}else e.actionName},d=async()=>{let e=await i.getFiles({categoryId:p});e=e.map(a=>{let t=F.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=t,a.actions=y(),a}),u.value=e};return I(async()=>{await d()}),(e,a)=>{const t=V("router-view");return _(),f(k,null,{default:r(()=>[o(B,{title:g.value},null,8,["title"]),l("button",{onClick:D,class:"btn agregar__archivo"},[A("Agregar registro "),T]),o(M,{ref_key:"modalForm",ref:m,title:"Subir documento",onClose:b,onSubmit:a[1]||(a[1]=n=>C())},{default:r(()=>[o($,null,{default:r(()=>[o(x,null,{default:r(()=>[o(H,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),l("div",K,[o(t,null,{default:r(({Component:n})=>[(_(),f(S,null,[o(L,{columns:v.value,rows:u.value,"actions-active":"",onExecuteActionlist:N},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{G as default};
