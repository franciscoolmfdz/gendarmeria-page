import{u as T,g as n,r as x,o as S,f as P,j as w,_ as B,m as u,n as E,b as p,a as L,l as O}from"./index-f9e34e91.js";import{_ as X}from"./CHeaderBar-f9222f17.js";import{_ as Y}from"./CFilterbar-352c8ba3.js";import{_ as z}from"./subSideNav-3f124ec6.js";import{a as H}from"./CChartDonutSection-56b85ea0.js";import{_ as W}from"./CColunmChart-d26dc5f5.js";import"./CButton-72e5be54.js";const j={class:"chart-section-principal"},q={class:"section-num-programas"},R={class:"chart-section"},G=p("span",{class:"card-title"},"Pregunta",-1),J=p("span",{class:"question--value"},"Número de programas",-1),d=7,ie={__name:"numeroProgramas",setup(K){const a=T(),o=n(!1),f=n("Antecedentes y trayectorias / Número de programas"),_=n(""),c=n([]),C=n({categories:["Número de programas"],crosshair:!1}),I=n({min:0,allowDecimals:!1,title:{text:""}}),N=n({column:{pointPadding:.2,borderWidth:3}}),F=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=x([]),V=(e,s,t)=>x({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),v=()=>{let e=c.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/c.value.length,e=Math.round(m(e)),_.value=e.toString()},m=e=>e?Math.round(e*100)/100:0,$=async e=>{o.value=!0;const s=r.filter(t=>t.id!==e);r.splice(0,r.length),c.value=c.value.filter(t=>t.carcelId!==e),v(),s.map(t=>r.push(t)),await a.sleep(50),o.value=!1},A=(e,s)=>{let t=0;for(let i=0;i<e.length;i++)e[i].value>0&&e[i].value>t&&(t=e[i].value);return c.value.push({carcelId:s,pointCarcel:Math.round(m(t))}),v(),[Math.round(m(t))]},h=async(e,s,t)=>{var i,g;try{let l=((i=a==null?void 0:a.penitenciaria)==null?void 0:i.id)??null,y=((g=a==null?void 0:a.penitenciaria)==null?void 0:g.description)??null,b=a.historyId;if(t&&(l=e,y=s),b&&l){o.value=!0;let M=await O({historyId:b,carcelId:l,categoryId:d,subCategoryId:23,embedDetail:!0,dimensionId:137});const k=A(M.items,l);r.push(V(l,y,k))}}catch(l){console.log(l)}finally{t||(o.value=!1)}},D=async()=>{o.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await h(e.id,e.description,!0))),o.value=!1};return(e,s)=>(S(),P(B,null,{default:w(()=>[u(X,{title:f.value,"section-value":d},null,8,["title"]),u(E,{"active-spin":o.value},null,8,["active-spin"]),u(Y,{baseFilter:d,multipleDisabled:!1,onExecuteMount:D,onExecuteAction:h,onExecuteRemove:$}),p("div",j,[u(z,{class:"subsection-trayectoria",title:f.value,"section-value":d,pointValue:_.value,pointTitle:"Número de programas",pointSubtitle:"",type:2},null,8,["title","pointValue"]),p("div",q,[p("div",R,[o.value?L("",!0):(S(),P(W,{key:0,chartType:"bar",optionsAxisX:C.value,optionsAxisY:I.value,plotOptions:N.value,tooltip:F.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(H,{class:"card-preguntas"},{default:w(()=>[G,J]),_:1})])])]),_:1}))}};export{ie as default};
