import{u as O,g as l,r as F,o as w,f as A,j as I,_ as T,m as p,n as B,b as s,a as H,k as X}from"./index-cac83eb8.js";import{_ as Y}from"./subSideNav-ad385c36.js";import{_ as j}from"./CHeaderBar-ece7db59.js";import{_ as z}from"./CFilterbar-620de0b0.js";import{_ as R}from"./CCard-1c4d6668.js";import{_ as W}from"./CColunmChart-6af6b32d.js";import"./CChartDonutSection-22723229.js";import"./CButton-d0e9333d.js";const U={class:"chart-section-principal"},G={class:"funcionamiento-carcel"},J={class:"chart-section"},K=s("span",{class:"card-title"},"Preguntas",-1),Q=s("span",{class:"question--value"},"1. Mi vida en esta cárcel es aburrida (7.1)",-1),Z=s("span",{class:"question--value"},"2. En esta cárcel he sufrido mucho (7.2)",-1),ee=s("span",{class:"question--value"},"3. En este lugar he pensado en el suicidio (7.3)",-1),se=s("span",{class:"question--value"},"4. Hay mucho consumo de drogas en esta cárcel (7.4)",-1),ae=s("span",{class:"question--value"},"5. Acá te mandan al castigo por cualquier cosa (7.5)",-1),te=s("span",{class:"question--value"},"6. Siento que esta cárcel funciona bien (7.6)",-1),ne=s("span",{class:"question--value"},"7. El ambiente de esta cárcel es es tenso (7.7)",-1),oe=s("span",{class:"question--value"},"8. En esta cárcel las cosas se mueven con plata (7.8)",-1),le=s("span",{class:"question--value"},"9. Los gendarmes son justos en su trato con nosotros aquí (7.9)",-1),d=1,he={__name:"FuncionamientoCarcel",setup(ie){const t=O(),n=l(!1),m=l("Calidad de vida de los internos / Funcionamiento de la carcel"),_=l(""),r=l([]),P=l({categories:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10."],crosshair:!1}),D=l({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),E=l({column:{pointPadding:.2,borderWidth:3}}),V=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),$=(e,o,a)=>F({id:e,name:o,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async e=>{n.value=!0;const o=c.filter(a=>a.id!==e);c.splice(0,c.length),r.value=r.value.filter(a=>a.carcelId!==e),f(),o.map(a=>c.push(a)),await t.sleep(50),n.value=!1},L=e=>e?Math.round(e*100)/100:0,f=()=>{let e=r.value.reduce((o,a)=>o+a.pointCarcel,0);e=e/r.value.length,e=L(e),_.value=e.toString()},v=async(e,o,a)=>{var h,b;try{let i=((h=t==null?void 0:t.penitenciaria)==null?void 0:h.id)??null,y=((b=t==null?void 0:t.penitenciaria)==null?void 0:b.description)??null,g=t.historyId;if(a&&(i=e,y=o),g&&i){n.value=!0;let N=await X({historyId:g,carcelId:i,categoryId:1,subCategoryId:7});const x=[];let C=0,S=N.filter(u=>u.poundUsed===1);S.map(u=>{const q=Math.round((u==null?void 0:u.valuePound)*100)/100;C+=q,x.push(q)}),r.value.push({carcelId:i,pointCarcel:C/S.length}),f(),c.push($(i,y,x))}}catch(i){console.log(i)}finally{a||(n.value=!1)}},M=async()=>{n.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),n.value=!1};return(e,o)=>(w(),A(T,null,{default:I(()=>[p(j,{title:m.value,"section-value":d},null,8,["title"]),p(B,{"active-spin":n.value},null,8,["active-spin"]),p(z,{baseFilter:d,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:v,onExecuteRemove:k}),s("div",U,[p(Y,{title:m.value,"section-value":d,pointValue:_.value,pointTitle:"Funcionamiento de la carcel",pointSubtitle:"Promedio respuestas funcionamiento de la carcel"},null,8,["title","pointValue"]),s("div",G,[s("div",J,[n.value?H("",!0):(w(),A(W,{key:0,chartType:"bar",optionsAxisX:P.value,optionsAxisY:D.value,plotOptions:E.value,tooltip:V.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(R,{class:"card-preguntas"},{default:I(()=>[K,Q,Z,ee,se,ae,te,ne,oe,le]),_:1})])])]),_:1}))}};export{he as default};
