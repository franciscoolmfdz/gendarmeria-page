import{u as k,g as s,r as A,h as H,L as M,o as D,f as T,j as l,_ as B,m as o,n as J,c as O,I as R,a as P,w as U,v as L,b as p,M as b}from"./index-517d81b5.js";import{_ as j}from"./CHeaderBar-9e488358.js";import{_ as q}from"./ManagementXLS-9a6aa592.js";import{s as z,f as m,D as G,_ as K,a as F,b as Q}from"./files-d8430742.js";import{_ as W}from"./CTable-3edd57c8.js";import{d as X}from"./dimensionHistory-5cd2add5.js";import{d as Y}from"./dimensiones-7ad8c80b.js";const Z=p("i",{class:"large material-icons"},"arrow_upward",-1),ee={class:"content-document__section"},f=7,le={__name:"DimensionTrayectoria",setup(ae){const _=k(),h=_.user.id,v=z(),N=s("Dimensión trayectoria"),i=s(!1),d=A({disabledEdit:!1}),y=s(v.documentData),x=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),E=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],S=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},n=await m.getFiles(e,t);window.open(n,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await b.deleteDimensionHistory(e),await w())}catch(e){console.log(e)}finally{i.value=!1}},g=s(),r=s(null),c=s(null),C=()=>{},I=async()=>{i.value=!0;try{if(r.value&&c.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=X(a,f,c.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",h),t.append("extendedData",JSON.stringify({period:c.value}));const n={ignoreHeader:!0},u=await m.postFiles(t,n);u!=null&&u.id&&(e.fileId=u.id,await b.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},V=()=>{g.value.open()},$=()=>{_.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},w=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var n;e.actions=E();let t=G.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(n=e==null?void 0:e.extendedData)==null?void 0:n.period,e}),y.value=a};return H(async()=>{$(),await w();const a=await M.getCarceles(),e=await Y.getDimensiones({categoryId:f});v.mountParameters(e,a)}),(a,e)=>(D(),T(B,null,{default:l(()=>[o(J,{"active-spin":i.value},null,8,["active-spin"]),o(j,{title:N.value},null,8,["title"]),d.disabledEdit?P("",!0):(D(),O("button",{key:0,onClick:V,class:"btn agregar__archivo"},[R("Agregar registro "),Z])),o(Q,{ref_key:"modalForm",ref:g,title:"Subir documento",onClose:C,onSubmit:I},{default:l(()=>[o(K,{title:""},{default:l(()=>[o(F,{title:"Archivo"},{default:l(()=>[o(q,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),o(F,{title:"Periodo",class:"c-periodo"},{default:l(()=>[U(p("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>c.value=t)},null,512),[[L,c.value]])]),_:1})]),_:1})]),_:1},512),p("div",ee,[o(W,{columns:x.value,rows:y.value,"actions-active":"",onExecuteActionlist:S},null,8,["columns","rows"])])]),_:1}))}};export{le as default};