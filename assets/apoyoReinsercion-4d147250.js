import{g as n,u as z,r as F,o as f,f as P,j as V,_ as H,m as p,n as W,b as m,a as j,c as I,p as U,F as G,k as J,t as $}from"./index-c6cfe71e.js";import{_ as K}from"./subSideNav-9af33995.js";import{_ as Q}from"./CHeaderBar-341e9f0f.js";import{_ as Z}from"./CFilterbar-f47bc25f.js";import{a as ee}from"./CChartDonutSection-964682c9.js";import{_ as te}from"./CColunmChart-a9d1d44f.js";import{g as se}from"./dimensiones-07dd653d.js";import"./CButton-a5ed5892.js";const ae={class:"chart-section-principal"},ne={class:"apoyo-reinsercion"},oe={class:"chart-section"},ie=m("span",{class:"card-title"},"Preguntas",-1),le={class:"question--value"},u=2,k=17,be={__name:"apoyoReinsercion",setup(re){const v=n([]),s=z(),o=n(!1),b=n("Calidad de vida de los funcionarios / Apoyo a la reinserción"),h=n(""),c=n([]),L=n({categories:["1.","2.","3.","4."],crosshair:!1,formatter:function(){return this.y.toString().replace(".",",")}}),R=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=n({column:{pointPadding:.2,borderWidth:3}}),E=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=F([]),N=(e,a,t)=>F({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"},formatter:function(){return this.y.toString().replace(".",",")}}}),O=async e=>{o.value=!0;const a=r.filter(t=>t.id!==e);c.value=c.value.filter(t=>t.carcelId!==e),g(),r.splice(0,r.length),a.map(t=>r.push(t)),await s.sleep(50),o.value=!1},T=e=>e?Math.round(e*100)/100:0,g=()=>{let e=c.value.reduce((a,t)=>a+t.pointCarcel,0);e=e/c.value.length,e=T(e),h.value=e.toString()},x=async(e,a,t)=>{var d,S;try{let l=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,C=((S=s==null?void 0:s.penitenciaria)==null?void 0:S.description)??null,A=s.historyId;if(t&&(l=e,C=a),A&&l){o.value=!0;const X={historyId:A,carcelId:l,categoryId:u,subCategoryId:k};let _=0,Y=await J(X);const w=[];let D=Y.filter(i=>i.poundUsed===1);D.map((i,q)=>{const y=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;v.value[q].revertValue?_+=5-y:_+=y,w.push(y)}),c.value.push({carcelId:l,pointCarcel:_/D.length}),g(),r.push(N(l,C,w))}}catch(l){console.log(l)}finally{t||(o.value=!1)}},M=async()=>{o.value=!0;const e={categoryId:u,subCategoryId:k};v.value=await se(e),s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),o.value=!1};return(e,a)=>(f(),P(H,null,{default:V(()=>[p(Q,{title:b.value,"section-value":u},null,8,["title"]),p(W,{"active-spin":o.value},null,8,["active-spin"]),p(Z,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:O}),m("div",ae,[p(K,{class:"subsection-funcionarios",title:b.value,"section-value":u,pointValue:h.value,pointTitle:"Apoyo a la reinserción",pointSubtitle:"Frecuencia respuestas Apoyo a la reinserción"},null,8,["title","pointValue"]),m("div",ne,[m("div",oe,[o.value?j("",!0):(f(),P(te,{key:0,chartType:"bar",optionsAxisX:L.value,optionsAxisY:R.value,plotOptions:B.value,tooltip:E.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(ee,{class:"card-preguntas"},{default:V(()=>[ie,(f(!0),I(G,null,U(v.value,(t,d)=>(f(),I("span",le,$(d+1)+". "+$(t.description),1))),256))]),_:1})])])]),_:1}))}};export{be as default};