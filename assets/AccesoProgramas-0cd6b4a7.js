import{u as N,g as l,r as w,o as m,f as h,j as D,_ as X,m as p,n as Y,b as s,a as I,k as j}from"./index-21166dae.js";import{_ as z}from"./subSideNav-fa8710bf.js";import{_ as H}from"./CHeaderBar-25b66bad.js";import{_ as R}from"./CFilterbar-0fcf70e2.js";import{_ as W}from"./CCard-2679b4c0.js";import{_ as U}from"./CColunmChart-e1017be9.js";import"./CChartDonutSection-87e6722c.js";import"./CButton-02a38a2a.js";const G={class:"chart-section-principal"},J={class:"acceso-programas"},K={class:"chart-section"},Q=s("span",{class:"card-title"},"Preguntas",-1),Z=s("span",{class:"question--value"},"3.1 Aquí he podido trabajar y ganar algo de plata",-1),ee=s("span",{class:"question--value"},"3.2 En esta cárcel he recibido capacitación laboral ",-1),ae=s("span",{class:"question--value"},"3.3 Aquí he podido hablar con asistente social",-1),te=s("span",{class:"question--value"},"3.4 Aquí he podido conversar con la psicóloga",-1),se=s("span",{class:"question--value"},"3.5 Aquí puedo ir donde el paramédico si lo necesito",-1),oe=s("span",{class:"question--value"},"3.6 En esta cárcel he podido ir a la escuela o liceo penal",-1),le=s("span",{class:"question--value"},"3.7 Aquí se puede ir a talleres de alcohol o drogas si se necesita",-1),d=1,he={__name:"AccesoProgramas",setup(ie){const t=N(),o=l(!1),v=l("Calidad de vida de los internos / Acceso a programas"),g=l(""),V=l(0),u=l([]),$=l({categories:["3.1","3.2","3.3","3.4","3.5","3.6","3.7"],crosshair:!1}),k=l({min:0,allowDecimals:!1,title:{text:""}}),F=l({column:{pointPadding:.2,borderWidth:3}}),E=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=w([]),T=(e,i,a)=>w({id:e,name:i,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),O=async e=>{o.value=!0;const i=r.filter(a=>a.id!==e);u.value=u.value.filter(a=>a.carcelId!==e),y(),r.splice(0,r.length),i.map(a=>r.push(a)),await t.sleep(50),o.value=!1},B=e=>e?Math.round(e*100)/100:0,y=()=>{let e=u.value.reduce((i,a)=>i+a.pointCarcel,0);e=e/u.value.length,e=B(e),g.value=e.toString()},b=async(e,i,a)=>{var x,A;try{let c=((x=t==null?void 0:t.penitenciaria)==null?void 0:x.id)??null,q=((A=t==null?void 0:t.penitenciaria)==null?void 0:A.description)??null,P=t.historyId;if(a&&(c=e,q=i),P&&c){o.value=!0;let M=await j({historyId:P,carcelId:c,categoryId:d,subCategoryId:3});const S=[];let _=0,f=M.filter(n=>n.poundUsed===1);f.map(n=>{const C=n!=null&&n.promPound?Math.round((n==null?void 0:n.promPound)*100)/100:0;_+=C,S.push(C)}),V.value+=_/f.length,u.value.push({carcelId:c,pointCarcel:_/f.length}),y(),r.push(T(c,q,S))}}catch(c){console.log(c)}finally{a||(o.value=!1)}},L=async()=>{o.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await b(e.id,e.description,!0))),o.value=!1};return(e,i)=>(m(),h(X,null,{default:D(()=>[p(H,{title:v.value,"section-value":d},null,8,["title"]),p(Y,{"active-spin":o.value},null,8,["active-spin"]),p(R,{baseFilter:d,multipleDisabled:!1,onExecuteMount:L,onExecuteAction:b,onExecuteRemove:O}),s("div",G,[o.value?I("",!0):(m(),h(z,{key:0,title:v.value,"section-value":d,pointValue:g.value,pointTitle:"Acceso a programas",pointSubtitle:"Promedio respuestas sobre acceso a programas"},null,8,["title","pointValue"])),s("div",J,[s("div",K,[o.value?I("",!0):(m(),h(U,{key:0,chartType:"bar",optionsAxisX:$.value,optionsAxisY:k.value,plotOptions:F.value,tooltip:E.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(W,{class:"card-preguntas"},{default:D(()=>[Q,Z,ee,ae,te,se,oe,le]),_:1})])])]),_:1}))}};export{he as default};
