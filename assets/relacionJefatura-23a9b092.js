import{u as M,g as i,r as P,o as w,f as A,j as F,_ as N,m as p,n as O,b as l,a as B,k as R}from"./index-45ccebc1.js";import{_ as X}from"./subSideNav-b0532d57.js";import{_ as Y}from"./CHeaderBar-26ed6fbc.js";import{_ as z}from"./CFilterbar-8a96129f.js";import{_ as H}from"./CCard-67b7bef7.js";import{_ as J}from"./CColunmChart-aef5517e.js";import"./CChartDonutSection-a9b194f7.js";import"./CButton-a3569a76.js";const W={class:"chart-section-principal"},U={class:"relacion-jefatura"},G={class:"chart-section"},K=l("span",{class:"card-title"},"Preguntas",-1),Q=l("span",{class:"question--value"},"fp1 La comunicación entre el personal y los oficiales que dirigen esta cárcel es buena",-1),Z=l("span",{class:"question--value"},"fp3 El ánimo (la moral) del personal es buena en esta cárcel",-1),ee=l("span",{class:"question--value"},"fp4 Tengo una buena relación con los oficiales jefe (alcaide, jefe operativo, jefe internos, etc.) aquí",-1),ae=l("span",{class:"question--value"},"fp5 Me siento respetado por los oficiales de esta prisión.",-1),d=2,de={__name:"relacionJefatura",setup(te){const t=M(),s=i(!1),f=i("Calidad de vida de los funcionarios / Comunicación y relación con la jefatura"),_=i(""),u=i([]),I=i({categories:["fp1","fp3","fp4","fp5"],crosshair:!1}),V=i({type:"category",min:0,title:{text:""},left:"-10%",categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"],max:4}),$=i({column:{pointPadding:.2,borderWidth:3}}),q=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=P([]),D=(e,o,a)=>P({id:e,name:o,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async e=>{s.value=!0;const o=r.filter(a=>a.id!==e);u.value=u.value.filter(a=>a.carcelId!==e),m(),r.splice(0,r.length),o.map(a=>r.push(a)),await t.sleep(50),s.value=!1},T=e=>e?Math.round(e*100)/100:0,m=()=>{let e=u.value.reduce((o,a)=>o+a.pointCarcel,0);e=e/u.value.length,e=T(e),_.value=e.toString()},v=async(e,o,a)=>{var h,y;try{let c=((h=t==null?void 0:t.penitenciaria)==null?void 0:h.id)??null,g=((y=t==null?void 0:t.penitenciaria)==null?void 0:y.description)??null,b=t.historyId;if(a&&(c=e,g=o),b&&c){s.value=!0;let L=await R({historyId:b,carcelId:c,categoryId:d,subCategoryId:9});const x=[];let C=0,S=L.filter(n=>n.poundUsed===1);S.map(n=>{const j=n!=null&&n.valuePound?Math.round((n==null?void 0:n.valuePound)*100)/100:0;C+=j,x.push(j)}),u.value.push({carcelId:c,pointCarcel:C/S.length}),m(),r.push(D(c,g,x))}}catch(c){console.log(c)}finally{a||(s.value=!1)}},E=async()=>{s.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),s.value=!1};return(e,o)=>(w(),A(N,null,{default:F(()=>[p(Y,{title:f.value,"section-value":d},null,8,["title"]),p(O,{"active-spin":s.value},null,8,["active-spin"]),p(z,{baseFilter:d,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:v,onExecuteRemove:k}),l("div",W,[p(X,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:_.value,pointTitle:"Relación con jefatura",pointSubtitle:"Frecuencia respuestas comunicación y relación con la jefatura"},null,8,["title","pointValue"]),l("div",U,[l("div",G,[s.value?B("",!0):(w(),A(J,{key:0,chartType:"bar",optionsAxisX:I.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:q.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(H,{class:"card-preguntas"},{default:F(()=>[K,Q,Z,ee,ae]),_:1})])])]),_:1}))}};export{de as default};
