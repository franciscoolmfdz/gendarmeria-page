import{u as B,g as n,r as w,i as L,o as I,f as D,j as F,_ as M,m as p,b as r,a as N,k as X}from"./index-b814b26e.js";import{_ as Y}from"./subSideNav-bd48cdb7.js";import{_ as z}from"./CHeaderBar-cd50a8db.js";import{_ as H}from"./CFilterbar-06228a72.js";import{_ as W}from"./CCard-47d5f6f7.js";import{_ as j}from"./CColunmChart-0a92d872.js";import"./CChartDonutSection-2992fb45.js";import"./CButton-2da5c8f1.js";const U={class:"chart-section-principal"},G={class:"relacion-internos"},J={class:"chart-section"},K=r("span",{class:"card-title"},"Preguntas",-1),Q=r("span",{class:"question--value"},"fp31 En general, me preocupo por los internos/as",-1),Z=r("span",{class:"question--value"},"fp32 Creo que el tema carcelario tiene raíces sociales",-1),u=2,pe={__name:"funcionarioInternos",setup(ee){const e=B(),o=n(!1),d=n("Calidad de vida de los funcionarios / Respeto y relación con los internos"),f=n(""),_=n(0),P=n({categories:["fp31","fp32"],crosshair:!1}),V=n({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),A=n({column:{pointPadding:.2,borderWidth:3}}),$=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),i=w([]),k=(t,l,s)=>w({id:t,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),E=t=>t?Math.round(t*100)/100:0,T=async t=>{o.value=!0;const l=i.filter(s=>s.id!==t);i.splice(0,i.length),l.map(s=>i.push(s)),await e.sleep(50),o.value=!1},m=async(t,l,s)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,y=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,g=e.historyId;if(s&&(c=t,y=l),g&&c){o.value=!0;let R=await X({historyId:g,carcelId:c,categoryId:u,subCategoryId:18});const x=[];let b=0,S=R.filter(a=>a.poundUsed===1);S.map(a=>{const C=a!=null&&a.promPound?Math.round((a==null?void 0:a.promPound)*100)/100:0;b+=C,x.push(C)}),_.value+=b/S.length;let q=E(_.value/e.carcelesSelected.length);f.value=q.toString(),i.push(k(c,y,x))}}catch(c){console.log(c)}finally{s||(o.value=!1)}},O=async()=>{o.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),o.value=!1};return(t,l)=>{const s=L("c-spinner");return I(),D(M,null,{default:F(()=>[p(z,{title:d.value,"section-value":u},null,8,["title"]),p(s,{"active-spin":o.value},null,8,["active-spin"]),p(H,{baseFilter:u,multipleDisabled:!1,onExecuteMount:O,onExecuteAction:m,onExecuteRemove:T}),r("div",U,[p(Y,{class:"subsection-funcionarios",title:d.value,"section-value":u,pointValue:f.value,pointTitle:"Relación con los internos",pointSubtitle:"Frecuencia respuestas respeto y relación con los internos"},null,8,["title","pointValue"]),r("div",G,[r("div",J,[o.value?N("",!0):(I(),D(j,{key:0,chartType:"bar",optionsAxisX:P.value,optionsAxisY:V.value,plotOptions:A.value,tooltip:$.value,series:i},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(W,{class:"card-preguntas"},{default:F(()=>[K,Q,Z]),_:1})])])]),_:1})}}};export{pe as default};
