import{g as n,u as S,r as R,h as T,i as H,o as d,f as g,j as s,_ as U,m as o,n as L,c as q,N as K,a as x,w as D,v as C,b as m,K as O}from"./index-27498bb2.js";import{s as j,f as u,D as J,_ as z,a as w,b as G}from"./files-1112360f.js";import{_ as P}from"./CHeaderBar-5da83c53.js";import{_ as Q}from"./CFileManagement-98a6427a.js";import{_ as W}from"./CTable-c05e5067.js";const X=m("i",{class:"large material-icons"},"arrow_upward",-1),Y={class:"content-document__section"},F=8,Z=1,re={__name:"MarcoLegal",setup(ee){const N=n("Marco legal"),y=n(),l=n(!1),_=n(null),f=n(null),p=n(null),h=S(),i=R({disabledEdit:!1}),V=n([{rowReference:"createdBy",description:"Autor"},{rowReference:"name",description:"Título"},{rowReference:"fechaCreacion",description:"Año"},{rowReference:"resumen",description:"Contenido "}]),A=j(),b=n(A.documentData),E=()=>i.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],$=()=>{h.user.restrictions.filter(e=>e.id===1).length>0?i.disabledEdit=!1:i.disabledEdit=!0},k=()=>{},B=async()=>{const t=new FormData;t.append("archivo",_.value),t.append("categoryId",F),t.append("usrId",Z),t.append("extendedData",JSON.stringify({createdBy:f.value,resumen:p.value}));const e={ignoreHeader:!0};await u.postFiles(t,e),await v()},I=()=>{y.value.open()},M=async t=>{const e={id:t.request.id};if(t.actionName==="descargar"){const r={id:t.request.id},a={download:!0},c=await u.getFiles(r,a);window.open(c,"_blank")}else t.actionName==="borrar"&&(await u.deleteFiles(e),await dmm.deleteDimensionHistory(e),await v())},v=async()=>{l.value=!0;let t=await u.getFiles({categoryId:F});t=t.map(e=>{var a,c;let r=J.fromISO(e.createdAt).toFormat("dd/MM/yyyy HH:mm");return e.fechaCreacion=r,e.createdBy=(a=e.extendedData)==null?void 0:a.createdBy,e.resumen=(c=e.extendedData)==null?void 0:c.resumen,e.actions=E(),e}),b.value=t,l.value=!1};return T(async()=>{$(),await v()}),(t,e)=>{const r=H("router-view");return d(),g(U,null,{default:s(()=>[o(P,{title:N.value},null,8,["title"]),o(L,{"active-spin":l.value},null,8,["active-spin"]),i.disabledEdit?x("",!0):(d(),q("button",{key:0,onClick:I,class:"btn agregar__archivo"},[K("Agregar registro "),X])),o(G,{ref_key:"modalForm",ref:y,title:"Subir documento",onClose:k,onSubmit:e[3]||(e[3]=a=>B())},{default:s(()=>[o(z,null,{default:s(()=>[o(w,{title:"Archivo"},{default:s(()=>[o(Q,{modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=a=>_.value=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(w,{title:"Autor"},{default:s(()=>[D(m("input",{class:"search__content--text","onUpdate:modelValue":e[1]||(e[1]=a=>f.value=a),placeholder:"Ingresar autor",type:"text"},null,512),[[C,f.value]])]),_:1}),o(w,{title:"Contenido"},{default:s(()=>[D(m("textarea",{class:"search__content--text","onUpdate:modelValue":e[2]||(e[2]=a=>p.value=a),placeholder:"Ingresar resumen del contenido",type:"text",maxlength:"100"},null,512),[[C,p.value]])]),_:1})]),_:1},512),m("div",Y,[o(r,null,{default:s(({Component:a})=>[(d(),g(O,null,[l.value?x("",!0):(d(),g(W,{key:0,columns:V.value,rows:b.value,"actions-active":"",onExecuteActionlist:M},null,8,["columns","rows"]))],1024))]),_:1})])]),_:1})}}};export{re as default};