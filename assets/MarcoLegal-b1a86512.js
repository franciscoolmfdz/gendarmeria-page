import{s as V,f as l,D as $,_ as h,a as k,b as A}from"./files-fea752b7.js";import{g as s,u as M,r as I,h as S,i as B,o as d,f,j as r,_ as R,l as a,c as T,J as H,a as L,b as g,K as J}from"./index-d0b13c49.js";import{_ as K}from"./CHeaderBar-9f7ed46f.js";import{_ as O}from"./CFileManagement-7ca01c3e.js";import{_ as U}from"./CTable-c9f34f20.js";const j=g("i",{class:"large material-icons"},"arrow_upward",-1),q={class:"content-document__section"},p=8,z=1,Z={__name:"MarcoLegal",setup(G){const v=s("Marco legal"),u=s(),c=s(null),w=M(),i=I({disabledEdit:!1}),b=s([{rowReference:"createdBy",description:"Autor"},{rowReference:"name",description:"Título"},{rowReference:"fechaCreacion",description:"Año"},{rowReference:"resumen",description:"Contenido "}]),y=V(),m=s(y.documentData),C=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],D=()=>{w.user.restrictions.filter(t=>t.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},F=()=>{},N=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",z),e.append("extendedData",JSON.stringify({period:"2023-07"}));const t={ignoreHeader:!0};await l.postFiles(e,t),await _()},E=()=>{u.value.open()},x=async e=>{if(e.actionName==="descargar"){const t={id:e.request.id},o={download:!0},n=await l.getFiles(t,o);window.open(n,"_blank")}else e.actionName},_=async()=>{let e=await l.getFiles({categoryId:p});e=e.map(t=>{let o=$.fromISO(t.createdAt).toFormat("dd/MM/yyyy HH:mm");return t.fechaCreacion=o,t.actions=C(),t}),m.value=e};return S(async()=>{D(),await _()}),(e,t)=>{const o=B("router-view");return d(),f(R,null,{default:r(()=>[a(K,{title:v.value},null,8,["title"]),i.disabledEdit?L("",!0):(d(),T("button",{key:0,onClick:E,class:"btn agregar__archivo"},[H("Agregar registro "),j])),a(A,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:F,onSubmit:t[1]||(t[1]=n=>N())},{default:r(()=>[a(h,null,{default:r(()=>[a(k,null,{default:r(()=>[a(O,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),g("div",q,[a(o,null,{default:r(({Component:n})=>[(d(),f(J,null,[a(U,{columns:b.value,rows:m.value,"actions-active":"",onExecuteActionlist:x},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{Z as default};
