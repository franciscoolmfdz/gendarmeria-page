import{u as J,g as n,r as x,o as S,f as P,j as w,_ as O,m,n as j,b as f,a as B,l as E}from"./index-9fb49b6f.js";import{_ as H}from"./CHeaderBar-99e7b8d1.js";import{_ as L}from"./CFilterbar-a4403cdf.js";import{_ as N}from"./subSideNav-b2a71673.js";import{a as X}from"./CChartDonutSection-52de9655.js";import{_ as Y}from"./CColunmChart-1d3673aa.js";import"./CButton-9322b388.js";const z={class:"chart-section-principal"},W={class:"tipo-programa-section"},q={class:"chart-section"},R=f("span",{class:"card-title"},"Pregunta",-1),G=f("span",{class:"question--value"},"Tipo de programa",-1),v=7,se={__name:"tipoPrograma",setup(K){const a=J(),s=n(!1),h=n("Antecedentes y trayectorias / Tipo de programa"),y=n(""),u=n([]),C=n({categories:["Justicia Juvenil","Protección","Justicia y protección"],crosshair:!1}),I=n({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),V=n({column:{pointPadding:.2,borderWidth:3}}),F=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=x([]),M=(e,i,t)=>x({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),g=()=>{let e=u.value.reduce((i,t)=>i+t.pointCarcel,0);e=e/u.value.length,e=Math.round(_(e)),y.value=e.toString()},_=e=>e?Math.round(e*100)/100:0,T=async e=>{s.value=!0;const i=r.filter(t=>t.id!==e);r.splice(0,r.length),u.value=u.value.filter(t=>t.carcelId!==e),g(),i.map(t=>r.push(t)),await a.sleep(50),s.value=!1},$=(e,i)=>{let t=0,c=0,p=0;for(let l=0;l<e.length;l++)e[l].value==1&&t++,e[l].value==2&&c++,e[l].value==3&&p++;let o=t+c+p;const d=[Math.round(_(t*100/o)),Math.round(_(c*100/o)),Math.round(_(p*100/o))];return u.value.push({carcelId:i,pointCarcel:Math.max(...d)}),g(),d},b=async(e,i,t)=>{var c,p;try{let o=((c=a==null?void 0:a.penitenciaria)==null?void 0:c.id)??null,d=((p=a==null?void 0:a.penitenciaria)==null?void 0:p.description)??null,l=a.historyId;if(t&&(o=e,d=i),l&&o){s.value=!0;let D=await E({historyId:l,carcelId:o,categoryId:v,subCategoryId:23,embedDetail:!0,dimensionId:137});const k=$(D.items,o);r.push(M(o,d,k))}}catch(o){console.log(o)}finally{t||(s.value=!1)}},A=async()=>{s.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await b(e.id,e.description,!0))),s.value=!1};return(e,i)=>(S(),P(O,null,{default:w(()=>[m(H,{title:h.value,"section-value":v},null,8,["title"]),m(j,{"active-spin":s.value},null,8,["active-spin"]),m(L,{baseFilter:v,multipleDisabled:!1,onExecuteMount:A,onExecuteAction:b,onExecuteRemove:T}),f("div",z,[m(N,{class:"subsection-trayectoria",title:h.value,"section-value":v,pointValue:y.value,pointTitle:"Tipo de programa",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),f("div",W,[f("div",q,[s.value?B("",!0):(S(),P(Y,{key:0,chartType:"bar",optionsAxisX:C.value,optionsAxisY:I.value,plotOptions:V.value,tooltip:F.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),m(X,{class:"card-preguntas"},{default:w(()=>[R,G]),_:1})])])]),_:1}))}};export{se as default};
