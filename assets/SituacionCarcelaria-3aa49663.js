import{s as k,f as l,D as x,_ as S,a as V,b as $}from"./files-893e60d2.js";import{h as s,i as A,r as I,k as B,l as M,o as d,f,j as r,_ as H,g as t,c as R,A as T,a as K,b as v,K as O}from"./index-5fb026f8.js";import{_ as U}from"./CHeaderBar-c86c0776.js";import{_ as j}from"./CFileManagement-13230469.js";import{_ as q}from"./CTable-21e72f98.js";import"./api-5b4ce668.js";const J=v("i",{class:"large material-icons"},"arrow_upward",-1),L={class:"content-document__section"},p=3,z=1,ee={__name:"SituacionCarcelaria",setup(G){const g=s("Estado situación carcelaria"),u=s(),c=s(null),b=A(),i=I({disabledEdit:!1}),w=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),y=k(),m=s(y.documentData),C=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],F=()=>{b.user.restrictions.filter(a=>a.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},N=()=>{},D=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",z),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await l.postFiles(e,a),await _()},E=()=>{u.value.open()},h=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},o={download:!0},n=await l.getFiles(a,o);window.open(n,"_blank")}else e.actionName},_=async()=>{let e=await l.getFiles({categoryId:p});e=e.map(a=>{let o=x.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=o,a.actions=C(),a}),m.value=e};return B(async()=>{F(),await _()}),(e,a)=>{const o=M("router-view");return d(),f(H,null,{default:r(()=>[t(U,{title:g.value},null,8,["title"]),i.disabledEdit?K("",!0):(d(),R("button",{key:0,onClick:E,class:"btn agregar__archivo"},[T("Agregar registro "),J])),t($,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:N,onSubmit:a[1]||(a[1]=n=>D())},{default:r(()=>[t(S,null,{default:r(()=>[t(V,null,{default:r(()=>[t(j,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),v("div",L,[t(o,null,{default:r(({Component:n})=>[(d(),f(O,null,[t(q,{columns:w.value,rows:m.value,"actions-active":"",onExecuteActionlist:h},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{ee as default};
