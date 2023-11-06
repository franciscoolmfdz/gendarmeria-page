import{u as O,g as l,r as F,o as I,f as P,j as T,_ as B,m as p,n as H,b as t,a as L,k as X}from"./index-45ccebc1.js";import{_ as Y}from"./subSideNav-b0532d57.js";import{_ as z}from"./CHeaderBar-26ed6fbc.js";import{_ as R}from"./CFilterbar-8a96129f.js";import{_ as W}from"./CCard-67b7bef7.js";import{_ as j}from"./CColunmChart-aef5517e.js";import"./CChartDonutSection-a9b194f7.js";import"./CButton-a3569a76.js";const U={class:"chart-section-principal"},G={class:"trato-funcionarios"},J={class:"chart-section"},K=t("span",{class:"card-title"},"Preguntas",-1),Q=t("span",{class:"question--value"},"5.1 Soy tratado con respeto por los funcionarios",-1),Z=t("span",{class:"question--value"},"5.2 He recibido tratos humillantes en esta cárcel",-1),ee=t("span",{class:"question--value"},"5.3 Soy tratado como un ser humano en esta cárcel",-1),te=t("span",{class:"question--value"},"5.4 En esta cárcel se abusa de los internos más débiles",-1),se=t("span",{class:"question--value"},"5.5 Me llevo bien con los gendarmes de mi módulo",-1),oe=t("span",{class:"question--value"},"5.6 Siento que los funcionarios confían en mí",-1),ae=t("span",{class:"question--value"},"5.7 En esta cárcel los funcionarios son honestos",-1),ne=t("span",{class:"question--value"},"5.8 En esta cárcel recibo apoyo del personal cuando lo necesito",-1),ie=t("span",{class:"question--value"},"5.9 En esta cárcel los gendarmes se preocupan por mí",-1),d=1,he={__name:"TratoFuncionarios",setup(le){const o=O(),a=l(!1),_=l("Calidad de vida de los internos / Trato interpersonal Funcionario-Interno"),f=l(""),u=l([]),w=l({categories:["5.1","5.2","5.3","5.4","5.5","5.6","5.7"],crosshair:!1}),A=l({type:"category",min:0,title:{text:""},left:"-10%",categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"],max:4}),E=l({column:{pointPadding:.2,borderWidth:3}}),V=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=F([]),$=(e,n,s)=>F({id:e,name:n,data:s,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),D=async e=>{a.value=!0;const n=r.filter(s=>s.id!==e);r.splice(0,r.length),u.value=u.value.filter(s=>s.carcelId!==e),m(),n.map(s=>r.push(s)),await o.sleep(50),a.value=!1},k=e=>e?Math.round(e*100)/100:0,m=()=>{let e=u.value.reduce((n,s)=>n+s.pointCarcel,0);e=e/u.value.length,e=k(e),f.value=e.toString()},v=async(e,n,s)=>{var h,y;try{let c=((h=o==null?void 0:o.penitenciaria)==null?void 0:h.id)??null,g=((y=o==null?void 0:o.penitenciaria)==null?void 0:y.description)??null,b=o.historyId;if(s&&(c=e,g=n),b&&c){a.value=!0;let N=await X({historyId:b,carcelId:c,categoryId:1,subCategoryId:5});const x=[];let S=0,C=N.filter(i=>i.poundUsed===1);C.map(i=>{const q=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;S+=q,x.push(q)}),u.value.push({carcelId:c,pointCarcel:S/C.length}),m(),r.push($(c,g,x))}}catch(c){console.log(c)}finally{s||(a.value=!1)}},M=async()=>{a.value=!0,o.carcelesSelected&&o.carcelesSelected.length>0&&await Promise.all(o.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),a.value=!1};return(e,n)=>(I(),P(B,null,{default:T(()=>[p(z,{title:_.value,"section-value":d},null,8,["title"]),p(H,{"active-spin":a.value},null,8,["active-spin"]),p(R,{baseFilter:d,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:v,onExecuteRemove:D}),t("div",U,[p(Y,{title:_.value,"section-value":d,pointValue:f.value,pointTitle:"Trato interpersonal Funcionario-Interno",pointSubtitle:"Promedio respuestas de trato con funcionarios"},null,8,["title","pointValue"]),t("div",G,[t("div",J,[a.value?L("",!0):(I(),P(j,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:A.value,plotOptions:E.value,tooltip:V.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(W,{class:"card-preguntas"},{default:T(()=>[K,Q,Z,ee,te,se,oe,ae,ne,ie]),_:1})])])]),_:1}))}};export{he as default};
