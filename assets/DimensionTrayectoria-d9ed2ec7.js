import{g as s,u as $,r as k,h as A,M as H,o as w,f as M,j as l,_ as T,m as o,n as J,c as B,J as O,a as R,w as P,v as U,b as p,N as D}from"./index-2677aad2.js";import{_ as j}from"./CHeaderBar-6fbbd370.js";import{_ as q}from"./ManagementXLS-167b9602.js";import{s as L,f as m,D as z,_ as G,a as b,b as K}from"./files-3dad8249.js";import{_ as Q}from"./CTable-28bf1a6b.js";import{d as W}from"./dimensionHistory-ff0326a2.js";import{d as X}from"./dimensiones-5218ec8b.js";const Y=p("i",{class:"large material-icons"},"arrow_upward",-1),Z={class:"content-document__section"},f=7,ee=1,le={__name:"DimensionTrayectoria",setup(ae){const _=L(),F=s("Dimensión trayectoria"),i=s(!1),h=$(),d=k({disabledEdit:!1}),v=s(_.documentData),N=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),x=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],E=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},n=await m.getFiles(e,t);window.open(n,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await D.deleteDimensionHistory(e),await g())}catch(e){console.log(e)}finally{i.value=!1}},y=s(),r=s(null),c=s(null),S=()=>{},C=async()=>{i.value=!0;try{if(r.value&&c.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=W(a,f,c.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",ee),t.append("extendedData",JSON.stringify({period:c.value}));const n={ignoreHeader:!0},u=await m.postFiles(t,n);u!=null&&u.id&&(e.fileId=u.id,await D.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},V=()=>{y.value.open()},I=()=>{h.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},g=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var n;e.actions=x();let t=z.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(n=e==null?void 0:e.extendedData)==null?void 0:n.period,e}),v.value=a};return A(async()=>{I(),await g();const a=await H.getCarceles(),e=await X.getDimensiones({categoryId:f});_.mountParameters(e,a)}),(a,e)=>(w(),M(T,null,{default:l(()=>[o(J,{"active-spin":i.value},null,8,["active-spin"]),o(j,{title:F.value},null,8,["title"]),d.disabledEdit?R("",!0):(w(),B("button",{key:0,onClick:V,class:"btn agregar__archivo"},[O("Agregar registro "),Y])),o(K,{ref_key:"modalForm",ref:y,title:"Subir documento",onClose:S,onSubmit:C},{default:l(()=>[o(G,{title:""},{default:l(()=>[o(b,{title:"Archivo"},{default:l(()=>[o(q,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),o(b,{title:"Periodo",class:"c-periodo"},{default:l(()=>[P(p("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>c.value=t)},null,512),[[U,c.value]])]),_:1})]),_:1})]),_:1},512),p("div",Z,[o(Q,{columns:N.value,rows:v.value,"actions-active":"",onExecuteActionlist:E},null,8,["columns","rows"])])]),_:1}))}};export{le as default};
