import{u as O,g as i,r as V,o as w,f as z,j as D,_ as B,m as u,n as E,b as n,a as N,k as X}from"./index-c2d187e3.js";import{_ as Y}from"./subSideNav-76e0575c.js";import{_ as j}from"./CHeaderBar-323690f8.js";import{_ as H}from"./CFilterbar-180aa3df.js";import{_ as R}from"./CCard-f8878b2c.js";import{_ as W}from"./CColunmChart-9882a148.js";import"./CChartDonutSection-446e2aab.js";import"./CButton-e0bb9649.js";const U={class:"chart-section-principal"},G={class:"confianzaValoracion"},J={class:"chart-section"},K=n("span",{class:"card-title"},"Preguntas",-1),Q=n("span",{class:"question--value"},"fp2 Confío en los oficiales que dirigen esta prisión",-1),Z=n("span",{class:"question--value"},"fp6 Los oficiales son accesibles cuando necesito discutir un problema con ellos",-1),ee=n("span",{class:"question--value"},"fp7 Me siento valorado por mi jefatura",-1),p=2,pe={__name:"confianzaValoracion",setup(te){const e=O(),a=i(!1),d=i("Calidad de vida de los funcionarios / Confianza y valoración"),f=i(""),_=i(0),F=i({categories:["fp2","fp6","fp7"],crosshair:!1}),P=i({min:0,allowDecimals:!1,title:{text:""}}),$=i({column:{pointPadding:.2,borderWidth:3}}),A=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=V([]),I=(t,c,o)=>V({id:t,name:c,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async t=>{a.value=!0;const c=l.filter(o=>o.id!==t);l.splice(0,l.length),c.map(o=>l.push(o)),await e.sleep(50),a.value=!1},T=t=>t?Math.round(t*100)/100:0,m=async(t,c,o)=>{var v,h;try{let r=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,y=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,g=e.historyId;if(o&&(r=t,y=c),g&&r){a.value=!0;let L=await X({historyId:g,carcelId:r,categoryId:p,subCategoryId:10});const b=[];let x=0,S=L.filter(s=>s.poundUsed===1);S.map(s=>{const C=s!=null&&s.promPound?Math.round((s==null?void 0:s.promPound)*100)/100:0;x+=C,b.push(C)}),_.value+=x/S.length;let M=T(_.value/e.carcelesSelected.length);f.value=M.toString(),l.push(I(r,y,b))}}catch(r){console.log(r)}finally{o||(a.value=!1)}},q=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),a.value=!1};return(t,c)=>(w(),z(B,null,{default:D(()=>[u(j,{title:d.value,"section-value":p},null,8,["title"]),u(E,{"active-spin":a.value},null,8,["active-spin"]),u(H,{baseFilter:p,multipleDisabled:!1,onExecuteMount:q,onExecuteAction:m,onExecuteRemove:k}),n("div",U,[u(Y,{class:"subsection-funcionarios",title:d.value,"section-value":p,pointValue:f.value,pointTitle:"Confianza y valoración",pointSubtitle:"Frecuencia respuestas Confianza y valoración"},null,8,["title","pointValue"]),n("div",G,[n("div",J,[a.value?N("",!0):(w(),z(W,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:P.value,plotOptions:$.value,tooltip:A.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(R,{class:"card-preguntas"},{default:D(()=>[K,Q,Z,ee]),_:1})])])]),_:1}))}};export{pe as default};
