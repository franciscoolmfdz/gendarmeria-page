import{r as g,u as M,g as p,h as E,y as R,o,c,b as x,w as L,v as N,a as v,f as F,z as $,m as D,F as q,A as U,e as A,l as j,t as z}from"./index-21166dae.js";import{_ as y}from"./CButton-02a38a2a.js";const O={class:"c-filterbar"},P={class:"selected-options"},T={key:0,class:"selected-centros"},X={class:"select-centro-content"},G={key:1,class:"c-option-volver"},K={__name:"CFilterbar",props:{baseFilter:{type:[Object,Number,String],required:!0},multipleDisabled:{type:Boolean,default:!0},monthDisabled:{type:Boolean,default:!1}},emits:["executeAction","executeRemove","executeMount"],setup(_,{emit:m}){const r=_,f=g({disabledCentros:!1}),a=M(),V=p("Buscar"),b=p(!1),h=p(a.penitenciaria),n=g([]),u=p(a.periodo),k=l=>{const e=n.filter(s=>s.id===l);i.value.push(e[0]),i.value.sort((s,d)=>s.id<d.id);const t=n.filter(s=>s.id!==l);n.splice(0,n.length),t.map(s=>n.push(s)),m("executeRemove",l)},B=()=>r.baseFilter===1||r.baseFilter===2,I=()=>{r.baseFilter===1?A.push("/vidaInternosMain"):r.baseFilter===2&&A.push("/vidaFuncionariosMain")},S=async()=>{const l=i.value.filter(s=>s.id===h.value)[0];!r.multipleDisabled&&l&&(n.push(l),i.value=i.value.filter(s=>s.id!==l.id),a.removeCarcelesSelected());const e=u.value.split("-"),t={year:e[0],month:e[1],categoryId:r.baseFilter};await C(t),a.changeCriteria({periodo:u.value,penitenciaria:l??i[0]}),m("executeAction")},i=p(a.listadoCarceles),C=async l=>{b.value=!0;const e=await j(l);if(b.value=!1,e&&(e!=null&&e.period)&&(e!=null&&e.id)){const{period:t=null,id:s=null}=e;a.mountBaseHistory({period:t,id:s}),u.value=t}else a.cleanHistory()},w=()=>{const l=a.user.restrictions.find(t=>t.typeId===2),e=a.user.restrictions.find(t=>t.typeId===3);if(!l&&!e)return{};if(l)return f.disabledCentros=!1,{regionId:parseInt(l.restriction)};if(e)return f.disabledCentros=!0,{carcelIds:parseInt(e.restriction)}};return E(async()=>{var t;r.multipleDisabled||(V.value="Agregar a la búsqueda");const l={lastPeriod:!0,categoryId:r.baseFilter},e=w();if(await C(l),!i.value||i.value.length===0){const s=await R(e);a.mountListCarceles(s),(t=a.penitenciaria)!=null&&t.id&&!r.multipleDisabled?(n.splice(0,n.length),a.carcelesSelected.map(d=>n.push(d)),i.value=s.filter(d=>d.id!==a.penitenciaria.id),a.removeCarcelesSelected()):i.value=s}r.multipleDisabled?m("executeAction"):m("executeMount")}),(l,e)=>(o(),c("div",O,[x("div",P,[_.monthDisabled?v("",!0):L((o(),c("input",{key:0,class:"periodo-item",type:"month","onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t)},null,512)),[[N,u.value]]),f.disabledCentros?v("",!0):(o(),F($,{key:1,class:"c-select-item",options:i.value,modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=t=>h.value=t)},null,8,["options","modelValue"])),D(y,{class:"c-filterbar-search",title:"",onExecuteAction:S,disabled:b.value},null,8,["disabled"])]),_.multipleDisabled?v("",!0):(o(),c("div",T,[(o(!0),c(q,null,U(n,t=>(o(),c("div",X,[x("span",null,z(t.description),1),f.disabledCentros?v("",!0):(o(),F(y,{key:0,class:"deleted-centro",title:"X",onExecuteAction:s=>k(t.id)},null,8,["onExecuteAction"]))]))),256))])),B()?(o(),c("div",G,[D(y,{class:"btn-volver-filter",title:"Volver",onExecuteAction:I,disabled:b.value},null,8,["disabled"])])):v("",!0)]))}};export{K as _};
