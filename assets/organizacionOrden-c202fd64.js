import{g as n,u as Y,r as O,o as f,f as z,j as P,_ as q,m as p,n as H,b as m,a as W,c as V,p as j,F as U,k as G,t as A}from"./index-c6cfe71e.js";import{_ as J}from"./CHeaderBar-341e9f0f.js";import{_ as K}from"./subSideNav-9af33995.js";import{_ as Q}from"./CFilterbar-f47bc25f.js";import{a as Z}from"./CChartDonutSection-964682c9.js";import{_ as ee}from"./CColunmChart-a9d1d44f.js";import{g as te}from"./dimensiones-07dd653d.js";import"./CButton-a5ed5892.js";const se={class:"chart-section-principal"},ae={class:"organizacion-orden"},ne={class:"chart-section"},ie=m("span",{class:"card-title"},"Preguntas",-1),oe={class:"question--value"},u=2,I=16,be={__name:"organizacionOrden",setup(le){const v=n([]),s=Y(),i=n(!1),b=n("Calidad de vida de los funcionarios / Organización y orden"),h=n(""),c=n([]),$=n({categories:["1.","2.","3.","4."],crosshair:!1}),k=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),L=n({column:{pointPadding:.2,borderWidth:3}}),B=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=O([]),E=(e,a,t)=>O({id:e,name:a,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"},formatter:function(){return this.y.toString().replace(".",",")}}}),N=async e=>{i.value=!0;const a=r.filter(t=>t.id!==e);c.value=c.value.filter(t=>t.carcelId!==e),g(),r.splice(0,r.length),a.map(t=>r.push(t)),await s.sleep(50),i.value=!1},R=e=>e?Math.round(e*100)/100:0,g=()=>{let e=c.value.reduce((a,t)=>a+t.pointCarcel,0);e=e/c.value.length,e=R(e),h.value=e.toString()},x=async(e,a,t)=>{var d,S;try{let l=((d=s==null?void 0:s.penitenciaria)==null?void 0:d.id)??null,C=((S=s==null?void 0:s.penitenciaria)==null?void 0:S.description)??null,w=s.historyId;if(t&&(l=e,C=a),w&&l){i.value=!0;let M=await G({historyId:w,carcelId:l,categoryId:u,subCategoryId:I}),_=0;const D=[];let F=M.filter(o=>o.poundUsed===1);F.map((o,X)=>{const y=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;v.value[X].revertValue?_+=5-y:_+=y,D.push(y)}),c.value.push({carcelId:l,pointCarcel:_/F.length}),g(),r.push(E(l,C,D))}}catch(l){console.log(l)}finally{t||(i.value=!1)}},T=async()=>{i.value=!0;const e={categoryId:u,subCategoryId:I};v.value=await te(e),s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async a=>await x(a.id,a.description,!0))),i.value=!1};return(e,a)=>(f(),z(q,null,{default:P(()=>[p(J,{title:b.value,"section-value":u},null,8,["title"]),p(H,{"active-spin":i.value},null,8,["active-spin"]),p(Q,{baseFilter:u,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:x,onExecuteRemove:N}),m("div",se,[p(K,{class:"subsection-funcionarios",title:b.value,"section-value":u,pointValue:h.value,pointTitle:"Organización y orden",pointSubtitle:"Frecuencia respuestas Organización y orden"},null,8,["title","pointValue"]),m("div",ae,[m("div",ne,[i.value?W("",!0):(f(),z(ee,{key:0,chartType:"bar",optionsAxisX:$.value,optionsAxisY:k.value,plotOptions:L.value,tooltip:B.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Z,{class:"card-preguntas"},{default:P(()=>[ie,(f(!0),V(U,null,j(v.value,(t,d)=>(f(),V("span",oe,A(d+1)+". "+A(t.description),1))),256))]),_:1})])])]),_:1}))}};export{be as default};
