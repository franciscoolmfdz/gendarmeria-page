import{r as n,g as S,o as V,e as I,w as l,_ as $,b as t,a as f,y as A,j as H,v as k}from"./index-828d6b4e.js";import{_ as M}from"./CHeaderBar-9f7183cd.js";import{d as J,_ as O,a as T}from"./dimensiones-cf9abdd1.js";import{s as B,f as u,D as P,_ as R,a as g,b as U}from"./files-814e1992.js";import{_ as E}from"./CSpinner-f8021ced.js";import{_ as j}from"./CTable-1d7ed0fa.js";import{c as q,d as w}from"./dimensionHistory-b6bfb333.js";import"./api-7944baea.js";const L=f("i",{class:"large material-icons"},"arrow_upward",-1),z={class:"content-document__section"},m=2,G=1,te={__name:"VidaFuncionarios",setup(K){const p=B(),D=n("Calidad de vida de los funcionarios"),i=n(!1),_=n(p.documentData),F=n([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),b=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],h=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const o={download:!0},s=await u.getFiles(e,o);window.open(s,"_blank")}else a.actionName==="borrar"&&(await u.deleteFiles(e),await w.deleteDimensionHistory(e),await y())}catch(e){console.log(e)}finally{i.value=!1}},v=n(),r=n(null),c=n(null),N=()=>{},x=async()=>{i.value=!0;try{if(r.value&&c.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=T(a,m,c.value),o=new FormData;o.append("archivo",r.value.fileElement),o.append("categoryId",m),o.append("usrId",G),o.append("extendedData",JSON.stringify({period:c.value}));const s={ignoreHeader:!0},d=await u.postFiles(o,s);d!=null&&d.id&&(e.fileId=d.id,await w.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},C=()=>{v.value.open()},y=async()=>{let a=await u.getFiles({categoryId:m});a=a.map(e=>{var s;e.actions=b();let o=P.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=o,e.period=(s=e==null?void 0:e.extendedData)==null?void 0:s.period,e}),_.value=a};return S(async()=>{await y();const a=await q.getCarceles(),e=await J.getDimensiones({categoryId:m});p.mountParameters(e,a)}),(a,e)=>(V(),I($,null,{default:l(()=>[t(E,{"active-spin":i.value},null,8,["active-spin"]),t(M,{title:D.value},null,8,["title"]),f("button",{onClick:C,class:"btn agregar__archivo"},[A("Agregar registro "),L]),t(U,{ref_key:"modalForm",ref:v,title:"Subir documento",onClose:N,onSubmit:x},{default:l(()=>[t(R,{title:""},{default:l(()=>[t(g,{title:"Archivo"},{default:l(()=>[t(O,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=o=>r.value=o)},null,8,["modelValue"])]),_:1}),t(g,{title:"Periodo",class:"c-periodo"},{default:l(()=>[H(f("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=o=>c.value=o)},null,512),[[k,c.value]])]),_:1})]),_:1})]),_:1},512),f("div",z,[t(j,{columns:F.value,rows:_.value,"actions-active":"",onExecuteActionlist:h},null,8,["columns","rows"])])]),_:1}))}};export{te as default};
