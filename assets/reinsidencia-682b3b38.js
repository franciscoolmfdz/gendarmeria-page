import{g as l,u as R,r as x,o as S,f as C,j as A,_ as T,m as d,n as B,b as p,a as E,l as L}from"./index-47b30902.js";import{_ as O}from"./CHeaderBar-8086222b.js";import{_ as X}from"./CFilterbar-24b16cbf.js";import{_ as Y}from"./CCard-b923f4a4.js";import{_ as j}from"./subSideNav-7fd919fe.js";import{_ as z}from"./CColunmChart-9de26bb9.js";import"./CButton-3fe15e8f.js";import"./CChartDonutSection-92782cbd.js";const H={class:"chart-section-principal"},W={class:"section-reincidencia"},q={class:"chart-section"},G=p("span",{class:"card-title"},"Pregunta",-1),J=p("span",{class:"question--value"},"5. Antes de estar en esta cárcel, ¿había estado preso(a)?",-1),_=7,oe={__name:"reinsidencia",setup(K){const v=l(""),u=l([]),a=R(),o=l(!1),h=l("Antecedentes y trayectorias / Reincidencia en la Cárcel"),V=l({categories:["Sí","No","No Asignado"],crosshair:!1}),w=l({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),I=l({column:{pointPadding:.2,borderWidth:3}}),F=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),f=e=>e?Math.round(e*100)/100:0,$=(e,s,t)=>x({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),M=async e=>{o.value=!0;const s=r.filter(t=>t.id!==e);r.splice(0,r.length),u.value=u.value.filter(t=>t.carcelId!==e),y(),s.map(t=>r.push(t)),await a.sleep(50),o.value=!1},y=()=>{let e=u.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/u.value.length,e=Math.round(f(e)),v.value=e.toString()},P=(e,s)=>{let t=0,c=0,m=0;for(let n=0;n<e.length;n++)e[n].value===0&&t++,e[n].value===1&&c++,e[n].value===-1&&(m+=e[n].value*-1);const i=t+c;return u.value.push({carcelId:s,pointCarcel:Math.round(f(c*100/i))}),y(),[Math.round(f(c*100/i)),Math.round(f(t*100/i))]},r=x([]),g=async(e,s,t)=>{var c,m;try{let i=((c=a==null?void 0:a.penitenciaria)==null?void 0:c.id)??null,n=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,b=a.historyId;if(t&&(i=e,n=s),b&&i){o.value=!0;let N=await L({historyId:b,carcelId:i,categoryId:_,subCategoryId:23,embedDetail:!0,dimensionId:128});const k=P(N.items,i);r.push($(i,n,k))}}catch(i){console.log(i)}finally{t||(o.value=!1)}},D=async()=>{o.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),o.value=!1};return(e,s)=>(S(),C(T,null,{default:A(()=>[d(O,{title:h.value,"section-value":_},null,8,["title"]),d(B,{"active-spin":o.value},null,8,["active-spin"]),d(X,{baseFilter:_,multipleDisabled:!1,onExecuteMount:D,onExecuteAction:g,onExecuteRemove:M}),p("div",H,[d(j,{class:"subsection-trayectoria",title:h.value,"section-value":_,pointValue:v.value,pointTitle:"Reincidencia en la Cárcel",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),p("div",W,[p("div",q,[o.value?E("",!0):(S(),C(z,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:w.value,plotOptions:I.value,tooltip:F.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(Y,{class:"card-preguntas"},{default:A(()=>[G,J]),_:1})])])]),_:1}))}};export{oe as default};
