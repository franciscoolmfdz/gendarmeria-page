import{u as j,g as i,r as P,o as w,f as A,j as D,_ as B,m as u,n as L,b as l,a as X,k as Y}from"./index-6cde2442.js";import{_ as z}from"./subSideNav-9827078f.js";import{_ as H}from"./CHeaderBar-2d6d0b63.js";import{_ as R}from"./CFilterbar-5d2801c4.js";import{_ as W}from"./CCard-126910ad.js";import{_ as U}from"./CColunmChart-4b73e99b.js";import"./CChartDonutSection-d0252771.js";import"./CButton-7e8ab65d.js";const G={class:"chart-section-principal"},J={class:"seguridad-personal"},K={class:"chart-section"},Q=l("span",{class:"card-title"},"Preguntas",-1),Z=l("span",{class:"question--value"},"fp21 Temo por mi seguridad al trabajar aquí",-1),ee=l("span",{class:"question--value"},"fp22 El ambiente en general de esta cárcel es tenso",-1),te=l("span",{class:"question--value"},"fp23 Me siento seguro al terminar mi turno de trabajo y salir de la cárcel (me siento seguro/a en la calle)",-1),p=2,pe={__name:"seguridadPersonal",setup(ae){const e=j(),a=i(!1),d=i("Calidad de vida de los funcionarios / Seguridad personal"),f=i(""),_=i(0),F=i({categories:["fp21","fp22","fp23"],crosshair:!1}),V=i({min:0,allowDecimals:!1,title:{text:""},categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"]}),$=i({column:{pointPadding:.2,borderWidth:3}}),I=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=P([]),T=(t,r,s)=>P({id:t,name:r,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async t=>{a.value=!0;const r=n.filter(s=>s.id!==t);n.splice(0,n.length),r.map(s=>n.push(s)),await e.sleep(50),a.value=!1},q=t=>t?Math.round(t*100)/100:0,m=async(t,r,s)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,g=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,y=e.historyId;if(s&&(c=t,g=r),y&&c){a.value=!0;const M={historyId:y,carcelId:c,categoryId:p,subCategoryId:15};let b=0,N=await Y(M);const x=[];let S=N.filter(o=>o.poundUsed===1);S.map(o=>{const C=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;b+=C,x.push(C)}),_.value+=b/S.length;let O=q(_.value/e.carcelesSelected.length);f.value=O.toString(),n.push(T(c,g,x))}}catch(c){console.log(c)}finally{s||(a.value=!1)}},E=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),a.value=!1};return(t,r)=>(w(),A(B,null,{default:D(()=>[u(H,{title:d.value,"section-value":p},null,8,["title"]),u(L,{"active-spin":a.value},null,8,["active-spin"]),u(R,{baseFilter:p,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:m,onExecuteRemove:k}),l("div",G,[u(z,{class:"subsection-funcionarios",title:d.value,"section-value":p,pointValue:f.value,pointTitle:"Seguridad personal",pointSubtitle:"Frecuencia respuestas respecto a la seguridad personal"},null,8,["title","pointValue"]),l("div",J,[l("div",K,[a.value?X("",!0):(w(),A(U,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:V.value,plotOptions:$.value,tooltip:I.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(W,{class:"card-preguntas"},{default:D(()=>[Q,Z,ee,te]),_:1})])])]),_:1}))}};export{pe as default};
