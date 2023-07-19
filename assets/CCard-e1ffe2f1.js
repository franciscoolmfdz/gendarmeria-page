import{o as p,c as v,t as V,r as d,i as S,f as A,j as B,v as D,F as k,k as w,a as f,l as N,m as M,b as x,e as F,n as E,p as L}from"./index-550390c3.js";import{b as R,a as j}from"./dimensionHistory-a722060f.js";const q=["disabled"],g={__name:"CButton",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["executeAction"],setup(n,{emit:i}){return(a,t)=>(p(),v("button",{class:"c-button",onClick:t[0]||(t[0]=o=>i("executeAction")),disabled:n.disabled},V(n.title),9,q))}};const I=f("option",{value:""},"Seleccionar opción",-1),O=["value"],U={__name:"CSelect",props:{options:{type:Array,required:!0},modelValue:{type:[Object,Number],default:null}},emits:["update:modelValue"],setup(n,{emit:i}){const a=n,t=d(a.modelValue?a.modelValue.id:null);return S(()=>a.modelValue,o=>{t.modelValue=o?o.id:""}),S(t,o=>{i("update:modelValue",o)}),A(()=>{var o;a.modelValue&&(t.modelValue=((o=a.modelValue)==null?void 0:o.id)||a.modelValue)}),(o,m)=>B((p(),v("select",{class:"c-select","onUpdate:modelValue":m[0]||(m[0]=c=>t.value=c)},[I,(p(!0),v(k,null,w(n.options,c=>(p(),v("option",{value:c.id,key:c.id},V(c.description),9,O))),128))],512)),[[D,t.value]])}},$={id:16,description:"CCP Colina 1"},H=N("filters",()=>{const n=d(null),i=d(),a=d($),t=d([$]),o=d([]);function m(e){e!=null&&e.periodo&&(n.value=(e==null?void 0:e.periodo)??null),e!=null&&e.penitenciaria&&(a.value=e==null?void 0:e.penitenciaria,t.value.push(e==null?void 0:e.penitenciaria))}function c(e){o.value=e??[]}function _(e){n.value=(e==null?void 0:e.periodo)??null,i.value=(e==null?void 0:e.id)??null}function b(){o.value=o.value.filter(e=>!isNaN(t.value.find(C=>C.id===e.id)))}function y(){i.value=null}return{historyId:i,periodo:n,penitenciaria:a,listadoCarceles:o,carcelesSelected:t,changeCriteria:m,mountListCarceles:c,mountBaseHistory:_,cleanHistory:y,removeCarcelesSelected:b}});const P={class:"c-filterbar"},T={class:"selected-options"},X={key:0,class:"selected-centros"},z="Buscar",te={__name:"CFilterbar",props:{baseFilter:{type:[Object,Number,String],required:!0},multipleDisabled:{type:Boolean,default:!0}},emits:["executeAction","executeRemove","executeMount"],setup(n,{emit:i}){const a=n,t=H(),o=d(!1),m=d(t.penitenciaria),c=d([]),_=d(t.periodo),b=u=>{const l=c.value.filter(s=>s.id===u);e.value.push(l[0]),e.value.sort((s,r)=>s.id<r.id),c.value=c.value.filter(s=>s.id!==u),i("executeRemove",u)},y=async()=>{const u=e.value.filter(r=>r.id===m.value)[0];a.multipleDisabled||(c.value.push(u),e.value=e.value.filter(r=>r.id!==u.id),t.removeCarcelesSelected());const l=_.value.split("-"),s={year:l[0],month:l[1],categoryId:a.baseFilter};await C(s),t.changeCriteria({periodo:_.value,penitenciaria:u}),i("executeAction")},e=d(t.listadoCarceles),C=async u=>{o.value=!0;const l=await j(u);if(o.value=!1,l&&(l!=null&&l.period)&&(l!=null&&l.id)){const{period:s=null,id:r=null}=l;t.mountBaseHistory({period:s,id:r}),_.value=s}else t.cleanHistory()};return A(async()=>{var l;const u={lastPeriod:!0,categoryId:a.baseFilter};if(await C(u),!e.value||e.value.length===0){const s=await R();if(t.mountListCarceles(s),(l=t.penitenciaria)!=null&&l.id&&!a.multipleDisabled){const r=s.filter(h=>h.id===t.penitenciaria.id);c.value.push(r[0]),e.value=s.filter(h=>h.id!==t.penitenciaria.id),t.removeCarcelesSelected()}}a.multipleDisabled?i("executeAction"):i("executeMount")}),(u,l)=>(p(),v("div",P,[f("div",T,[B(f("input",{class:"periodo-item",type:"month","onUpdate:modelValue":l[0]||(l[0]=s=>_.value=s)},null,512),[[M,_.value]]),x(U,{options:e.value,modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=s=>m.value=s)},null,8,["options","modelValue"]),x(g,{title:z,onExecuteAction:y,disabled:o.value},null,8,["disabled"])]),n.multipleDisabled?F("",!0):(p(),v("div",X,[(p(!0),v(k,null,w(c.value,s=>(p(),v("div",null,[f("span",null,V(s.description),1),x(g,{title:"X",onExecuteAction:r=>b(s.id)},null,8,["onExecuteAction"])]))),256))]))]))}};const G={class:"card"},J={class:"card-stacked"},K={class:"card-content"},Q={key:0,class:"card-action"},W=L('<div class="row"><a class="col s6 m1 waves-effect waves-light btn amber"><li class="material-icons">edit</li></a><a class="col s6 m1 waves-effect waves-light btn red darken-3"><li class="material-icons">delete</li></a></div>',1),Y=[W],le={__name:"CCard",props:{actionACtive:{type:Boolean,default:!1}},setup(n){return(i,a)=>(p(),v("div",G,[f("div",J,[f("div",K,[E(i.$slots,"default")]),n.actionACtive?(p(),v("div",Q,Y)):F("",!0)])]))}};export{te as _,le as a,H as u};
