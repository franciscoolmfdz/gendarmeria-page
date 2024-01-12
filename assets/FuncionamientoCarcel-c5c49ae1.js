import{g as n,u as q,r as P,o as m,f as V,j as A,_ as z,m as p,n as H,b as f,a as W,c as I,p as j,F as U,k as G,t as $}from"./index-551b2772.js";import{_ as J}from"./subSideNav-45bc6260.js";import{_ as K}from"./CHeaderBar-a35077ae.js";import{_ as Q}from"./CFilterbar-767d8b95.js";import{a as Z}from"./CChartDonutSection-ff18cfe1.js";import{_ as ee}from"./CColunmChart-decf8dcd.js";import{g as te}from"./dimensiones-8c81768e.js";import"./CButton-d269d36d.js";const se={class:"chart-section-principal"},ae={class:"funcionamiento-carcel"},ne={class:"chart-section"},ie=f("span",{class:"card-title"},"Preguntas",-1),le={class:"question--value"},u=1,k=7,be={__name:"FuncionamientoCarcel",setup(oe){const v=n([]),s=q(),i=n(!1),b=n("Calidad de vida de los internos / Funcionamiento de la cárcel"),h=n(""),c=n([]),L=n({categories:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10."],crosshair:!1}),B=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),E=n({column:{pointPadding:.2,borderWidth:3}}),N=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),o=P([]),O=(e,a,t)=>P({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"},formatter:function(){return this.y.toString().replace(".",",")}}}),R=async e=>{i.value=!0;const a=o.filter(t=>t.id!==e);o.splice(0,o.length),c.value=c.value.filter(t=>t.carcelId!==e),g(),a.map(t=>o.push(t)),await s.sleep(50),i.value=!1},T=e=>e?Math.round(e*100)/100:0,g=()=>{let e=c.value.reduce((a,t)=>a+t.pointCarcel,0);e=e/c.value.length,e=T(e),h.value=e.toString()},x=async(e,a,t)=>{var d,S;try{let l=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,C=((S=s==null?void 0:s.penitenciaria)==null?void 0:S.description)??null,F=s.historyId;if(t&&(l=e,C=a),F&&l){i.value=!0;let X=await G({historyId:F,carcelId:l,categoryId:u,subCategoryId:k});const w=[];let _=0,D=X.filter(r=>r.poundUsed===1);D.map((r,Y)=>{const y=Math.round((r==null?void 0:r.valuePound)*100)/100;v.value[Y].revertValue?_+=5-y:_+=y,w.push(y)}),c.value.push({carcelId:l,pointCarcel:_/D.length}),g(),o.push(O(l,C,w))}}catch(l){console.log(l)}finally{t||(i.value=!1)}},M=async()=>{i.value=!0;const e={categoryId:u,subCategoryId:k};v.value=await te(e),s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),i.value=!1};return(e,a)=>(m(),V(z,null,{default:A(()=>[p(K,{title:b.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":i.value},null,8,["active-spin"]),p(Q,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:R}),f("div",se,[p(J,{title:b.value,"section-value":u,pointValue:h.value,pointTitle:"Funcionamiento de la cárcel",pointSubtitle:"Promedio respuestas funcionamiento de la cárcel"},null,8,["title","pointValue"]),f("div",ae,[f("div",ne,[i.value?W("",!0):(m(),V(ee,{key:0,chartType:"bar",optionsAxisX:L.value,optionsAxisY:B.value,plotOptions:E.value,tooltip:N.value,series:o},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Z,{class:"card-preguntas"},{default:A(()=>[ie,(m(!0),I(U,null,j(v.value,(t,d)=>(m(),I("span",le,$(d+1)+". "+$(t.description),1))),256))]),_:1})])])]),_:1}))}};export{be as default};
