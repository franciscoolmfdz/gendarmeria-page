import{u as k,g as n,r as b,o as x,f as I,j as N,_ as B,m as r,n as E,b as S,a as T,k as W}from"./index-22e32733.js";import{_ as G}from"./CHeaderBar-286bf8ed.js";import{_ as H}from"./CFilterbar-d1ab4dcb.js";import{_ as L}from"./subSideNav-03d27cc9.js";import{_ as O}from"./CColunmChart-ff0ab29a.js";import"./CButton-1b43ba3e.js";import"./CChartDonutSection-695f227e.js";const R={class:"regimen-procesal-carcel"},X={class:"chart-section"},c=4,Z={__name:"regimenProcesal",setup(Y){const e=k(),o=n(!1),d=n("Elementos de reinserción / Internos reincidentes IGI"),w=n(null),D=n({categories:["Condenado","Imputado","Procesado","Condenado","Imputado","Procesado"],plotBands:[{color:"#e3e3e386",from:-.5,to:2.5,label:{text:"Hombre",align:"center",verticalAlign:"top",style:{color:"#000",textShadow:!0,fontWeight:"normal"}}},{color:"#cbf3cf",from:2.5,to:5.5,label:{text:"Mujer",align:"center",verticalAlign:"top",style:{color:"#000",textShadow:!0,fontWeight:"normal"}}}]}),A=n({min:0,allowDecimals:!1,title:{text:"Reincidencia IGI"}}),C=n({column:{pointPadding:.2,borderWidth:3}}),P=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),s=b([]),m=(t,l,a)=>b({id:t,name:l,data:a,dataLabels:{enabled:!0,color:"#fff",align:"right",y:10,style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),V=async t=>{o.value=!0;const l=s.filter(a=>a.id!==t);s.splice(0,s.length),l.map(a=>s.push(a)),await e.sleep(50),o.value=!1},f=async(t,l,a)=>{var _,v;try{let i=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.id)??null,p=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.description)??null,h=e.historyId;if(a&&(i=t,p=l),h&&i){o.value=!0;let $=await W({historyId:h,carcelId:i,categoryId:c,subCategoryId:25});const g=[],y=[];$.map(u=>{u.valueUsed<7?g.push(u.pound):y.push(u.pound)}),s.push(m(i,p+" (Sí)",g)),s.push(m(i,p+" (No)",y))}}catch(i){console.log(i)}finally{a||(o.value=!1)}},F=async()=>{o.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await f(t.id,t.description,!0))),o.value=!1};return(t,l)=>(x(),I(B,{class:"container-regimen-procesal"},{default:N(()=>[r(G,{title:d.value,"section-value":c},null,8,["title"]),r(E,{"active-spin":o.value},null,8,["active-spin"]),r(H,{baseFilter:c,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:F,onExecuteAction:f,onExecuteRemove:V}),S("div",R,[r(L,{class:"subsection-regimen-procesal",title:d.value,"section-value":c,pointValue:w.value,pointTitle:"Internos reincidentes IGI",pointSubtitle:"Internos reincidentes en cada recinto"},null,8,["title","pointValue"]),S("div",X,[o.value?T("",!0):(x(),I(O,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:A.value,plotOptions:C.value,tooltip:P.value,series:s},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{Z as default};
