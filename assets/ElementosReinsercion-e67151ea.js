import{s as A,f as u,D as O,_ as R,a as g,b as T}from"./files-1d91f80a.js";import{g as n,u as B,r as J,h as M,i as H,o as m,f,j as i,_ as U,m as s,n as K,c as L,I as j,a as y,C as q,b,K as G}from"./index-9ece5f00.js";import{_ as z}from"./CHeaderBar-c560d413.js";import{_ as P}from"./ManagementXLS-baa380fd.js";import{_ as Q}from"./CTable-24b7d4c4.js";const W=b("i",{class:"large material-icons"},"arrow_upward",-1),X={class:"content-document__section"},w=4,ne={__name:"ElementosReinsercion",setup(Y){const F=n("Elementos de reinserción"),N=n(1),l=n(!1),p=n(),r=n(null),E=B(),c=J({disabledEdit:!1}),C=n([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),D=A(),v=n(D.documentData),V=n([{id:24,description:"IGI"},{id:26,description:"Oferta programática"}]),d=n({}),I=()=>c.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],$=()=>{E.user.restrictions.filter(e=>e.id===1).length>0?c.disabledEdit=!1:c.disabledEdit=!0},h=()=>{},S=async()=>{if(r.value&&d.value){const e=JSON.parse(JSON.stringify(r.value.dataFileJson))[0].ANIO,a=new FormData;a.append("archivo",r.value.fileElement),a.append("categoryId",w),a.append("usrId",N),a.append("extendedData",JSON.stringify({period:e,type:d.value}));const o={ignoreHeader:!0};await u.postFiles(a,o)}await _()},k=()=>{p.value.open()},x=async t=>{const e={id:t.request.id};if(t.actionName==="descargar"){const a={download:!0},o=await u.getFiles(e,a);window.open(o,"_blank")}else t.actionName==="borrar"&&(await u.deleteFiles(e),await _())},_=async()=>{l.value=!0;let t=await u.getFiles({categoryId:w});t=t.map(e=>{let a=O.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=a,e.actions=I(),e}),v.value=t,l.value=!1};return M(async()=>{$(),await _()}),(t,e)=>{const a=H("router-view");return m(),f(U,null,{default:i(()=>[s(z,{title:F.value},null,8,["title"]),s(K,{"active-spin":l.value},null,8,["active-spin"]),c.disabledEdit?y("",!0):(m(),L("button",{key:0,onClick:k,class:"btn agregar__archivo"},[j("Agregar registro "),W])),s(T,{ref_key:"modalForm",ref:p,title:"Subir documento",onClose:h,onSubmit:e[2]||(e[2]=o=>S())},{default:i(()=>[s(R,null,{default:i(()=>[s(g,{title:"Tipo de archivo"},{default:i(()=>[s(q,{options:V.value,modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=o=>d.value=o)},null,8,["options","modelValue"])]),_:1}),s(g,{title:"Archivo"},{default:i(()=>[s(P,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),b("div",X,[s(a,null,{default:i(({Component:o})=>[(m(),f(G,null,[l.value?y("",!0):(m(),f(Q,{key:0,columns:C.value,rows:v.value,"actions-active":"",onExecuteActionlist:x},null,8,["columns","rows"]))],1024))]),_:1})])]),_:1})}}};export{ne as default};