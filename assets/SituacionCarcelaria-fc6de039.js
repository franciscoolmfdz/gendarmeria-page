import{s as T,f as A,D as V,_ as P,a as N,b as L}from"./files-ef54c6cf.js";import{u as $,g as c,r as x,h as k,L as j,i as G,o as D,f as g,j as m,_ as Y,m as l,n as q,c as K,I as z,a as y,C as X,b as C,K as Z,M as R}from"./index-c9e0618f.js";import{_ as Q}from"./CHeaderBar-331bbde6.js";import{_ as W}from"./ManagementXLS-2cb1a732.js";import{_ as w}from"./CTable-d7ed76f0.js";const ee=T(),te=e=>ee.carcelesList.find(s=>{if(s.adicionalCode&&parseInt(s.adicionalCode)===parseInt(e)||parseInt(s.code)===parseInt(e))return s}),ae=e=>{if(e==="PS")return 1;if(e==="TS_AS")return 2},ne=e=>{if(e==="PS")return 1;if(e==="TS_AS")return 2},ie=(e,i)=>{const t=te(e.CODIGO_ESTABLECIMIENTO);if(i===32)return{subCategoryId:i,categoryId:3,carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,dataEnero:e.ENERO,dataFebrero:e.FEBRERO,dataMarzo:e.MARZO,dataAbril:e.ABRIL,dataMayo:e.MAYO,dataJunio:e.JUNIO,dataJulio:e.JULIO,dataAgosto:e.AGOSTO,dataSeptiembre:e.SEPTIEMBRE,dataOctubre:e.OCTUBRE,dataNoviembre:e.NOVIEMBRE,dataDiciembre:e.DICIEMBRE,leyVeinteMil:e.LEY_20000};if(i===30)return{subCategoryId:i,categoryId:3,carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,imputadoHombre:e.IMPUTADO_HOMBRE,imputadoMujer:e.IMPUTADO_MUJER,condenadoHombre:e.CONDENADO_HOMBRE,condenadoMujer:e.CONDENADO_MUJER,procesadoHombre:e.PROCESADO_HOMBRE,procesadoMujer:e.PROCESADO_MUJER,detenidoHombre:e.DETENIDO_HOMBRE,detenidoMujer:e.DETENIDO_MUJER,pplMaxHombre:e.CAPACIDAD_HOMBRE,pplMaxMujer:e.CAPACIDAD_MUJER};if(i===28)return{carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,profesionalHombre:e.CANTIDAD_HOMBRE,profesionalMujer:e.CANTIDAD_MUJER,profesionalTypeId:ae(e.TIPO_TRABAJADOR)};if(i===29)return{carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,licenseActiveTotal:e.CANTIDAD_SI,licenseDisabledTotal:e.CANTIDAD_NO,subCategoryId:i,categoryId:3};if(i===27)return{carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,aggresionTypeId:ne(e.COD_VAR),year:e.ANIO,month:e.MES,gender:getGender(e.SEXO),quantity:e.CANTIDAD}},oe=(e,i,t,s,f)=>{let p={period:s,hYear:s,hMonth:null,userId:f,categoryId:i,subCategoryId:t,fileId:null,items:[]};for(let r=0;r<e.length;r++){const u=ie(e[r],t);p.items.push(u)}return p};const se=C("i",{class:"large material-icons"},"arrow_upward",-1),le={class:"content-document__section"},v=3,pe={__name:"SituacionCarcelaria",setup(e){const i=$(),t=T(),s=c("Estado situación carcelaria"),f=i.user.id,p=c(),r=c(!1),u=c(null),I=x({disabledEdit:!1}),S=c([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),M=c(t.documentData),b=c([{id:27,description:"Registro de eventos"},{id:28,description:"Asistentes y psicologos"},{id:29,description:"Licencias"},{id:30,description:"% Imputados"},{id:32,description:"Ley 20.000"}]),_=c({}),H=()=>I.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],B=()=>{i.user.restrictions.filter(a=>a.id===1).length>0?I.disabledEdit=!1:I.disabledEdit=!0},F=async()=>{if(u.value&&_.value){const n=JSON.parse(JSON.stringify(u.value.dataFileJson)),a=n[0].ANIO,d=oe(n,v,_.value,a,f),o=new FormData;o.append("archivo",u.value.fileElement),o.append("categoryId",v),o.append("usrId",f),o.append("extendedData",JSON.stringify({period:a,type:_.value}));const U={ignoreHeader:!0},E=await A.postFiles(o,U);E!=null&&E.id&&(d.fileId=E.id,await R.postDimensionHistory(d)),await O()}},h=()=>{p.value.open()},J=async n=>{const a={id:n.request.id};if(n.actionName==="descargar"){const d={download:!0},o=await A.getFiles(a,d);window.open(o,"_blank")}else n.actionName==="borrar"&&(await A.deleteFiles(a),await R.deleteDimensionHistory(a),await O())},O=async()=>{r.value=!0;let n=await A.getFiles({categoryId:v});n=n.map(a=>{let d=V.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=d,a.actions=H(),a}),M.value=n,r.value=!1};return k(async()=>{B(),await O();const n=await j.getCarceles();t.mountParameters(null,n)}),(n,a)=>{const d=G("router-view");return D(),g(Y,null,{default:m(()=>[l(q,{"active-spin":r.value},null,8,["active-spin"]),l(Q,{title:s.value},null,8,["title"]),I.disabledEdit?y("",!0):(D(),K("button",{key:0,onClick:h,class:"btn agregar__archivo"},[z("Agregar registro "),se])),l(L,{ref_key:"modalForm",ref:p,title:"Subir documento",onClose:n.onClose,onSubmit:a[2]||(a[2]=o=>F())},{default:m(()=>[l(P,null,{default:m(()=>[l(N,{title:"Tipo de archivo"},{default:m(()=>[l(X,{options:b.value,modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=o=>_.value=o)},null,8,["options","modelValue"])]),_:1}),l(N,{title:"Archivo"},{default:m(()=>[l(W,{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=o=>u.value=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onClose"]),C("div",le,[l(d,null,{default:m(({Component:o})=>[(D(),g(Z,null,[r.value?y("",!0):(D(),g(w,{key:0,columns:S.value,rows:M.value,"actions-active":"",onExecuteActionlist:J},null,8,["columns","rows"]))],1024))]),_:1})])]),_:1})}}};export{pe as default};