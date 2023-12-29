import{g as n,u as Y,r as P,o as f,f as j,j as A,_ as q,m as p,n as z,b as m,a as H,c as I,p as R,F as W,k as U,t as V}from"./index-60abcd12.js";import{_ as G}from"./subSideNav-e25f03bc.js";import{_ as J}from"./CHeaderBar-2f735b52.js";import{_ as K}from"./CFilterbar-80d88b3a.js";import{a as Q}from"./CChartDonutSection-254b1a03.js";import{_ as Z}from"./CColunmChart-18498762.js";import{g as ee}from"./dimensiones-2dcf54c9.js";import"./CButton-175216dd.js";const te={class:"chart-section-principal"},ae={class:"motivacion-trabajo"},se={class:"chart-section"},ne=m("span",{class:"card-title"},"Preguntas",-1),ie={class:"question--value"},u=2,$=13,_e={__name:"motivacionTrabajo",setup(oe){const v=n([]),a=Y(),i=n(!1),_=n("Calidad de vida de los funcionarios / Motivación y significado del trabajo"),b=n(""),r=n([]),k=n({categories:["1.","2.","3."],crosshair:!1}),L=n({min:1,allowDecimals:!1,max:5,title:{text:'<div class="leyend-values"><span class="item-leyend">Leyenda:&nbsp;</span><span class="item-leyend">1. Nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">2. Casi nunca</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">3. A veces</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">4. Casi siempre</span> &nbsp; &nbsp; &nbsp; &nbsp;<span class="item-leyend">5. Siempre</span></div>'}}),M=n({column:{pointPadding:.2,borderWidth:3}}),T=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=P([]),B=(e,s,t)=>P({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"left",x:0,style:{inside:!1,fontSize:"12px",bold:800,fontFamily:"helvetica, arial, sans-serif",textShadow:!0,fontWeight:"bold"}}}),E=async e=>{i.value=!0;const s=c.filter(t=>t.id!==e);r.value=r.value.filter(t=>t.carcelId!==e),y(),c.splice(0,c.length),s.map(t=>c.push(t)),await a.sleep(50),i.value=!1},N=e=>e?Math.round(e*100)/100:0,y=()=>{let e=r.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/r.value.length,e=N(e),b.value=e.toString()},h=async(e,s,t)=>{var d,g;try{let l=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.id)??null,x=((g=a==null?void 0:a.penitenciaria)==null?void 0:g.description)??null,S=a.historyId;if(t&&(l=e,x=s),S&&l){i.value=!0;let X=await U({historyId:S,carcelId:l,categoryId:u,subCategoryId:$});const C=[];let w=0,D=X.filter(o=>o.poundUsed===1);D.map(o=>{const F=o!=null&&o.valuePound?Math.round((o==null?void 0:o.valuePound)*100)/100:0;w+=F,C.push(F)}),r.value.push({carcelId:l,pointCarcel:w/D.length}),y(),c.push(B(l,x,C))}}catch(l){console.log(l)}finally{t||(i.value=!1)}},O=async()=>{i.value=!0;const e={categoryId:u,subCategoryId:$};v.value=await ee(e),a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async s=>await h(s.id,s.description,!0))),i.value=!1};return(e,s)=>(f(),j(q,null,{default:A(()=>[p(J,{title:_.value,"section-value":u},null,8,["title"]),p(z,{"active-spin":i.value},null,8,["active-spin"]),p(K,{baseFilter:u,multipleDisabled:!1,onExecuteMount:O,onExecuteAction:h,onExecuteRemove:E}),m("div",te,[p(G,{class:"subsection-funcionarios",title:_.value,"section-value":u,pointValue:b.value,pointTitle:"Motivación y significado del trabajo",pointSubtitle:"Frecuencia respuestas Motivación y significado del trabajo"},null,8,["title","pointValue"]),m("div",ae,[m("div",se,[i.value?H("",!0):(f(),j(Z,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:L.value,plotOptions:M.value,tooltip:T.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Q,{class:"card-preguntas"},{default:A(()=>[ne,(f(!0),I(W,null,R(v.value,(t,d)=>(f(),I("span",ie,V(d+1)+". "+V(t.description),1))),256))]),_:1})])])]),_:1}))}};export{_e as default};
