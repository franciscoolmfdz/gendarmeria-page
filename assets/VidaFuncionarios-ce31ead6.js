import{g as s,u as $,r as k,h as A,L as H,o as w,f as M,j as c,_ as B,m as o,n as J,c as O,I as R,a as T,w as P,v as U,b as p,M as b}from"./index-52e225e7.js";import{_ as L}from"./CHeaderBar-91e42f1f.js";import{_ as j}from"./ManagementXLS-6c1693b0.js";import{s as q,f as m,D as z,_ as G,a as D,b as K}from"./files-991a4d8d.js";import{_ as Q}from"./CTable-6d2470ca.js";import{d as W}from"./dimensionHistory-2b302cce.js";import{d as X}from"./dimensiones-92caa66a.js";const Y=p("i",{class:"large material-icons"},"arrow_upward",-1),Z={class:"content-document__section"},f=2,ee=1,ce={__name:"VidaFuncionarios",setup(ae){const _=q(),F=s("Calidad de vida de los funcionarios"),i=s(!1),h=$(),d=k({disabledEdit:!1}),v=s(_.documentData),N=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),V=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],x=()=>{h.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},C=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},n=await m.getFiles(e,t);window.open(n,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await b.deleteDimensionHistory(e),await y())}catch(e){console.log(e)}finally{i.value=!1}},g=s(),r=s(null),l=s(null),E=()=>{},S=async()=>{i.value=!0;try{if(r.value&&l.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=W(a,f,l.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",ee),t.append("extendedData",JSON.stringify({period:l.value}));const n={ignoreHeader:!0},u=await m.postFiles(t,n);u!=null&&u.id&&(e.fileId=u.id,await b.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},I=()=>{g.value.open()},y=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var n;e.actions=V();let t=z.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(n=e==null?void 0:e.extendedData)==null?void 0:n.period,e}),v.value=a};return A(async()=>{x(),await y();const a=await H.getCarceles(),e=await X.getDimensiones({categoryId:f});_.mountParameters(e,a)}),(a,e)=>(w(),M(B,null,{default:c(()=>[o(J,{"active-spin":i.value},null,8,["active-spin"]),o(L,{title:F.value},null,8,["title"]),d.disabledEdit?T("",!0):(w(),O("button",{key:0,onClick:I,class:"btn agregar__archivo"},[R("Agregar registro "),Y])),o(K,{ref_key:"modalForm",ref:g,title:"Subir documento",onClose:E,onSubmit:S},{default:c(()=>[o(G,{title:""},{default:c(()=>[o(D,{title:"Archivo"},{default:c(()=>[o(j,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),o(D,{title:"Periodo",class:"c-periodo"},{default:c(()=>[P(p("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t)},null,512),[[U,l.value]])]),_:1})]),_:1})]),_:1},512),p("div",Z,[o(Q,{columns:N.value,rows:v.value,"actions-active":"",onExecuteActionlist:C},null,8,["columns","rows"])])]),_:1}))}};export{ce as default};
