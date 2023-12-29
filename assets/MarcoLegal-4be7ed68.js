import{g as n,u as ee,r as ae,h as te,i as oe,o as d,f as g,j as l,_ as ne,m as o,n as le,b as r,c as M,I as U,a as b,w as x,v as N,K as $}from"./index-9ece5f00.js";import{s as se,f as u,D as H,_ as R,a as p,b as q}from"./files-1d91f80a.js";import{_ as re}from"./CHeaderBar-c560d413.js";import{_ as O}from"./CFileManagement-ca84e28b.js";import{_ as T}from"./CTable-24b7d4c4.js";const ie={class:"section-table-articulo"},ce=r("i",{class:"large material-icons"},"arrow_upward",-1),ue={class:"content-document__section"},de={class:"section-table-norma"},me=r("i",{class:"large material-icons"},"arrow_upward",-1),_e={class:"content-document__section"},L=8,J=9,K=1,be={__name:"MarcoLegal",setup(pe){const j=n("Marco legal"),h=n(),F=n(),i=n(!1),v=n(null),y=n(null),m=n(null),C=n(null),_=n(null),A=n(null),z=ee(),f=ae({disabledEdit:!1}),I=n([{rowReference:"createdBy",description:"Autor"},{rowReference:"name",description:"Nombre de archivo"},{rowReference:"fechaCreacion",description:"Año"},{rowReference:"resumen",description:"Contenido "}]),V=se(),k=n(V.documentData),S=n(V.documentDataNorma),B=()=>f.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"}],G=()=>{z.user.restrictions.filter(e=>e.id===1).length>0?f.disabledEdit=!1:f.disabledEdit=!0},E=()=>{},P=async()=>{console.log(v.value);const a=new FormData;a.append("archivo",v.value),a.append("categoryId",L),a.append("usrId",K),a.append("extendedData",JSON.stringify({createdBy:m.value,resumen:_.value}));const e={ignoreHeader:!0};await u.postFiles(a,e),await D()},Q=async()=>{const a=new FormData;a.append("archivo",y.value),a.append("categoryId",J),a.append("usrId",K),a.append("extendedData",JSON.stringify({createdBy:C.value,resumen:A.value}));const e={ignoreHeader:!0};await u.postFiles(a,e),await w()},W=()=>{h.value.open()},X=()=>{F.value.open()},Y=async a=>{const e={id:a.request.id};if(a.actionName==="descargar"){const s={id:a.request.id},t={download:!0},c=await u.getFiles(s,t);window.open(c,"_blank"),await mountData()}else a.actionName==="borrar"&&(await u.deleteFiles(e),await D())},Z=async a=>{const e={id:a.request.id};if(a.actionName==="descargar"){const s={id:a.request.id},t={download:!0},c=await u.getFiles(s,t);window.open(c,"_blank"),await w()}else a.actionName==="borrar"&&(await u.deleteFiles(e),await w())},w=async()=>{i.value=!0,y.value=null,C.value=null,A.value=null;let a=await u.getFiles({categoryId:J});a=a.map(e=>{var t,c;let s=H.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=s,e.createdBy=(t=e.extendedData)==null?void 0:t.createdBy,e.resumen=(c=e.extendedData)==null?void 0:c.resumen,e.actions=B(),e}),S.value=a,i.value=!1},D=async()=>{i.value=!0,v.value=null,m.value=null,_.value=null;let a=await u.getFiles({categoryId:L});a=a.map(e=>{var t,c;let s=H.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=s,e.createdBy=(t=e.extendedData)==null?void 0:t.createdBy,e.resumen=(c=e.extendedData)==null?void 0:c.resumen,e.actions=B(),e}),k.value=a,i.value=!1};return te(async()=>{G(),await D(),await w()}),(a,e)=>{const s=oe("router-view");return d(),g(ne,{class:"table-marco-legal"},{default:l(()=>[o(re,{title:j.value},null,8,["title"]),o(le,{"active-spin":i.value},null,8,["active-spin"]),r("div",ie,[!f.disabledEdit&&!i.value?(d(),M("button",{key:0,onClick:W,class:"btn agregar__archivo-articulo"},[U("Agregar articulo "),ce])):b("",!0),o(q,{ref_key:"modalForm",ref:h,title:"Subir documento",onClose:E,onSubmit:P},{default:l(()=>[o(R,null,{default:l(()=>[o(p,{title:"Archivo"},{default:l(()=>[o(O,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=t=>v.value=t)},null,8,["modelValue"])]),_:1})]),_:1}),o(p,{title:"Autor"},{default:l(()=>[x(r("input",{class:"search__content--text","onUpdate:modelValue":e[1]||(e[1]=t=>m.value=t),placeholder:"Ingresar autor",type:"text"},null,512),[[N,m.value]])]),_:1}),o(p,{title:"Contenido"},{default:l(()=>[x(r("textarea",{class:"search__content--text","onUpdate:modelValue":e[2]||(e[2]=t=>_.value=t),placeholder:"Ingresar resumen del contenido",type:"text",maxlength:"100"},`\r
        `,512),[[N,_.value]])]),_:1})]),_:1},512),r("div",ue,[o(s,null,{default:l(({Component:t})=>[(d(),g($,null,[i.value?b("",!0):(d(),g(T,{key:0,columns:I.value,rows:k.value,"actions-active":"",onExecuteActionlist:Y},null,8,["columns","rows"]))],1024))]),_:1})])]),r("div",de,[!f.disabledEdit&&!i.value?(d(),M("button",{key:0,onClick:X,class:"btn agregar__archivo-articulo-norma"},[U("Agregar norma "),me])):b("",!0),o(q,{ref_key:"modalFormNorma",ref:F,title:"Subir documento",onClose:E,onSubmit:Q},{default:l(()=>[o(R,null,{default:l(()=>[o(p,{title:"Archivo"},{default:l(()=>[o(O,{modelValue:y.value,"onUpdate:modelValue":e[3]||(e[3]=t=>y.value=t)},null,8,["modelValue"])]),_:1})]),_:1}),o(p,{title:"Autor"},{default:l(()=>[x(r("input",{class:"search__content--text","onUpdate:modelValue":e[4]||(e[4]=t=>m.value=t),placeholder:"Ingresar autor",type:"text"},null,512),[[N,m.value]])]),_:1}),o(p,{title:"Contenido"},{default:l(()=>[x(r("textarea",{class:"search__content--text","onUpdate:modelValue":e[5]||(e[5]=t=>_.value=t),placeholder:"Ingresar resumen del contenido",type:"text",maxlength:"100"},`\r
            `,512),[[N,_.value]])]),_:1})]),_:1},512),r("div",_e,[o(s,null,{default:l(({Component:t})=>[(d(),g($,null,[i.value?b("",!0):(d(),g(T,{key:0,columns:I.value,rows:S.value,"actions-active":"",onExecuteActionlist:Z},null,8,["columns","rows"]))],1024))]),_:1})])])]),_:1})}}};export{be as default};
