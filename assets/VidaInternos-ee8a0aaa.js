import{u as H,g as o,r as M,h as B,L as J,o as _,f as D,j as c,_ as O,m as s,n as R,c as T,I as P,a as F,w as U,v as L,b as v,M as h}from"./index-52e225e7.js";import{_ as j}from"./CHeaderBar-91e42f1f.js";import{_ as q}from"./ManagementXLS-6c1693b0.js";import{s as z,f as m,D as G,_ as K,a as N,b as Q}from"./files-991a4d8d.js";import{_ as W}from"./CTable-6d2470ca.js";import{d as X}from"./dimensionHistory-2b302cce.js";import{d as Y}from"./dimensiones-92caa66a.js";const Z=v("i",{class:"large material-icons"},"arrow_upward",-1),ee={class:"content-document__section"},f=1,ce={__name:"VidaInternos",setup(ae){const g=z(),y=H(),I=y.user.id,V=o("Calidad de vida de los internos"),n=o(!1),d=M({disabledEdit:!1}),w=o(g.documentData),x=o([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),C=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],E=()=>{y.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},S=async a=>{n.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},i=await m.getFiles(e,t);window.open(i,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await h.deleteDimensionHistory(e),await p())}catch(e){console.log(e)}finally{n.value=!1}},b=o(),r=o(null),l=o(null),k=()=>{},$=async()=>{n.value=!0;try{if(r.value&&l.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=X(a,f,l.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",I),t.append("extendedData",JSON.stringify({period:l.value}));const i={ignoreHeader:!0},u=await m.postFiles(t,i);u!=null&&u.id&&(e.fileId=u.id,await h.postDimensionHistory(e)),await p()}}catch(a){console.log(a)}finally{n.value=!1}},A=()=>{b.value.open()},p=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var i;e.actions=C();let t=G.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(i=e==null?void 0:e.extendedData)==null?void 0:i.period,e}),w.value=a};return B(async()=>{E(),await p();const a=await J.getCarceles(),e=await Y.getDimensiones({categoryId:f});g.mountParameters(e,a)}),(a,e)=>(_(),D(O,null,{default:c(()=>[s(R,{"active-spin":n.value},null,8,["active-spin"]),s(j,{title:V.value},null,8,["title"]),d.disabledEdit?F("",!0):(_(),T("button",{key:0,onClick:A,class:"btn agregar__archivo"},[P("Agregar registro "),Z])),s(Q,{ref_key:"modalForm",ref:b,title:"Subir documento",onClose:k,onSubmit:$},{default:c(()=>[s(K,{title:""},{default:c(()=>[s(N,{title:"Archivo"},{default:c(()=>[s(q,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),s(N,{title:"Periodo",class:"c-periodo"},{default:c(()=>[U(v("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t)},null,512),[[L,l.value]])]),_:1})]),_:1})]),_:1},512),v("div",ee,[n.value?F("",!0):(_(),D(W,{key:0,columns:x.value,rows:w.value,"actions-active":"",onExecuteActionlist:S},null,8,["columns","rows"]))])]),_:1}))}};export{ce as default};
