import{u as z,g as i,r as C,o as w,f as T,j as D,_ as B,l as u,m as L,b as n,a as N,k as R}from"./index-156a2515.js";import{_ as X}from"./subSideNav-f9491fc1.js";import{_ as Y}from"./CHeaderBar-44e391f7.js";import{_ as H}from"./CFilterbar-076f859d.js";import{_ as W}from"./CCard-ca6b3add.js";import{_ as U}from"./CColunmChart-547630b8.js";import"./CButton-15782861.js";const G={class:"chart-section-principal"},J={class:"carga-trabajo"},K={class:"chart-section"},Q=n("span",{class:"card-title"},"Preguntas",-1),Z=n("span",{class:"question--value"},"fp10 Me dan una cantidad de responsabilidad adecuada en esta cárcel",-1),ee=n("span",{class:"question--value"},"fp11 Tengo el nivel apropiado de autoridad para hacer mi trabajo correctamente.",-1),ae=n("span",{class:"question--value"},"fp12 Estoy satisfecho/a con la formación que he recibido para hacer mi trabajo",-1),te=n("span",{class:"question--value"},"fp13 Recibo el apoyo y respaldo necesario (desde la jefatura/institución) para las labores que debo realizar",-1),d=2,de={__name:"cargaTrabajo",setup(se){const e=z(),t=i(!1),p=i("Calidad de vida de los funcionarios / Carga de trabajo"),f=i(""),_=i(0),F=i({categories:["fp10","fp11","fp12","fp13"],crosshair:!1}),P=i({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),V=i({column:{pointPadding:.2,borderWidth:3}}),$=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),l=C([]),q=(a,c,s)=>C({id:a,name:c,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),A=async a=>{t.value=!0;const c=l.filter(s=>s.id!==a);l.splice(0,l.length),c.map(s=>l.push(s)),await e.sleep(50),t.value=!1},I=a=>a?Math.round(a*100)/100:0,m=async(a,c,s)=>{var h,v;try{let r=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.id)??null,b=((v=e==null?void 0:e.penitenciaria)==null?void 0:v.description)??null,g=e.historyId;if(s&&(r=a,b=c),g&&r){t.value=!0;const E={historyId:g,carcelId:r,categoryId:d,subCategoryId:12};let y=0,M=await R(E);const x=[];let S=M.filter(o=>o.poundUsed===1);S.map(o=>{const j=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;y+=j,x.push(j)}),_.value+=y/S.length;let O=I(_.value/e.carcelesSelected.length);f.value=O.toString(),l.push(q(r,b,x))}}catch(r){console.log(r)}finally{s||(t.value=!1)}},k=async()=>{t.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async a=>await m(a.id,a.description,!0))),t.value=!1};return(a,c)=>(w(),T(B,null,{default:D(()=>[u(Y,{title:p.value,"section-value":d},null,8,["title"]),u(L,{"active-spin":t.value},null,8,["active-spin"]),u(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:m,onExecuteRemove:A}),n("div",G,[u(X,{class:"subsection-funcionarios",title:p.value,"section-value":d,pointValue:f.value,pointTitle:"Carga de trabajo",pointSubtitle:"Frecuencia respuestas carga de trabajo"},null,8,["title","pointValue"]),n("div",J,[n("div",K,[t.value?N("",!0):(w(),T(U,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:P.value,plotOptions:V.value,tooltip:$.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(W,{class:"card-preguntas"},{default:D(()=>[Q,Z,ee,ae,te]),_:1})])])]),_:1}))}};export{de as default};
