import{u as M,g as n,r as w,o as I,f as A,j as D,_ as N,m as d,n as X,b as r,a as Y,k as z}from"./index-c8938612.js";import{_ as G}from"./subSideNav-83b573e9.js";import{_ as H}from"./CHeaderBar-52290071.js";import{_ as R}from"./CFilterbar-6e8993b2.js";import{_ as W}from"./CCard-96aa4865.js";import{_ as j}from"./CColunmChart-d78b7003.js";import"./CChartDonutSection-e94e3819.js";import"./CButton-1d70cd49.js";const U={class:"chart-section-principal"},J={class:"evaluacion-general"},K={class:"chart-section"},Q=r("span",{class:"card-title"},"Preguntas",-1),Z=r("span",{class:"question--value"},"8.1 A pesar de todo, le he podido dar un sentido a mi vida en esta cárcel",-1),ee=r("span",{class:"question--value"},"8.2 Siento que estar acá me ha ayudado a salir adelante",-1),p=1,ue={__name:"EvalGeneral",setup(te){const a=M(),s=n(!1),_=n("Calidad de vida de los internos / Evaluación general"),v=n(""),u=n([]),E=n({categories:["8.1","8.2"],crosshair:!1}),V=n({min:1,allowDecimals:!1,max:5,title:{text:""}}),$=n({column:{pointPadding:.2,borderWidth:3}}),F=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=w([]),k=(e,o,t)=>w({id:e,name:o,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),f=()=>{let e=u.value.reduce((o,t)=>o+t.pointCarcel,0);e=e/u.value.length,e=T(e),v.value=e.toString()},O=async e=>{s.value=!0;const o=c.filter(t=>t.id!==e);u.value=u.value.filter(t=>t.carcelId!==e),f(),c.splice(0,c.length),o.map(t=>c.push(t)),await a.sleep(50),s.value=!1},T=e=>e?Math.round(e*100)/100:0,m=async(e,o,t)=>{var h,g;try{let i=((h=a==null?void 0:a.penitenciaria)==null?void 0:h.id)??null,y=((g=a==null?void 0:a.penitenciaria)==null?void 0:g.description)??null,x=a.historyId;if(t&&(i=e,y=o),x&&i){s.value=!0;const B={historyId:x,carcelId:i,categoryId:1,subCategoryId:8};let b=0,L=await z(B);const S=[];let C=L.filter(l=>l.poundUsed===1);C.map(l=>{const P=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;b+=P,S.push(P)}),u.value.push({carcelId:i,pointCarcel:b/C.length}),f(),c.push(k(i,y,S))}}catch(i){console.log(i)}finally{t||(s.value=!1)}},q=async()=>{s.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await m(e.id,e.description,!0))),s.value=!1};return(e,o)=>(I(),A(N,null,{default:D(()=>[d(H,{title:_.value,"section-value":p},null,8,["title"]),d(X,{"active-spin":s.value},null,8,["active-spin"]),d(R,{baseFilter:p,multipleDisabled:!1,onExecuteMount:q,onExecuteAction:m,onExecuteRemove:O}),r("div",U,[d(G,{title:_.value,"section-value":p,pointValue:v.value,pointTitle:"Evaluación general",pointSubtitle:"Promedio respuestas evaluación general"},null,8,["title","pointValue"]),r("div",J,[r("div",K,[s.value?Y("",!0):(I(),A(j,{key:0,chartType:"bar",optionsAxisX:E.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:F.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(W,{class:"card-preguntas"},{default:D(()=>[Q,Z,ee]),_:1})])])]),_:1}))}};export{ue as default};