import{s as $,f as l,D as S,_ as I,a as A,b as T}from"./files-44b8d12b.js";import{g as t,u as B,r as M,h as H,i as R,o as d,f as _,j as s,_ as J,m as o,n as K,c as O,J as U,a as v,b as w,K as j}from"./index-f528de0d.js";import{_ as q}from"./CHeaderBar-27c2be18.js";import{_ as L}from"./CFileManagement-852d007c.js";import{_ as z}from"./CTable-41df95af.js";const G=w("i",{class:"large material-icons"},"arrow_upward",-1),P={class:"content-document__section"},g=6,ae={__name:"DimensionTerritorial",setup(Q){const b=t("Dimensión territorial"),y=B(),i=t(!1),r=M({disabledEdit:!1}),D=t(1),f=t(),u=t(null),F=t([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),h=$(),p=t(h.documentData),C=()=>r.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],N=()=>{},E=async()=>{const e=new FormData;e.append("archivo",u.value),e.append("categoryId",g),e.append("usrId",D),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await l.postFiles(e,a),await m()},k=()=>{y.user.restrictions.filter(a=>a.id===1).length>0?r.disabledEdit=!1:r.disabledEdit=!0},x=()=>{f.value.open()},V=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},n={download:!0},c=await l.getFiles(a,n);window.open(c,"_blank")}else e.actionName==="borrar"&&(await l.deleteFiles(data),await m())},m=async()=>{i.value=!0;let e=await l.getFiles({categoryId:g});e=e.map(a=>{let n=S.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=n,a.actions=C(),a}),p.value=e,i.value=!1};return H(async()=>{k(),await m()}),(e,a)=>{const n=R("router-view");return d(),_(J,null,{default:s(()=>[o(K,{"active-spin":i.value},null,8,["active-spin"]),o(q,{title:b.value},null,8,["title"]),r.disabledEdit?v("",!0):(d(),O("button",{key:0,onClick:x,class:"btn agregar__archivo"},[U("Agregar registro "),G])),o(T,{ref_key:"modalForm",ref:f,title:"Subir documento",onClose:N,onSubmit:E},{default:s(()=>[o(I,null,{default:s(()=>[o(A,null,{default:s(()=>[o(L,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=c=>u.value=c)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),w("div",P,[o(n,null,{default:s(({Component:c})=>[(d(),_(j,null,[i.value?v("",!0):(d(),_(z,{key:0,columns:F.value,rows:p.value,"actions-active":"",onExecuteActionlist:V},null,8,["columns","rows"]))],1024))]),_:1})])]),_:1})}}};export{ae as default};
