import{g as v,P as D,h as O,Q as S,o as r,c as d,b as w,w as E,v as K,R as g,F as P,p as F,C as N,t as U,a as _,S as $,B as A,T as M,U as T}from"./index-1c9b6d67.js";const j=(n,u)=>{const l=n.__vccOpts||n;for(const[h,a]of u)l[h]=a;return l},z=n=>(M("data-v-f124e5c8"),n=n(),T(),n),H={class:"c-search"},Q={class:"search__content"},R=["onKeydown"],q={key:0,class:"search__content--results"},G=["onClick"],J={key:0},W=A('<div class="search--spinner" data-v-f124e5c8><div class="preloader-wrapper small active" data-v-f124e5c8><div class="spinner-layer spinner-green-only" data-v-f124e5c8><div class="circle-clipper left" data-v-f124e5c8><div class="circle" data-v-f124e5c8></div></div><div class="gap-patch" data-v-f124e5c8><div class="circle" data-v-f124e5c8></div></div><div class="circle-clipper right" data-v-f124e5c8><div class="circle" data-v-f124e5c8></div></div></div></div></div>',1),X=[W],Y={key:1,class:"search__cleaner"},Z=z(()=>w("i",{class:"Small material-icons"},"clear",-1)),ee=[Z],te={__name:"CSearch",props:{options:{type:Array,default:null},asyncOptionsPromise:{type:Function,default:null},modelValue:{type:[String,Object],default:""},hideClearButton:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(n,{emit:u}){const l=n,h=e=>{const t=o=>{const i=o.target;!i||i===document.documentElement||i===document.body||i.closest(".c-search")||e()};O(()=>{document.addEventListener("click",t)}),$(()=>{document.removeEventListener("click",t)})},a=v(""),s=v([]),c=v(-1),f=v(!1),m=v(!0),C=e=>{s.value=l.options.filter(t=>(t.description||t).toLowerCase().includes(e.toLowerCase())),V()},B=async e=>{f.value=!0;try{const t=await l.asyncOptionsPromise(e);s.value=t,V()}catch(t){console.error(t)}f.value=!1},x=e=>{a.value=e.description||e,s.value=[],u("update:modelValue",e),p()},y=()=>{a.value="",s.value=[],u("update:modelValue",""),p()},I=async()=>{c.value=-1,a.value?l.asyncOptionsPromise?await B(a.value):C(a.value):y()},b=()=>{if(c.value!==-1&&s.value.length>0){const e=s.value[c.value];a.value=e.description||e,s.value=[],u("update:modelValue",e),p()}},L=D(()=>a.value!==""),k=e=>{s.value.length!==0&&(e==="down"?c.value=(c.value+1)%s.value.length:e==="up"&&(c.value=(c.value-1+s.value.length)%s.value.length))},p=()=>{m.value=!0},V=()=>{m.value=!1};return O(()=>{var e;h(p),l.modelValue&&(a.value=((e=l.modelValue)==null?void 0:e.description)||l.modelValue)}),S(()=>l.options,()=>{a.value?C(a.value):(s.value=[],y())}),S(()=>l.modelValue,e=>{a.value=e?e.description||e:""}),(e,t)=>(r(),d("div",H,[w("div",Q,[E(w("input",{class:"search__content--text","onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),placeholder:"buscar...",type:"text",onInput:I,onKeydown:[t[1]||(t[1]=g(o=>k("down"),["down"])),t[2]||(t[2]=g(o=>k("up"),["up"])),g(b,["enter"])]},null,40,R),[[K,a.value]]),m.value?_("",!0):(r(),d("ul",q,[(r(!0),d(P,null,F(s.value,(o,i)=>(r(),d("li",{key:i,class:N({active:i===c.value}),onClick:ae=>x(o)},U(o.description||o),11,G))),128))]))]),f.value?(r(),d("div",J,X)):_("",!0),n.hideClearButton?_("",!0):(r(),d("div",Y,[L.value?(r(),d("button",{key:0,class:"search__cleaner--btn red teal lighten-5",onClick:y},ee)):_("",!0)]))]))}},le=j(te,[["__scopeId","data-v-f124e5c8"]]);export{le as C};
