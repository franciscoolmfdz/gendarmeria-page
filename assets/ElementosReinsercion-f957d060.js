import{s as V,f as c,D as S,_ as I,a as A,b as R}from"./files-309ad494.js";import{g as t,u as B,r as H,h as M,i as T,o as d,f as _,j as i,_ as J,m as o,n as K,c as O,J as U,a as v,b as w,K as j,N as q}from"./index-67eed0ab.js";import{_ as L}from"./CHeaderBar-d68a262d.js";import{_ as z}from"./CFileManagement-3a86b75f.js";import{_ as G}from"./CTable-0226543d.js";const P=w("i",{class:"large material-icons"},"arrow_upward",-1),Q={class:"content-document__section"},g=4,te={__name:"ElementosReinsercion",setup(W){const b=t("Elementos de reinserción"),y=t(1),r=t(!1),f=t(),u=t(null),E=B(),l=H({disabledEdit:!1}),F=t([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),N=V(),p=t(N.documentData),C=()=>l.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],D=()=>{E.user.restrictions.filter(a=>a.id===1).length>0?l.disabledEdit=!1:l.disabledEdit=!0},h=()=>{},$=async()=>{const e=new FormData;e.append("archivo",u.value),e.append("categoryId",g),e.append("usrId",y),e.append("extendedData",JSON.stringify({period:"2023-07"}));const a={ignoreHeader:!0};await c.postFiles(e,a),await m()},k=()=>{f.value.open()},x=async e=>{if(e.actionName==="descargar"){const a={id:e.request.id},n={download:!0},s=await c.getFiles(a,n);window.open(s,"_blank")}else e.actionName==="borrar"&&(await c.deleteFiles(data),await q.deleteDimensionHistory(data),await m())},m=async()=>{r.value=!0;let e=await c.getFiles({categoryId:g});e=e.map(a=>{let n=S.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=n,a.actions=C(),a}),p.value=e,r.value=!1};return M(async()=>{D(),await m()}),(e,a)=>{const n=T("router-view");return d(),_(J,null,{default:i(()=>[o(L,{title:b.value},null,8,["title"]),o(K,{"active-spin":r.value},null,8,["active-spin"]),l.disabledEdit?v("",!0):(d(),O("button",{key:0,onClick:k,class:"btn agregar__archivo"},[U("Agregar registro "),P])),o(R,{ref_key:"modalForm",ref:f,title:"Subir documento",onClose:h,onSubmit:a[1]||(a[1]=s=>$())},{default:i(()=>[o(I,null,{default:i(()=>[o(A,null,{default:i(()=>[o(z,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=s=>u.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),w("div",Q,[o(n,null,{default:i(({Component:s})=>[(d(),_(j,null,[r.value?v("",!0):(d(),_(G,{key:0,columns:F.value,rows:p.value,"actions-active":"",onExecuteActionlist:x},null,8,["columns","rows"]))],1024))]),_:1})])]),_:1})}}};export{te as default};
