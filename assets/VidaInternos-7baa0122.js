import{g as o,u as A,r as H,h as M,M as O,o as p,f as b,j as c,_ as B,m as s,n as J,c as R,N as T,a as D,w as P,v as U,b as _,O as F}from"./index-35ecef89.js";import{_ as j}from"./CHeaderBar-260743b4.js";import{d as q,_ as L,a as z}from"./dimensiones-29eb6765.js";import{s as G,f as m,D as K,_ as Q,a as h,b as W}from"./files-2cd4dab6.js";import{_ as X}from"./CTable-983ed3f1.js";const Y=_("i",{class:"large material-icons"},"arrow_upward",-1),Z={class:"content-document__section"},f=1,ee=1,re={__name:"VidaInternos",setup(ae){const v=G(),N=o("Calidad de vida de los internos"),n=o(!1),V=A(),d=H({disabledEdit:!1}),g=o(v.documentData),x=o([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),C=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],E=()=>{V.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},I=async a=>{n.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},i=await m.getFiles(e,t);window.open(i,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await F.deleteDimensionHistory(e),await w())}catch(e){console.log(e)}finally{n.value=!1}},y=o(),r=o(null),l=o(null),S=()=>{},k=async()=>{n.value=!0;try{if(r.value&&l.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=z(a,f,l.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",ee),t.append("extendedData",JSON.stringify({period:l.value}));const i={ignoreHeader:!0},u=await m.postFiles(t,i);u!=null&&u.id&&(e.fileId=u.id,await F.postDimensionHistory(e))}}catch(a){console.log(a)}finally{n.value=!1}},$=()=>{y.value.open()},w=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var i;e.actions=C();let t=K.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(i=e==null?void 0:e.extendedData)==null?void 0:i.period,e}),g.value=a};return M(async()=>{E(),await w();const a=await O.getCarceles(),e=await q.getDimensiones({categoryId:f});v.mountParameters(e,a)}),(a,e)=>(p(),b(B,null,{default:c(()=>[s(J,{"active-spin":n.value},null,8,["active-spin"]),s(j,{title:N.value},null,8,["title"]),d.disabledEdit?D("",!0):(p(),R("button",{key:0,onClick:$,class:"btn agregar__archivo"},[T("Agregar registro "),Y])),s(W,{ref_key:"modalForm",ref:y,title:"Subir documento",onClose:S,onSubmit:k},{default:c(()=>[s(Q,{title:""},{default:c(()=>[s(h,{title:"Archivo"},{default:c(()=>[s(L,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),s(h,{title:"Periodo",class:"c-periodo"},{default:c(()=>[P(_("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t)},null,512),[[U,l.value]])]),_:1})]),_:1})]),_:1},512),_("div",Z,[n.value?D("",!0):(p(),b(X,{key:0,columns:x.value,rows:g.value,"actions-active":"",onExecuteActionlist:I},null,8,["columns","rows"]))])]),_:1}))}};export{re as default};
