import{o as d,c as v,t as x,r as t,i as $,d as k,w as _,_ as q,b as r,a as w}from"./index-3d57f866.js";import{_ as A}from"./CHeaderBar-e4adc1c3.js";import{_ as B}from"./CTable-fafcb0be.js";import{s as D,d as l}from"./manageFiles-fccdf2c8.js";import"./FileSaver.min-7b9c768b.js";const N={__name:"CButton",props:{title:{type:String,required:!0}},emits:["executeAction"],setup(i,{emit:a}){return(u,o)=>(d(),v("button",{class:"c-button",onClick:o[0]||(o[0]=s=>a("executeAction"))},x(i.title),1))}};const b={class:"content-document__section"},L={__name:"MarcoLegal",setup(i){t();const a=t([{rowReference:"name",description:"Nombre archivo"},{rowReference:"periodo",description:"Fecha de carga"}]),u=()=>[{name:"descargar",iconName:"pageview"}],o=D(),s=t(o.documentData);t(null),t(null),t(null);const p=e=>{console.log(e)},f=e=>{var n,c,m;e.actionName==="descargar"&&(console.log(e.request.name),(n=e.request)!=null&&n.file?l((c=e.request)==null?void 0:c.file,"file"):(console.log(l),l((m=e.request)==null?void 0:m.name,"link")))},g=t("Marco legal");return $(()=>{console.log(o.documentData),s.value.map(e=>(e.actions=u(),e))}),(e,n)=>(d(),k(q,null,{default:_(()=>[r(A,{title:g.value},null,8,["title"]),w("div",b,[r(B,{columns:a.value,rows:s.value,"actions-active":"",onExecuteActionlist:f},{default:_(()=>[r(N,{onExecuteAction:n[0]||(n[0]=c=>p(e.row))})]),_:1},8,["columns","rows"])])]),_:1}))}};export{L as default};
