import{g as n,u as k,r as y,o as g,f as b,j as x,_ as D,m as r,n as B,b as u,a as E,l as L}from"./index-21166dae.js";import{_ as O}from"./CHeaderBar-25b66bad.js";import{_ as X}from"./CFilterbar-0fcf70e2.js";import{_ as Y}from"./CCard-2679b4c0.js";import{_ as z}from"./subSideNav-fa8710bf.js";import{_ as H}from"./CColunmChart-e1017be9.js";import"./CButton-02a38a2a.js";import"./CChartDonutSection-87e6722c.js";const M={class:"chart-section-principal"},R={class:"section-reincidencia"},W={class:"chart-section"},j=u("span",{class:"card-title"},"Pregunta",-1),q=u("span",{class:"question--value"},"FP 5 Antes de estar en esta cárcel, ¿había estado preso(a)?",-1),d=7,ie={__name:"reinsidencia",setup(G){const f=n(""),s=k(),o=n(!1),m=n("Trayectoria /  Antes de estar en esta cárcel, ¿había estado preso(a)? (como adulto)"),S=n({categories:["Sí","No","No Asignado"],crosshair:!1}),A=n({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),V=n({column:{pointPadding:.2,borderWidth:3}}),w=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),F=e=>e?Math.round(e*100)/100:0,I=e=>{let i=0,a=0,c=0;for(let t=0;t<e.length;t++)e[t].value===0&&i++,e[t].value===1&&a++,e[t].value===-1&&(c+=e[t].value*-1);const p=e.length-c;return f.value=F(a*100/p),[a,i,c]},l=y([]),$=(e,i,a)=>y({id:e,name:i,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),P=async e=>{o.value=!0;const i=l.filter(a=>a.id!==e);l.splice(0,l.length),i.map(a=>l.push(a)),await s.sleep(50),o.value=!1},_=async(e,i,a)=>{var c,p;try{let t=((c=s==null?void 0:s.penitenciaria)==null?void 0:c.id)??null,v=((p=s==null?void 0:s.penitenciaria)==null?void 0:p.description)??null,h=s.historyId;if(a&&(t=e,v=i),h&&t){o.value=!0;let C=await L({historyId:h,carcelId:t,categoryId:d,subCategoryId:23,embedDetail:!0,dimensionId:128});const N=I(C.items);l.push($(t,v,N))}}catch(t){console.log(t)}finally{a||(o.value=!1)}},T=async()=>{o.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await _(e.id,e.description,!0))),o.value=!1};return(e,i)=>(g(),b(D,null,{default:x(()=>[r(O,{title:m.value,"section-value":d},null,8,["title"]),r(B,{"active-spin":o.value},null,8,["active-spin"]),r(X,{baseFilter:d,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:_,onExecuteRemove:P}),u("div",M,[r(z,{class:"subsection-trayectoria",title:m.value,"section-value":d,pointValue:f.value,pointTitle:"FP 5 Antes de estar en esta cárcel, ¿había estado preso(a)?",pointSubtitle:"",type:2},null,8,["title","pointValue","pointTitle"]),u("div",R,[u("div",W,[o.value?E("",!0):(g(),b(H,{key:0,chartType:"bar",optionsAxisX:S.value,optionsAxisY:A.value,plotOptions:V.value,tooltip:w.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),r(Y,{class:"card-preguntas"},{default:x(()=>[j,q]),_:1})])])]),_:1}))}};export{ie as default};
