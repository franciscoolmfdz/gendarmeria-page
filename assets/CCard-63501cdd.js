import{o as m,c as v,t as S,r as p,k as V,g as w,l as B,v as I,F as k,m as F,a as y,n as q,d as x,p as L,b as g,f as D,q as M,s as E}from"./index-986a4269.js";import{b as O,a as P}from"./dimensionHistory-d5c47017.js";const R=["disabled"],A={__name:"CButton",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["executeAction"],setup(c,{emit:i}){return(s,t)=>(m(),v("button",{class:"c-button",onClick:t[0]||(t[0]=a=>i("executeAction")),disabled:c.disabled},S(c.title),9,R))}};const U=y("option",{value:""},"Seleccionar opción",-1),j=["value"],H={__name:"CSelect",props:{options:{type:Array,required:!0},modelValue:{type:[Object,Number],default:null}},emits:["update:modelValue"],setup(c,{emit:i}){const s=c,t=p(s.modelValue?s.modelValue.id:null);return V(()=>s.modelValue,a=>{t.modelValue=a?a.id:""}),V(t,a=>{i("update:modelValue",a)}),w(()=>{var a;s.modelValue&&(t.modelValue=((a=s.modelValue)==null?void 0:a.id)||s.modelValue)}),(a,f)=>B((m(),v("select",{class:"c-select","onUpdate:modelValue":f[0]||(f[0]=r=>t.value=r)},[U,(m(!0),v(k,null,F(c.options,r=>(m(),v("option",{value:r.id,key:r.id},S(r.description),9,j))),128))],512)),[[I,t.value]])}},$={id:16,description:"CCP Colina 1"},T=q("filters",()=>{const c=p(null),i=p(),s=p($),t=x([$]),a=x([]);p(!1);function f(e){e!=null&&e.periodo&&(c.value=(e==null?void 0:e.periodo)??null),e!=null&&e.penitenciaria&&(e.penitenciaria.historyId=i.value,s.value=e==null?void 0:e.penitenciaria,t.find(_=>_.id===e.penitenciaria.id&&_.historyId===e.penitenciaria.historyId)||t.push(e==null?void 0:e.penitenciaria))}function r(e){a.value=e??[]}function d(e){c.value=(e==null?void 0:e.periodo)??null,i.value=(e==null?void 0:e.id)??null,t[0].historyId=e.id}function b(e){return new Promise(_=>setTimeout(_,e))}function C(){a.filter(e=>!isNaN(t.find(_=>_.id===e.id)))}function h(){i.value=null}return{historyId:i,periodo:c,penitenciaria:s,listadoCarceles:a,carcelesSelected:t,sleep:b,changeCriteria:f,mountListCarceles:r,mountBaseHistory:d,cleanHistory:h,removeCarcelesSelected:C}});const X={class:"c-filterbar"},z={class:"selected-options"},G={key:0,class:"selected-centros"},le={__name:"CFilterbar",props:{baseFilter:{type:[Object,Number,String],required:!0},multipleDisabled:{type:Boolean,default:!0}},emits:["executeAction","executeRemove","executeMount"],setup(c,{emit:i}){const s=c,t=T(),a=p("Buscar"),f=p(!1),r=p(t.penitenciaria),d=x([]),b=p(t.periodo),C=u=>{const l=d.filter(o=>o.id===u);e.value.push(l[0]),e.value.sort((o,N)=>o.id<N.id);const n=d.filter(o=>o.id!==u);d.splice(0,d.length),n.map(o=>d.push(o)),i("executeRemove",u)},h=async()=>{const u=e.value.filter(o=>o.id===r.value)[0];s.multipleDisabled||(d.push(u),e.value=e.value.filter(o=>o.id!==u.id),t.removeCarcelesSelected());const l=b.value.split("-"),n={year:l[0],month:l[1],categoryId:s.baseFilter};await _(n),t.changeCriteria({periodo:b.value,penitenciaria:u}),i("executeAction")},e=p(t.listadoCarceles),_=async u=>{f.value=!0;const l=await P(u);if(f.value=!1,l&&(l!=null&&l.period)&&(l!=null&&l.id)){const{period:n=null,id:o=null}=l;t.mountBaseHistory({period:n,id:o}),b.value=n}else t.cleanHistory()};return w(async()=>{var l;s.multipleDisabled||(a.value="Agregar a la búsqueda");const u={lastPeriod:!0,categoryId:s.baseFilter};if(await _(u),!e.value||e.value.length===0){const n=await O();t.mountListCarceles(n),(l=t.penitenciaria)!=null&&l.id&&!s.multipleDisabled?(d.splice(0,d.length),t.carcelesSelected.map(o=>d.push(o)),e.value=n.filter(o=>o.id!==t.penitenciaria.id),t.removeCarcelesSelected()):e.value=n}s.multipleDisabled?i("executeAction"):i("executeMount")}),(u,l)=>(m(),v("div",X,[y("div",z,[B(y("input",{class:"periodo-item",type:"month","onUpdate:modelValue":l[0]||(l[0]=n=>b.value=n)},null,512),[[L,b.value]]),g(H,{options:e.value,modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=n=>r.value=n)},null,8,["options","modelValue"]),g(A,{title:a.value,onExecuteAction:h,disabled:f.value},null,8,["title","disabled"])]),c.multipleDisabled?D("",!0):(m(),v("div",G,[(m(!0),v(k,null,F(d,n=>(m(),v("div",null,[y("span",null,S(n.description),1),g(A,{title:"X",onExecuteAction:o=>C(n.id)},null,8,["onExecuteAction"])]))),256))]))]))}};const J={class:"card"},K={class:"card-stacked"},Q={class:"card-content"},W={key:0,class:"card-action"},Y=E('<div class="row"><a class="col s6 m1 waves-effect waves-light btn amber"><li class="material-icons">edit</li></a><a class="col s6 m1 waves-effect waves-light btn red darken-3"><li class="material-icons">delete</li></a></div>',1),Z=[Y],se={__name:"CCard",props:{actionACtive:{type:Boolean,default:!1}},setup(c){return(i,s)=>(m(),v("div",J,[y("div",K,[y("div",Q,[M(i.$slots,"default")]),c.actionACtive?(m(),v("div",W,Z)):D("",!0)])]))}};export{le as _,se as a,T as u};
