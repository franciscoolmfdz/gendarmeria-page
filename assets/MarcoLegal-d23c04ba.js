import{r as a,z as V,o as y,c as x,a as d,d as M,q as N,e as F,w as i,_ as k,b as n,s as $,K as h}from"./index-5069a134.js";import{_ as A}from"./CHeaderBar-83c7dd95.js";import{_ as S,a as B,b as I}from"./CSection-ac644c48.js";import{_ as L}from"./CTable-3d708b67.js";import{s as U,f as w}from"./files-14d1ffbb.js";import"./api-5b4ce668.js";const q={__name:"CFileManagement",props:{modelValue:{type:[String,Object],default:""}},emits:["update:modelValue"],setup(C,{emit:_}){const u=a(null),r=a(""),p=a(""),m=s=>{var o,l;if((o=s.target)!=null&&o.files&&((l=s.target)==null?void 0:l.files.length)>0){const g=s.target.files[0];_("update:modelValue",g)}},f=()=>{r.value="",p.value=""};return V(async()=>{f()}),(s,o)=>(y(),x("div",null,[d("input",{type:"file",ref_key:"fileInput",ref:u,onChange:o[0]||(o[0]=l=>m(l))},null,544)]))}};const E=d("i",{class:"large material-icons"},"arrow_upward",-1),K={class:"content-document__section"},G={__name:"MarcoLegal",setup(C){const _=a("Marco legal"),u=a(),r=a(null),p=a([{rowReference:"name",description:"Nombre archivo"},{rowReference:"createdAt",description:"Fecha de carga"}]),m=U(),f=a(m.documentData),s=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],o=()=>{console.log("Modal closed")},l=async()=>{const e=new FormData;e.append("archivo",r.value),e.append("categoryId",8),e.append("usrId",1);const t={ignoreHeader:!0};await w.postFiles(e,t),await b()},g=()=>{console.log(u.value.open())},D=async e=>{if(e.actionName==="descargar"){const t={id:e.request.id},v={download:!0},c=await w.getFiles(t,v);window.open(c,"_blank")}else e.actionName},b=async()=>{let e=await w.getFiles();e=e.map(t=>(t.actions=s(),t)),m.addDocument(e)};return M(async()=>{await b()}),(e,t)=>{const v=N("router-view");return y(),F(k,null,{default:i(()=>[n(A,{title:_.value},null,8,["title"]),d("button",{onClick:g,class:"btn agregar__archivo"},[$("Agregar registro "),E]),n(I,{ref_key:"modalForm",ref:u,title:"Subir documento",onClose:o,onSubmit:t[1]||(t[1]=c=>l())},{default:i(()=>[n(S,null,{default:i(()=>[n(B,null,{default:i(()=>[n(q,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=c=>r.value=c)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),d("div",K,[n(v,null,{default:i(({Component:c})=>[(y(),F(h,null,[n(L,{columns:p.value,rows:f.value,"actions-active":"",onExecuteActionlist:D},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{G as default};
