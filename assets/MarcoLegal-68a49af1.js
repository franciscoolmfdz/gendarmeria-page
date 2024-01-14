import{u as se,g as l,r as re,h as ue,i as ce,o as p,f as N,j as n,_ as de,m as o,n as ie,b as s,c as J,I as K,a as S,w as d,v as i,K as O}from"./index-ec431411.js";import{s as me,f as m,D as Q,_ as j,a as u,b as z}from"./files-b33da1f9.js";import{_ as ve}from"./CHeaderBar-cdabaa72.js";import{_ as G}from"./CFileManagement-e88ddfc3.js";import{_ as P}from"./CTable-28300779.js";const pe={class:"section-table-articulo"},fe=s("i",{class:"large material-icons"},"arrow_upward",-1),_e={class:"content-document__section"},ge={class:"section-table-norma"},ye=s("i",{class:"large material-icons"},"arrow_upward",-1),be={class:"content-document__section"},W=8,X=9,Ve={__name:"MarcoLegal",setup(he){const U=se(),Y=l("Marco legal"),B=U.user.id,E=l(),M=l(),v=l(!1),f=l(null),_=l(null),g=l(null),F=l(null),V=l(null),y=l(null),A=l(null),b=l(null),h=l(null),I=l(null),w=re({disabledEdit:!1}),$=l([{rowReference:"createdBy",description:"Autor"},{rowReference:"nombreArchivo",description:"Nombre de archivo"},{rowReference:"fecha",description:"Fecha"},{rowReference:"resumen",description:"Contenido "}]),L=me(),R=l(L.documentData),q=l(L.documentDataNorma),T=()=>w.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"}],Z=()=>{U.user.restrictions.filter(e=>e.id===1).length>0?w.disabledEdit=!1:w.disabledEdit=!0},H=()=>{},ee=async()=>{const a=new FormData;a.append("archivo",f.value),a.append("categoryId",W),a.append("usrId",B),a.append("extendedData",JSON.stringify({nombre:V.value,createdBy:g.value,resumen:b.value,fecha:F.value}));const e={ignoreHeader:!0};await m.postFiles(a,e),f.value=null,V.value=null,g.value=null,b.value=null,F.value=null,await k()},ae=async()=>{const a=new FormData;a.append("archivo",_.value),a.append("categoryId",X),a.append("usrId",B),a.append("extendedData",JSON.stringify({nombre:I.value,createdBy:y.value,resumen:h.value,fecha:A.value}));const e={ignoreHeader:!0};await m.postFiles(a,e),_.value=null,I.value=null,y.value=null,h.value=null,A.value=null,await C()},te=()=>{E.value.open()},oe=()=>{M.value.open()},le=async a=>{const e={id:a.request.id};if(a.actionName==="descargar"){const r={id:a.request.id},t={download:!0},c=await m.getFiles(r,t);window.open(c,"_blank"),await mountData()}else a.actionName==="borrar"&&(await m.deleteFiles(e),await k())},ne=async a=>{const e={id:a.request.id};if(a.actionName==="descargar"){const r={id:a.request.id},t={download:!0},c=await m.getFiles(r,t);window.open(c,"_blank"),await C()}else a.actionName==="borrar"&&(await m.deleteFiles(e),await C())},C=async()=>{v.value=!0,_.value=null,y.value=null,h.value=null;let a=await m.getFiles({categoryId:X});a=a.map(e=>{var t,c,x,D;const r=(t=e==null?void 0:e.extendedData)!=null&&t.fecha?Q.fromSQL(((c=e==null?void 0:e.extendedData)==null?void 0:c.fecha)+"-01 00:00:00").toFormat("MM-yyyy"):"";return e.fecha=r,e.nombreArchivo=e.extendedData.nombre,e.createdBy=(x=e.extendedData)==null?void 0:x.createdBy,e.resumen=(D=e.extendedData)==null?void 0:D.resumen,e.actions=T(),e}),q.value=a,v.value=!1},k=async()=>{v.value=!0,f.value=null,g.value=null,b.value=null;let a=await m.getFiles({categoryId:W});a=a.map(e=>{var t,c,x,D;const r=(t=e==null?void 0:e.extendedData)!=null&&t.fecha?Q.fromSQL(((c=e==null?void 0:e.extendedData)==null?void 0:c.fecha)+"-01 00:00:00").toFormat("MM-yyyy"):"";return e.fecha=r,e.nombreArchivo=e.extendedData.nombre,e.createdBy=(x=e.extendedData)==null?void 0:x.createdBy,e.resumen=(D=e.extendedData)==null?void 0:D.resumen,e.actions=T(),e}),R.value=a,v.value=!1};return ue(async()=>{Z(),await k(),await C()}),(a,e)=>{const r=ce("router-view");return p(),N(de,{class:"table-marco-legal"},{default:n(()=>[o(ve,{title:Y.value},null,8,["title"]),o(ie,{"active-spin":v.value},null,8,["active-spin"]),s("div",pe,[w.disabledEdit?S("",!0):(p(),J("button",{key:0,onClick:te,class:"btn agregar__archivo-articulo"},[K("Agregar articulo "),fe])),o(z,{ref_key:"modalForm",ref:E,title:"Subir documento",onClose:H,onSubmit:ee},{default:n(()=>[o(j,null,{default:n(()=>[o(u,{title:"Archivo"},{default:n(()=>[o(G,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=t=>f.value=t)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,{title:"Nombre archivo"},{default:n(()=>[d(s("input",{class:"search__content--text","onUpdate:modelValue":e[1]||(e[1]=t=>V.value=t),placeholder:"Ingresar nombre archivo",type:"text"},null,512),[[i,V.value]])]),_:1}),o(u,{title:"Autor"},{default:n(()=>[d(s("input",{class:"search__content--text","onUpdate:modelValue":e[2]||(e[2]=t=>g.value=t),placeholder:"Ingresar autor",type:"text"},null,512),[[i,g.value]])]),_:1}),o(u,{title:"Fecha",class:"c-periodo"},{default:n(()=>[d(s("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[3]||(e[3]=t=>F.value=t)},null,512),[[i,F.value]])]),_:1}),o(u,{title:"Contenido"},{default:n(()=>[d(s("textarea",{class:"search__content--text","onUpdate:modelValue":e[4]||(e[4]=t=>b.value=t),placeholder:"Ingresar resumen del contenido",type:"text",maxlength:"400"},`\r
        `,512),[[i,b.value]])]),_:1})]),_:1},512),s("div",_e,[o(r,null,{default:n(({Component:t})=>[(p(),N(O,null,[v.value?S("",!0):(p(),N(P,{key:0,columns:$.value,rows:R.value,"actions-active":"",onExecuteActionlist:le},null,8,["columns","rows"]))],1024))]),_:1})])]),s("div",ge,[w.disabledEdit?S("",!0):(p(),J("button",{key:0,onClick:oe,class:"btn agregar__archivo-articulo-norma"},[K("Agregar norma "),ye])),o(z,{ref_key:"modalFormNorma",ref:M,title:"Subir documento",onClose:H,onSubmit:ae},{default:n(()=>[o(j,null,{default:n(()=>[o(u,{title:"Archivo"},{default:n(()=>[o(G,{modelValue:_.value,"onUpdate:modelValue":e[5]||(e[5]=t=>_.value=t)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,{title:"Nombre archivo"},{default:n(()=>[d(s("input",{class:"search__content--text","onUpdate:modelValue":e[6]||(e[6]=t=>I.value=t),placeholder:"Ingresar nombre archivo",type:"text"},null,512),[[i,I.value]])]),_:1}),o(u,{title:"Autor"},{default:n(()=>[d(s("input",{class:"search__content--text","onUpdate:modelValue":e[7]||(e[7]=t=>y.value=t),placeholder:"Ingresar autor",type:"text"},null,512),[[i,y.value]])]),_:1}),o(u,{title:"Fecha",class:"c-periodo"},{default:n(()=>[d(s("input",{class:"periodo-item",type:"month","onUpdate:modelValue":e[8]||(e[8]=t=>A.value=t)},null,512),[[i,A.value]])]),_:1}),o(u,{title:"Contenido"},{default:n(()=>[d(s("textarea",{class:"search__content--text","onUpdate:modelValue":e[9]||(e[9]=t=>h.value=t),placeholder:"Ingresar resumen del contenido",type:"text",maxlength:"400"},`\r
            `,512),[[i,h.value]])]),_:1})]),_:1},512),s("div",be,[o(r,null,{default:n(({Component:t})=>[(p(),N(O,null,[v.value?S("",!0):(p(),N(P,{key:0,columns:$.value,rows:q.value,"actions-active":"",onExecuteActionlist:ne},null,8,["columns","rows"]))],1024))]),_:1})])])]),_:1})}}};export{Ve as default};
