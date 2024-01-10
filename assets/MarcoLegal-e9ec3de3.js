import{u as se,g as o,r as re,h as ue,i as ce,o as _,f as V,j as n,_ as de,m as l,n as ie,b as s,c as J,I as K,a as k,w as d,v as i,K as O}from"./index-f5fd31c3.js";import{s as me,f as m,D as Q,_ as j,a as u,b as z}from"./files-0fc7d111.js";import{_ as pe}from"./CHeaderBar-bab0926c.js";import{_ as G}from"./CFileManagement-7e7596ca.js";import{_ as P}from"./CTable-aff3d79d.js";const ve={class:"section-table-articulo"},fe=s("i",{class:"large material-icons"},"arrow_upward",-1),_e={class:"content-document__section"},ge={class:"section-table-norma"},ye=s("i",{class:"large material-icons"},"arrow_upward",-1),we={class:"content-document__section"},W=8,X=9,Ve={__name:"MarcoLegal",setup(xe){const A=se(),Y=o("Marco legal"),B=A.user.id,E=o(),M=o(),p=o(!1),g=o(null),y=o(null),w=o(null),I=o(null),v=o(null),x=o(null),C=o(null),b=o(null),h=o(null),f=o(null),N=re({disabledEdit:!1}),$=o([{rowReference:"createdBy",description:"Autor"},{rowReference:"name",description:"Nombre de archivo"},{rowReference:"fecha",description:"Fecha"},{rowReference:"resumen",description:"Contenido "}]),L=me(),R=o(L.documentData),q=o(L.documentDataNorma),T=()=>N.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"}],Z=()=>{A.user.restrictions.filter(e=>e.id===1).length>0?N.disabledEdit=!1:N.disabledEdit=!0},H=()=>{},ee=async()=>{const a=new FormData;a.append("archivo",g.value),a.append("nombre",v!=null&&v.value?v.value.replace(" ","_"):""),a.append("categoryId",W),a.append("usrId",B),a.append("extendedData",JSON.stringify({createdBy:w.value,resumen:b.value,fecha:I.value}));const e={ignoreHeader:!0};await m.postFiles(a,e),g.value=null,v.value=null,w.value=null,b.value=null,I.value=null,await U()},ae=async()=>{const a=new FormData;a.append("archivo",y.value),a.append("nombre",f!=null&&f.value?f.value.replace(" ","_"):""),a.append("categoryId",X),a.append("usrId",B),a.append("extendedData",JSON.stringify({createdBy:x.value,resumen:h.value,fecha:C.value}));const e={ignoreHeader:!0};await m.postFiles(a,e),y.value=null,f.value=null,x.value=null,h.value=null,C.value=null,fileNormaSection.value.clearFields(),await S()},te=()=>{E.value.open()},le=()=>{M.value.open()},oe=async a=>{const e={id:a.request.id};if(a.actionName==="descargar"){const r={id:a.request.id},t={download:!0},c=await m.getFiles(r,t);window.open(c,"_blank"),await mountData()}else a.actionName==="borrar"&&(await m.deleteFiles(e),await U())},ne=async a=>{const e={id:a.request.id};if(a.actionName==="descargar"){const r={id:a.request.id},t={download:!0},c=await m.getFiles(r,t);window.open(c,"_blank"),await S()}else a.actionName==="borrar"&&(await m.deleteFiles(e),await S())},S=async()=>{p.value=!0,y.value=null,x.value=null,h.value=null;let a=await m.getFiles({categoryId:X});a=a.map(e=>{var t,c,D,F;const r=(t=e==null?void 0:e.extendedData)!=null&&t.fecha?Q.fromSQL(((c=e==null?void 0:e.extendedData)==null?void 0:c.fecha)+"-01 00:00:00").toFormat("MM-yyyy"):"";return e.fecha=r,e.createdBy=(D=e.extendedData)==null?void 0:D.createdBy,e.resumen=(F=e.extendedData)==null?void 0:F.resumen,e.actions=T(),e}),q.value=a,p.value=!1},U=async()=>{p.value=!0,g.value=null,w.value=null,b.value=null;let a=await m.getFiles({categoryId:W});a=a.map(e=>{var t,c,D,F;const r=(t=e==null?void 0:e.extendedData)!=null&&t.fecha?Q.fromSQL(((c=e==null?void 0:e.extendedData)==null?void 0:c.fecha)+"-01 00:00:00").toFormat("MM-yyyy"):"";return e.fecha=r,e.createdBy=(D=e.extendedData)==null?void 0:D.createdBy,e.resumen=(F=e.extendedData)==null?void 0:F.resumen,e.actions=T(),e}),R.value=a,p.value=!1};return ue(async()=>{Z(),await U(),await S()}),(a,e)=>{const r=ce("router-view");return _(),V(de,{class:"table-marco-legal"},{default:n(()=>[l(pe,{title:Y.value},null,8,["title"]),l(ie,{"active-spin":p.value},null,8,["active-spin"]),s("div",ve,[N.disabledEdit?k("",!0):(_(),J("button",{key:0,onClick:te,class:"btn agregar__archivo-articulo"},[K("Agregar articulo "),fe])),l(z,{ref_key:"modalForm",ref:E,title:"Subir documento",onClose:H,onSubmit:ee},{default:n(()=>[l(j,null,{default:n(()=>[l(u,{title:"Archivo"},{default:n(()=>[l(G,{modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=t=>g.value=t)},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{title:"Nombre archivo"},{default:n(()=>[d(s("input",{class:"search__content--text","onUpdate:modelValue":e[1]||(e[1]=t=>v.value=t),placeholder:"Ingresar nombre archivo",type:"text"},null,512),[[i,v.value]])]),_:1}),l(u,{title:"Autor"},{default:n(()=>[d(s("input",{class:"search__content--text","onUpdate:modelValue":e[2]||(e[2]=t=>w.value=t),placeholder:"Ingresar autor",type:"text"},null,512),[[i,w.value]])]),_:1}),l(u,{title:"Fecha",class:"c-periodo"},{default:n(()=>[d(s("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[3]||(e[3]=t=>I.value=t)},null,512),[[i,I.value]])]),_:1}),l(u,{title:"Contenido"},{default:n(()=>[d(s("textarea",{class:"search__content--text","onUpdate:modelValue":e[4]||(e[4]=t=>b.value=t),placeholder:"Ingresar resumen del contenido",type:"text",maxlength:"100"},`\r
        `,512),[[i,b.value]])]),_:1})]),_:1},512),s("div",_e,[l(r,null,{default:n(({Component:t})=>[(_(),V(O,null,[p.value?k("",!0):(_(),V(P,{key:0,columns:$.value,rows:R.value,"actions-active":"",onExecuteActionlist:oe},null,8,["columns","rows"]))],1024))]),_:1})])]),s("div",ge,[N.disabledEdit?k("",!0):(_(),J("button",{key:0,onClick:le,class:"btn agregar__archivo-articulo-norma"},[K("Agregar norma "),ye])),l(z,{ref_key:"modalFormNorma",ref:M,title:"Subir documento",onClose:H,onSubmit:ae},{default:n(()=>[l(j,null,{default:n(()=>[l(u,{title:"Archivo"},{default:n(()=>[l(G,{modelValue:y.value,"onUpdate:modelValue":e[5]||(e[5]=t=>y.value=t)},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{title:"Nombre archivo"},{default:n(()=>[d(s("input",{class:"search__content--text","onUpdate:modelValue":e[6]||(e[6]=t=>f.value=t),placeholder:"Ingresar nombre archivo",type:"text"},null,512),[[i,f.value]])]),_:1}),l(u,{title:"Autor"},{default:n(()=>[d(s("input",{class:"search__content--text","onUpdate:modelValue":e[7]||(e[7]=t=>x.value=t),placeholder:"Ingresar autor",type:"text"},null,512),[[i,x.value]])]),_:1}),l(u,{title:"Fecha",class:"c-periodo"},{default:n(()=>[d(s("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[8]||(e[8]=t=>C.value=t)},null,512),[[i,C.value]])]),_:1}),l(u,{title:"Contenido"},{default:n(()=>[d(s("textarea",{class:"search__content--text","onUpdate:modelValue":e[9]||(e[9]=t=>h.value=t),placeholder:"Ingresar resumen del contenido",type:"text",maxlength:"100"},`\r
            `,512),[[i,h.value]])]),_:1})]),_:1},512),s("div",we,[l(r,null,{default:n(({Component:t})=>[(_(),V(O,null,[p.value?k("",!0):(_(),V(P,{key:0,columns:$.value,rows:q.value,"actions-active":"",onExecuteActionlist:ne},null,8,["columns","rows"]))],1024))]),_:1})])])]),_:1})}}};export{Ve as default};
