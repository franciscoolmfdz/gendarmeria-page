import{u as B,g as i,r as q,o as w,f as M,j as C,_ as E,m as u,n as L,b as n,a as N,k as X}from"./index-21166dae.js";import{_ as Y}from"./subSideNav-fa8710bf.js";import{_ as z}from"./CHeaderBar-25b66bad.js";import{_ as H}from"./CFilterbar-0fcf70e2.js";import{_ as R}from"./CCard-2679b4c0.js";import{_ as W}from"./CColunmChart-e1017be9.js";import"./CChartDonutSection-87e6722c.js";import"./CButton-02a38a2a.js";const U={class:"chart-section-principal"},G={class:"motivacion-trabajo"},J={class:"chart-section"},K=n("span",{class:"card-title"},"Preguntas",-1),Q=n("span",{class:"question--value"},"fp14 Me gusta venir a trabajar aquí",-1),Z=n("span",{class:"question--value"},"fp15 Me siento orgulloso del trabajo que hago aquí",-1),tt=n("span",{class:"question--value"},"fp16 Siento que mi trabajo aquí tiene un sentido",-1),p=2,pt={__name:"motivacionTrabajo",setup(et){const t=B(),a=i(!1),d=i("Calidad de vida de los funcionarios / Motivación y significado del trabajo"),f=i(""),_=i(0),D=i({categories:["fp14","fp15","fp16"],crosshair:!1}),F=i({min:0,allowDecimals:!1,title:{text:""}}),P=i({column:{pointPadding:.2,borderWidth:3}}),T=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=q([]),V=(e,c,o)=>q({id:e,name:c,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async e=>{a.value=!0;const c=l.filter(o=>o.id!==e);l.splice(0,l.length),c.map(o=>l.push(o)),await t.sleep(50),a.value=!1},A=e=>e?Math.round(e*100)/100:0,m=async(e,c,o)=>{var v,h;try{let r=((v=t==null?void 0:t.penitenciaria)==null?void 0:v.id)??null,g=((h=t==null?void 0:t.penitenciaria)==null?void 0:h.description)??null,y=t.historyId;if(o&&(r=e,g=c),y&&r){a.value=!0;let k=await X({historyId:y,carcelId:r,categoryId:p,subCategoryId:13});const b=[];let x=0,S=k.filter(s=>s.poundUsed===1);S.map(s=>{const j=s!=null&&s.promPound?Math.round((s==null?void 0:s.promPound)*100)/100:0;x+=j,b.push(j)}),_.value+=x/S.length;let O=A(_.value/t.carcelesSelected.length);f.value=O.toString(),l.push(V(r,g,b))}}catch(r){console.log(r)}finally{o||(a.value=!1)}},I=async()=>{a.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await m(e.id,e.description,!0))),a.value=!1};return(e,c)=>(w(),M(E,null,{default:C(()=>[u(z,{title:d.value,"section-value":p},null,8,["title"]),u(L,{"active-spin":a.value},null,8,["active-spin"]),u(H,{baseFilter:p,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:m,onExecuteRemove:$}),n("div",U,[u(Y,{class:"subsection-funcionarios",title:d.value,"section-value":p,pointValue:f.value,pointTitle:"Motivación y significado del trabajo",pointSubtitle:"Frecuencia respuestas Motivación y significado del trabajo"},null,8,["title","pointValue"]),n("div",G,[n("div",J,[a.value?N("",!0):(w(),M(W,{key:0,chartType:"bar",optionsAxisX:D.value,optionsAxisY:F.value,plotOptions:P.value,tooltip:T.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(R,{class:"card-preguntas"},{default:C(()=>[K,Q,Z,tt]),_:1})])])]),_:1}))}};export{pt as default};
