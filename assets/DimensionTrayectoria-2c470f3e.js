import{r as n,f as C,o as I,d as $,w as l,_ as V,b as o,a as f,s as A,j as H,m as T}from"./index-550390c3.js";import{_ as k}from"./CHeaderBar-e1a2dee2.js";import{d as M,_ as J,a as O}from"./dimensiones-1f0c1981.js";import{s as B,f as m,D as P,_ as R,a as g,b as U}from"./files-c7a20b31.js";import{_ as E}from"./CSpinner-0244d5d6.js";import{_ as j}from"./CTable-e1ebd6b0.js";import{c as q,d as w}from"./dimensionHistory-a722060f.js";import"./api-7944baea.js";const L=f("i",{class:"large material-icons"},"arrow_upward",-1),z={class:"content-document__section"},u=7,G=1,oe={__name:"DimensionTrayectoria",setup(K){const p=B(),D=n("Dimensión trayectoria"),i=n(!1),_=n(p.documentData),b=n([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),h=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],F=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},s=await m.getFiles(e,t);window.open(s,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await w.deleteDimensionHistory(e),await y())}catch(e){console.log(e)}finally{i.value=!1}},v=n(),r=n(null),c=n(null),N=()=>{},x=async()=>{i.value=!0;try{if(r.value&&c.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=O(a,u,c.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",u),t.append("usrId",G),t.append("extendedData",JSON.stringify({period:c.value}));const s={ignoreHeader:!0},d=await m.postFiles(t,s);d!=null&&d.id&&(e.fileId=d.id,await w.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},S=()=>{v.value.open()},y=async()=>{let a=await m.getFiles({categoryId:u});a=a.map(e=>{var s;e.actions=h();let t=P.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(s=e==null?void 0:e.extendedData)==null?void 0:s.period,e}),_.value=a};return C(async()=>{await y();const a=await q.getCarceles(),e=await M.getDimensiones({categoryId:u});p.mountParameters(e,a)}),(a,e)=>(I(),$(V,null,{default:l(()=>[o(E,{"active-spin":i.value},null,8,["active-spin"]),o(k,{title:D.value},null,8,["title"]),f("button",{onClick:S,class:"btn agregar__archivo"},[A("Agregar registro "),L]),o(U,{ref_key:"modalForm",ref:v,title:"Subir documento",onClose:N,onSubmit:x},{default:l(()=>[o(R,{title:""},{default:l(()=>[o(g,{title:"Archivo"},{default:l(()=>[o(J,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),o(g,{title:"Periodo",class:"c-periodo"},{default:l(()=>[H(f("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>c.value=t)},null,512),[[T,c.value]])]),_:1})]),_:1})]),_:1},512),f("div",z,[o(j,{columns:b.value,rows:_.value,"actions-active":"",onExecuteActionlist:F},null,8,["columns","rows"])])]),_:1}))}};export{oe as default};
