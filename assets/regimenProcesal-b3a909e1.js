import{u as P,g as i,r as h,o as b,f as x,j as E,_ as N,m as c,n as T,b as I,a as B,k as G}from"./index-4db8e7f1.js";import{_ as H}from"./CHeaderBar-c13a152f.js";import{_ as L}from"./CFilterbar-029756cf.js";import{_ as O}from"./subSideNav-ecbc9dc1.js";import{_ as R}from"./CColunmChart-5a632953.js";import"./CButton-82bc19c5.js";import"./CChartDonutSection-e923d460.js";const X={class:"regimen-procesal-carcel"},Y={class:"chart-section"},p=4,ee={__name:"regimenProcesal",setup(j){const e=P(),s=i(!1),u=i("Elementos de reinserción / Internos reincidentes IGI"),S=i(null),w=i({categories:["Condenado"]}),D=i({min:0,allowDecimals:!1,title:{text:"Reincidencia IGI"}}),V=i({column:{pointPadding:.2,borderWidth:3}}),F=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),o=h([]),C=(t,n,a)=>h({id:t,name:n,data:a,dataLabels:{enabled:!0,color:"#fff",align:"right",y:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async t=>{s.value=!0;const n=o.filter(a=>a.id!==t);o.splice(0,o.length),n.map(a=>o.push(a)),await e.sleep(50),s.value=!1},d=async(t,n,a)=>{var m,f;try{let l=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,_=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.description)??null,v=e.historyId;if(a&&(l=t,_=n),v&&l){s.value=!0;let A=await G({historyId:v,carcelId:l,categoryId:p,subCategoryId:25}),y=0,g=0;const M=[];A.map(r=>{r.valueUsed===1&&(y=r.pound),r.valueUsed===3&&(g=r.pound)}),o.push(C(l,_+" (Sí)",[y+g]))}}catch(l){console.log(l)}finally{a||(s.value=!1)}},k=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await d(t.id,t.description,!0))),s.value=!1};return(t,n)=>(b(),x(N,{class:"container-regimen-procesal"},{default:E(()=>[c(H,{title:u.value,"section-value":p},null,8,["title"]),c(T,{"active-spin":s.value},null,8,["active-spin"]),c(L,{baseFilter:p,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:d,onExecuteRemove:$}),I("div",X,[c(O,{class:"subsection-regimen-procesal",title:u.value,"section-value":p,pointValue:S.value,pointTitle:"Internos reincidentes IGI",pointSubtitle:"Internos reincidentes en cada recinto"},null,8,["title","pointValue"]),I("div",Y,[s.value?B("",!0):(b(),x(R,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:D.value,plotOptions:V.value,tooltip:F.value,series:o},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{ee as default};
