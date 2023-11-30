import{g as n,u as ee,r as te,h as ae,i as oe,o as d,f as g,j as l,_ as ne,m as o,n as le,b as r,c as M,K as U,a as b,w as x,v as N,L as $}from"./index-23ea3b69.js";import{s as se,f as c,D as H,_ as R,a as p,b as q}from"./files-17d6db8d.js";import{_ as re}from"./CHeaderBar-6cf1dce7.js";import{_ as L}from"./CFileManagement-314959d0.js";import{_ as O}from"./CTable-aeaf1209.js";const ie={class:"section-table-articulo"},ce=r("i",{class:"large material-icons"},"arrow_upward",-1),ue={class:"content-document__section"},de={class:"section-table-norma"},me=r("i",{class:"large material-icons"},"arrow_upward",-1),_e={class:"content-document__section"},T=8,J=9,K=1,be={__name:"MarcoLegal",setup(pe){const j=n("Marco legal"),h=n(),F=n(),u=n(!1),v=n(null),y=n(null),m=n(null),C=n(null),_=n(null),A=n(null),z=ee(),f=te({disabledEdit:!1}),I=n([{rowReference:"createdBy",description:"Autor"},{rowReference:"name",description:"Nombre de archivo"},{rowReference:"fechaCreacion",description:"Año"},{rowReference:"resumen",description:"Contenido "}]),V=se(),k=n(V.documentData),S=n(V.documentDataNorma),B=()=>f.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],G=()=>{z.user.restrictions.filter(e=>e.id===1).length>0?f.disabledEdit=!1:f.disabledEdit=!0},E=()=>{},P=async()=>{console.log(v.value);const t=new FormData;t.append("archivo",v.value),t.append("categoryId",T),t.append("usrId",K),t.append("extendedData",JSON.stringify({createdBy:m.value,resumen:_.value}));const e={ignoreHeader:!0};await c.postFiles(t,e),await D()},Q=async()=>{const t=new FormData;t.append("archivo",y.value),t.append("categoryId",J),t.append("usrId",K),t.append("extendedData",JSON.stringify({createdBy:C.value,resumen:A.value}));const e={ignoreHeader:!0};await c.postFiles(t,e),await w()},W=()=>{h.value.open()},X=()=>{F.value.open()},Y=async t=>{const e={id:t.request.id};if(t.actionName==="descargar"){const s={id:t.request.id},a={download:!0},i=await c.getFiles(s,a);window.open(i,"_blank"),await mountData()}else t.actionName==="borrar"&&(await c.deleteFiles(e),await D())},Z=async t=>{const e={id:t.request.id};if(t.actionName==="descargar"){const s={id:t.request.id},a={download:!0},i=await c.getFiles(s,a);window.open(i,"_blank"),await w()}else t.actionName==="borrar"&&(await c.deleteFiles(e),await w())},w=async()=>{u.value=!0,y.value=null,C.value=null,A.value=null;let t=await c.getFiles({categoryId:J});t=t.map(e=>{var a,i;let s=H.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=s,e.createdBy=(a=e.extendedData)==null?void 0:a.createdBy,e.resumen=(i=e.extendedData)==null?void 0:i.resumen,e.actions=B(),e}),S.value=t,u.value=!1},D=async()=>{u.value=!0,v.value=null,m.value=null,_.value=null;let t=await c.getFiles({categoryId:T});t=t.map(e=>{var a,i;let s=H.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=s,e.createdBy=(a=e.extendedData)==null?void 0:a.createdBy,e.resumen=(i=e.extendedData)==null?void 0:i.resumen,e.actions=B(),e}),k.value=t,u.value=!1};return ae(async()=>{G(),await D(),await w()}),(t,e)=>{const s=oe("router-view");return d(),g(ne,{class:"table-marco-legal"},{default:l(()=>[o(re,{title:j.value},null,8,["title"]),o(le,{"active-spin":u.value},null,8,["active-spin"]),r("div",ie,[f.disabledEdit?b("",!0):(d(),M("button",{key:0,onClick:W,class:"btn agregar__archivo-articulo"},[U("Agregar articulo "),ce])),o(q,{ref_key:"modalForm",ref:h,title:"Subir documento",onClose:E,onSubmit:P},{default:l(()=>[o(R,null,{default:l(()=>[o(p,{title:"Archivo"},{default:l(()=>[o(L,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=a=>v.value=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(p,{title:"Autor"},{default:l(()=>[x(r("input",{class:"search__content--text","onUpdate:modelValue":e[1]||(e[1]=a=>m.value=a),placeholder:"Ingresar autor",type:"text"},null,512),[[N,m.value]])]),_:1}),o(p,{title:"Contenido"},{default:l(()=>[x(r("textarea",{class:"search__content--text","onUpdate:modelValue":e[2]||(e[2]=a=>_.value=a),placeholder:"Ingresar resumen del contenido",type:"text",maxlength:"100"},`\r
					`,512),[[N,_.value]])]),_:1})]),_:1},512),r("div",ue,[o(s,null,{default:l(({Component:a})=>[(d(),g($,null,[u.value?b("",!0):(d(),g(O,{key:0,columns:I.value,rows:k.value,"actions-active":"",onExecuteActionlist:Y},null,8,["columns","rows"]))],1024))]),_:1})])]),r("div",de,[f.disabledEdit?b("",!0):(d(),M("button",{key:0,onClick:X,class:"btn agregar__archivo-articulo-norma"},[U("Agregar norma "),me])),o(q,{ref_key:"modalFormNorma",ref:F,title:"Subir documento",onClose:E,onSubmit:Q},{default:l(()=>[o(R,null,{default:l(()=>[o(p,{title:"Archivo"},{default:l(()=>[o(L,{modelValue:y.value,"onUpdate:modelValue":e[3]||(e[3]=a=>y.value=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(p,{title:"Autor"},{default:l(()=>[x(r("input",{class:"search__content--text","onUpdate:modelValue":e[4]||(e[4]=a=>m.value=a),placeholder:"Ingresar autor",type:"text"},null,512),[[N,m.value]])]),_:1}),o(p,{title:"Contenido"},{default:l(()=>[x(r("textarea",{class:"search__content--text","onUpdate:modelValue":e[5]||(e[5]=a=>_.value=a),placeholder:"Ingresar resumen del contenido",type:"text",maxlength:"100"},`\r
							`,512),[[N,_.value]])]),_:1})]),_:1},512),r("div",_e,[o(s,null,{default:l(({Component:a})=>[(d(),g($,null,[u.value?b("",!0):(d(),g(O,{key:0,columns:I.value,rows:S.value,"actions-active":"",onExecuteActionlist:Z},null,8,["columns","rows"]))],1024))]),_:1})])])]),_:1})}}};export{be as default};
