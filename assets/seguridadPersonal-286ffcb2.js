import{u as B,g as l,r as w,o as C,f as D,j as F,_ as L,m as u,n as N,b as i,a as X,k as Y}from"./index-77660dd1.js";import{_ as z}from"./subSideNav-4b706314.js";import{_ as H}from"./CHeaderBar-420a9954.js";import{_ as R}from"./CFilterbar-697d0ee8.js";import{_ as W}from"./CCard-f0f378fd.js";import{_ as U}from"./CColunmChart-2227accc.js";import"./CChartDonutSection-366c452d.js";import"./CButton-f7aa2ad4.js";const G={class:"chart-section-principal"},J={class:"seguridad-personal"},K={class:"chart-section"},Q=i("span",{class:"card-title"},"Preguntas",-1),Z=i("span",{class:"question--value"},"fp21 Temo por mi seguridad al trabajar aquí",-1),ee=i("span",{class:"question--value"},"fp22 El ambiente en general de esta cárcel es tenso",-1),te=i("span",{class:"question--value"},"fp23 Me siento seguro al terminar mi turno de trabajo y salir de la cárcel (me siento seguro/a en la calle)",-1),p=2,pe={__name:"seguridadPersonal",setup(ae){const e=B(),a=l(!1),d=l("Calidad de vida de los funcionarios / Seguridad personal"),f=l(""),_=l(0),V=l({categories:["fp21","fp22","fp23"],crosshair:!1}),$=l({min:0,allowDecimals:!1,title:{text:""}}),A=l({column:{pointPadding:.2,borderWidth:3}}),I=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=w([]),T=(t,r,s)=>w({id:t,name:r,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),k=async t=>{a.value=!0;const r=n.filter(s=>s.id!==t);n.splice(0,n.length),r.map(s=>n.push(s)),await e.sleep(50),a.value=!1},q=t=>t?Math.round(t*100)/100:0,m=async(t,r,s)=>{var v,h;try{let c=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.id)??null,g=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null,y=e.historyId;if(s&&(c=t,g=r),y&&c){a.value=!0;const M={historyId:y,carcelId:c,categoryId:p,subCategoryId:15};let b=0,O=await Y(M);const x=[];let S=O.filter(o=>o.poundUsed===1);S.map(o=>{const P=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;b+=P,x.push(P)}),_.value+=b/S.length;let j=q(_.value/e.carcelesSelected.length);f.value=j.toString(),n.push(T(c,g,x))}}catch(c){console.log(c)}finally{s||(a.value=!1)}},E=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await m(t.id,t.description,!0))),a.value=!1};return(t,r)=>(C(),D(L,null,{default:F(()=>[u(H,{title:d.value,"section-value":p},null,8,["title"]),u(N,{"active-spin":a.value},null,8,["active-spin"]),u(R,{baseFilter:p,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:m,onExecuteRemove:k}),i("div",G,[u(z,{class:"subsection-funcionarios",title:d.value,"section-value":p,pointValue:f.value,pointTitle:"Seguridad personal",pointSubtitle:"Frecuencia respuestas respecto a la seguridad personal"},null,8,["title","pointValue"]),i("div",J,[i("div",K,[a.value?X("",!0):(C(),D(U,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:$.value,plotOptions:A.value,tooltip:I.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(W,{class:"card-preguntas"},{default:F(()=>[Q,Z,ee,te]),_:1})])])]),_:1}))}};export{pe as default};
