import{h as s,i as I,r as $,k as A,o as w,f as H,j as c,_ as M,g as o,c as B,A as J,a as O,w as R,v as T,b as p}from"./index-8a5d36ad.js";import{_ as P}from"./CHeaderBar-6b1a30b0.js";import{d as U,_ as j,a as q}from"./dimensiones-592ef62c.js";import{s as L,f as m,D as z,_ as G,a as b,b as K}from"./files-156fbae4.js";import{_ as Q}from"./CSpinner-925bb9d3.js";import{_ as W}from"./CTable-b7b071bb.js";import{c as X,d as D}from"./dimensionHistory-dfb3de38.js";import"./api-ec658a74.js";const Y=p("i",{class:"large material-icons"},"arrow_upward",-1),Z={class:"content-document__section"},f=2,ee=1,de={__name:"VidaFuncionarios",setup(ae){const _=L(),F=s("Calidad de vida de los funcionarios"),i=s(!1),h=I(),d=$({disabledEdit:!1}),v=s(_.documentData),N=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),V=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],x=()=>{h.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},C=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},n=await m.getFiles(e,t);window.open(n,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await D.deleteDimensionHistory(e),await y())}catch(e){console.log(e)}finally{i.value=!1}},g=s(),r=s(null),l=s(null),E=()=>{},S=async()=>{i.value=!0;try{if(r.value&&l.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=q(a,f,l.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",ee),t.append("extendedData",JSON.stringify({period:l.value}));const n={ignoreHeader:!0},u=await m.postFiles(t,n);u!=null&&u.id&&(e.fileId=u.id,await D.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},k=()=>{g.value.open()},y=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var n;e.actions=V();let t=z.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(n=e==null?void 0:e.extendedData)==null?void 0:n.period,e}),v.value=a};return A(async()=>{x(),await y();const a=await X.getCarceles(),e=await U.getDimensiones({categoryId:f});_.mountParameters(e,a)}),(a,e)=>(w(),H(M,null,{default:c(()=>[o(Q,{"active-spin":i.value},null,8,["active-spin"]),o(P,{title:F.value},null,8,["title"]),d.disabledEdit?O("",!0):(w(),B("button",{key:0,onClick:k,class:"btn agregar__archivo"},[J("Agregar registro "),Y])),o(K,{ref_key:"modalForm",ref:g,title:"Subir documento",onClose:E,onSubmit:S},{default:c(()=>[o(G,{title:""},{default:c(()=>[o(b,{title:"Archivo"},{default:c(()=>[o(j,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),o(b,{title:"Periodo",class:"c-periodo"},{default:c(()=>[R(p("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t)},null,512),[[T,l.value]])]),_:1})]),_:1})]),_:1},512),p("div",Z,[o(W,{columns:N.value,rows:v.value,"actions-active":"",onExecuteActionlist:C},null,8,["columns","rows"])])]),_:1}))}};export{de as default};
