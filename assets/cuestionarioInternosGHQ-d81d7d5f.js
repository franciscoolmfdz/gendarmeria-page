import{u as F,i as n,r as h,o as y,f as g,g as $,_ as P,m as p,p as Q,b as f,a as k,q as E}from"./index-70926910.js";import{_ as N}from"./subSideNav-490a0adb.js";import{_ as T}from"./CHeaderBar-a99216df.js";import{_ as B}from"./CFilterbar-589e7ba9.js";import"./CCard-3d6808c8.js";import{_ as L}from"./CColunmChart-eab0ad9e.js";import"./CButton-3d32abb2.js";const O={class:"chart-section-principal"},R={class:"cuestionario-ghq"},X={class:"chart-section"},m=1,Z={__name:"cuestionarioInternosGHQ",setup(Y){const a=F(),s=n(!1),_=n("Calidad de vida de los internos / Cuestionario de Salud GHQ-12 de Goldberg"),b=n("-");n(0);const x=n({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),S=n({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),I=n({column:{pointPadding:.2,borderWidth:3}}),w=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b>%</td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=h([]),D=(e,o,i)=>h({id:e,name:o,data:i,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-10,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),G=async e=>{s.value=!0;const o=r.filter(i=>i.id!==e);r.splice(0,r.length),o.map(i=>r.push(i)),await a.sleep(50),s.value=!1},C=e=>{let o=e[0].recordId,i=0,u=0,d=0,t=0;for(let c=0;c<e.length;c++){let l=e[c];l.recordId==o&&l.pound>=0?t+=l.pound:(t<2?i++:t>2&&t<=6?u++:t>6&&d++,t=l.pound,o=l.recordId)}return[i,u,d]},v=async(e,o,i)=>{var u,d;try{let t=((u=a==null?void 0:a.penitenciaria)==null?void 0:u.id)??null,c=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.description)??null,l=a.historyId;if(i&&(t=e,c=o),l&&t){s.value=!0;let V=await E({historyId:l,carcelId:t,categoryId:1,subCategoryId:21,embedDetail:!0});const A=C(V.items);r.push(D(t,c,A))}}catch(t){console.log(t)}finally{i||(s.value=!1)}},H=async()=>{s.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),s.value=!1};return(e,o)=>(y(),g(P,null,{default:$(()=>[p(T,{title:_.value,"section-value":m},null,8,["title"]),p(Q,{"active-spin":s.value},null,8,["active-spin"]),p(B,{baseFilter:m,multipleDisabled:!1,onExecuteMount:H,onExecuteAction:v,onExecuteRemove:G}),f("div",O,[p(N,{title:_.value,"section-value":m,pointValue:b.value,pointTitle:"Cuestionario General de Salud GHQ-12 de Goldberg",pointSubtitle:"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg"},null,8,["title","pointValue"]),f("div",R,[f("div",X,[s.value?k("",!0):(y(),g(L,{key:0,chartType:"bar",optionsAxisX:x.value,optionsAxisY:S.value,plotOptions:I.value,tooltip:w.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])])]),_:1}))}};export{Z as default};