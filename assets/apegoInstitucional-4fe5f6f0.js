import{u as q,g as i,r as I,o as w,f as P,j as D,_ as B,m as u,n as E,b as r,a as X,k as Y}from"./index-32237ca5.js";import{_ as j}from"./subSideNav-5ad6d73d.js";import{_ as z}from"./CHeaderBar-314fbfbd.js";import{_ as H}from"./CFilterbar-a0586138.js";import{_ as R}from"./CCard-d1e39816.js";import{_ as W}from"./CColunmChart-1c02ee98.js";import"./CChartDonutSection-b8d245cd.js";import"./CButton-9b5b716d.js";const U={class:"chart-section-principal"},G={class:"apego-institusion"},J={class:"chart-section"},K=r("span",{class:"card-title"},"Preguntas",-1),Q=r("span",{class:"question--value"},"1. Me identifico con las metas y objetivos de la institución (fp8)",-1),Z=r("span",{class:"question--value"},"2. Siento compromiso con lo que pase en esta cárcel (fp9)",-1),d=2,pe={__name:"apegoInstitucional",setup(ee){const s=q(),a=i(!1),f=i("Calidad de vida de los funcionarios / Apego institucional"),_=i(""),p=i([]),F=i({categories:["1.","2."],crosshair:!1}),V=i({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),$=i({column:{pointPadding:.2,borderWidth:3}}),k=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=I([]),L=(e,n,t)=>I({id:e,name:n,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),M=async e=>{a.value=!0;const n=c.filter(t=>t.id!==e);p.value=p.value.filter(t=>t.carcelId!==e),m(),c.splice(0,c.length),n.map(t=>c.push(t)),await s.sleep(50),a.value=!1},m=()=>{let e=p.value.reduce((n,t)=>n+t.pointCarcel,0);e=e/p.value.length,e=N(e),_.value=e.toString()},N=e=>e?Math.round(e*100)/100:0,v=async(e,n,t)=>{var b,h;try{let l=((b=s==null?void 0:s.penitenciaria)==null?void 0:b.id)??null,y=((h=s==null?void 0:s.penitenciaria)==null?void 0:h.description)??null,g=s.historyId;if(t&&(l=e,y=n),g&&l){a.value=!0;let T=await Y({historyId:g,carcelId:l,categoryId:d,subCategoryId:11});const x=[];let S=0,C=T.filter(o=>o.poundUsed===1);C.map(o=>{const A=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;S+=A,x.push(A)}),p.value.push({carcelId:l,pointCarcel:S/C.length}),m(),c.push(L(l,y,x))}}catch(l){console.log(l)}finally{t||(a.value=!1)}},O=async()=>{a.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),a.value=!1};return(e,n)=>(w(),P(B,null,{default:D(()=>[u(z,{title:f.value,"section-value":d},null,8,["title"]),u(E,{"active-spin":a.value},null,8,["active-spin"]),u(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:O,onExecuteAction:v,onExecuteRemove:M}),r("div",U,[u(j,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:_.value,pointTitle:"Apego institucional",pointSubtitle:"Frecuencia de respuestas apego institucional"},null,8,["title","pointValue"]),r("div",G,[r("div",J,[a.value?X("",!0):(w(),P(W,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:k.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(R,{class:"card-preguntas"},{default:D(()=>[K,Q,Z]),_:1})])])]),_:1}))}};export{pe as default};