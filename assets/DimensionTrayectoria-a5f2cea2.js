import{g as s,u as $,r as k,h as A,o as w,f as H,j as l,_ as M,l as o,m as T,c as J,J as B,a as O,w as R,v as P,b as p,M as D}from"./index-b9c74f25.js";import{_ as U}from"./CHeaderBar-1bcb54ea.js";import{d as j,_ as q,a as L}from"./dimensiones-eed41476.js";import{s as z,f as m,D as G,_ as K,a as b,b as Q}from"./files-763327f2.js";import{_ as W}from"./CTable-91eb2867.js";import{c as X}from"./carceles-7aded4be.js";const Y=p("i",{class:"large material-icons"},"arrow_upward",-1),Z={class:"content-document__section"},f=7,ee=1,ce={__name:"DimensionTrayectoria",setup(ae){const _=z(),F=s("Dimensión trayectoria"),i=s(!1),h=$(),d=k({disabledEdit:!1}),v=s(_.documentData),N=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),x=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],E=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},n=await m.getFiles(e,t);window.open(n,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await D.deleteDimensionHistory(e),await g())}catch(e){console.log(e)}finally{i.value=!1}},y=s(),r=s(null),c=s(null),S=()=>{},C=async()=>{i.value=!0;try{if(r.value&&c.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=L(a,f,c.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",ee),t.append("extendedData",JSON.stringify({period:c.value}));const n={ignoreHeader:!0},u=await m.postFiles(t,n);u!=null&&u.id&&(e.fileId=u.id,await D.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},V=()=>{y.value.open()},I=()=>{h.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},g=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var n;e.actions=x();let t=G.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(n=e==null?void 0:e.extendedData)==null?void 0:n.period,e}),v.value=a};return A(async()=>{I(),await g();const a=await X.getCarceles(),e=await j.getDimensiones({categoryId:f});_.mountParameters(e,a)}),(a,e)=>(w(),H(M,null,{default:l(()=>[o(T,{"active-spin":i.value},null,8,["active-spin"]),o(U,{title:F.value},null,8,["title"]),d.disabledEdit?O("",!0):(w(),J("button",{key:0,onClick:V,class:"btn agregar__archivo"},[B("Agregar registro "),Y])),o(Q,{ref_key:"modalForm",ref:y,title:"Subir documento",onClose:S,onSubmit:C},{default:l(()=>[o(K,{title:""},{default:l(()=>[o(b,{title:"Archivo"},{default:l(()=>[o(q,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),o(b,{title:"Periodo",class:"c-periodo"},{default:l(()=>[R(p("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>c.value=t)},null,512),[[P,c.value]])]),_:1})]),_:1})]),_:1},512),p("div",Z,[o(W,{columns:N.value,rows:v.value,"actions-active":"",onExecuteActionlist:E},null,8,["columns","rows"])])]),_:1}))}};export{ce as default};
