import{y as T,g as t,h as U,o as b,f as x,j as P,_ as Y,q as z,C as G,b as f,m as c,n as X,x as I,c as J,a as C,e as j}from"./index-3287c5b5.js";import{_ as H}from"./CHeaderBar-934324ac.js";import{_ as K}from"./subSideNav-e61a18ab.js";import{_ as A}from"./CButton-f1a1bfa9.js";import{_ as Q}from"./CTable-e27a5447.js";import{_ as W}from"./CColunmChart-c9f095b6.js";import{s as Z}from"./filterSituacion-5535d006.js";import"./CChartDonutSection-726ede49.js";const q="/dmm/dimension-history-aggression",ee=async(e,r)=>{if(e!=null&&e.id){let g=`${q}/${e.id}`;return T(g,"GET",null,r)}let l=q,s=null;return e!=null&&e.regionId&&(s?s=`${s}&regionId=${e.regionId}`:s=`regionId=${e.regionId}`),e!=null&&e.carcelId&&(s?s=`${s}&carcelId=${e.carcelId}`:s=`carcelId=${e.carcelId}`),e!=null&&e.aggresionTypeId&&(s?s=`${s}&aggresionTypeId=${e.aggresionTypeId}`:s=`aggresionTypeId=${e.aggresionTypeId}`),e!=null&&e.year&&(s?s=`${s}&year=${e.year}`:s=`year=${e.year}`),s&&(l=`${l}?${s}`),T(l,"GET",null,r)},oe="/dmm/aggression-types",se=async(e,r)=>T(oe,"GET",null,r);const te={class:"content-header-eventos"},ie={class:"selected-options"},le={key:0,class:"c-option-volver"},ne={class:"table-section-principal"},ae={class:"content__section"},O=3,ye={__name:"registroViolencia",setup(e){const r=Z(),l=t({id:15,description:"Región Metropolitana de Santiago"}),s=t([]),g=t({id:16,description:"CCP Colina 1"}),V=t([]),y=t({id:1,description:"N° de eventos de riñas en el período."}),u=t(!1),h=t([]),R=t("Estado situación carcelaria / Registro de eventos violentos"),E=t([{rowReference:"year",description:"Año"},{rowReference:"quantity",description:"Cantidad"}]),_=t(0),m=t([]),S=t({categories:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],crosshair:!1}),D=t({min:0,title:{text:"Registro violencia por año"}}),F=t({column:{stacking:"normal"}}),B=t({headerFormat:'<span style="font-size:10px">{point.x} ({series.userOptions.stack}): {point.stackTotal} </span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr></b>',footerFormat:'</table> <span style="font-size:10px">Total: {point.stackTotal}  </span>',useHTML:!0}),p=t([]),L=()=>{j.push("/situacionCarcelaria")},M=async n=>{if(!r.listadoRegiones.length>0){let o=await z();s.value=o,r.setRegionesList(o)}else s.value=r.listadoRegiones},k=async()=>{const n={regionId:l.value};V.value=await G(n)},N=n=>{m.value=[],p.value=[],_.value=0;let o=0,i=0;const v={name:"",data:[0,0,0,0,0,0,0,0,0,0,0,0],stack:"Registro violencia"};let d=[0,0,0,0,0,0,0,0,0,0,0,0];for(let $=0;$<n.length;$++){let a=n[$];_.value+=a.quantity,o||(o=a.year),a.year===o?(i+=a.quantity,d[a.month-1]=a.quantity):(m.value.push({year:o,quantity:i}),v.name=o,console.log(p.value,v),p.value.push({name:o,data:d,stack:"Registro violencia"}),console.log(p.value),o=a.year,v.name=a.year,i=a.quantity,d=[0,0,0,0,0,0,0,0,0,0,0,0],d[a.month-1]=a.quantity)}console.log(p.value),m.value.push({year:o,quantity:i}),p.value.push({name:o,data:d,stack:"Registro violencia"})},w=async()=>{var n,o,i;try{if(l.value){const v={regionId:((n=l.value)==null?void 0:n.id)??l.value,carcelId:((o=g.value)==null?void 0:o.id)??g.value,aggresionTypeId:((i=y.value)==null?void 0:i.id)??y.value};u.value=!0;const d=await ee(v);u.value=!1,N(d)}else m.value=[]}catch(v){console.log(v)}};return U(async()=>{u.value=!0,l.value=r.regionSelected.id,h.value=await se(),await M(),await k(),await w(),u.value=!1}),(n,o)=>(b(),x(Y,{class:"contenido-eventos"},{default:P(()=>[f("div",te,[c(H,{title:R.value,"section-value":O},null,8,["title"]),c(X,{"active-spin":u.value},null,8,["active-spin"]),f("div",ie,[c(I,{class:"select-region",options:s.value,modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=i=>l.value=i),onChangeValue:o[1]||(o[1]=i=>k())},null,8,["options","modelValue"]),c(I,{class:"select-carcel",options:V.value,modelValue:g.value,"onUpdate:modelValue":o[2]||(o[2]=i=>g.value=i)},null,8,["options","modelValue"]),c(I,{class:"select-question",options:h.value,modelValue:y.value,"onUpdate:modelValue":o[3]||(o[3]=i=>y.value=i)},null,8,["options","modelValue"]),c(A,{class:"btn-search",title:"",onExecuteAction:w})]),!u.value&&n.topPosition!==0?(b(),J("div",le,[c(A,{class:"btn-volver",title:"Volver",onExecuteAction:L,disabled:n.blockButton},null,8,["disabled"])])):C("",!0)]),f("div",ne,[c(K,{class:"subsection-eventos",title:R.value,"section-value":O,"point-label":_.value,"point-disabled":!0,pointTitle:"Registro de eventos violentos",pointSubtitle:""},null,8,["title","point-label"]),f("div",ae,[c(Q,{columns:E.value,rows:m.value},null,8,["columns","rows"]),u.value?C("",!0):(b(),x(W,{key:0,optionsAxisX:S.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:B.value,series:p.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{ye as default};
