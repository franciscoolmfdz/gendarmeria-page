import{u as O,g as n,r as z,o as P,f as w,j as A,_ as T,m as p,n as B,b as c,a as E,k as X}from"./index-45ccebc1.js";import{_ as Y}from"./subSideNav-b0532d57.js";import{_ as j}from"./CHeaderBar-26ed6fbc.js";import{_ as H}from"./CFilterbar-8a96129f.js";import{_ as R}from"./CCard-67b7bef7.js";import{_ as W}from"./CColunmChart-aef5517e.js";import"./CChartDonutSection-a9b194f7.js";import"./CButton-a3569a76.js";const U={class:"chart-section-principal"},G={class:"confianzaValoracion"},J={class:"chart-section"},K=c("span",{class:"card-title"},"Preguntas",-1),Q=c("span",{class:"question--value"},"fp2 Confío en los oficiales que dirigen esta prisión",-1),Z=c("span",{class:"question--value"},"fp6 Los oficiales son accesibles cuando necesito discutir un problema con ellos",-1),ee=c("span",{class:"question--value"},"fp7 Me siento valorado por mi jefatura",-1),d=2,pe={__name:"confianzaValoracion",setup(ae){const t=O(),s=n(!1),f=n("Calidad de vida de los funcionarios / Confianza y valoración"),_=n(""),u=n([]),F=n({categories:["fp2","fp6","fp7"],crosshair:!1}),I=n({type:"category",min:0,title:{text:""},left:"-10%",categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"],max:4}),$=n({column:{pointPadding:.2,borderWidth:3}}),D=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=z([]),k=(e,o,a)=>z({id:e,name:o,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),q=async e=>{s.value=!0;const o=r.filter(a=>a.id!==e);u.value=u.value.filter(a=>a.carcelId!==e),v(),r.splice(0,r.length),o.map(a=>r.push(a)),await t.sleep(50),s.value=!1},L=e=>e?Math.round(e*100)/100:0,v=()=>{let e=u.value.reduce((o,a)=>o+a.pointCarcel,0);e=e/u.value.length,e=L(e),_.value=e.toString()},m=async(e,o,a)=>{var h,y;try{let l=((h=t==null?void 0:t.penitenciaria)==null?void 0:h.id)??null,g=((y=t==null?void 0:t.penitenciaria)==null?void 0:y.description)??null,b=t.historyId;if(a&&(l=e,g=o),b&&l){s.value=!0;let N=await X({historyId:b,carcelId:l,categoryId:d,subCategoryId:10});const x=[];let C=0,S=N.filter(i=>i.poundUsed===1);S.map(i=>{const V=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;C+=V,x.push(V)}),u.value.push({carcelId:l,pointCarcel:C/S.length}),v(),r.push(k(l,g,x))}}catch(l){console.log(l)}finally{a||(s.value=!1)}},M=async()=>{s.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await m(e.id,e.description,!0))),s.value=!1};return(e,o)=>(P(),w(T,null,{default:A(()=>[p(j,{title:f.value,"section-value":d},null,8,["title"]),p(B,{"active-spin":s.value},null,8,["active-spin"]),p(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:m,onExecuteRemove:q}),c("div",U,[p(Y,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:_.value,pointTitle:"Confianza y valoración",pointSubtitle:"Frecuencia respuestas Confianza y valoración"},null,8,["title","pointValue"]),c("div",G,[c("div",J,[s.value?E("",!0):(P(),w(W,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:I.value,plotOptions:$.value,tooltip:D.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(R,{class:"card-preguntas"},{default:A(()=>[K,Q,Z,ee]),_:1})])])]),_:1}))}};export{pe as default};