import{r as g,u as M,g as p,h as E,y as R,o,c,b as x,w as L,v as N,a as v,f as D,z as $,m as A,F as q,A as T,e as _,l as U,t as j}from"./index-35ecef89.js";import{_ as C}from"./CButton-4a84bbc1.js";const z={class:"c-filterbar"},O={class:"selected-options"},P={key:0,class:"selected-centros"},X={class:"select-centro-content"},G={key:1,class:"c-option-volver"},K={__name:"CFilterbar",props:{baseFilter:{type:[Object,Number,String],required:!0},multipleDisabled:{type:Boolean,default:!0},monthDisabled:{type:Boolean,default:!1}},emits:["executeAction","executeRemove","executeMount"],setup(h,{emit:m}){const i=h,f=g({disabledCentros:!1}),a=M(),V=p("Buscar"),b=p(!1),y=p(a.penitenciaria),n=g([]),u=p(a.periodo),k=l=>{const e=n.filter(s=>s.id===l);r.value.push(e[0]),r.value.sort((s,d)=>s.id<d.id);const t=n.filter(s=>s.id!==l);n.splice(0,n.length),t.map(s=>n.push(s)),m("executeRemove",l)},B=()=>i.baseFilter===1||i.baseFilter===2||i.baseFilter===7,I=()=>{i.baseFilter===1?_.push("/vidaInternosMain"):i.baseFilter===2?_.push("/vidaFuncionariosMain"):i.baseFilter===7&&_.push("/dimensionTrayectoria")},S=async()=>{const l=r.value.filter(s=>s.id===y.value)[0];!i.multipleDisabled&&l&&(n.push(l),r.value=r.value.filter(s=>s.id!==l.id),a.removeCarcelesSelected());const e=u.value.split("-"),t={year:e[0],month:e[1],categoryId:i.baseFilter};await F(t),a.changeCriteria({periodo:u.value,penitenciaria:l??r[0]}),m("executeAction")},r=p(a.listadoCarceles),F=async l=>{b.value=!0;const e=await U(l);if(b.value=!1,e&&(e!=null&&e.period)&&(e!=null&&e.id)){const{period:t=null,id:s=null}=e;a.mountBaseHistory({period:t,id:s}),u.value=t}else a.cleanHistory()},w=()=>{const l=a.user.restrictions.find(t=>t.typeId===2),e=a.user.restrictions.find(t=>t.typeId===3);if(!l&&!e)return{};if(l)return f.disabledCentros=!1,{regionId:parseInt(l.restriction)};if(e)return f.disabledCentros=!0,{carcelIds:parseInt(e.restriction)}};return E(async()=>{var t;i.multipleDisabled||(V.value="Agregar a la búsqueda");const l={lastPeriod:!0,categoryId:i.baseFilter},e=w();if(await F(l),!r.value||r.value.length===0){const s=await R(e);a.mountListCarceles(s),(t=a.penitenciaria)!=null&&t.id&&!i.multipleDisabled?(n.splice(0,n.length),a.carcelesSelected.map(d=>n.push(d)),r.value=s.filter(d=>d.id!==a.penitenciaria.id),a.removeCarcelesSelected()):r.value=s}i.multipleDisabled?m("executeAction"):m("executeMount")}),(l,e)=>(o(),c("div",z,[x("div",O,[h.monthDisabled?v("",!0):L((o(),c("input",{key:0,class:"periodo-item",type:"month","onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t)},null,512)),[[N,u.value]]),f.disabledCentros?v("",!0):(o(),D($,{key:1,class:"c-select-item",options:r.value,modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=t=>y.value=t)},null,8,["options","modelValue"])),A(C,{class:"c-filterbar-search",title:"",onExecuteAction:S,disabled:b.value},null,8,["disabled"])]),h.multipleDisabled?v("",!0):(o(),c("div",P,[(o(!0),c(q,null,T(n,t=>(o(),c("div",X,[x("span",null,j(t.description),1),f.disabledCentros?v("",!0):(o(),D(C,{key:0,class:"deleted-centro",title:"X",onExecuteAction:s=>k(t.id)},null,8,["onExecuteAction"]))]))),256))])),B()?(o(),c("div",G,[A(C,{class:"btn-volver-filter",title:"Volver",onExecuteAction:I,disabled:b.value},null,8,["disabled"])])):v("",!0)]))}};export{K as _};
