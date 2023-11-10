import{u as N,g as i,r as q,o as w,f as M,j as P,_ as O,m as u,n as B,b as c,a as E,k as X}from"./index-35ecef89.js";import{_ as Y}from"./subSideNav-b6909395.js";import{_ as z}from"./CHeaderBar-260743b4.js";import{_ as H}from"./CFilterbar-7bf20fc4.js";import{_ as R}from"./CCard-ce4af8dd.js";import{_ as W}from"./CColunmChart-2a7c08b8.js";import"./CChartDonutSection-1f0f6d69.js";import"./CButton-4a84bbc1.js";const U={class:"chart-section-principal"},G={class:"motivacion-trabajo"},J={class:"chart-section"},K=c("span",{class:"card-title"},"Preguntas",-1),Q=c("span",{class:"question--value"},"1. Me gusta venir a trabajar aquí (fp14) ",-1),Z=c("span",{class:"question--value"},"2. Me siento orgulloso del trabajo que hago aquí (fp15) ",-1),ee=c("span",{class:"question--value"},"3. Siento que mi trabajo aquí tiene un sentido (fp16) ",-1),d=2,ue={__name:"motivacionTrabajo",setup(ae){const t=N(),s=i(!1),f=i("Calidad de vida de los funcionarios / Motivación y significado del trabajo"),v=i(""),p=i([]),A=i({categories:["1.","2.","3."],crosshair:!1}),D=i({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),F=i({column:{pointPadding:.2,borderWidth:3}}),I=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=q([]),V=(e,n,a)=>q({id:e,name:n,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),$=async e=>{s.value=!0;const n=r.filter(a=>a.id!==e);p.value=p.value.filter(a=>a.carcelId!==e),_(),r.splice(0,r.length),n.map(a=>r.push(a)),await t.sleep(50),s.value=!1},T=e=>e?Math.round(e*100)/100:0,_=()=>{let e=p.value.reduce((n,a)=>n+a.pointCarcel,0);e=e/p.value.length,e=T(e),v.value=e.toString()},m=async(e,n,a)=>{var b,h;try{let l=((b=t==null?void 0:t.penitenciaria)==null?void 0:b.id)??null,y=((h=t==null?void 0:t.penitenciaria)==null?void 0:h.description)??null,g=t.historyId;if(a&&(l=e,y=n),g&&l){s.value=!0;let L=await X({historyId:g,carcelId:l,categoryId:d,subCategoryId:13});const x=[];let S=0,C=L.filter(o=>o.poundUsed===1);C.map(o=>{const j=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;S+=j,x.push(j)}),p.value.push({carcelId:l,pointCarcel:S/C.length}),_(),r.push(V(l,y,x))}}catch(l){console.log(l)}finally{a||(s.value=!1)}},k=async()=>{s.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await m(e.id,e.description,!0))),s.value=!1};return(e,n)=>(w(),M(O,null,{default:P(()=>[u(z,{title:f.value,"section-value":d},null,8,["title"]),u(B,{"active-spin":s.value},null,8,["active-spin"]),u(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:m,onExecuteRemove:$}),c("div",U,[u(Y,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:v.value,pointTitle:"Motivación y significado del trabajo",pointSubtitle:"Frecuencia respuestas Motivación y significado del trabajo"},null,8,["title","pointValue"]),c("div",G,[c("div",J,[s.value?E("",!0):(w(),M(W,{key:0,chartType:"bar",optionsAxisX:A.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:I.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(R,{class:"card-preguntas"},{default:P(()=>[K,Q,Z,ee]),_:1})])])]),_:1}))}};export{ue as default};
