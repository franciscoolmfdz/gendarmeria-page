import{u as T,g as l,r as F,o as w,f as A,j as I,_ as B,m as d,n as H,b as t,a as N,k as X}from"./index-c8938612.js";import{_ as Y}from"./subSideNav-83b573e9.js";import{_ as j}from"./CHeaderBar-52290071.js";import{_ as z}from"./CFilterbar-6e8993b2.js";import{_ as R}from"./CCard-96aa4865.js";import{_ as W}from"./CColunmChart-d78b7003.js";import"./CChartDonutSection-e94e3819.js";import"./CButton-1d70cd49.js";const U={class:"chart-section-principal"},G={class:"funcionamiento-carcel"},J={class:"chart-section"},K=t("span",{class:"card-title"},"Preguntas",-1),Q=t("span",{class:"question--value"},"7.1 Mi vida en esta cárcel es aburrida ",-1),Z=t("span",{class:"question--value"},"7.2 En esta cárcel he sufrido mucho ",-1),ee=t("span",{class:"question--value"},"7.3 En este lugar he pensado en el suicidio ",-1),te=t("span",{class:"question--value"},"7.4 Hay mucho consumo de drogas en esta cárcel ",-1),ae=t("span",{class:"question--value"},"7.5 Acá te mandan al castigo por cualquier cosa ",-1),se=t("span",{class:"question--value"},"7.6 Siento que esta cárcel funciona bien ",-1),oe=t("span",{class:"question--value"},"7.7 El ambiente de esta cárcel es es tenso ",-1),ne=t("span",{class:"question--value"},"7.8 En esta cárcel las cosas se mueven con plata ",-1),le=t("span",{class:"question--value"},"7.9 Los gendarmes son justos en su trato con nosotros aquí ",-1),ie=t("span",{class:"question--value"},"7.10 Aquí tratan bien a las visitas ",-1),p=1,ge={__name:"FuncionamientoCarcel",setup(ce){const s=T(),o=l(!1),_=l("Calidad de vida de los internos / Funcionamiento de la carcel"),m=l(""),r=l([]),P=l({categories:["7.1","7.2","7.3","7.4","7.5","7.6","7.7","7.8","7.9","7.10"],crosshair:!1}),D=l({min:1,allowDecimals:!1,max:5,title:{text:""}}),E=l({column:{pointPadding:.2,borderWidth:3}}),V=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),$=(e,n,a)=>F({id:e,name:n,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async e=>{o.value=!0;const n=c.filter(a=>a.id!==e);c.splice(0,c.length),r.value=r.value.filter(a=>a.carcelId!==e),f(),n.map(a=>c.push(a)),await s.sleep(50),o.value=!1},L=e=>e?Math.round(e*100)/100:0,f=()=>{let e=r.value.reduce((n,a)=>n+a.pointCarcel,0);e=e/r.value.length,e=L(e),m.value=e.toString()},v=async(e,n,a)=>{var h,g;try{let i=((h=s==null?void 0:s.penitenciaria)==null?void 0:h.id)??null,y=((g=s==null?void 0:s.penitenciaria)==null?void 0:g.description)??null,b=s.historyId;if(a&&(i=e,y=n),b&&i){o.value=!0;let O=await X({historyId:b,carcelId:i,categoryId:1,subCategoryId:7});const x=[];let q=0,S=O.filter(u=>u.poundUsed===1);S.map(u=>{const C=Math.round((u==null?void 0:u.valuePound)*100)/100;q+=C,x.push(C)}),r.value.push({carcelId:i,pointCarcel:q/S.length}),f(),c.push($(i,y,x))}}catch(i){console.log(i)}finally{a||(o.value=!1)}},M=async()=>{o.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),o.value=!1};return(e,n)=>(w(),A(B,null,{default:I(()=>[d(j,{title:_.value,"section-value":p},null,8,["title"]),d(H,{"active-spin":o.value},null,8,["active-spin"]),d(z,{baseFilter:p,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:v,onExecuteRemove:k}),t("div",U,[d(Y,{title:_.value,"section-value":p,pointValue:m.value,pointTitle:"Funcionamiento de la carcel",pointSubtitle:"Promedio respuestas funcionamiento de la carcel"},null,8,["title","pointValue"]),t("div",G,[t("div",J,[o.value?N("",!0):(w(),A(W,{key:0,chartType:"bar",optionsAxisX:P.value,optionsAxisY:D.value,plotOptions:E.value,tooltip:V.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(R,{class:"card-preguntas"},{default:I(()=>[K,Q,Z,ee,te,ae,se,oe,ne,le,ie]),_:1})])])]),_:1}))}};export{ge as default};
