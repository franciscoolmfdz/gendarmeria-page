import{u as z,g as i,r as C,o as E,f as I,j as T,_ as B,m as u,n as L,b as s,a as M,k as X}from"./index-6cde2442.js";import{_ as Y}from"./subSideNav-9827078f.js";import{_ as H}from"./CHeaderBar-2d6d0b63.js";import{_ as R}from"./CFilterbar-5d2801c4.js";import{_ as W}from"./CCard-126910ad.js";import{_ as j}from"./CColunmChart-4b73e99b.js";import"./CChartDonutSection-d0252771.js";import"./CButton-7e8ab65d.js";const U={class:"chart-section-principal"},G={class:"trato-internos"},J={class:"chart-section"},K=s("span",{class:"card-title"},"Preguntas",-1),Q=s("span",{class:"question--value"},"4.1 En esta cárcel me llevo bien con otros internos",-1),Z=s("span",{class:"question--value"},"4.2 En esta cárcel me siento inseguro o amenazado",-1),ee=s("span",{class:"question--value"},"4.3 Siento que soy tratado con respeto por otros internos",-1),te=s("span",{class:"question--value"},"4.4 En esta cárcel se abusa de los internos más débiles",-1),se=s("span",{class:"question--value"},"4.5 En esta cárcel me siento seguro de agresiones de otros internos",-1),oe=s("span",{class:"question--value"},"4.6 En esta cárcel tengo amigos que me ayudan",-1),ae=s("span",{class:"question--value"},"4.7 En esta cárcel temo por mi integridad física ",-1),d=1,fe={__name:"TratoInternos",setup(ne){const e=z(),o=i(!1),p=i("Calidad de vida de los internos / Trato con otros internos"),_=i(""),m=i(0),w=i({categories:["4.1","4.2","4.3","4.4","4.5","4.6","4.7"],crosshair:!1}),P=i({min:0,allowDecimals:!1,title:{text:""},categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"]}),A=i({column:{pointPadding:.2,borderWidth:3}}),D=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=C([]),V=(t,r,a)=>C({id:t,name:r,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async t=>{o.value=!0;const r=l.filter(a=>a.id!==t);l.splice(0,l.length),r.map(a=>l.push(a)),await e.sleep(50),o.value=!1},F=t=>t?Math.round(t*100)/100:0,f=async(t,r,a)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,g=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,y=e.historyId;if(a&&(c=t,g=r),y&&c){o.value=!0;let N=await X({historyId:y,carcelId:c,categoryId:1,subCategoryId:4});const b=[];let x=0,S=N.filter(n=>n.poundUsed===1);S.map(n=>{const q=n!=null&&n.promPound?Math.round((n==null?void 0:n.promPound)*100)/100:0;x+=q,b.push(q)}),m.value+=x/S.length;let O=F(m.value/e.carcelesSelected.length);_.value=O.toString(),l.push(V(c,g,b))}}catch(c){console.log(c)}finally{a||(o.value=!1)}},k=async()=>{o.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await f(t.id,t.description,!0))),o.value=!1};return(t,r)=>(E(),I(B,null,{default:T(()=>[u(H,{title:p.value,"section-value":d},null,8,["title"]),u(L,{"active-spin":o.value},null,8,["active-spin"]),u(R,{baseFilter:d,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:f,onExecuteRemove:$}),s("div",U,[u(Y,{title:p.value,"section-value":d,pointValue:_.value,pointTitle:"Trato con otros internos",pointSubtitle:"Promedio respuestas sobre trato entre los internos"},null,8,["title","pointValue"]),s("div",G,[s("div",J,[o.value?M("",!0):(E(),I(j,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:P.value,plotOptions:A.value,tooltip:D.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(W,{class:"card-preguntas"},{default:T(()=>[K,Q,Z,ee,te,se,oe,ae]),_:1})])])]),_:1}))}};export{fe as default};
