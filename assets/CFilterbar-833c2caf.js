import{u as M,r as g,g as p,h as R,C as E,o,c as u,b as x,w as L,v as N,a as v,f as D,D as $,m as S,F as q,p as P,t as T,e as C,l as U}from"./index-f528de0d.js";import{_}from"./CButton-eccee199.js";const j={class:"c-filterbar"},O={class:"selected-options"},X={key:0,class:"selected-centros"},z={class:"select-centro-content"},G={key:1,class:"c-option-volver"},K={__name:"CFilterbar",props:{baseFilter:{type:[Object,Number,String],required:!0},multipleDisabled:{type:Boolean,default:!0},monthDisabled:{type:Boolean,default:!1}},emits:["executeAction","executeRemove","executeMount"],setup(F,{emit:m}){const a=F,i=M(),f=g({disabledCentros:!1}),V=p("Buscar"),b=p(!1),h=p(i.penitenciaria),r=g([]),d=p(i.periodo),k=s=>{const e=r.filter(l=>l.id===s);n.value.push(e[0]),n.value.sort((l,c)=>l.id<c.id);const t=r.filter(l=>l.id!==s);r.splice(0,r.length),t.map(l=>r.push(l)),i.removeCarcelSelected(s),a.multipleDisabled||(h.value=null),m("executeRemove",s)},A=()=>a.baseFilter===1||a.baseFilter===2||a.baseFilter===4||a.baseFilter===7,B=()=>{a.baseFilter===1?C.push("/vidaInternosMain"):a.baseFilter===2?C.push("/vidaFuncionariosMain"):a.baseFilter===7?C.push("/dimensionTrayectoria"):a.baseFilter===4&&C.push("/elementosReinsercion")},I=async()=>{const s=n.value.find(l=>l.id===h.value);!a.multipleDisabled&&s&&(r.push(s),n.value=n.value.filter(l=>l.id!==s.id));const e=d.value.split("-"),t={year:e[0],month:e[1],categoryId:a.baseFilter,lastPeriod:!0};i.changeCriteria({periodo:d.value,penitenciaria:s??n[0]}),a.multipleDisabled||(n.value=i.listadoCarceles),await y(t),m("executeAction")},n=p(i.listadoCarceles),y=async s=>{b.value=!0;const e=await U(s);if(b.value=!1,e&&(e!=null&&e.period)&&(e!=null&&e.id)){const{period:t=null,id:l=null}=e;i.mountBaseHistory({period:t,id:l}),d.value=t}else i.cleanHistory()},w=()=>{const s=i.user.restrictions.find(t=>t.typeId===2),e=i.user.restrictions.find(t=>t.typeId===3);if(!s&&!e)return{};if(s)return f.disabledCentros=!1,{regionId:parseInt(s.restriction)};if(e)return f.disabledCentros=!0,{carcelIds:parseInt(e.restriction)}};return R(async()=>{var l;a.multipleDisabled||(V.value="Agregar a la búsqueda");const s={lastPeriod:!0,categoryId:a.baseFilter},e=w(),t=await E(e);i.mountListCarceles(t),await y(s),(!n.value||n.value.length===0)&&((l=i.penitenciaria)!=null&&l.id&&!a.multipleDisabled?(r.splice(0,r.length),i.carcelesSelected.map(c=>r.push(c)),n.value=t.filter(c=>c.id!==i.penitenciaria.id)):n.value=t),a.multipleDisabled?m("executeAction"):(r.splice(0,r.length),i.carcelesSelected.map(c=>r.push(c)),i.removeCarcelesSelected(),m("executeMount"))}),(s,e)=>(o(),u("div",j,[x("div",O,[F.monthDisabled?v("",!0):L((o(),u("input",{key:0,class:"periodo-item",type:"month","onUpdate:modelValue":e[0]||(e[0]=t=>d.value=t)},null,512)),[[N,d.value]]),f.disabledCentros?v("",!0):(o(),D($,{key:1,class:"c-select-item",options:n.value,modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=t=>h.value=t)},null,8,["options","modelValue"])),S(_,{class:"c-filterbar-search",title:"",onExecuteAction:I,disabled:b.value},null,8,["disabled"])]),F.multipleDisabled?v("",!0):(o(),u("div",X,[(o(!0),u(q,null,P(r,t=>(o(),u("div",z,[x("span",null,T(t.description),1),f.disabledCentros?v("",!0):(o(),D(_,{key:0,class:"deleted-centro",title:"X",onExecuteAction:l=>k(t.id)},null,8,["onExecuteAction"]))]))),256))])),A()?(o(),u("div",G,[S(_,{class:"btn-volver-filter",title:"Volver",onExecuteAction:B,disabled:b.value},null,8,["disabled"])])):v("",!0)]))}};export{K as _};
