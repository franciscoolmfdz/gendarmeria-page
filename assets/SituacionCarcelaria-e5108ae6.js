import{s as S,f as g,D as H,_ as L,a as T,b as $}from"./files-3dad8249.js";import{u as k,g as u,r as x,h as U,M as P,i as y,o as D,f as O,j as p,_ as j,m as o,c as w,J as Y,a as G,x as K,b as C,K as q,N as b}from"./index-2677aad2.js";import{_ as z}from"./CHeaderBar-6fbbd370.js";import{_ as Z}from"./ManagementXLS-167b9602.js";import{_ as Q}from"./CTable-28bf1a6b.js";const W=S(),X=t=>W.carcelesList.find(s=>{if(s.adicionalCode&&parseInt(s.adicionalCode)===parseInt(t)||parseInt(s.code)===parseInt(t))return s}),ee=t=>{if(t==="PS")return 1;if(t==="TS_AS")return 2},te=(t,i)=>{const e=X(t.CODIGO_ESTABLECIMIENTO);if(i===32)return{subCategoryId:i,categoryId:3,carcelId:(e==null?void 0:e.id)??null,regionId:(e==null?void 0:e.regionId)??null,dataEnero:t.ENERO,dataFebrero:t.FEBRERO,dataMarzo:t.MARZO,dataAbril:t.ABRIL,dataMayo:t.MAYO,dataJunio:t.JUNIO,dataJulio:t.JULIO,dataAgosto:t.AGOSTO,dataSeptiembre:t.SEPTIEMBRE,dataOctubre:t.OCTUBRE,dataNoviembre:t.NOVIEMBRE,dataDiciembre:t.DICIEMBRE,leyVeinteMil:t.LEY_20000};if(i===30)return{carcelId:(e==null?void 0:e.id)??null,regionId:(e==null?void 0:e.regionId)??null,profesionalHombre:null,profesionalMujer:null,profesionalType:null};if(i===28)return{carcelId:(e==null?void 0:e.id)??null,regionId:(e==null?void 0:e.regionId)??null,profesionalHombre:t.CANTIDAD_HOMBRE,profesionalMujer:t.CANTIDAD_MUJER,profesionalTypeId:ee(t.TIPO_TRABAJADOR)};if(i===29)return{carcelId:(e==null?void 0:e.id)??null,regionId:(e==null?void 0:e.regionId)??null,licenseActiveTotal:t.CANTIDAD_SI,licenseDisabledTotal:t.CANTIDAD_NO,subCategoryId:i,categoryId:3};if(i===27)return{carcelId:(e==null?void 0:e.id)??null,regionId:(e==null?void 0:e.regionId)??null,licenseActiveTotal:t.CANTIDAD_SI,licenseDisabledTotal:t.CANTIDAD_NO,subCategoryId:i,categoryId:3}},ae=(t,i,e,s,_)=>{let f={period:s,hYear:s,hMonth:null,userId:_,categoryId:i,subCategoryId:e,fileId:null,items:[]};for(let l=0;l<t.length;l++){const m=te(t[l],e);f.items.push(m)}return f};const ne=C("i",{class:"large material-icons"},"arrow_upward",-1),ie={class:"content-document__section"},E=3,ce={__name:"SituacionCarcelaria",setup(t){const i=k(),e=S(),s=u("Estado situación carcelaria"),_=i.user.id,f=u(),l=u(null),m=x({disabledEdit:!1}),M=u([{rowReference:"name",description:"Nombre archivo"},{rowReference:"fechaCreacion",description:"Fecha de carga"}]),N=u(e.documentData),F=u([{id:27,description:"Registro de eventos"},{id:28,description:"Asistentes y psicologos"},{id:29,description:"Licencias"},{id:30,description:"% Imputados"},{id:32,description:"Ley 20.000"}]),I=u({}),R=()=>m.disabledEdit?[{name:"descargar",iconName:"pageview"}]:[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],h=()=>{i.user.restrictions.filter(a=>a.id===1).length>0?m.disabledEdit=!1:m.disabledEdit=!0},B=async()=>{if(l.value&&I.value){const n=JSON.parse(JSON.stringify(l.value.dataFileJson)),a=n[0].ANIO,d=ae(n,E,I.value,a,_),r=new FormData;r.append("archivo",l.value.fileElement),r.append("categoryId",E),r.append("usrId",_),r.append("extendedData",JSON.stringify({period:"2023-07"}));const c={ignoreHeader:!0},v=await g.postFiles(r,c);v!=null&&v.id&&(d.fileId=v.id,await b.postDimensionHistory(d)),await A()}},V=()=>{f.value.open()},J=async n=>{const a={id:n.request.id};if(n.actionName==="descargar"){const d={download:!0},r=await g.getFiles(a,d);window.open(r,"_blank")}else n.actionName==="borrar"&&(await g.deleteFiles(a),await b.deleteDimensionHistory(a),await A())},A=async()=>{let n=await g.getFiles({categoryId:E});n=n.map(a=>{let d=H.fromISO(a.createdAt).toFormat("dd/MM/yyyy HH:mm");return a.fechaCreacion=d,a.actions=R(),a}),N.value=n};return U(async()=>{h(),await A();const n=await P.getCarceles();e.mountParameters(null,n)}),(n,a)=>{const d=y("c-spinner"),r=y("router-view");return D(),O(j,null,{default:p(()=>[o(d,{"active-spin":n.activeSpin},null,8,["active-spin"]),o(z,{title:s.value},null,8,["title"]),m.disabledEdit?G("",!0):(D(),w("button",{key:0,onClick:V,class:"btn agregar__archivo"},[Y("Agregar registro "),ne])),o($,{ref_key:"modalForm",ref:f,title:"Subir documento",onClose:n.onClose,onSubmit:a[2]||(a[2]=c=>B())},{default:p(()=>[o(L,null,{default:p(()=>[o(T,{title:"Tipo de archivo"},{default:p(()=>[o(K,{options:F.value,modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=c=>I.value=c)},null,8,["options","modelValue"])]),_:1}),o(T,{title:"Archivo"},{default:p(()=>[o(Z,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=c=>l.value=c)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onClose"]),C("div",ie,[o(r,null,{default:p(({Component:c})=>[(D(),O(q,null,[o(Q,{columns:M.value,rows:N.value,"actions-active":"",onExecuteActionlist:J},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{ce as default};
