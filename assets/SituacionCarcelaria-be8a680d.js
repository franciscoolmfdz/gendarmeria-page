import{s as x,f as l,D as S,_ as V,a as $,b as k}from"./files-627caa19.js";import{g as s,u as I,r as A,h as B,i as M,o as d,f,j as r,_ as H,l as t,c as R,K as T,a as K,b as v,L}from"./index-156a2515.js";import{_ as O}from"./CHeaderBar-44e391f7.js";import{_ as U}from"./CFileManagement-b6da2af1.js";import{_ as j}from"./CTable-e4af5c2a.js";const q=v("i",{class:"large material-icons"},"arrow_upward",-1),J={class:"content-document__section"},p=3,z=1,Z={__name:"SituacionCarcelaria",setup(G){const g=s("Estado situación carcelaria"),u=s(),c=s(null),b=I(),i=A({disabledEdit:!1}),w=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),y=x(),m=s(y.documentData),C=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],F=()=>{b.user.restrictions.filter(a=>a.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},N=()=>{},D=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",z),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await l.postFiles(e,a),await _()},E=()=>{u.value.open()},h=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},o={download:!0},n=await l.getFiles(a,o);window.open(n,"_blank")}else e.actionName},_=async()=>{let e=await l.getFiles({categoryId:p});e=e.map(a=>{let o=S.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=o,a.actions=C(),a}),m.value=e};return B(async()=>{F(),await _()}),(e,a)=>{const o=M("router-view");return d(),f(H,null,{default:r(()=>[t(O,{title:g.value},null,8,["title"]),i.disabledEdit?K("",!0):(d(),R("button",{key:0,onClick:E,class:"btn agregar__archivo"},[T("Agregar registro "),q])),t(k,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:N,onSubmit:a[1]||(a[1]=n=>D())},{default:r(()=>[t(V,null,{default:r(()=>[t($,null,{default:r(()=>[t(U,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),v("div",J,[t(o,null,{default:r(({Component:n})=>[(d(),f(L,null,[t(j,{columns:w.value,rows:m.value,"actions-active":"",onExecuteActionlist:h},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{Z as default};
