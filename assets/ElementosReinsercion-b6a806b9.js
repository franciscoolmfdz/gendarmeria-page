import{s as V,f as l,D as $,_ as k,a as I,b as S}from"./files-b2a840e5.js";import{g as o,u as A,r as R,h as B,i as M,o as d,f,j as r,_ as H,m as a,c as T,K,a as L,b as v,L as O}from"./index-b814b26e.js";import{_ as U}from"./CHeaderBar-cd50a8db.js";import{_ as j}from"./CFileManagement-f7f3d538.js";import{_ as q}from"./CTable-f9feddf4.js";const J=v("i",{class:"large material-icons"},"arrow_upward",-1),z={class:"content-document__section"},p=4,Z={__name:"ElementosReinsercion",setup(G){const g=o("Elementos de reinserción"),b=o(1),u=o(),c=o(null),w=A(),i=R({disabledEdit:!1}),y=o([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),E=V(),m=o(E.documentData),C=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],F=()=>{w.user.restrictions.filter(t=>t.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},N=()=>{},D=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",b),e.append("extendedData",JSON.stringify({period:"2023-07"}));const t={ignoreHeader:!0};await l.postFiles(e,t),await _()},h=()=>{u.value.open()},x=async e=>{if(e.actionName==="descargar"){const t={id:e.request.id},n={download:!0},s=await l.getFiles(t,n);window.open(s,"_blank")}else e.actionName},_=async()=>{let e=await l.getFiles({categoryId:p});e=e.map(t=>{let n=$.fromISO(t.createdAt).toFormat("dd/MM/yyyy HH:mm");return t.fechaCreacion=n,t.actions=C(),t}),m.value=e};return B(async()=>{F(),await _()}),(e,t)=>{const n=M("router-view");return d(),f(H,null,{default:r(()=>[a(U,{title:g.value},null,8,["title"]),i.disabledEdit?L("",!0):(d(),T("button",{key:0,onClick:h,class:"btn agregar__archivo"},[K("Agregar registro "),J])),a(S,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:N,onSubmit:t[1]||(t[1]=s=>D())},{default:r(()=>[a(k,null,{default:r(()=>[a(I,null,{default:r(()=>[a(j,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=s=>c.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),v("div",z,[a(n,null,{default:r(({Component:s})=>[(d(),f(O,null,[a(q,{columns:y.value,rows:m.value,"actions-active":"",onExecuteActionlist:x},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{Z as default};