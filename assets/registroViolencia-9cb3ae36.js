import{s as M,g as t,h as N,o as b,f as w,j as Y,_ as z,x as P,y as U,b as g,m as i,n as X,C as V,c as J,a as A,e as j}from"./index-f3eb65f5.js";import{_ as G}from"./CHeaderBar-47a90cd1.js";import{_ as H}from"./subSideNav-aa036e42.js";import{_ as T}from"./CButton-184dffc5.js";import{_ as K}from"./CTable-8f49c087.js";import{_ as Q}from"./CColunmChart-26545c43.js";import{g as W}from"./dimensionAggression-ec3661ae.js";import{s as Z}from"./filterSituacion-2d33ec3a.js";import"./CChartDonutSection-300b1341.js";const ee="/dmm/aggression-types",te=async(O,u)=>M(ee,"GET",null,u);const oe={class:"content-header-eventos"},ae={class:"selected-options"},se={key:0,class:"c-option-volver"},ie={class:"table-section-principal"},le={class:"content__section"},q=3,_e={__name:"registroViolencia",setup(O){const u=Z(),l=t({id:15,description:"Región Metropolitana de Santiago"}),_=t([]),v=t({id:16,description:"CCP Colina 1"}),h=t([]),m=t({id:1,description:"N° de eventos de riñas en el período."}),n=t(!1),R=t([]),k=t("Estado situación carcelaria / Registro de eventos violentos"),$=t([{rowReference:"year",description:"Año"},{rowReference:"quantity",description:"Cantidad"}]),f=t(0),d=t([]),S=t({categories:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],crosshair:!1}),D=t({min:0,title:{text:"Registro violencia por año"}}),E=t({column:{stacking:"normal",dataLabels:{enabled:!0}}}),F=t({headerFormat:'<span style="font-size:10px">{point.x} ({series.userOptions.stack}): {point.stackTotal} </span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr></b>',footerFormat:'</table> <span style="font-size:10px">Total: {point.stackTotal}  </span>',useHTML:!0}),p=t([]),L=()=>{j.push("/situacionCarcelaria")},B=async a=>{if(!u.listadoRegiones.length>0){let e=await P();_.value=e,u.setRegionesList(e)}else _.value=u.listadoRegiones},x=async()=>{const a={regionId:l.value};h.value=await U(a)},I=a=>{d.value=[],p.value=[],f.value=0;let e=0,o=0;const r={name:"",data:[0,0,0,0,0,0,0,0,0,0,0,0],stack:"Registro violencia"};let c=[0,0,0,0,0,0,0,0,0,0,0,0];for(let y=0;y<a.length;y++){let s=a[y];f.value+=s.quantity,e||(e=s.year),s.year===e?(o+=s.quantity,c[s.month-1]=s.quantity):(d.value.push({year:e,quantity:o}),r.name=e,console.log(p.value,r),p.value.push({name:e,data:c,stack:"Registro violencia"}),console.log(p.value),e=s.year,r.name=s.year,o=s.quantity,c=[0,0,0,0,0,0,0,0,0,0,0,0],c[s.month-1]=s.quantity)}d.value.push({year:e,quantity:o}),p.value.push({name:e,data:c,stack:"Registro violencia"})},C=async()=>{var a,e,o;try{if(l.value){const r={regionId:((a=l.value)==null?void 0:a.id)??l.value,carcelId:((e=v.value)==null?void 0:e.id)??v.value,aggresionTypeId:((o=m.value)==null?void 0:o.id)??m.value};n.value=!0;const c=await W(r);n.value=!1,I(c)}else d.value=[]}catch(r){console.log(r)}};return N(async()=>{n.value=!0,l.value=u.regionSelected.id,R.value=await te(),await B(),await x(),await C(),n.value=!1}),(a,e)=>(b(),w(z,{class:"contenido-eventos"},{default:Y(()=>[g("div",oe,[i(G,{title:k.value,"section-value":q},null,8,["title"]),i(X,{"active-spin":n.value},null,8,["active-spin"]),g("div",ae,[i(V,{class:"select-region",options:_.value,modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),onChangeValue:e[1]||(e[1]=o=>x())},null,8,["options","modelValue"]),i(V,{class:"select-carcel",options:h.value,modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=o=>v.value=o)},null,8,["options","modelValue"]),i(V,{class:"select-question",options:R.value,modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=o=>m.value=o)},null,8,["options","modelValue"]),i(T,{class:"btn-search",title:"",onExecuteAction:C})]),!n.value&&a.topPosition!==0?(b(),J("div",se,[i(T,{class:"btn-volver",title:"Volver",onExecuteAction:L,disabled:a.blockButton},null,8,["disabled"])])):A("",!0)]),g("div",ie,[i(H,{class:"subsection-eventos",title:k.value,"section-value":q,"point-label":f.value,"point-disabled":!0,pointTitle:"Registro de eventos violentos",pointSubtitle:""},null,8,["title","point-label"]),g("div",le,[i(K,{columns:$.value,rows:d.value},null,8,["columns","rows"]),n.value?A("",!0):(b(),w(Q,{key:0,optionsAxisX:S.value,optionsAxisY:D.value,plotOptions:E.value,tooltip:F.value,series:p.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{_e as default};
