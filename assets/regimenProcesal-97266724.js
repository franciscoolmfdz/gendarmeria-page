import{u as P,g as i,r as h,o as b,f as x,j as E,_ as N,m as c,n as T,b as I,a as B,k as G}from"./index-23ea3b69.js";import{_ as H}from"./CHeaderBar-6cf1dce7.js";import{_ as L}from"./CFilterbar-8866a34c.js";import{_ as O}from"./subSideNav-81fa67f6.js";import{_ as R}from"./CColunmChart-dc304c10.js";import"./CButton-f4686af5.js";import"./CChartDonutSection-dad97b0b.js";const U={class:"regimen-procesal-carcel"},X={class:"chart-section"},u=4,ee={__name:"regimenProcesal",setup(Y){const e=P(),s=i(!1),p=i("Elementos de reinserción / Internos reincidentes IGI"),S=i(null),w=i({categories:["Condenado"]}),D=i({min:0,allowDecimals:!1,title:{text:"Reincidencia IGI"}}),V=i({column:{pointPadding:.2,borderWidth:3}}),C=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),o=h([]),F=(t,n,a)=>h({id:t,name:n,data:a,dataLabels:{enabled:!0,color:"#fff",align:"right",y:10,style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async t=>{s.value=!0;const n=o.filter(a=>a.id!==t);o.splice(0,o.length),n.map(a=>o.push(a)),await e.sleep(50),s.value=!1},d=async(t,n,a)=>{var f,m;try{let l=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.id)??null,_=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,v=e.historyId;if(a&&(l=t,_=n),v&&l){s.value=!0;let A=await G({historyId:v,carcelId:l,categoryId:u,subCategoryId:25}),y=0,g=0;const z=[];A.map(r=>{console.log(r.valueUsed),r.valueUsed===1&&(y=r.pound),r.valueUsed===3&&(g=r.pound)}),o.push(F(l,_+" (Sí)",[y+g]))}}catch(l){console.log(l)}finally{a||(s.value=!1)}},k=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await d(t.id,t.description,!0))),s.value=!1};return(t,n)=>(b(),x(N,{class:"container-regimen-procesal"},{default:E(()=>[c(H,{title:p.value,"section-value":u},null,8,["title"]),c(T,{"active-spin":s.value},null,8,["active-spin"]),c(L,{baseFilter:u,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:d,onExecuteRemove:$}),I("div",U,[c(O,{class:"subsection-regimen-procesal",title:p.value,"section-value":u,pointValue:S.value,pointTitle:"Internos reincidentes IGI",pointSubtitle:"Internos reincidentes en cada recinto"},null,8,["title","pointValue"]),I("div",X,[s.value?B("",!0):(b(),x(R,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:D.value,plotOptions:V.value,tooltip:C.value,series:o},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{ee as default};
