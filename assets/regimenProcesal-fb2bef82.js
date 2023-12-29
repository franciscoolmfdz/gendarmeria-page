import{u as B,g as n,r as V,o as w,f as C,j as H,_ as L,m as u,n as M,b as D,a as O,k as X}from"./index-9ece5f00.js";import{_ as Y}from"./CHeaderBar-c560d413.js";import{_ as z}from"./CFilterbar-0a385611.js";import{_ as R}from"./subSideNav-849ce6fa.js";import{_ as W}from"./CColunmChart-2e8ec6dd.js";import"./CButton-f27b5fc8.js";import"./CChartDonutSection-8542dc28.js";const q={class:"regimen-procesal-carcel"},J={class:"chart-section"},p=4,ie={__name:"regimenProcesal",setup(K){const a=B(),o=n(!1),f=n("Elementos de reinserción / Internos con IGI"),m=n(null),c=n([]),G=n({categories:["Condenado"]}),P=n({min:0,allowDecimals:!1,title:{text:"Porcentaje de internos con IGI aplicado"}}),$=n({column:{pointPadding:.2,borderWidth:3}}),k=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=V([]),A=(e,s,t)=>V({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#fff",align:"right",x:40,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),E=e=>e?Math.round(e*100)/100:0,N=async e=>{o.value=!0;const s=r.filter(t=>t.id!==e);c.value=c.value.filter(t=>t.carcelId!==e),v(),r.splice(0,r.length),s.map(t=>r.push(t)),await a.sleep(50),o.value=!1},v=()=>{let e=c.value.reduce((s,t,d)=>s+t.pointCarcel,0);e=e/c.value.length,e=E(e),m.value=e.toString()},_=async(e,s,t)=>{var d,y;try{let i=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.id)??null,h=((y=a==null?void 0:a.penitenciaria)==null?void 0:y.description)??null,g=a.historyId;if(t&&(i=e,h=s),g&&i){o.value=!0;let U=await X({historyId:g,carcelId:i,categoryId:p,subCategoryId:25}),I=0,b=0,x=0;U.map(l=>{l.valueUsed===1?I=l.pound:l.valueUsed===3?b=l.pound:(l.valueUsed===2||l.valueUsed===4)&&(x+=l.pound)});const S=I+b,j=S+x,F=parseFloat((S/j*100).toFixed(1));c.value.push({carcelId:i,pointCarcel:F}),v(),r.push(A(i,h+" (Sí)",[F]))}}catch(i){console.log(i)}finally{t||(o.value=!1)}},T=async()=>{o.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await _(e.id,e.description,!0))),o.value=!1};return(e,s)=>(w(),C(L,{class:"container-regimen-procesal"},{default:H(()=>[u(Y,{title:f.value,"section-value":p},null,8,["title"]),u(M,{"active-spin":o.value},null,8,["active-spin"]),u(z,{baseFilter:p,monthDisabled:!0,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:_,onExecuteRemove:N}),D("div",q,[u(R,{class:"subsection-regimen-procesal",title:f.value,"section-value":p,pointValue:m.value,"point-type":5,"point-is-percent":!0,pointTitle:"Internos con IGI",pointSubtitle:"Internos reincidentes en cada recinto"},null,8,["title","pointValue"]),D("div",J,[o.value?O("",!0):(w(),C(W,{key:0,chartType:"bar",optionsAxisX:G.value,optionsAxisY:P.value,plotOptions:$.value,tooltip:k.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{ie as default};
