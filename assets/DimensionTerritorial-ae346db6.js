import{s as x,f as l,D as V,_ as $,a as I,b as S}from"./files-09bd4fe0.js";import{i as o,u as A,r as T,j as B,k as M,o as d,f,g as r,_ as H,m as a,c as R,K,a as L,b as v,L as O}from"./index-8b3b860b.js";import{_ as U}from"./CHeaderBar-85f316bd.js";import{_ as j}from"./CFileManagement-3bd5ace4.js";import{_ as q}from"./CTable-1d35a353.js";const J=v("i",{class:"large material-icons"},"arrow_upward",-1),z={class:"content-document__section"},p=6,Z={__name:"DimensionTerritorial",setup(G){const g=o("Dimensión territorial"),b=A(),i=T({disabledEdit:!1}),w=o(1),u=o(),c=o(null),y=o([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),D=x(),m=o(D.documentData),C=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],F=()=>{},N=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",w),e.append("extendedData",JSON.stringify({period:"2023-07"}));const t={ignoreHeader:!0};await l.postFiles(e,t),await _()},E=()=>{b.user.restrictions.filter(t=>t.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},h=()=>{u.value.open()},k=async e=>{if(e.actionName==="descargar"){const t={id:e.request.id},n={download:!0},s=await l.getFiles(t,n);window.open(s,"_blank")}else e.actionName},_=async()=>{let e=await l.getFiles({categoryId:p});e=e.map(t=>{let n=V.fromISO(t.createdAt).toFormat("dd/MM/yyyy HH:mm");return t.fechaCreacion=n,t.actions=C(),t}),m.value=e};return B(async()=>{E(),await _()}),(e,t)=>{const n=M("router-view");return d(),f(H,null,{default:r(()=>[a(U,{title:g.value},null,8,["title"]),i.disabledEdit?L("",!0):(d(),R("button",{key:0,onClick:h,class:"btn agregar__archivo"},[K("Agregar registro "),J])),a(S,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:F,onSubmit:t[1]||(t[1]=s=>N())},{default:r(()=>[a($,null,{default:r(()=>[a(I,null,{default:r(()=>[a(j,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=s=>c.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),v("div",z,[a(n,null,{default:r(({Component:s})=>[(d(),f(O,null,[a(q,{columns:y.value,rows:m.value,"actions-active":"",onExecuteActionlist:k},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{Z as default};
