import{s as k,f as l,D as x,_ as V,a as $,b as M}from"./files-348bb087.js";import{h as s,i as A,r as I,k as S,l as B,o as d,f,j as r,_ as H,g as t,c as L,A as R,a as T,b as g,K}from"./index-56444a41.js";import{_ as O}from"./CHeaderBar-ce0ad327.js";import{_ as U}from"./CFileManagement-05624527.js";import{_ as j}from"./CTable-f867ef9b.js";import"./api-ec658a74.js";const q=g("i",{class:"large material-icons"},"arrow_upward",-1),J={class:"content-document__section"},p=8,z=1,ee={__name:"MarcoLegal",setup(G){const v=s("Marco legal"),u=s(),c=s(null),b=A(),i=I({disabledEdit:!1}),w=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),y=k(),m=s(y.documentData),C=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],F=()=>{b.user.restrictions.filter(a=>a.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},N=()=>{},D=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",p),e.append("usrId",z),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await l.postFiles(e,a),await _()},h=()=>{u.value.open()},E=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},o={download:!0},n=await l.getFiles(a,o);window.open(n,"_blank")}else e.actionName},_=async()=>{let e=await l.getFiles({categoryId:p});e=e.map(a=>{let o=x.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=o,a.actions=C(),a}),m.value=e};return S(async()=>{F(),await _()}),(e,a)=>{const o=B("router-view");return d(),f(H,null,{default:r(()=>[t(O,{title:v.value},null,8,["title"]),i.disabledEdit?T("",!0):(d(),L("button",{key:0,onClick:h,class:"btn agregar__archivo"},[R("Agregar registro "),q])),t(M,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:N,onSubmit:a[1]||(a[1]=n=>D())},{default:r(()=>[t(V,null,{default:r(()=>[t($,null,{default:r(()=>[t(U,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=n=>c.value=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),g("div",J,[t(o,null,{default:r(({Component:n})=>[(d(),f(K,null,[t(j,{columns:w.value,rows:m.value,"actions-active":"",onExecuteActionlist:E},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{ee as default};
