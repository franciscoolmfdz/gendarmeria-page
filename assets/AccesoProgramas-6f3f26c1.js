import{u as B,g as i,r as w,o as _,f as m,j as D,_ as M,m as u,n as X,b as a,a as I,k as Y}from"./index-cac83eb8.js";import{_ as j}from"./subSideNav-ad385c36.js";import{_ as z}from"./CHeaderBar-ece7db59.js";import{_ as H}from"./CFilterbar-620de0b0.js";import{_ as R}from"./CCard-1c4d6668.js";import{_ as W}from"./CColunmChart-6af6b32d.js";import"./CChartDonutSection-22723229.js";import"./CButton-d0e9333d.js";const U={class:"chart-section-principal"},G={class:"acceso-programas"},J={class:"chart-section"},K={class:"information-section"},Q=a("span",{class:"card-title"},"Preguntas",-1),Z=a("span",{class:"question--value"},"1. Aquí he podido trabajar y ganar algo de plata (3.1)",-1),ee=a("span",{class:"question--value"},"2. En esta cárcel he recibido capacitación laboral (3.2)",-1),se=a("span",{class:"question--value"},"3. Aquí he podido hablar con asistente social (3.3)",-1),ae=a("span",{class:"question--value"},"4. Aquí he podido conversar con la psicóloga (3.4)",-1),te=a("span",{class:"question--value"},"5. Aquí puedo ir donde el paramédico si lo necesito (3.5)",-1),oe=a("span",{class:"question--value"},"6. En esta cárcel he podido ir a la escuela o liceo penal (3.6)",-1),ne=a("span",{class:"question--value"},"7. Aquí se puede ir a talleres de alcohol o drogas si se necesita (3.7)",-1),d=1,fe={__name:"AccesoProgramas",setup(le){const t=B(),o=i(!1),v=i("Calidad de vida de los internos / Acceso a programas"),f=i(""),p=i([]),V=i({categories:["1.","2.","3.","4.","5.","6.","7."],crosshair:!1}),$=i({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),k=i({column:{pointPadding:.2,borderWidth:0}}),F=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=w([]),E=(e,n,s)=>w({id:e,name:n,data:s,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:400,fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),L=async e=>{o.value=!0;const n=r.filter(s=>s.id!==e);p.value=p.value.filter(s=>s.carcelId!==e),h(),r.splice(0,r.length),n.map(s=>r.push(s)),await t.sleep(50),o.value=!1},N=e=>e?Math.round(e*100)/100:0,h=()=>{let e=p.value.reduce((n,s)=>n+s.pointCarcel,0);e=e/p.value.length,e=N(e),f.value=e.toString()},b=async(e,n,s)=>{var y,g;try{let c=((y=t==null?void 0:t.penitenciaria)==null?void 0:y.id)??null,x=((g=t==null?void 0:t.penitenciaria)==null?void 0:g.description)??null,A=t.historyId;if(s&&(c=e,x=n),A&&c){o.value=!0;let T=await Y({historyId:A,carcelId:c,categoryId:d,subCategoryId:3});const q=[];let S=0,C=T.filter(l=>l.poundUsed===1);C.map(l=>{const P=l!=null&&l.valuePound?Math.round((l==null?void 0:l.valuePound)*100)/100:0;S+=P,q.push(P)}),p.value.push({carcelId:c,pointCarcel:S/C.length}),h(),r.push(E(c,x,q))}}catch(c){console.log(c)}finally{s||(o.value=!1)}},O=async()=>{o.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async e=>await b(e.id,e.description,!0))),o.value=!1};return(e,n)=>(_(),m(M,{class:"acceso-programas-section"},{default:D(()=>[u(z,{title:v.value,"section-value":d},null,8,["title"]),u(X,{"active-spin":o.value},null,8,["active-spin"]),u(H,{baseFilter:d,multipleDisabled:!1,onExecuteMount:O,onExecuteAction:b,onExecuteRemove:L}),a("div",U,[o.value?I("",!0):(_(),m(j,{key:0,title:v.value,"section-value":d,pointValue:f.value,pointTitle:"Acceso a programas",pointSubtitle:"Promedio respuestas sobre acceso a programas"},null,8,["title","pointValue"])),a("div",G,[a("div",J,[o.value?I("",!0):(_(),m(W,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:$.value,plotOptions:k.value,tooltip:F.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),a("div",K,[u(R,{class:"card-preguntas"},{default:D(()=>[Q,Z,ee,se,ae,te,oe,ne]),_:1})])])])]),_:1}))}};export{fe as default};
