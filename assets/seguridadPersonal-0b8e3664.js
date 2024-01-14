import{g as n,u as z,r as F,o as f,f as V,j as A,_ as H,m as p,n as W,b as m,a as j,c as I,p as U,F as G,k as J,t as $}from"./index-54860183.js";import{_ as K}from"./subSideNav-d9c416bd.js";import{_ as Q}from"./CHeaderBar-501feae6.js";import{_ as Z}from"./CFilterbar-43c804dc.js";import{a as ee}from"./CChartDonutSection-db332b04.js";import{_ as se}from"./CColunmChart-4777448a.js";import{g as te}from"./dimensiones-d5ba8a8c.js";import"./CButton-b5f860aa.js";const ae={class:"chart-section-principal"},ne={class:"seguridad-personal"},le={class:"chart-section"},oe=m("span",{class:"card-title"},"Preguntas",-1),ie={class:"question--value"},u=2,k=15,ye={__name:"seguridadPersonal",setup(re){const v=n([]),t=z(),l=n(!1),y=n("Calidad de vida de los funcionarios / Seguridad personal"),h=n(""),c=n([]),L=n({categories:["1.","2.","3."],crosshair:!1}),B=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),E=n({column:{pointPadding:.2,borderWidth:3}}),N=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=F([]),O=(e,a,s)=>F({id:e,name:a,data:s,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"},formatter:function(){return this.y.toString().replace(".",",")}}}),R=async e=>{l.value=!0;const a=r.filter(s=>s.id!==e);c.value=c.value.filter(s=>s.carcelId!==e),g(),r.splice(0,r.length),a.map(s=>r.push(s)),await t.sleep(50),l.value=!1},T=e=>e?Math.round(e*100)/100:0,g=()=>{let e=c.value.reduce((a,s)=>a+s.pointCarcel,0);e=e/c.value.length,e=T(e),h.value=e.toString()},x=async(e,a,s)=>{var d,S;try{let i=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,C=((S=t==null?void 0:t.penitenciaria)==null?void 0:S.description)??null,P=t.historyId;if(s&&(i=e,C=a),P&&i){l.value=!0;const X={historyId:P,carcelId:i,categoryId:u,subCategoryId:k};let _=0,Y=await J(X);const w=[];let D=Y.filter(o=>o.poundUsed===1);D.map((o,q)=>{const b=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;v.value[q].revertValue?_+=5-b:_+=b,w.push(b)}),c.value.push({carcelId:i,pointCarcel:_/D.length}),g(),r.push(O(i,C,w))}}catch(i){console.log(i)}finally{s||(l.value=!1)}},M=async()=>{l.value=!0;const e={categoryId:u,subCategoryId:k};v.value=await te(e),t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),l.value=!1};return(e,a)=>(f(),V(H,null,{default:A(()=>[p(Q,{title:y.value,"section-value":u},null,8,["title"]),p(W,{"active-spin":l.value},null,8,["active-spin"]),p(Z,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:R}),m("div",ae,[p(K,{class:"subsection-funcionarios",title:y.value,"section-value":u,pointValue:h.value,pointTitle:"Seguridad personal",pointSubtitle:"Frecuencia respuestas respecto a la seguridad personal"},null,8,["title","pointValue"]),m("div",ne,[m("div",le,[l.value?j("",!0):(f(),V(se,{key:0,chartType:"bar",optionsAxisX:L.value,optionsAxisY:B.value,plotOptions:E.value,tooltip:N.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(ee,{class:"card-preguntas"},{default:A(()=>[oe,(f(!0),I(G,null,U(v.value,(s,d)=>(f(),I("span",ie,$(d+1)+". "+$(s.description),1))),256))]),_:1})])])]),_:1}))}};export{ye as default};
