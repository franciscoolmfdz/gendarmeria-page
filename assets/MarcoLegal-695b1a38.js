import{r as l,o as N,c as V,a as p,i as w,s as x,d as D,w as _,_ as M,b as r,p as b,K as A}from"./index-0af28c29.js";import{_ as k}from"./CHeaderBar-0d0601e0.js";import{_ as I,a as S,b as h}from"./CSection-5b0587ff.js";import{_ as E}from"./CTable-058a60ed.js";import{s as R,d as $}from"./manageFiles-291548d0.js";import"./FileSaver.min-6190d11a.js";const q={__name:"CFileManagement",props:{modelValue:{type:[String,Object],default:""}},emits:["update:modelValue"],setup(t,{emit:a}){const o=l(null),g=l(""),c=l(""),u=()=>{const s=o.value.files[0];g.value=s.name;const m=new FileReader;m.onload=v=>{c.value=v.target.result},m.readAsText(s),a("update:modelValue",s)};return(s,m)=>(N(),V("div",null,[p("input",{type:"file",ref_key:"fileInput",ref:o,onChange:u},null,544)]))}},B=t=>`${f(t.getDay(),2)}-${f(t.getMonth(),2)}-${t.getFullYear()} ${f(t.getHours(),2)}:${f(t.getMinutes(),2)}`,f=(t,a)=>(a-=t.toString().length,a>0?new Array(a+(/\./.test(t)?2:1)).join("0")+t:t+"");const T=p("i",{class:"large material-icons"},"arrow_upward",-1),L={class:"content-document__section"},P={__name:"MarcoLegal",setup(t){const a=l(),o=l(null),g=l([{rowReference:"name",description:"Nombre archivo"},{rowReference:"periodo",description:"Fecha de carga"}]),c=R(),u=l(c.documentData),s=()=>[{name:"descargar",iconName:"pageview"},{name:"borrar",iconName:"delete_forever"}],m=()=>{console.log("Modal closed")},v=()=>{let e=new Date;const n={name:o==null?void 0:o.value.name,periodo:B(e),region:"REGION 3",penitenciaria:"PENITENCIARIA 1",file:o,actions:s()};c.addDocument(n),o.value=null},y=()=>{console.log(a.value.open())},C=e=>{var n,d,i;console.log(e.actionName),e.actionName==="descargar"?(n=e.request)!=null&&n.file?$((d=e.request)==null?void 0:d.file,"file"):(console.log($),$((i=e.request)==null?void 0:i.name,"link")):e.actionName==="borrar"&&(c.removeDocument(e.request.name),u.value=c.documentData)};w(()=>{u.value.map(e=>(e.actions=s(),e))});const F=l("Marco legal");return(e,n)=>{const d=x("router-view");return N(),D(M,null,{default:_(()=>[r(k,{title:F.value},null,8,["title"]),p("button",{onClick:y,class:"btn agregar__archivo"},[b("Agregar registro "),T]),r(h,{ref_key:"modalForm",ref:a,title:"Subir documento",onClose:m,onSubmit:n[1]||(n[1]=i=>v())},{default:_(()=>[r(I,null,{default:_(()=>[r(S,null,{default:_(()=>[r(q,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=i=>o.value=i)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512),p("div",L,[r(d,null,{default:_(({Component:i})=>[(N(),D(A,null,[r(E,{columns:g.value,rows:u.value,"actions-active":"",onExecuteActionlist:C},null,8,["columns","rows"])],1024))]),_:1})])]),_:1})}}};export{P as default};