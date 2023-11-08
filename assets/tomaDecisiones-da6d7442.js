import{u as B,g as i,r as P,o as w,f as A,j as I,_ as E,m as u,n as M,b as r,a as X,k as Y}from"./index-cac83eb8.js";import{_ as j}from"./subSideNav-ad385c36.js";import{_ as z}from"./CHeaderBar-ece7db59.js";import{_ as H}from"./CFilterbar-620de0b0.js";import{_ as R}from"./CCard-1c4d6668.js";import{_ as W}from"./CColunmChart-6af6b32d.js";import"./CChartDonutSection-22723229.js";import"./CButton-d0e9333d.js";const U={class:"chart-section-principal"},G={class:"toma-decision"},J={class:"chart-section"},K=r("span",{class:"card-title"},"Preguntas",-1),Q=r("span",{class:"question--value"},"1. Cuando tengo que adoptar alguna decisión me siento presionado/a directa o indirectamente por los medios (fp42)",-1),Z=r("span",{class:"question--value"},"2. Al adoptar decisiones en mi trabajo me siento presionado/a por las repercusiones que dicha decisión puede tener en mi carrera (fp43)",-1),d=2,pe={__name:"tomaDecisiones",setup(ee){const a=B(),t=i(!1),m=i("Calidad de vida de los funcionarios / Presión para tomar decisiones"),f=i(""),p=i([]),V=i({categories:["1.","2."],crosshair:!1}),$=i({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),F=i({column:{pointPadding:.2,borderWidth:3}}),k=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=P([]),T=(e,n,s)=>P({id:e,name:n,data:s,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),q=async e=>{t.value=!0;const n=c.filter(s=>s.id!==e);p.value=p.value.filter(s=>s.carcelId!==e),_(),c.splice(0,c.length),n.map(s=>c.push(s)),await a.sleep(50),t.value=!1},L=e=>e?Math.round(e*100)/100:0,_=()=>{let e=p.value.reduce((n,s)=>n+s.pointCarcel,0);e=e/p.value.length,e=L(e),f.value=e.toString()},v=async(e,n,s)=>{var b,h;try{let l=((b=a==null?void 0:a.penitenciaria)==null?void 0:b.id)??null,y=((h=a==null?void 0:a.penitenciaria)==null?void 0:h.description)??null,g=a.historyId;if(s&&(l=e,y=n),g&&l){t.value=!0;let O=await Y({historyId:g,carcelId:l,categoryId:d,subCategoryId:20}),x=0;const C=[];let S=O.filter(o=>o.poundUsed===1);S.map(o=>{const D=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;x+=D,C.push(D)}),p.value.push({carcelId:l,pointCarcel:x/S.length}),_(),c.push(T(l,y,C))}}catch(l){console.log(l)}finally{s||(t.value=!1)}},N=async()=>{t.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),t.value=!1};return(e,n)=>(w(),A(E,null,{default:I(()=>[u(z,{title:m.value,"section-value":d},null,8,["title"]),u(M,{"active-spin":t.value},null,8,["active-spin"]),u(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:N,onExecuteAction:v,onExecuteRemove:q}),r("div",U,[u(j,{class:"subsection-funcionarios",title:m.value,"section-value":d,pointValue:f.value,pointTitle:"Toma de decisiones",pointSubtitle:"recuencia respuestas presión para tomar decisiones"},null,8,["title","pointValue"]),r("div",G,[r("div",J,[t.value?X("",!0):(w(),A(W,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:$.value,plotOptions:F.value,tooltip:k.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(R,{class:"card-preguntas"},{default:I(()=>[K,Q,Z]),_:1})])])]),_:1}))}};export{pe as default};
