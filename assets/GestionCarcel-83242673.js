import{s as $,f as l,D as k,_ as A,a as p,b as I}from"./files-2d08d4f9.js";import{g as i,u as S,r as x,h as T,i as B,o as u,f as v,j as s,_ as M,m as a,c as G,I as H,a as R,C as U,b as w,K}from"./index-60abcd12.js";import{_ as L}from"./CHeaderBar-2f735b52.js";import{_ as O}from"./CFileManagement-a2ef4555.js";import{_ as j}from"./CTable-fdf5d175.js";const q=w("i",{class:"large material-icons"},"arrow_upward",-1),J={class:"content-document__section"},g=5,Z={__name:"GestionCarcel",setup(z){const y=i("Gestión de carcel"),m=i(),c=i(null),_=S(),r=x({disabledEdit:!1}),b=i([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),C=$(),f=i(C.documentData),F=()=>r.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],N=()=>{_.user.restrictions.filter(t=>t.id===1).length>0?r.disabledEdit=!1:r.disabledEdit=!0},V=()=>{},D=async()=>{const e=new FormData;e.append("archivo",c.value),e.append("categoryId",g),e.append("usrId",_.user.id),e.append("extendedData",JSON.stringify({period:"2023-07"}));const t={ignoreHeader:!0};await l.postFiles(e,t),await d()},h=()=>{m.value.open()},E=async e=>{const t={id:e.request.id};if(e.actionName==="descargar"){const n={download:!0},o=await l.getFiles(t,n);window.open(o,"_blank")}else e.actionName==="borrar"&&(await l.deleteFiles(t),await d())},d=async()=>{let e=await l.getFiles({categoryId:g});e=e.map(t=>{let n=k.fromISO(t.createdAt).toFormat("dd/MM/yyyy HH:mm");return t.fechaCreacion=n,t.actions=F(),t}),f.value=e};return T(async()=>{N(),await d()}),(e,t)=>{const n=B("router-view");return u(),v(M,null,{default:s(()=>[a(L,{title:y.value},null,8,["title"]),r.disabledEdit?R("",!0):(u(),G("button",{key:0,onClick:h,class:"btn agregar__archivo"},[H("Agregar registro "),q])),a(I,{ref_key:"modalForm",ref:m,title:"Subir documento",onClose:V,onSubmit:t[2]||(t[2]=o=>D())},{default:s(()=>[a(A,null,{default:s(()=>[a(p,{title:"tipo de archivo"},{default:s(()=>[a(U,{options:e.typeList,modelValue:e.selectedType,"onUpdate:modelValue":t[0]||(t[0]=o=>e.selectedType=o)},null,8,["options","modelValue"])]),_:1}),a(p,{title:"Archivo"},{default:s(()=>[a(O,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=o=>c.value=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),w("div",J,[a(n,null,{default:s(({Component:o})=>[(u(),v(K,null,[a(j,{columns:b.value,rows:f.value,"actions-active":"",onExecuteActionlist:E},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{Z as default};
