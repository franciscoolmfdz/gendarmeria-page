import{u as L,g as n,r as w,o as _,f,j as D,_ as M,m as p,n as X,b as s,a as I,k as Y}from"./index-6cde2442.js";import{_ as j}from"./subSideNav-9827078f.js";import{_ as z}from"./CHeaderBar-2d6d0b63.js";import{_ as H}from"./CFilterbar-5d2801c4.js";import{_ as R}from"./CCard-126910ad.js";import{_ as W}from"./CColunmChart-4b73e99b.js";import"./CChartDonutSection-d0252771.js";import"./CButton-7e8ab65d.js";const U={class:"chart-section-principal"},G={class:"acceso-programas"},J={class:"chart-section"},K=s("span",{class:"card-title"},"Preguntas",-1),Q=s("span",{class:"question--value"},"3.1 Aquí he podido trabajar y ganar algo de plata",-1),Z=s("span",{class:"question--value"},"3.2 En esta cárcel he recibido capacitación laboral ",-1),ee=s("span",{class:"question--value"},"3.3 Aquí he podido hablar con asistente social",-1),ae=s("span",{class:"question--value"},"3.4 Aquí he podido conversar con la psicóloga",-1),te=s("span",{class:"question--value"},"3.5 Aquí puedo ir donde el paramédico si lo necesito",-1),se=s("span",{class:"question--value"},"3.6 En esta cárcel he podido ir a la escuela o liceo penal",-1),oe=s("span",{class:"question--value"},"3.7 Aquí se puede ir a talleres de alcohol o drogas si se necesita",-1),d=1,me={__name:"AccesoProgramas",setup(le){const t=L(),o=n(!1),m=n("Calidad de vida de los internos / Acceso a programas"),v=n(""),u=n([]),V=n({categories:["3.1","3.2","3.3","3.4","3.5","3.6","3.7"],crosshair:!1}),$=n({min:0,allowDecimals:!1,title:{text:""},categories:["Nunca","Casi nunca","A veces","Casi siempre","Siempre"]}),k=n({column:{pointPadding:.2,borderWidth:3}}),F=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=w([]),E=(e,l,a)=>w({id:e,name:l,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),N=async e=>{o.value=!0;const l=r.filter(a=>a.id!==e);u.value=u.value.filter(a=>a.carcelId!==e),h(),r.splice(0,r.length),l.map(a=>r.push(a)),await t.sleep(50),o.value=!1},O=e=>e?Math.round(e*100)/100:0,h=()=>{let e=u.value.reduce((l,a)=>l+a.pointCarcel,0);e=e/u.value.length,e=O(e),v.value=e.toString()},g=async(e,l,a)=>{var y,b;try{let c=((y=t==null?void 0:t.penitenciaria)==null?void 0:y.id)??null,x=((b=t==null?void 0:t.penitenciaria)==null?void 0:b.description)??null,A=t.historyId;if(a&&(c=e,x=l),A&&c){o.value=!0;let B=await Y({historyId:A,carcelId:c,categoryId:d,subCategoryId:3});const q=[];let S=0,C=B.filter(i=>i.poundUsed===1);C.map(i=>{const P=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;S+=P,q.push(P)}),u.value.push({carcelId:c,pointCarcel:S/C.length}),h(),r.push(E(c,x,q))}}catch(c){console.log(c)}finally{a||(o.value=!1)}},T=async()=>{o.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),o.value=!1};return(e,l)=>(_(),f(M,null,{default:D(()=>[p(z,{title:m.value,"section-value":d},null,8,["title"]),p(X,{"active-spin":o.value},null,8,["active-spin"]),p(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:g,onExecuteRemove:N}),s("div",U,[o.value?I("",!0):(_(),f(j,{key:0,title:m.value,"section-value":d,pointValue:v.value,pointTitle:"Acceso a programas",pointSubtitle:"Promedio respuestas sobre acceso a programas"},null,8,["title","pointValue"])),s("div",G,[s("div",J,[o.value?I("",!0):(_(),f(W,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:$.value,plotOptions:k.value,tooltip:F.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(R,{class:"card-preguntas"},{default:D(()=>[K,Q,Z,ee,ae,te,se,oe]),_:1})])])]),_:1}))}};export{me as default};
