import{s as h,f as y,D as k,_ as B,a as F,b as H}from"./files-0fc7d111.js";import{u as U,g as p,r as G,h as K,L as j,i as q,o as A,f as O,j as g,_ as X,m as d,n as Y,c as z,I as Q,a as b,C as W,b as P,K as Z,M as R}from"./index-f5fd31c3.js";import{_ as ee}from"./CHeaderBar-bab0926c.js";import{_ as te}from"./ManagementXLS-4067ce01.js";import{_ as ae}from"./CTable-aff3d79d.js";const ne=h(),oe=e=>ne.carcelesList.find(o=>{if(o.adicionalCode&&parseInt(o.adicionalCode)===parseInt(e)||parseInt(o.code)===parseInt(e))return o}),se=e=>e==="CONDENADO"?1:e==="IMPUTADO"?2:e==="PROCESADO"?3:0,ie=e=>{if(e==="ABIERTO")return 1;if(e==="CERRADO")return 2;if(e==="SEMIABIERTO")return 3},u=e=>e&&(e.toUpperCase()==="SI"||e.toUpperCase()==="SÍ"||e.toUpperCase()==="X")?1:0,re=(e,s)=>{const a=oe(e.CODIGO_ESTABLECIMIENTO);if(s===25)return{carcelId:(a==null?void 0:a.id)??null,regionId:(a==null?void 0:a.regionId)??null,procesalTypeId:se(e.CALIDAD_PROCESAL),regimenStateId:ie(e.REGIMEN),categoryId:4,subCategoryId:s,igi:u(e.POSEE_IGI),sexo:e.GENERO,condenaPrevia:u(e.CONDENA_PREVIA)};if(s===26){const o=u(e.PPL),_=u(e.PRS),i=u(e.CET_C),c=u(e.CET_SA),r=u(e.CTA),f=u(e.SSJJ),C=u(e.CJ),I=o+_+i+c+r+f+C,D=parseFloat((I/7).toFixed(2));return{categoryId:4,centroId:(a==null?void 0:a.id)??null,regionId:(a==null?void 0:a.regionId)??null,programPPL:o,programPLS:_,programCETC:i,programCETSA:c,programCTA:r,programSSJJ:f,programCJ:C,total:I,promedio:D,subDimensionId:s}}},le=(e,s,a,o,_)=>{let i={period:o,hYear:o,hMonth:null,userId:_,categoryId:s,subCategoryId:a,fileId:null,items:[]};for(let c=0;c<e.length;c++){const r=re(e[c],a);i.items.push(r)}return i};const ce=P("i",{class:"large material-icons"},"arrow_upward",-1),de={class:"content-document__section"},T=4,ge={__name:"ElementosReinsercion",setup(e){const s=U(),a=h(),o=p("Elementos de reinserción"),_=s.user.id,i=p(!1),c=p(),r=p(null),f=G({disabledEdit:!1}),C=p([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),I=p(a.documentData),D=p([{id:25,description:"IGI"},{id:26,description:"Oferta programática"}]),v=p({}),V=()=>f.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],w=()=>{s.user.restrictions.filter(t=>t.id===1).length>0?f.disabledEdit=!1:f.disabledEdit=!0},x=()=>{},J=async()=>{var n;if(r.value&&v.value){const t=JSON.parse(JSON.stringify(r.value.dataFileJson)),m=t[0].ANIO,l=le(t,T,v.value,m,_),E=new FormData;E.append("archivo",r.value.fileElement),E.append("categoryId",T),E.append("usrId",((n=s.user)==null?void 0:n.id)??1),E.append("extendedData",JSON.stringify({period:m,type:v.value}));const $={ignoreHeader:!0},S=await y.postFiles(E,$);S!=null&&S.id&&(l.fileId=S.id,await R.postDimensionHistory(l)),await N()}},L=()=>{c.value.open()},M=async n=>{const t={id:n.request.id};if(n.actionName==="descargar"){const m={download:!0},l=await y.getFiles(t,m);window.open(l,"_blank")}else n.actionName==="borrar"&&(await y.deleteFiles(t),await R.deleteDimensionHistory(t),await N())},N=async()=>{i.value=!0;let n=await y.getFiles({categoryId:T});n=n.map(t=>{let m=k.fromISO(t.createdAt).toFormat("dd/MM/yyyy HH:mm");return t.fechaCreacion=m,t.actions=V(),t}),I.value=n,i.value=!1};return K(async()=>{w(),await N();const n=await j.getCarceles();a.mountParameters(null,n)}),(n,t)=>{const m=q("router-view");return A(),O(X,null,{default:g(()=>[d(ee,{title:o.value},null,8,["title"]),d(Y,{"active-spin":i.value},null,8,["active-spin"]),f.disabledEdit?b("",!0):(A(),z("button",{key:0,onClick:L,class:"btn agregar__archivo"},[Q("Agregar registro "),ce])),d(H,{ref_key:"modalForm",ref:c,title:"Subir documento",onClose:x,onSubmit:t[2]||(t[2]=l=>J())},{default:g(()=>[d(B,null,{default:g(()=>[d(F,{title:"Tipo de archivo"},{default:g(()=>[d(W,{options:D.value,modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=l=>v.value=l)},null,8,["options","modelValue"])]),_:1}),d(F,{title:"Archivo"},{default:g(()=>[d(te,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=l=>r.value=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),P("div",de,[d(m,null,{default:g(({Component:l})=>[(A(),O(Z,null,[i.value?b("",!0):(A(),O(ae,{key:0,columns:C.value,rows:I.value,"actions-active":"",onExecuteActionlist:M},null,8,["columns","rows"]))],1024))]),_:1})])]),_:1})}}};export{ge as default};
