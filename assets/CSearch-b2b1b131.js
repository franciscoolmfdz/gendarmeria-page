import{g as v,Q as D,h as O,R as S,o as r,c as d,b as w,w as E,v as K,S as g,F as A,A as F,a as _,T as N,q as P,t as U,x as $,U as M,W as T}from"./index-c2d187e3.js";const j=(n,u)=>{const l=n.__vccOpts||n;for(const[h,a]of u)l[h]=a;return l},q=n=>(M("data-v-f124e5c8"),n=n(),T(),n),z={class:"c-search"},H={class:"search__content"},Q=["onKeydown"],R={key:0,class:"search__content--results"},W=["onClick"],G={key:0},J=$('<div class="search--spinner" data-v-f124e5c8><div class="preloader-wrapper small active" data-v-f124e5c8><div class="spinner-layer spinner-green-only" data-v-f124e5c8><div class="circle-clipper left" data-v-f124e5c8><div class="circle" data-v-f124e5c8></div></div><div class="gap-patch" data-v-f124e5c8><div class="circle" data-v-f124e5c8></div></div><div class="circle-clipper right" data-v-f124e5c8><div class="circle" data-v-f124e5c8></div></div></div></div></div>',1),X=[J],Y={key:1,class:"search__cleaner"},Z=q(()=>w("i",{class:"Small material-icons"},"clear",-1)),ee=[Z],te={__name:"CSearch",props:{options:{type:Array,default:null},asyncOptionsPromise:{type:Function,default:null},modelValue:{type:[String,Object],default:""},hideClearButton:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(n,{emit:u}){const l=n,h=e=>{const t=o=>{const i=o.target;!i||i===document.documentElement||i===document.body||i.closest(".c-search")||e()};O(()=>{document.addEventListener("click",t)}),N(()=>{document.removeEventListener("click",t)})},a=v(""),s=v([]),c=v(-1),f=v(!1),m=v(!0),C=e=>{s.value=l.options.filter(t=>(t.description||t).toLowerCase().includes(e.toLowerCase())),V()},x=async e=>{f.value=!0;try{const t=await l.asyncOptionsPromise(e);s.value=t,V()}catch(t){console.error(t)}f.value=!1},B=e=>{a.value=e.description||e,s.value=[],u("update:modelValue",e),p()},y=()=>{a.value="",s.value=[],u("update:modelValue",""),p()},I=async()=>{c.value=-1,a.value?l.asyncOptionsPromise?await x(a.value):C(a.value):y()},b=()=>{if(c.value!==-1&&s.value.length>0){const e=s.value[c.value];a.value=e.description||e,s.value=[],u("update:modelValue",e),p()}},L=D(()=>a.value!==""),k=e=>{s.value.length!==0&&(e==="down"?c.value=(c.value+1)%s.value.length:e==="up"&&(c.value=(c.value-1+s.value.length)%s.value.length))},p=()=>{m.value=!0},V=()=>{m.value=!1};return O(()=>{var e;h(p),l.modelValue&&(a.value=((e=l.modelValue)==null?void 0:e.description)||l.modelValue)}),S(()=>l.options,()=>{a.value?C(a.value):(s.value=[],y())}),S(()=>l.modelValue,e=>{a.value=e?e.description||e:""}),(e,t)=>(r(),d("div",z,[w("div",H,[E(w("input",{class:"search__content--text","onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),placeholder:"buscar...",type:"text",onInput:I,onKeydown:[t[1]||(t[1]=g(o=>k("down"),["down"])),t[2]||(t[2]=g(o=>k("up"),["up"])),g(b,["enter"])]},null,40,Q),[[K,a.value]]),m.value?_("",!0):(r(),d("ul",R,[(r(!0),d(A,null,F(s.value,(o,i)=>(r(),d("li",{key:i,class:P({active:i===c.value}),onClick:ae=>B(o)},U(o.description||o),11,W))),128))]))]),f.value?(r(),d("div",G,X)):_("",!0),n.hideClearButton?_("",!0):(r(),d("div",Y,[L.value?(r(),d("button",{key:0,class:"search__cleaner--btn red teal lighten-5",onClick:y},ee)):_("",!0)]))]))}},le=j(te,[["__scopeId","data-v-f124e5c8"]]);export{le as C};
