import{g as v,O as D,h as O,P as S,o as r,c as u,b as w,w as E,v as K,Q as g,F as P,p as A,B as F,t as N,a as _,R as $,A as M,S as T,T as U}from"./index-f62bec79.js";const j=(c,i)=>{const l=c.__vccOpts||c;for(const[h,t]of i)l[h]=t;return l},z=c=>(T("data-v-971f2a6d"),c=c(),U(),c),H={class:"c-search"},Q={class:"search__content"},R=["onKeydown"],q={key:0,class:"search__content--results"},G=["onClick"],J={key:0},W=M('<div class="search--spinner" data-v-971f2a6d><div class="preloader-wrapper small active" data-v-971f2a6d><div class="spinner-layer spinner-green-only" data-v-971f2a6d><div class="circle-clipper left" data-v-971f2a6d><div class="circle" data-v-971f2a6d></div></div><div class="gap-patch" data-v-971f2a6d><div class="circle" data-v-971f2a6d></div></div><div class="circle-clipper right" data-v-971f2a6d><div class="circle" data-v-971f2a6d></div></div></div></div></div>',1),X=[W],Y={key:1,class:"search__cleaner"},Z=z(()=>w("i",{class:"Small material-icons"},"clear",-1)),ee=[Z],ae={__name:"CSearch",props:{options:{type:Array,default:null},asyncOptionsPromise:{type:Function,default:null},modelValue:{type:[String,Object],default:""},hideClearButton:{type:Boolean,default:!0}},emits:["update:modelValue","changeValue"],setup(c,{emit:i}){const l=c,h=e=>{const a=n=>{const d=n.target;!d||d===document.documentElement||d===document.body||d.closest(".c-search")||e()};O(()=>{document.addEventListener("click",a)}),$(()=>{document.removeEventListener("click",a)})},t=v(""),s=v([]),o=v(-1),f=v(!1),m=v(!0),C=e=>{s.value=l.options.filter(a=>(a.description||a).toLowerCase().includes(e.toLowerCase())),V()},B=async e=>{f.value=!0;try{const a=await l.asyncOptionsPromise(e);s.value=a,V()}catch(a){console.error(a)}f.value=!1},x=e=>{console.log(e==null?void 0:e.name),t.value=(e==null?void 0:e.description)??(e==null?void 0:e.name),s.value=[],i("update:modelValue",e),i("changeValue"),p()},y=()=>{t.value="",s.value=[],i("update:modelValue",""),p()},I=async()=>{o.value=-1,t.value?l.asyncOptionsPromise?await B(t.value):C(t.value):y()},b=()=>{if(o.value!==-1&&s.value.length>0){const e=s.value[o.value];t.value=e.description||e.name,s.value=[],i("update:modelValue",e),p()}},L=D(()=>t.value!==""),k=e=>{s.value.length!==0&&(e==="down"?o.value=(o.value+1)%s.value.length:e==="up"&&(o.value=(o.value-1+s.value.length)%s.value.length))},p=()=>{m.value=!0},V=()=>{m.value=!1};return O(()=>{var e,a;h(p),l.modelValue&&(t.value=((e=l.modelValue)==null?void 0:e.description)||((a=l.modelValue)==null?void 0:a.name)||l.modelValue)}),S(()=>l.options,()=>{t.value?C(t.value):(s.value=[],y())}),S(()=>l.modelValue,e=>{t.value=e?e.description||e.name||e:""}),(e,a)=>(r(),u("div",H,[w("div",Q,[E(w("input",{class:"search__content--text","onUpdate:modelValue":a[0]||(a[0]=n=>t.value=n),placeholder:"buscar...",type:"text",onInput:I,onKeydown:[a[1]||(a[1]=g(n=>k("down"),["down"])),a[2]||(a[2]=g(n=>k("up"),["up"])),g(b,["enter"])]},null,40,R),[[K,t.value]]),m.value?_("",!0):(r(),u("ul",q,[(r(!0),u(P,null,A(s.value,(n,d)=>(r(),u("li",{key:d,class:F({active:d===o.value}),onClick:te=>x(n)},N(n.description||n.name||n),11,G))),128))]))]),f.value?(r(),u("div",J,X)):_("",!0),c.hideClearButton?_("",!0):(r(),u("div",Y,[L.value?(r(),u("button",{key:0,class:"search__cleaner--btn red teal lighten-5",onClick:y},ee)):_("",!0)]))]))}},le=j(ae,[["__scopeId","data-v-971f2a6d"]]);export{le as C};
