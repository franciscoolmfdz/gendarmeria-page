import{h as s,i as I,r as $,m as A,o as w,f as H,j as c,_ as M,g as o,k as J,c as B,J as O,a as R,w as T,v as P,b as p,M as b}from"./index-f58680e7.js";import{_ as U}from"./CHeaderBar-c54afd0b.js";import{d as j,_ as q,a as L}from"./dimensiones-8cbcaa0d.js";import{s as z,f as m,D as G,_ as K,a as D,b as Q}from"./files-79b7b6d9.js";import{_ as W}from"./CTable-5f533089.js";import{c as X}from"./carceles-ba5ffc07.js";const Y=p("i",{class:"large material-icons"},"arrow_upward",-1),Z={class:"content-document__section"},f=2,ee=1,le={__name:"VidaFuncionarios",setup(ae){const _=z(),F=s("Calidad de vida de los funcionarios"),i=s(!1),h=I(),d=$({disabledEdit:!1}),v=s(_.documentData),N=s([{rowReference:"name",description:"Nombre archivo"},{rowReference:"period",description:"Periodo"},{rowReference:"fechaCreacion",description:"Fecha creación"}]),V=()=>d.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],x=()=>{h.user.restrictions.filter(e=>e.id===1).length>0?d.disabledEdit=!1:d.disabledEdit=!0},C=async a=>{i.value=!0;try{const e={id:a.request.id};if(a.actionName==="descargar"){const t={download:!0},n=await m.getFiles(e,t);window.open(n,"_blank")}else a.actionName==="borrar"&&(await m.deleteFiles(e),await b.deleteDimensionHistory(e),await y())}catch(e){console.log(e)}finally{i.value=!1}},g=s(),r=s(null),l=s(null),E=()=>{},S=async()=>{i.value=!0;try{if(r.value&&l.value){const a=JSON.parse(JSON.stringify(r.value.dataFileJson)),e=L(a,f,l.value),t=new FormData;t.append("archivo",r.value.fileElement),t.append("categoryId",f),t.append("usrId",ee),t.append("extendedData",JSON.stringify({period:l.value}));const n={ignoreHeader:!0},u=await m.postFiles(t,n);u!=null&&u.id&&(e.fileId=u.id,await b.postDimensionHistory(e))}}catch(a){console.log(a)}finally{i.value=!1}},k=()=>{g.value.open()},y=async()=>{let a=await m.getFiles({categoryId:f});a=a.map(e=>{var n;e.actions=V();let t=G.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=t,e.period=(n=e==null?void 0:e.extendedData)==null?void 0:n.period,e}),v.value=a};return A(async()=>{x(),await y();const a=await X.getCarceles(),e=await j.getDimensiones({categoryId:f});_.mountParameters(e,a)}),(a,e)=>(w(),H(M,null,{default:c(()=>[o(J,{"active-spin":i.value},null,8,["active-spin"]),o(U,{title:F.value},null,8,["title"]),d.disabledEdit?R("",!0):(w(),B("button",{key:0,onClick:k,class:"btn agregar__archivo"},[O("Agregar registro "),Y])),o(Q,{ref_key:"modalForm",ref:g,title:"Subir documento",onClose:E,onSubmit:S},{default:c(()=>[o(K,{title:""},{default:c(()=>[o(D,{title:"Archivo"},{default:c(()=>[o(q,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t)},null,8,["modelValue"])]),_:1}),o(D,{title:"Periodo",class:"c-periodo"},{default:c(()=>[T(p("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t)},null,512),[[P,l.value]])]),_:1})]),_:1})]),_:1},512),p("div",Z,[o(W,{columns:N.value,rows:v.value,"actions-active":"",onExecuteActionlist:C},null,8,["columns","rows"])])]),_:1}))}};export{le as default};
