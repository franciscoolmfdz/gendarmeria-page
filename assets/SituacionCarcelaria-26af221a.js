import{s as S,f as l,D as k,_ as A,a as f,b as I}from"./files-cc60a7c1.js";import{g as s,u as T,r as B,h as M,i as R,o as d,f as v,j as n,_ as H,m as a,c as L,N as U,a as K,x as O,b as y,K as j}from"./index-21f23004.js";import{_ as q}from"./CHeaderBar-cbc33fae.js";import{_ as J}from"./CFileManagement-0a6f798d.js";import{_ as z}from"./CTable-dbea869c.js";const G=y("i",{class:"large material-icons"},"arrow_upward",-1),P={class:"content-document__section"},g=3,Q=1,ae={__name:"SituacionCarcelaria",setup(W){const b=s("Estado situación carcelaria"),u=s(),c=s(null),w=T(),r=B({disabledEdit:!1}),C=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),N=S(),m=s(N.documentData),F=s([{id:1,description:"Registro de eventos"},{id:2,description:"Asistentes y psicologos"},{id:3,description:"Licencias"},{id:4,description:"% Imputados"}]),_=s({}),V=()=>r.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],D=()=>{w.user.restrictions.filter(e=>e.id===1).length>0?r.disabledEdit=!1:r.disabledEdit=!0},E=()=>{},h=async()=>{const t=new FormData;t.append("archivo",c.value),t.append("categoryId",g),t.append("usrId",Q),t.append("extendedData",JSON.stringify({period:"2023-07"}));const e={ignoreHeader:!0};await l.postFiles(t,e),await p()},x=()=>{u.value.open()},$=async t=>{if(t.actionName==="descargar"){const e={id:t.request.id},i={download:!0},o=await l.getFiles(e,i);window.open(o,"_blank")}else t.actionName},p=async()=>{let t=await l.getFiles({categoryId:g});t=t.map(e=>{let i=k.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=i,e.actions=V(),e}),m.value=t};return M(async()=>{D(),await p()}),(t,e)=>{const i=R("router-view");return d(),v(H,null,{default:n(()=>[a(q,{title:b.value},null,8,["title"]),r.disabledEdit?K("",!0):(d(),L("button",{key:0,onClick:x,class:"btn agregar__archivo"},[U("Agregar registro "),G])),a(I,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:E,onSubmit:e[2]||(e[2]=o=>h())},{default:n(()=>[a(A,null,{default:n(()=>[a(f,{title:"Tipo de archivo"},{default:n(()=>[a(O,{options:F.value,modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=o=>_.value=o)},null,8,["options","modelValue"])]),_:1}),a(f,{title:"Archivo"},{default:n(()=>[a(J,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=o=>c.value=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),y("div",P,[a(i,null,{default:n(({Component:o})=>[(d(),v(j,null,[a(z,{columns:C.value,rows:m.value,"actions-active":"",onExecuteActionlist:$},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{ae as default};
