import{u as q,g as n,r as w,o as D,f as F,j as P,_ as B,m as p,n as L,b as i,a as N,k as X}from"./index-58934414.js";import{_ as Y}from"./subSideNav-039fa2ee.js";import{_ as z}from"./CHeaderBar-54785921.js";import{_ as H}from"./CFilterbar-ef9ca298.js";import{_ as W}from"./CCard-167a5880.js";import{_ as U}from"./CColunmChart-0b0cf76e.js";import"./CChartDonutSection-081addcb.js";import"./CButton-4e52f6ba.js";const G={class:"chart-section-principal"},J={class:"relacion-colegas"},K={class:"chart-section"},Q=i("span",{class:"card-title"},"Preguntas",-1),Z=i("span",{class:"question--value"},"fp17 Trabajando en esta cárcel me siento apoyado por mis compañeros ",-1),ee=i("span",{class:"question--value"},"fp18 Confío en mis colegas y ellos/as en mí en esta prisión",-1),te=i("span",{class:"question--value"},"fp19 Me siento respetado por los compañeros/as de esta prisión.",-1),u=2,ue={__name:"relacionCompaneros",setup(ae){const e=q(),a=n(!1),d=n("Calidad de vida de los funcionarios / Relación con compañeros/as de trabajo"),f=n(""),_=n(0),V=n({categories:["fp17","fp18","fp19"],crosshair:!1}),$=n({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),A=n({column:{pointPadding:.2,borderWidth:3}}),I=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=w([]),T=(t,c,s)=>w({id:t,name:c,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),j=async t=>{a.value=!0;const c=l.filter(s=>s.id!==t);l.splice(0,l.length),c.map(s=>l.push(s)),await e.sleep(50),a.value=!1},k=t=>t?Math.round(t*100)/100:0,m=async(t,c,s)=>{var v,h;try{let r=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,y=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,g=e.historyId;if(s&&(r=t,y=c),g&&r){a.value=!0;const E={historyId:g,carcelId:r,categoryId:u,subCategoryId:14};let b=0,M=await X(E);const x=[];let S=M.filter(o=>o.poundUsed===1);S.map(o=>{const C=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;b+=C,x.push(C)}),_.value+=b/S.length;let O=k(_.value/e.carcelesSelected.length);f.value=O.toString(),l.push(T(r,y,x))}}catch(r){console.log(r)}finally{s||(a.value=!1)}},R=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),a.value=!1};return(t,c)=>(D(),F(B,null,{default:P(()=>[p(z,{title:d.value,"section-value":u},null,8,["title"]),p(L,{"active-spin":a.value},null,8,["active-spin"]),p(H,{baseFilter:u,multipleDisabled:!1,onExecuteMount:R,onExecuteAction:m,onExecuteRemove:j}),i("div",G,[p(Y,{class:"subsection-funcionarios",title:d.value,"section-value":u,pointValue:f.value,pointTitle:"Relación con compañeros/as de trabajo",pointSubtitle:"Frecuencia respuestas Relación con compañeros/as de trabajo"},null,8,["title","pointValue"]),i("div",J,[i("div",K,[a.value?N("",!0):(D(),F(U,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:$.value,plotOptions:A.value,tooltip:I.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(W,{class:"card-preguntas"},{default:P(()=>[Q,Z,ee,te]),_:1})])])]),_:1}))}};export{ue as default};
