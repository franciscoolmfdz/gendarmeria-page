import{g as i,h as N,y as L,x as M,o as c,f as _,j,_ as G,m as I,n as q,b as z,a as f,w as b,v as k,c as x,C as R}from"./index-54860183.js";import{_ as F}from"./CHeaderBar-501feae6.js";import{_ as H}from"./CButton-b5f860aa.js";import{C as J}from"./CSearch-77f3b045.js";import{b as K,g as O}from"./user-96b7d71d.js";const Q={class:"section-form"},W=99,X="Editar usuario",ae={__name:"editarUsuario",setup(Y){const v=i(!1),$=i("Editar usuario"),s=i(null),d=i(null),y=i(null),r=i(null),o=i(null),p=i(null),V=i(null),g=[{id:3,description:"Director nacional",baseRestriction:{id:4}},{id:4,description:"Director regional",baseRestriction:{id:4}},{id:5,description:"Alcaide",baseRestriction:{id:4}},{id:2,description:"Gestor",baseRestriction:{id:6}}],C=i([]),U=i([]),u=i(null),E=async()=>{var D,S,T;let n=!1;const e=((D=u.value)==null?void 0:D.id)??(u==null?void 0:u.value)??null,a=((S=d.value)==null?void 0:S.id)??(d==null?void 0:d.value)??null,t=((T=y.value)==null?void 0:T.id)??y.value??null,l=g.find(w=>w.id===e),m={};if(r!=null&&r.value&&(r==null?void 0:r.value)!==s.value.name&&(n=!0,m.name=r.value),o!=null&&o.value&&p.value&&o.value===p.value)n=!0,m.password=o.value;else if(o!=null&&o.value&&p.value&&o.value!==p.value)return;if((l&&l.id!==s.value.roleId||a&&a!==V.value||t!=null&&t.value&&(t==null?void 0:t.value)!==V.value)&&(n=!0,m.roleId=l.id,m.restrictions=[l.baseRestriction],a&&m.restrictions.push({typeId:2,value:a}),t&&m.restrictions.push({typeId:2,value:t})),n){const w=s.value.id;v.value=!0,await K({id:w,body:m}),B(!0),v.value=!1}},B=(n=!1)=>{r.value=null,o.value=null,p.value=null,u.value=null,d.value=null,y.value=null,n&&(s.value=null)},h=async n=>(B(),await O({name:n})),A=()=>{r.value=s.value.name;const n=g.find(e=>e.id===s.value.roleId);if(s.value.roleId===4){const e=s.value.restrictions.find(t=>t.typeId===2),a=parseInt(e.restriction);d.value=U.value.find(t=>t.id===a),V.value=a}if(s.value.roleId===5){restrictionType=s.value.restrictions.find(a=>a.typeId===3);const e=parseInt(restrictionType.restriction);d.value=U.value.find(a=>a.id===e),V.value=e}u.value=n};return N(async()=>{C.value=await L(),U.value=await M()}),(n,e)=>(c(),_(G,{class:"admin-content"},{default:j(()=>{var a,t;return[I(F,{title:$.value,"section-value":W},null,8,["title"]),I(q,{"active-spin":v.value},null,8,["active-spin"]),z("div",Q,[v.value?f("",!0):(c(),_(J,{key:0,"async-options-promise":h,modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),onChangeValue:A},null,8,["modelValue"])),v.value?f("",!0):b((c(),x("input",{key:1,class:"search__content--text","onUpdate:modelValue":e[1]||(e[1]=l=>r.value=l),placeholder:"Nombre usuario",type:"text"},null,512)),[[k,r.value]]),s.value&&!v.value?(c(),_(R,{key:2,options:g,modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=l=>u.value=l)},null,8,["modelValue"])):f("",!0),u.value===4||((a=u.value)==null?void 0:a.id)===4?(c(),_(R,{key:3,options:U.value,modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=l=>d.value=l)},null,8,["options","modelValue"])):f("",!0),u.value===5||((t=u.value)==null?void 0:t.id)===5?(c(),_(R,{key:4,options:C.value,modelValue:y.value,"onUpdate:modelValue":e[4]||(e[4]=l=>y.value=l)},null,8,["options","modelValue"])):f("",!0),v.value?f("",!0):b((c(),x("input",{key:5,class:"search__content--text","onUpdate:modelValue":e[5]||(e[5]=l=>o.value=l),placeholder:"Nueva password",type:"password"},null,512)),[[k,o.value]]),v.value?f("",!0):b((c(),x("input",{key:6,class:"search__content--text","onUpdate:modelValue":e[6]||(e[6]=l=>p.value=l),placeholder:"Reingrese nueva password",type:"password"},null,512)),[[k,p.value]]),I(H,{title:X,onExecuteAction:E,disabled:n.blockButton},null,8,["disabled"])])]}),_:1}))}};export{ae as default};
