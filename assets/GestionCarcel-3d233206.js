import{s as k,f as l,D as x,_ as V,a as $,b as A}from"./files-cafb3d31.js";import{h as s,i as I,r as S,k as B,l as M,o as d,f,j as r,_ as G,g as a,c as H,A as R,a as T,b as v,K}from"./index-b4110eaa.js";import{_ as O}from"./CHeaderBar-621bef2b.js";import{_ as U}from"./CFileManagement-2797b47e.js";import{_ as j}from"./CTable-5317b6c9.js";import"./api-ec658a74.js";const q=v("i",{class:"large material-icons"},"arrow_upward",-1),J={class:"content-document__section"},p=5,L=1,ee={__name:"GestionCarcel",setup(z){const g=s("Gestión de carcel"),u=s(),c=s(null),b=I(),i=S({disabledEdit:!1}),w=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),y=k(),m=s(y.documentData),C=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],F=()=>{b.user.restrictions.filter(t=>t.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},N=()=>{},D=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",L),e.append("extendedData",JSON.stringify({period:"2023-07"}));const t={ignoreHeader:!0};await l.postFiles(e,t),await _()},h=()=>{u.value.open()},E=async e=>{if(e.actionName==="descargar"){const t={id:e.request.id},o={download:!0},n=await l.getFiles(t,o);window.open(n,"_blank")}else e.actionName},_=async()=>{let e=await l.getFiles({categoryId:p});e=e.map(t=>{let o=x.fromISO(t.createdAt).toFormat("dd/MM/yyyy HH:mm");return t.fechaCreacion=o,t.actions=C(),t}),m.value=e};return B(async()=>{F(),await _()}),(e,t)=>{const o=M("router-view");return d(),f(G,null,{default:r(()=>[a(O,{title:g.value},null,8,["title"]),i.disabledEdit?T("",!0):(d(),H("button",{key:0,onClick:h,class:"btn agregar__archivo"},[R("Agregar registro "),q])),a(A,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:N,onSubmit:t[1]||(t[1]=n=>D())},{default:r(()=>[a(V,null,{default:r(()=>[a($,null,{default:r(()=>[a(U,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),v("div",J,[a(o,null,{default:r(({Component:n})=>[(d(),f(K,null,[a(j,{columns:w.value,rows:m.value,"actions-active":"",onExecuteActionlist:E},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{ee as default};
