import{g as s,u as $,r as k,h as A,N as H,o as w,f as T,j as c,_ as M,l as o,m as O,c as B,K as J,a as R,w as P,v as U,b as p,O as D}from"./index-7bcc5dd1.js";import{_ as j}from"./CHeaderBar-d0b80372.js";import{d as q,_ as K,a as L}from"./dimensiones-85b35114.js";import{s as z,f as m,D as G,_ as Q,a as b,b as W}from"./files-79d86a55.js";import{_ as X}from"./CTable-0e4382b9.js";const Y=p("i",{class:"large material-icons"},"arrow_upward",-1),Z={class:"content-document__section"},f=7,ee=1,re={__name:"DimensionTrayectoria",setup(ae){const _=z(),F=s("Dimensión trayectoria"),i=s(!1),h=$(),d=k({disabledEdit:!1}),v=s(_.documentData),N=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),x=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],E=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},n=await m.getFiles(e,t);window.open(n,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await D.deleteDimensionHistory(e),await g())}catch(e){console.log(e)}finally{i.value=!1}},y=s(),r=s(null),l=s(null),S=()=>{},C=async()=>{i.value=!0;try{if(r.value&&l.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=L(a,f,l.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",ee),t.append("extendedData",JSON.stringify({period:l.value}));const n={ignoreHeader:!0},u=await m.postFiles(t,n);u!=null&&u.id&&(e.fileId=u.id,await D.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},V=()=>{y.value.open()},I=()=>{h.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},g=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var n;e.actions=x();let t=G.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(n=e==null?void 0:e.extendedData)==null?void 0:n.period,e}),v.value=a};return A(async()=>{I(),await g();const a=await H.getCarceles(),e=await q.getDimensiones({categoryId:f});_.mountParameters(e,a)}),(a,e)=>(w(),T(M,null,{default:c(()=>[o(O,{"active-spin":i.value},null,8,["active-spin"]),o(j,{title:F.value},null,8,["title"]),d.disabledEdit?R("",!0):(w(),B("button",{key:0,onClick:V,class:"btn agregar__archivo"},[J("Agregar registro "),Y])),o(W,{ref_key:"modalForm",ref:y,title:"Subir documento",onClose:S,onSubmit:C},{default:c(()=>[o(Q,{title:""},{default:c(()=>[o(b,{title:"Archivo"},{default:c(()=>[o(K,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),o(b,{title:"Periodo",class:"c-periodo"},{default:c(()=>[P(p("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t)},null,512),[[U,l.value]])]),_:1})]),_:1})]),_:1},512),p("div",Z,[o(X,{columns:N.value,rows:v.value,"actions-active":"",onExecuteActionlist:E},null,8,["columns","rows"])])]),_:1}))}};export{re as default};
