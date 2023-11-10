import{u as N,g as l,r as w,o as P,f as A,j as D,_ as O,m as u,n as z,b as i,a as B,k as R}from"./index-cac83eb8.js";import{_ as X}from"./subSideNav-ad385c36.js";import{_ as Y}from"./CHeaderBar-ece7db59.js";import{_ as H}from"./CFilterbar-620de0b0.js";import{_ as W}from"./CCard-1c4d6668.js";import{_ as U}from"./CColunmChart-6af6b32d.js";import"./CChartDonutSection-22723229.js";import"./CButton-d0e9333d.js";const G={class:"chart-section-principal"},J={class:"carga-trabajo"},K={class:"chart-section"},Q=i("span",{class:"card-title"},"Preguntas",-1),Z=i("span",{class:"question--value"},"1. Me dan una cantidad de responsabilidad adecuada en esta cárcel (fp10)",-1),ee=i("span",{class:"question--value"},"2. Tengo el nivel apropiado de autoridad para hacer mi trabajo correctamente (fp11)",-1),ae=i("span",{class:"question--value"},"3. Estoy satisfecho/a con la formación que he recibido para hacer mi trabajo (fp12)",-1),se=i("span",{class:"question--value"},"4. Recibo el apoyo y respaldo necesario (desde la jefatura/institución) para las labores que debo realizar (fp13)",-1),d=2,de={__name:"cargaTrabajo",setup(te){const s=N(),t=l(!1),f=l("Calidad de vida de los funcionarios / Carga de trabajo"),_=l(""),p=l([]),F=l({categories:["1.","2.","3.","4."],crosshair:!1}),I=l({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),T=l({column:{pointPadding:.2,borderWidth:3}}),V=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=w([]),$=(e,n,a)=>w({id:e,name:n,data:a,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),q=async e=>{t.value=!0;const n=r.filter(a=>a.id!==e);p.value=p.value.filter(a=>a.carcelId!==e),m(),r.splice(0,r.length),n.map(a=>r.push(a)),await s.sleep(50),t.value=!1},k=e=>e?Math.round(e*100)/100:0,m=()=>{let e=p.value.reduce((n,a)=>n+a.pointCarcel,0);e=e/p.value.length,e=k(e),_.value=e.toString()},v=async(e,n,a)=>{var b,h;try{let c=((b=s==null?void 0:s.penitenciaria)==null?void 0:b.id)??null,y=((h=s==null?void 0:s.penitenciaria)==null?void 0:h.description)??null,g=s.historyId;if(a&&(c=e,y=n),g&&c){t.value=!0;const L={historyId:g,carcelId:c,categoryId:d,subCategoryId:12};let x=0,M=await R(L);const C=[];let S=M.filter(o=>o.poundUsed===1);S.map(o=>{const j=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;x+=j,C.push(j)}),p.value.push({carcelId:c,pointCarcel:x/S.length}),m(),r.push($(c,y,C))}}catch(c){console.log(c)}finally{a||(t.value=!1)}},E=async()=>{t.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await v(e.id,e.description,!0))),t.value=!1};return(e,n)=>(P(),A(O,null,{default:D(()=>[u(Y,{title:f.value,"section-value":d},null,8,["title"]),u(z,{"active-spin":t.value},null,8,["active-spin"]),u(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:E,onExecuteAction:v,onExecuteRemove:q}),i("div",G,[u(X,{class:"subsection-funcionarios",title:f.value,"section-value":d,pointValue:_.value,pointTitle:"Carga de trabajo",pointSubtitle:"Frecuencia respuestas carga de trabajo"},null,8,["title","pointValue"]),i("div",J,[i("div",K,[t.value?B("",!0):(P(),A(U,{key:0,chartType:"bar",optionsAxisX:F.value,optionsAxisY:I.value,plotOptions:T.value,tooltip:V.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(W,{class:"card-preguntas"},{default:D(()=>[Q,Z,ee,ae,se]),_:1})])])]),_:1}))}};export{de as default};