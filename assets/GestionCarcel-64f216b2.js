import{s as $,f as c,D as k,_ as A,a as f,b as I}from"./files-07570d38.js";import{g as r,u as S,r as x,h as T,i as B,o as d,f as p,j as s,_ as M,m as a,c as G,N as H,a as R,A as U,b as g,K}from"./index-0a5b9537.js";import{_ as L}from"./CHeaderBar-eb61e211.js";import{_ as O}from"./CFileManagement-7288b47b.js";import{_ as j}from"./CTable-6943f910.js";const q=g("i",{class:"large material-icons"},"arrow_upward",-1),J={class:"content-document__section"},v=5,z=1,ee={__name:"GestionCarcel",setup(P){const y=r("Gestión de carcel"),u=r(),l=r(null),b=S(),i=x({disabledEdit:!1}),w=r([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),C=$(),m=r(C.documentData),N=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],F=()=>{b.user.restrictions.filter(t=>t.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},V=()=>{},D=async()=>{const e=new FormData;e.append("archivo",l.value),e.append("categoryId",v),e.append("usrId",z),e.append("extendedData",JSON.stringify({period:"2023-07"}));const t={ignoreHeader:!0};await c.postFiles(e,t),await _()},h=()=>{u.value.open()},E=async e=>{if(e.actionName==="descargar"){const t={id:e.request.id},n={download:!0},o=await c.getFiles(t,n);window.open(o,"_blank")}else e.actionName},_=async()=>{let e=await c.getFiles({categoryId:v});e=e.map(t=>{let n=k.fromISO(t.createdAt).toFormat("dd/MM/yyyy HH:mm");return t.fechaCreacion=n,t.actions=N(),t}),m.value=e};return T(async()=>{F(),await _()}),(e,t)=>{const n=B("router-view");return d(),p(M,null,{default:s(()=>[a(L,{title:y.value},null,8,["title"]),i.disabledEdit?R("",!0):(d(),G("button",{key:0,onClick:h,class:"btn agregar__archivo"},[H("Agregar registro "),q])),a(I,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:V,onSubmit:t[2]||(t[2]=o=>D())},{default:s(()=>[a(A,null,{default:s(()=>[a(f,{title:"tipo de archivo"},{default:s(()=>[a(U,{options:e.typeList,modelValue:e.selectedType,"onUpdate:modelValue":t[0]||(t[0]=o=>e.selectedType=o)},null,8,["options","modelValue"])]),_:1}),a(f,{title:"Archivo"},{default:s(()=>[a(O,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),g("div",J,[a(n,null,{default:s(({Component:o})=>[(d(),p(K,null,[a(j,{columns:w.value,rows:m.value,"actions-active":"",onExecuteActionlist:E},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{ee as default};
