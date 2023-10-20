import{u as B,i,r as w,o as F,f as C,g as d,_ as N,m as u,p as X,b as a,a as Y,l as z}from"./index-06150a1e.js";import{_ as H}from"./subSideNav-185ddc6f.js";import{_ as U}from"./CHeaderBar-04ce4dcb.js";import{_ as W}from"./CFilterbar-ee629c8b.js";import{_ as D}from"./CCard-3d518836.js";import{_ as j}from"./CColunmChart-d6725177.js";import"./CButton-2b9dd805.js";const G={class:"chart-section-principal"},J={class:"apoyo-reinsercion"},K={class:"chart-section"},Q=a("span",{class:"card-title"},"Frecuencia respuestas Apoyo a la reinserción",-1),Z=a("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),ee=a("span",{class:"card-title"},"Preguntas",-1),te=a("span",{class:"question--value"},"fp30 Siento que mi trabajo contribuye a la reinserción",-1),ae=a("span",{class:"question--value"},"fp33 Me siento respetado por los internos/as de esta cárcel",-1),se=a("span",{class:"question--value"},"fp34 Tengo una buena relación con los internos/as en esta prisión",-1),oe=a("span",{class:"question--value"},"fp35 Los internos acuden a mí con sus problemas porque saben que los trataré de ayudar",-1),p=2,fe={__name:"apoyoReinsercion",setup(ne){const e=B(),s=i(!1),f=i("Calidad de vida de los funcionarios / Apoyo a la reinserción"),_=i(""),m=i(0),P=i({categories:["fp30","fp33","fp34","fp35"],crosshair:!1}),V=i({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),$=i({column:{pointPadding:.2,borderWidth:3}}),I=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=w([]),T=(t,c,o)=>w({id:t,name:c,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),L=async t=>{s.value=!0;const c=l.filter(o=>o.id!==t);l.splice(0,l.length),c.map(o=>l.push(o)),await e.sleep(50),s.value=!1},k=t=>t?Math.round(t*100)/100:0,v=async(t,c,o)=>{var h,y;try{let r=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.id)??null,g=((y=e==null?void 0:e.penitenciaria)==null?void 0:y.description)??null,b=e.historyId;if(o&&(r=t,g=c),b&&r){s.value=!0;const M={historyId:b,carcelId:r,categoryId:p,subCategoryId:17};let x=0,O=await z(M);const S=[];let A=O.filter(n=>n.poundUsed===1);A.map(n=>{const q=n!=null&&n.promPound?Math.round((n==null?void 0:n.promPound)*100)/100:0;x+=q,S.push(q)}),m.value+=x/A.length;let R=k(m.value/e.carcelesSelected.length);_.value=R.toString(),l.push(T(r,g,S))}}catch(r){console.log(r)}finally{o||(s.value=!1)}},E=async()=>{s.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await v(t.id,t.description,!0))),s.value=!1};return(t,c)=>(F(),C(N,null,{default:d(()=>[u(U,{title:f.value,"section-value":p},null,8,["title"]),u(X,{"active-spin":s.value},null,8,["active-spin"]),u(W,{baseFilter:p,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:v,onExecuteRemove:L}),a("div",G,[u(H,{class:"subsection-funcionarios",title:f.value,"section-value":p,pointValue:_.value,pointTitle:"Apoyo a la reinserción",pointSubtitle:"Frecuencia respuestas Apoyo a la reinserción"},null,8,["title","pointValue"]),a("div",J,[a("div",K,[u(D,{class:"card-information"},{default:d(()=>[Q,Z]),_:1}),s.value?Y("",!0):(F(),C(j,{key:0,chartType:"bar",optionsAxisX:P.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:I.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(D,{class:"card-preguntas"},{default:d(()=>[ee,te,ae,se,oe]),_:1})])])]),_:1}))}};export{fe as default};
