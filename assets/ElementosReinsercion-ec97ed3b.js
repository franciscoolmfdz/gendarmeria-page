import{s as A,f as u,D as O,_ as R,a as y,b as T}from"./files-6236dcda.js";import{g as o,u as B,r as J,h as M,i as H,o as m,f,j as i,_ as U,m as n,n as K,c as L,I as j,a as w,C as q,b as F,K as G}from"./index-dddf95f5.js";import{_ as z}from"./CHeaderBar-f5fe19ca.js";import{_ as P}from"./ManagementXLS-022ac27c.js";import{_ as Q}from"./CTable-f5a47528.js";const W=F("i",{class:"large material-icons"},"arrow_upward",-1),X={class:"content-document__section"},b=4,ne={__name:"ElementosReinsercion",setup(Y){const N=o("Elementos de reinserción");o(1);const l=o(!1),p=o(),r=o(null),v=B(),c=J({disabledEdit:!1}),E=o([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),C=A(),g=o(C.documentData),D=o([{id:24,description:"IGI"},{id:26,description:"Oferta programática"}]),d=o({}),V=()=>c.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],$=()=>{v.user.restrictions.filter(e=>e.id===1).length>0?c.disabledEdit=!1:c.disabledEdit=!0},h=()=>{},I=async()=>{var t;if(r.value&&d.value){const s=JSON.parse(JSON.stringify(r.value.dataFileJson))[0].ANIO,a=new FormData;a.append("archivo",r.value.fileElement),a.append("categoryId",b),a.append("usrId",((t=v.user)==null?void 0:t.id)??1),a.append("extendedData",JSON.stringify({period:s,type:d.value}));const x={ignoreHeader:!0};await u.postFiles(a,x)}await _()},S=()=>{p.value.open()},k=async t=>{const e={id:t.request.id};if(t.actionName==="descargar"){const s={download:!0},a=await u.getFiles(e,s);window.open(a,"_blank")}else t.actionName==="borrar"&&(await u.deleteFiles(e),await _())},_=async()=>{l.value=!0;let t=await u.getFiles({categoryId:b});t=t.map(e=>{let s=O.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=s,e.actions=V(),e}),g.value=t,l.value=!1};return M(async()=>{$(),await _()}),(t,e)=>{const s=H("router-view");return m(),f(U,null,{default:i(()=>[n(z,{title:N.value},null,8,["title"]),n(K,{"active-spin":l.value},null,8,["active-spin"]),c.disabledEdit?w("",!0):(m(),L("button",{key:0,onClick:S,class:"btn agregar__archivo"},[j("Agregar registro "),W])),n(T,{ref_key:"modalForm",ref:p,title:"Subir documento",onClose:h,onSubmit:e[2]||(e[2]=a=>I())},{default:i(()=>[n(R,null,{default:i(()=>[n(y,{title:"Tipo de archivo"},{default:i(()=>[n(q,{options:D.value,modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=a=>d.value=a)},null,8,["options","modelValue"])]),_:1}),n(y,{title:"Archivo"},{default:i(()=>[n(P,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=a=>r.value=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),F("div",X,[n(s,null,{default:i(({Component:a})=>[(m(),f(G,null,[l.value?w("",!0):(m(),f(Q,{key:0,columns:E.value,rows:g.value,"actions-active":"",onExecuteActionlist:k},null,8,["columns","rows"]))],1024))]),_:1})])]),_:1})}}};export{ne as default};
