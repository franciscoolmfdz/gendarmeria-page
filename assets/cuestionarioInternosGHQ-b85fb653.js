import{i as $,h as c,r as _,o as v,f as h,j as g,_ as P,g as p,b as m,a as V}from"./index-c7e60c0d.js";import{_ as k}from"./CSpinner-8e67e485.js";import{_ as E}from"./CHeaderBar-f802f93d.js";import{_ as L}from"./CFilterbar-a60f96d0.js";import{_ as N}from"./CCard-9caa2825.js";import{_ as Q}from"./CColunmChart-46cb0204.js";import{a as B}from"./dimensionHistory-893adf31.js";import"./exporting-f3fb0e82.js";import"./api-ec658a74.js";const O={class:"evaluacion-general"},R={class:"chart-section"},X=m("span",{class:"card-title"},"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg",-1),Y=m("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),y=1,te={__name:"cuestionarioInternosGHQ",setup(q){const s=$(),o=c(!1),b=c("Calidad de vida de los internos / Cuestionario de Salud GHQ-12 de Goldberg"),x=c({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),I=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),S=c({column:{pointPadding:.2,borderWidth:3}}),w=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b>%</td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=_([]),D=(e,i,a)=>_({id:e,name:i,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),G=async e=>{o.value=!0;const i=l.filter(a=>a.id!==e);l.splice(0,l.length),i.map(a=>l.push(a)),await s.sleep(50),o.value=!1},A=e=>{let i=e[0].recordId,a=0,d=0,u=0,t=0;for(let r=0;r<e.length;r++){let n=e[r];n.recordId==i&&n.pound>=0?t+=n.pound:(t<2?a++:t>2&&t<=6?d++:t>6&&u++,t=n.pound,i=n.recordId)}return[a,d,u]},f=async(e,i,a)=>{var d,u;try{let t=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,r=((u=s==null?void 0:s.penitenciaria)==null?void 0:u.description)??null,n=s.historyId;if(a&&(t=e,r=i),n&&t){o.value=!0;let F=await B({historyId:n,carcelId:t,categoryId:1,subCategoryId:21,embedDetail:!0});const H=A(F.items);l.push(D(t,r,H))}}catch(t){console.log(t)}finally{a||(o.value=!1)}},C=async()=>{o.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await f(e.id,e.description,!0))),o.value=!1};return(e,i)=>(v(),h(P,null,{default:g(()=>[p(E,{title:b.value,"section-value":y},null,8,["title"]),p(k,{"active-spin":o.value},null,8,["active-spin"]),p(L,{baseFilter:y,multipleDisabled:!1,onExecuteMount:C,onExecuteAction:f,onExecuteRemove:G}),m("div",O,[m("div",R,[p(N,{class:"card-information"},{default:g(()=>[X,Y]),_:1}),o.value?V("",!0):(v(),h(Q,{key:0,optionsAxisX:x.value,optionsAxisY:I.value,plotOptions:S.value,tooltip:w.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])]),_:1}))}};export{te as default};