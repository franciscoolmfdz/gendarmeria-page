import{g as s,u as $,r as k,h as A,N as H,o as w,f as M,j as c,_ as O,m as o,n as B,c as J,K as R,a as T,w as P,v as U,b as p,O as b}from"./index-59105a95.js";import{_ as j}from"./CHeaderBar-8c04cde7.js";import{d as q,_ as K,a as L}from"./dimensiones-4b7760c5.js";import{s as z,f as m,D as G,_ as Q,a as D,b as W}from"./files-e8be350e.js";import{_ as X}from"./CTable-3d07115b.js";const Y=p("i",{class:"large material-icons"},"arrow_upward",-1),Z={class:"content-document__section"},f=1,ee=1,re={__name:"VidaInternos",setup(ae){const _=z(),F=s("Calidad de vida de los internos"),i=s(!1),h=$(),d=k({disabledEdit:!1}),v=s(_.documentData),N=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),V=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],x=()=>{h.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},C=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},n=await m.getFiles(e,t);window.open(n,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await b.deleteDimensionHistory(e),await y())}catch(e){console.log(e)}finally{i.value=!1}},g=s(),r=s(null),l=s(null),E=()=>{},I=async()=>{i.value=!0;try{if(r.value&&l.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=L(a,f,l.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",ee),t.append("extendedData",JSON.stringify({period:l.value}));const n={ignoreHeader:!0},u=await m.postFiles(t,n);u!=null&&u.id&&(e.fileId=u.id,await b.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},S=()=>{g.value.open()},y=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var n;e.actions=V();let t=G.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(n=e==null?void 0:e.extendedData)==null?void 0:n.period,e}),v.value=a};return A(async()=>{x(),await y();const a=await H.getCarceles(),e=await q.getDimensiones({categoryId:f});_.mountParameters(e,a)}),(a,e)=>(w(),M(O,null,{default:c(()=>[o(B,{"active-spin":i.value},null,8,["active-spin"]),o(j,{title:F.value},null,8,["title"]),d.disabledEdit?T("",!0):(w(),J("button",{key:0,onClick:S,class:"btn agregar__archivo"},[R("Agregar registro "),Y])),o(W,{ref_key:"modalForm",ref:g,title:"Subir documento",onClose:E,onSubmit:I},{default:c(()=>[o(Q,{title:""},{default:c(()=>[o(D,{title:"Archivo"},{default:c(()=>[o(K,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),o(D,{title:"Periodo",class:"c-periodo"},{default:c(()=>[P(p("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t)},null,512),[[U,l.value]])]),_:1})]),_:1})]),_:1},512),p("div",Z,[o(X,{columns:N.value,rows:v.value,"actions-active":"",onExecuteActionlist:C},null,8,["columns","rows"])])]),_:1}))}};export{re as default};
