import{u as k,g as n,r as w,o as D,f as G,j as N,_ as R,m as _,n as T,b as v,a as B,l as E}from"./index-b814b26e.js";import{_ as L}from"./subSideNav-bd48cdb7.js";import{_ as O}from"./CHeaderBar-cd50a8db.js";import{_ as X}from"./CFilterbar-06228a72.js";import"./CCard-47d5f6f7.js";import{_ as Y}from"./CColunmChart-0a92d872.js";import"./CChartDonutSection-2992fb45.js";import"./CButton-2da5c8f1.js";const z={class:"chart-section-principal"},M={class:"cuestionario-ghq-funcionario"},W={class:"chart-section"},h=2,oe={__name:"cuestionarioIGHQ",setup(j){const o=k(),s=n(!1),g=n("Calidad de vida de los funcionarios / Cuestionario de Salud GHQ-12 de Goldberg"),u=n([]),y=n(0),V=n({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),A=n({min:0,allowDecimals:!1,title:{text:""}}),C=n({column:{pointPadding:.2,borderWidth:3}}),H=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=w([]),P=(e,i,t)=>w({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async e=>{s.value=!0;const i=c.filter(t=>t.id!==e);u.value=u.value.filter(t=>t.carcelId!=e),b(),c.splice(0,c.length),i.map(t=>c.push(t)),await o.sleep(50),s.value=!1},b=()=>{let e=u.value.reduce((i,t)=>i+t.pointValue,0);e=e/u.value.length,e=x(e),y.value=e.toString()},$=e=>{let i=e[0].recordId,t=0,d=0,p=0,a=0,r=0;for(let m=0;m<e.length;m++){let l=e[m];l.recordId==i&&l.pound>=0?(a+=l.pound,r+=l.value):(a<2?t++:a>2&&a<=6?d++:a>6&&p++,a=l.pound,i=l.recordId)}let f=e.length/12;return r=r/f/6,[t,d,p,r]},x=e=>e?Math.round(e*100)/100:0,S=async(e,i,t)=>{var d,p;try{let a=((d=o==null?void 0:o.penitenciaria)==null?void 0:d.id)??null,r=((p=o==null?void 0:o.penitenciaria)==null?void 0:p.description)??null,f=o.historyId;if(t&&(a=e,r=i),f&&a){s.value=!0;let l=await E({historyId:f,carcelId:a,categoryId:2,subCategoryId:22,embedDetail:!0});const I=$(l.items);u.value.push({carcelId:a,pointValue:x(I[3])}),b(),c.push(P(a,r,I.slice(0,-1)))}}catch(a){console.log(a)}finally{t||(s.value=!1)}},Q=async()=>{s.value=!0,o.carcelesSelected&&o.carcelesSelected.length>0&&await Promise.all(o.carcelesSelected.map(async e=>await S(e.id,e.description,!0))),s.value=!1};return(e,i)=>(D(),G(R,null,{default:N(()=>[_(O,{title:g.value,"section-value":h},null,8,["title"]),_(T,{"active-spin":s.value},null,8,["active-spin"]),_(X,{baseFilter:h,multipleDisabled:!1,onExecuteMount:Q,onExecuteAction:S,onExecuteRemove:F}),v("div",z,[_(L,{class:"subsection-funcionarios",title:g.value,"section-value":h,pointValue:y.value,pointTitle:"Cuestionario General de Salud GHQ-12 de Goldberg",pointSubtitle:"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg"},null,8,["title","pointValue"]),v("div",M,[v("div",W,[s.value?B("",!0):(D(),G(Y,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:A.value,plotOptions:C.value,tooltip:H.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])])]),_:1}))}};export{oe as default};
