import{g as n,u as z,r as F,o as f,f as P,j as V,_ as H,m as p,n as W,b as m,a as j,c as I,p as U,F as G,k as J,t as $}from"./index-55c36585.js";import{_ as K}from"./subSideNav-e227cb4c.js";import{_ as Q}from"./CHeaderBar-fe98073c.js";import{_ as Z}from"./CFilterbar-d8883c57.js";import{_ as ee}from"./CCard-994e3cf2.js";import{_ as se}from"./CColunmChart-d0cda8fe.js";import{g as te}from"./dimensiones-b92417f1.js";import"./CChartDonutSection-e72e6124.js";import"./CButton-f23aba14.js";const ae={class:"chart-section-principal"},ne={class:"apoyo-reinsercion"},oe={class:"chart-section"},ie=m("span",{class:"card-title"},"Preguntas",-1),le={class:"question--value"},u=2,k=17,he={__name:"apoyoReinsercion",setup(ce){const v=n([]),t=z(),o=n(!1),b=n("Calidad de vida de los funcionarios / Apoyo a la reinserción"),h=n(""),r=n([]),L=n({categories:["1.","2.","3.","4."],crosshair:!1}),R=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=n({column:{pointPadding:.2,borderWidth:3}}),E=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),N=(e,a,s)=>F({id:e,name:a,data:s,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),O=async e=>{o.value=!0;const a=c.filter(s=>s.id!==e);r.value=r.value.filter(s=>s.carcelId!==e),g(),c.splice(0,c.length),a.map(s=>c.push(s)),await t.sleep(50),o.value=!1},T=e=>e?Math.round(e*100)/100:0,g=()=>{let e=r.value.reduce((a,s)=>a+s.pointCarcel,0);e=e/r.value.length,e=T(e),h.value=e.toString()},x=async(e,a,s)=>{var d,S;try{let l=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,C=((S=t==null?void 0:t.penitenciaria)==null?void 0:S.description)??null,A=t.historyId;if(s&&(l=e,C=a),A&&l){o.value=!0;const X={historyId:A,carcelId:l,categoryId:u,subCategoryId:k};let _=0,Y=await J(X);const w=[];let D=Y.filter(i=>i.poundUsed===1);D.map((i,q)=>{const y=i!=null&&i.valuePound?Math.round((i==null?void 0:i.valuePound)*100)/100:0;v.value[q].revertValue?_+=5-y:_+=y,w.push(y)}),r.value.push({carcelId:l,pointCarcel:_/D.length}),g(),c.push(N(l,C,w))}}catch(l){console.log(l)}finally{s||(o.value=!1)}},M=async()=>{o.value=!0;const e={categoryId:u,subCategoryId:k};v.value=await te(e),t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),o.value=!1};return(e,a)=>(f(),P(H,null,{default:V(()=>[p(Q,{title:b.value,"section-value":u},null,8,["title"]),p(W,{"active-spin":o.value},null,8,["active-spin"]),p(Z,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:O}),m("div",ae,[p(K,{class:"subsection-funcionarios",title:b.value,"section-value":u,pointValue:h.value,pointTitle:"Apoyo a la reinserción",pointSubtitle:"Frecuencia respuestas Apoyo a la reinserción"},null,8,["title","pointValue"]),m("div",ne,[m("div",oe,[o.value?j("",!0):(f(),P(se,{key:0,chartType:"bar",optionsAxisX:L.value,optionsAxisY:R.value,plotOptions:B.value,tooltip:E.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(ee,{class:"card-preguntas"},{default:V(()=>[ie,(f(!0),I(G,null,U(v.value,(s,d)=>(f(),I("span",le,$(d+1)+". "+$(s.description),1))),256))]),_:1})])])]),_:1}))}};export{he as default};
