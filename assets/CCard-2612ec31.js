import{C as V}from"./CSearch-e92f4562.js";import{r as p,h as f,i as g,j as h,v as w,o as n,c as d,F as b,k as S,t as P,a as v,b as _,l as k,m as L,n as x}from"./index-76fa7c79.js";const O=v("option",{value:""},"Seleccionar opción",-1),R=["value"],$={__name:"CSelect",props:{options:{type:Array,required:!0},modelValue:{type:[Object,Number],default:null}},emits:["update:modelValue"],setup(r,{emit:l}){const t=r,i=p(t.modelValue?t.modelValue.id:null);return f(()=>t.modelValue,e=>{i.modelValue=e?e.id:""}),f(i,e=>{l("update:modelValue",e)}),g(()=>{var e;t.modelValue&&(i.modelValue=((e=t.modelValue)==null?void 0:e.id)||t.modelValue)}),(e,c)=>h((n(),d("select",{class:"c-select","onUpdate:modelValue":c[0]||(c[0]=a=>i.value=a)},[O,(n(!0),d(b,null,S(r.options,a=>(n(),d("option",{value:a.id,key:a.id},P(a.description),9,R))),128))],512)),[[w,i.value]])}};const N={class:"c-filterbar"},q={__name:"CFilterbar",setup(r){const l=p({id:3,description:"Region 3"}),t=p(null),i=[{id:1,description:"01-2023"},{id:2,description:"02-2023"},{id:3,description:"03-2023"},{id:4,description:"04-2023"}],e=p({id:4,description:"04-2023"}),c=[{id:1,description:"Region 1"},{id:2,description:"Region 2"},{id:3,description:"Region 3"}],a=u=>new Promise(o=>{setTimeout(()=>{const s=c.filter(m=>m.description.toLowerCase().includes(u.toLowerCase()));o(s)},1e3)}),C=[{id:1,description:"Peniteniaría 1"},{id:2,description:"Penitenciaría 2"},{id:3,description:"Penitenciaría 3"}],y=u=>new Promise(o=>{setTimeout(()=>{const s=C.filter(m=>m.description.toLowerCase().includes(u.toLowerCase()));o(s)},1e3)});return(u,o)=>(n(),d("div",N,[_(V,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=s=>l.value=s),asyncOptionsPromise:a},null,8,["modelValue"]),_(V,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value=s),asyncOptionsPromise:y},null,8,["modelValue"]),_($,{options:i,modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=s=>e.value=s)},null,8,["modelValue"])]))}};const B={class:"card"},D={class:"card-stacked"},F={class:"card-content"},U={key:0,class:"card-action"},A=x('<div class="row"><a class="col s6 m1 waves-effect waves-light btn amber"><li class="material-icons">edit</li></a><a class="col s6 m1 waves-effect waves-light btn red darken-3"><li class="material-icons">delete</li></a></div>',1),j=[A],E={__name:"CCard",props:{actionACtive:{type:Boolean,default:!1}},setup(r){return(l,t)=>(n(),d("div",B,[v("div",D,[v("div",F,[k(l.$slots,"default")]),r.actionACtive?(n(),d("div",U,j)):L("",!0)])]))}};export{q as _,E as a};