import{g as n,u as q,r as F,o as m,f as V,j as A,_ as z,m as p,n as H,b as f,a as W,c as I,p as j,F as U,k as G,t as $}from"./index-c5d31a8d.js";import{_ as J}from"./subSideNav-70a9c1a2.js";import{_ as K}from"./CHeaderBar-cec87e9b.js";import{_ as Q}from"./CFilterbar-e9af1095.js";import{a as Z}from"./CChartDonutSection-16a850f5.js";import{_ as ee}from"./CColunmChart-ccc1e024.js";import{g as se}from"./dimensiones-11b2dce7.js";import"./CButton-a8f847be.js";const te={class:"chart-section-principal"},ae={class:"toma-decision"},ne={class:"chart-section"},ie=f("span",{class:"card-title"},"Preguntas",-1),oe={class:"question--value"},u=2,k=20,ye={__name:"tomaDecisiones",setup(le){const v=n([]),t=q(),i=n(!1),y=n("Calidad de vida de los funcionarios / Presión para tomar decisiones"),h=n(""),r=n([]),L=n({categories:["1.","2."],crosshair:!1}),T=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),B=n({column:{pointPadding:.2,borderWidth:3}}),E=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=F([]),N=(e,a,s)=>F({id:e,name:a,data:s,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"},formatter:function(){return this.y.toString().replace(".",",")}}}),O=async e=>{i.value=!0;const a=c.filter(s=>s.id!==e);r.value=r.value.filter(s=>s.carcelId!==e),g(),c.splice(0,c.length),a.map(s=>c.push(s)),await t.sleep(50),i.value=!1},R=e=>e?Math.round(e*100)/100:0,g=()=>{let e=r.value.reduce((a,s)=>a+s.pointCarcel,0);e=e/r.value.length,e=R(e),h.value=e.toString()},x=async(e,a,s)=>{var d,S;try{let l=((d=t==null?void 0:t.penitenciaria)==null?void 0:d.id)??null,C=((S=t==null?void 0:t.penitenciaria)==null?void 0:S.description)??null,D=t.historyId;if(s&&(l=e,C=a),D&&l){i.value=!0;let X=await G({historyId:D,carcelId:l,categoryId:u,subCategoryId:k}),_=0;const w=[];let P=X.filter(o=>o.poundUsed===1);P.map((o,Y)=>{const b=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;v.value[Y].revertValue?_+=5-b:_+=b,w.push(b)}),r.value.push({carcelId:l,pointCarcel:_/P.length}),g(),c.push(N(l,C,w))}}catch(l){console.log(l)}finally{s||(i.value=!1)}},M=async()=>{i.value=!0;const e={categoryId:u,subCategoryId:k};v.value=await se(e),t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),i.value=!1};return(e,a)=>(m(),V(z,null,{default:A(()=>[p(K,{title:y.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":i.value},null,8,["active-spin"]),p(Q,{baseFilter:u,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:x,onExecuteRemove:O}),f("div",te,[p(J,{class:"subsection-funcionarios",title:y.value,"section-value":u,pointValue:h.value,pointTitle:"Toma de decisiones",pointSubtitle:"recuencia respuestas presión para tomar decisiones"},null,8,["title","pointValue"]),f("div",ae,[f("div",ne,[i.value?W("",!0):(m(),V(ee,{key:0,chartType:"bar",optionsAxisX:L.value,optionsAxisY:T.value,plotOptions:B.value,tooltip:E.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Z,{class:"card-preguntas"},{default:A(()=>[ie,(m(!0),I(U,null,j(v.value,(s,d)=>(m(),I("span",oe,$(d+1)+". "+$(s.description),1))),256))]),_:1})])])]),_:1}))}};export{ye as default};
