import{s as C,f as A,D as U,_ as P,a as N,b as L}from"./files-cc4d35c2.js";import{u as $,g as c,r as x,h as k,L as j,i as G,o as D,f as g,j as m,_ as Y,m as r,n as q,c as K,I as z,a as R,C as X,b as T,K as Z,M as y}from"./index-26d193c9.js";import{_ as Q}from"./CHeaderBar-01ab725c.js";import{_ as W}from"./ManagementXLS-b0805638.js";import{_ as w}from"./CTable-a3b84a25.js";const ee=C(),te=e=>ee.carcelesList.find(o=>{if(o.adicionalCode&&parseInt(o.adicionalCode)===parseInt(e)||parseInt(o.code)===parseInt(e))return o}),ae=e=>{if(e==="PS")return 1;if(e==="TS_AS")return 2},ne=e=>{if(e==="VI-57")return 1;if(e==="VI-52")return 2;if(e==="VI-59")return 3;if(e==="VI-10")return 4;if(e==="VI-09")return 5;if(e==="VI-13")return 6;if(e==="VI-11")return 7},ie=e=>e==="HOMBRE"?1:e==="MUJER"?2:3,se=(e,i)=>{const t=te(e.CODIGO_ESTABLECIMIENTO);if(i===32)return{subCategoryId:i,categoryId:3,carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,dataEnero:e.ENERO,dataFebrero:e.FEBRERO,dataMarzo:e.MARZO,dataAbril:e.ABRIL,dataMayo:e.MAYO,dataJunio:e.JUNIO,dataJulio:e.JULIO,dataAgosto:e.AGOSTO,dataSeptiembre:e.SEPTIEMBRE,dataOctubre:e.OCTUBRE,dataNoviembre:e.NOVIEMBRE,dataDiciembre:e.DICIEMBRE,leyVeinteMil:e.LEY_20000};if(i===30)return{subCategoryId:i,categoryId:3,carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,imputadoHombre:e.IMPUTADO_HOMBRE,imputadoMujer:e.IMPUTADO_MUJER,condenadoHombre:e.CONDENADO_HOMBRE,condenadoMujer:e.CONDENADO_MUJER,procesadoHombre:e.PROCESADO_HOMBRE,procesadoMujer:e.PROCESADO_MUJER,detenidoHombre:e.DETENIDO_HOMBRE,detenidoMujer:e.DETENIDO_MUJER,pplMaxHombre:e.CAPACIDAD_HOMBRE,pplMaxMujer:e.CAPACIDAD_MUJER};if(i===28)return{carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,profesionalHombre:e.CANTIDAD_HOMBRE,profesionalMujer:e.CANTIDAD_MUJER,profesionalTypeId:ae(e.TIPO_TRABAJADOR)};if(i===29)return{carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,licenseActiveTotal:e.CANTIDAD_SI,licenseDisabledTotal:e.CANTIDAD_NO,subCategoryId:i,categoryId:3};if(i===27)return{carcelId:(t==null?void 0:t.id)??null,regionId:(t==null?void 0:t.regionId)??null,aggresionTypeId:ne(e.COD_VAR),year:e.ANIO,month:e.MES,gender:ie(e.SEXO),quantity:e.CANTIDAD}},oe=(e,i,t,o,_)=>{let p={period:o,hYear:o,hMonth:null,userId:_,categoryId:i,subCategoryId:t,fileId:null,items:[]};for(let l=0;l<e.length;l++){const u=se(e[l],t);p.items.push(u)}return p};const re=T("i",{class:"large material-icons"},"arrow_upward",-1),le={class:"content-document__section"},M=3,fe={__name:"SituacionCarcelaria",setup(e){const i=$(),t=C(),o=c("Estado situación carcelaria"),_=i.user.id,p=c(),l=c(!1),u=c(null),I=x({disabledEdit:!1}),b=c([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),v=c(t.documentData),S=c([{id:27,description:"Registro de eventos"},{id:28,description:"Asistentes y psicologos"},{id:29,description:"Licencias"},{id:30,description:"% Imputados"},{id:32,description:"Ley 20.000"}]),f=c({}),V=()=>I.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],H=()=>{i.user.restrictions.filter(a=>a.id===1).length>0?I.disabledEdit=!1:I.disabledEdit=!0},B=async()=>{if(u.value&&f.value){const n=JSON.parse(JSON.stringify(u.value.dataFileJson)),a=n[0].ANIO,d=oe(n,M,f.value,a,_),s=new FormData;s.append("archivo",u.value.fileElement),s.append("categoryId",M),s.append("usrId",_),s.append("extendedData",JSON.stringify({period:a,type:f.value}));const h={ignoreHeader:!0},E=await A.postFiles(s,h);E!=null&&E.id&&(d.fileId=E.id,await y.postDimensionHistory(d)),await O()}},F=()=>{p.value.open()},J=async n=>{const a={id:n.request.id};if(n.actionName==="descargar"){const d={download:!0},s=await A.getFiles(a,d);window.open(s,"_blank")}else n.actionName==="borrar"&&(await A.deleteFiles(a),await y.deleteDimensionHistory(a),await O())},O=async()=>{l.value=!0;let n=await A.getFiles({categoryId:M});n=n.map(a=>{let d=U.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=d,a.actions=V(),a}),v.value=n,l.value=!1};return k(async()=>{H(),await O();const n=await j.getCarceles();t.mountParameters(null,n)}),(n,a)=>{const d=G("router-view");return D(),g(Y,null,{default:m(()=>[r(q,{"active-spin":l.value},null,8,["active-spin"]),r(Q,{title:o.value},null,8,["title"]),I.disabledEdit?R("",!0):(D(),K("button",{key:0,onClick:F,class:"btn agregar__archivo"},[z("Agregar registro "),re])),r(L,{ref_key:"modalForm",ref:p,title:"Subir documento",onClose:n.onClose,onSubmit:a[2]||(a[2]=s=>B())},{default:m(()=>[r(P,null,{default:m(()=>[r(N,{title:"Tipo de archivo"},{default:m(()=>[r(X,{options:S.value,modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=s=>f.value=s)},null,8,["options","modelValue"])]),_:1}),r(N,{title:"Archivo"},{default:m(()=>[r(W,{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=s=>u.value=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onClose"]),T("div",le,[r(d,null,{default:m(({Component:s})=>[(D(),g(Z,null,[l.value?R("",!0):(D(),g(w,{key:0,columns:b.value,rows:v.value,"actions-active":"",onExecuteActionlist:J},null,8,["columns","rows"]))],1024))]),_:1})])]),_:1})}}};export{fe as default};
