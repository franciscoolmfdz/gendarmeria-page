import{s as x,f as l,D as V,_ as $,a as A,b as I}from"./files-cafb3d31.js";import{h as o,i as S,r as T,k as B,l as M,o as d,f,j as r,_ as H,g as a,c as R,A as K,a as O,b as v,K as U}from"./index-b4110eaa.js";import{_ as j}from"./CHeaderBar-621bef2b.js";import{_ as q}from"./CFileManagement-2797b47e.js";import{_ as J}from"./CTable-5317b6c9.js";import"./api-ec658a74.js";const L=v("i",{class:"large material-icons"},"arrow_upward",-1),z={class:"content-document__section"},p=6,ee={__name:"DimensionTerritorial",setup(G){const g=o("Dimensión territorial"),b=S(),i=T({disabledEdit:!1}),w=o(1),u=o(),c=o(null),y=o([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),D=x(),m=o(D.documentData),C=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],F=()=>{},N=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",w),e.append("extendedData",JSON.stringify({period:"2023-07"}));const t={ignoreHeader:!0};await l.postFiles(e,t),await _()},h=()=>{b.user.restrictions.filter(t=>t.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},E=()=>{u.value.open()},k=async e=>{if(e.actionName==="descargar"){const t={id:e.request.id},n={download:!0},s=await l.getFiles(t,n);window.open(s,"_blank")}else e.actionName},_=async()=>{let e=await l.getFiles({categoryId:p});e=e.map(t=>{let n=V.fromISO(t.createdAt).toFormat("dd/MM/yyyy HH:mm");return t.fechaCreacion=n,t.actions=C(),t}),m.value=e};return B(async()=>{h(),await _()}),(e,t)=>{const n=M("router-view");return d(),f(H,null,{default:r(()=>[a(j,{title:g.value},null,8,["title"]),i.disabledEdit?O("",!0):(d(),R("button",{key:0,onClick:E,class:"btn agregar__archivo"},[K("Agregar registro "),L])),a(I,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:F,onSubmit:t[1]||(t[1]=s=>N())},{default:r(()=>[a($,null,{default:r(()=>[a(A,null,{default:r(()=>[a(q,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=s=>c.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),v("div",z,[a(n,null,{default:r(({Component:s})=>[(d(),f(U,null,[a(J,{columns:y.value,rows:m.value,"actions-active":"",onExecuteActionlist:k},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{ee as default};
