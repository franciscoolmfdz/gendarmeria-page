import{u as O,g as i,r as F,o as A,f as I,j as P,_ as T,m as d,n as B,b as t,a as H,k as X}from"./index-45ccebc1.js";import{_ as Y}from"./subSideNav-b0532d57.js";import{_ as j}from"./CHeaderBar-26ed6fbc.js";import{_ as z}from"./CFilterbar-8a96129f.js";import{_ as R}from"./CCard-67b7bef7.js";import{_ as W}from"./CColunmChart-aef5517e.js";import"./CChartDonutSection-a9b194f7.js";import"./CButton-a3569a76.js";const U={class:"chart-section-principal"},G={class:"funcionamiento-carcel"},J={class:"chart-section"},K=t("span",{class:"card-title"},"Preguntas",-1),Q=t("span",{class:"question--value"},"7.1 Mi vida en esta cárcel es aburrida ",-1),Z=t("span",{class:"question--value"},"7.2 En esta cárcel he sufrido mucho ",-1),ee=t("span",{class:"question--value"},"7.3 En este lugar he pensado en el suicidio ",-1),te=t("span",{class:"question--value"},"7.4 Hay mucho consumo de drogas en esta cárcel ",-1),ae=t("span",{class:"question--value"},"7.5 Acá te mandan al castigo por cualquier cosa ",-1),se=t("span",{class:"question--value"},"7.6 Siento que esta cárcel funciona bien ",-1),oe=t("span",{class:"question--value"},"7.7 El ambiente de esta cárcel es es tenso ",-1),ne=t("span",{class:"question--value"},"7.8 En esta cárcel las cosas se mueven con plata ",-1),ie=t("span",{class:"question--value"},"7.9 Los gendarmes son justos en su trato con nosotros aquí ",-1),le=t("span",{class:"question--value"},"7.10 Aquí tratan bien a las visitas ",-1),p=1,ge={__name:"FuncionamientoCarcel",setup(ce){const s=O(),o=i(!1),_=i("Calidad de vida de los internos / Funcionamiento de la carcel"),m=i(""),r=i([]),w=i({categories:["7.1","7.2","7.3","7.4","7.5","7.6","7.7","7.8","7.9","7.10"],crosshair:!1}),E=i({type:"category",min:0,title:{text:""},left:"-10%",categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"],max:4}),V=i({column:{pointPadding:.2,borderWidth:3}}),$=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),D=(e,n,a)=>F({id:e,name:n,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async e=>{o.value=!0;const n=c.filter(a=>a.id!==e);c.splice(0,c.length),r.value=r.value.filter(a=>a.carcelId!==e),f(),n.map(a=>c.push(a)),await s.sleep(50),o.value=!1},L=e=>e?Math.round(e*100)/100:0,f=()=>{let e=r.value.reduce((n,a)=>n+a.pointCarcel,0);e=e/r.value.length,e=L(e),m.value=e.toString()},v=async(e,n,a)=>{var h,g;try{let l=((h=s==null?void 0:s.penitenciaria)==null?void 0:h.id)??null,y=((g=s==null?void 0:s.penitenciaria)==null?void 0:g.description)??null,b=s.historyId;if(a&&(l=e,y=n),b&&l){o.value=!0;let N=await X({historyId:b,carcelId:l,categoryId:1,subCategoryId:7});const x=[];let q=0,C=N.filter(u=>u.poundUsed===1);C.map(u=>{const S=Math.round((u==null?void 0:u.valuePound)*100)/100;q+=S,x.push(S)}),r.value.push({carcelId:l,pointCarcel:q/C.length}),f(),c.push(D(l,y,x))}}catch(l){console.log(l)}finally{a||(o.value=!1)}},M=async()=>{o.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),o.value=!1};return(e,n)=>(A(),I(T,null,{default:P(()=>[d(j,{title:_.value,"section-value":p},null,8,["title"]),d(B,{"active-spin":o.value},null,8,["active-spin"]),d(z,{baseFilter:p,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:v,onExecuteRemove:k}),t("div",U,[d(Y,{title:_.value,"section-value":p,pointValue:m.value,pointTitle:"Funcionamiento de la carcel",pointSubtitle:"Promedio respuestas funcionamiento de la carcel"},null,8,["title","pointValue"]),t("div",G,[t("div",J,[o.value?H("",!0):(A(),I(W,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:E.value,plotOptions:V.value,tooltip:$.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(R,{class:"card-preguntas"},{default:P(()=>[K,Q,Z,ee,te,ae,se,oe,ne,ie,le]),_:1})])])]),_:1}))}};export{ge as default};
