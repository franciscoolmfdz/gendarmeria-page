import{u as B,g as n,r as w,o as q,f as C,j as D,_ as E,m as p,n as N,b as i,a as X,k as Y}from"./index-21166dae.js";import{_ as j}from"./subSideNav-fa8710bf.js";import{_ as z}from"./CHeaderBar-25b66bad.js";import{_ as H}from"./CFilterbar-0fcf70e2.js";import{_ as W}from"./CCard-2679b4c0.js";import{_ as U}from"./CColunmChart-e1017be9.js";import"./CChartDonutSection-87e6722c.js";import"./CButton-02a38a2a.js";const G={class:"chart-section-principal"},J={class:"apoyo-reinsercion"},K={class:"chart-section"},Q=i("span",{class:"card-title"},"Preguntas",-1),Z=i("span",{class:"question--value"},"fp30 Siento que mi trabajo contribuye a la reinserción",-1),ee=i("span",{class:"question--value"},"fp33 Me siento respetado por los internos/as de esta cárcel",-1),te=i("span",{class:"question--value"},"fp34 Tengo una buena relación con los internos/as en esta prisión",-1),ae=i("span",{class:"question--value"},"fp35 Los internos acuden a mí con sus problemas porque saben que los trataré de ayudar",-1),u=2,de={__name:"apoyoReinsercion",setup(se){const e=B(),a=n(!1),d=n("Calidad de vida de los funcionarios / Apoyo a la reinserción"),f=n(""),_=n(0),F=n({categories:["fp30","fp33","fp34","fp35"],crosshair:!1}),P=n({min:0,allowDecimals:!1,title:{text:""}}),V=n({column:{pointPadding:.2,borderWidth:3}}),$=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=w([]),I=(t,r,s)=>w({id:t,name:r,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),T=async t=>{a.value=!0;const r=l.filter(s=>s.id!==t);l.splice(0,l.length),r.map(s=>l.push(s)),await e.sleep(50),a.value=!1},k=t=>t?Math.round(t*100)/100:0,m=async(t,r,s)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,y=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,g=e.historyId;if(s&&(c=t,y=r),g&&c){a.value=!0;const M={historyId:g,carcelId:c,categoryId:u,subCategoryId:17};let b=0,O=await Y(M);const x=[];let S=O.filter(o=>o.poundUsed===1);S.map(o=>{const A=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;b+=A,x.push(A)}),_.value+=b/S.length;let R=k(_.value/e.carcelesSelected.length);f.value=R.toString(),l.push(I(c,y,x))}}catch(c){console.log(c)}finally{s||(a.value=!1)}},L=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),a.value=!1};return(t,r)=>(q(),C(E,null,{default:D(()=>[p(z,{title:d.value,"section-value":u},null,8,["title"]),p(N,{"active-spin":a.value},null,8,["active-spin"]),p(H,{baseFilter:u,multipleDisabled:!1,onExecuteMount:L,onExecuteAction:m,onExecuteRemove:T}),i("div",G,[p(j,{class:"subsection-funcionarios",title:d.value,"section-value":u,pointValue:f.value,pointTitle:"Apoyo a la reinserción",pointSubtitle:"Frecuencia respuestas Apoyo a la reinserción"},null,8,["title","pointValue"]),i("div",J,[i("div",K,[a.value?X("",!0):(q(),C(U,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:P.value,plotOptions:V.value,tooltip:$.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(W,{class:"card-preguntas"},{default:D(()=>[Q,Z,ee,te,ae]),_:1})])])]),_:1}))}};export{de as default};
