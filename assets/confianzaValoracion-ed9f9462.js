import{u as T,g as i,r as w,o as z,f as P,j as D,_ as B,m as p,n as E,b as c,a as N,k as X}from"./index-c8938612.js";import{_ as Y}from"./subSideNav-83b573e9.js";import{_ as j}from"./CHeaderBar-52290071.js";import{_ as H}from"./CFilterbar-6e8993b2.js";import{_ as R}from"./CCard-96aa4865.js";import{_ as W}from"./CColunmChart-d78b7003.js";import"./CChartDonutSection-e94e3819.js";import"./CButton-1d70cd49.js";const U={class:"chart-section-principal"},G={class:"confianzaValoracion"},J={class:"chart-section"},K=c("span",{class:"card-title"},"Preguntas",-1),Q=c("span",{class:"question--value"},"fp2 Confío en los oficiales que dirigen esta prisión",-1),Z=c("span",{class:"question--value"},"fp6 Los oficiales son accesibles cuando necesito discutir un problema con ellos",-1),ee=c("span",{class:"question--value"},"fp7 Me siento valorado por mi jefatura",-1),d=2,pe={__name:"confianzaValoracion",setup(ae){const t=T(),s=i(!1),f=i("Calidad de vida de los funcionarios / Confianza y valoración"),_=i(""),u=i([]),F=i({categories:["fp2","fp6","fp7"],crosshair:!1}),I=i({min:1,allowDecimals:!1,max:5,title:{text:""}}),$=i({column:{pointPadding:.2,borderWidth:3}}),A=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=w([]),k=(e,o,a)=>w({id:e,name:o,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),q=async e=>{s.value=!0;const o=r.filter(a=>a.id!==e);u.value=u.value.filter(a=>a.carcelId!==e),v(),r.splice(0,r.length),o.map(a=>r.push(a)),await t.sleep(50),s.value=!1},L=e=>e?Math.round(e*100)/100:0,v=()=>{let e=u.value.reduce((o,a)=>o+a.pointCarcel,0);e=e/u.value.length,e=L(e),_.value=e.toString()},m=async(e,o,a)=>{var h,y;try{let l=((h=t==null?void 0:t.penitenciaria)==null?void 0:h.id)??null,g=((y=t==null?void 0:t.penitenciaria)==null?void 0:y.description)??null,b=t.historyId;if(a&&(l=e,g=o),b&&l){s.value=!0;let O=await X({historyId:b,carcelId:l,categoryId:d,subCategoryId:10});const x=[];let C=0,S=O.filter(n=>n.poundUsed===1);S.map(n=>{const V=n!=null&&n.valuePound?Math.round((n==null?void 0:n.valuePound)*100)/100:0;C+=V,x.push(V)}),u.value.push({carcelId:l,pointCarcel:C/S.length}),v(),r.push(k(l,g,x))}}catch(l){console.log(l)}finally{a||(s.value=!1)}},M=async()=>{s.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await m(e.id,e.description,!0))),s.value=!1};return(e,o)=>(z(),P(B,null,{default:D(()=>[p(j,{title:f.value,"section-value":d},null,8,["title"]),p(E,{"active-spin":s.value},null,8,["active-spin"]),p(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:m,onExecuteRemove:q}),c("div",U,[p(Y,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:_.value,pointTitle:"Confianza y valoración",pointSubtitle:"Frecuencia respuestas Confianza y valoración"},null,8,["title","pointValue"]),c("div",G,[c("div",J,[s.value?N("",!0):(z(),P(W,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:I.value,plotOptions:$.value,tooltip:A.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(R,{class:"card-preguntas"},{default:D(()=>[K,Q,Z,ee]),_:1})])])]),_:1}))}};export{pe as default};
