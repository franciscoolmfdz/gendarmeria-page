import{s as $,f as c,D as k,_ as x,a as f,b as A}from"./files-309ad494.js";import{g as r,u as I,r as S,h as T,i as B,o as d,f as p,j as s,_ as M,m as a,c as G,J as H,a as R,x as U,b as g,K as J}from"./index-67eed0ab.js";import{_ as K}from"./CHeaderBar-d68a262d.js";import{_ as L}from"./CFileManagement-3a86b75f.js";import{_ as O}from"./CTable-0226543d.js";const j=g("i",{class:"large material-icons"},"arrow_upward",-1),q={class:"content-document__section"},v=5,z=1,ee={__name:"GestionCarcel",setup(P){const y=r("Gestión de carcel"),u=r(),l=r(null),b=I(),i=S({disabledEdit:!1}),w=r([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),C=$(),m=r(C.documentData),F=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],N=()=>{b.user.restrictions.filter(t=>t.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},V=()=>{},D=async()=>{const e=new FormData;e.append("archivo",l.value),e.append("categoryId",v),e.append("usrId",z),e.append("extendedData",JSON.stringify({period:"2023-07"}));const t={ignoreHeader:!0};await c.postFiles(e,t),await _()},h=()=>{u.value.open()},E=async e=>{if(e.actionName==="descargar"){const t={id:e.request.id},n={download:!0},o=await c.getFiles(t,n);window.open(o,"_blank")}else e.actionName},_=async()=>{let e=await c.getFiles({categoryId:v});e=e.map(t=>{let n=k.fromISO(t.createdAt).toFormat("dd/MM/yyyy HH:mm");return t.fechaCreacion=n,t.actions=F(),t}),m.value=e};return T(async()=>{N(),await _()}),(e,t)=>{const n=B("router-view");return d(),p(M,null,{default:s(()=>[a(K,{title:y.value},null,8,["title"]),i.disabledEdit?R("",!0):(d(),G("button",{key:0,onClick:h,class:"btn agregar__archivo"},[H("Agregar registro "),j])),a(A,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:V,onSubmit:t[2]||(t[2]=o=>D())},{default:s(()=>[a(x,null,{default:s(()=>[a(f,{title:"tipo de archivo"},{default:s(()=>[a(U,{options:e.typeList,modelValue:e.selectedType,"onUpdate:modelValue":t[0]||(t[0]=o=>e.selectedType=o)},null,8,["options","modelValue"])]),_:1}),a(f,{title:"Archivo"},{default:s(()=>[a(L,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),g("div",q,[a(n,null,{default:s(({Component:o})=>[(d(),p(J,null,[a(O,{columns:w.value,rows:m.value,"actions-active":"",onExecuteActionlist:E},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{ee as default};
