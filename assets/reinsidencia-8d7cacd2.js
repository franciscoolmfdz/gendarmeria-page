import{g as l,u as k,r as x,o as S,f as A,j as C,_ as B,m as d,n as E,b as p,a as L,l as O}from"./index-268772aa.js";import{_ as R}from"./CHeaderBar-873738c0.js";import{_ as X}from"./CFilterbar-bf69c50e.js";import{_ as Y}from"./CCard-23aa0275.js";import{_ as z}from"./subSideNav-11a5ce54.js";import{_ as H}from"./CColunmChart-fc62ac14.js";import"./CButton-9395e1c7.js";import"./CChartDonutSection-d5669898.js";const W={class:"chart-section-principal"},j={class:"section-reincidencia"},q={class:"chart-section"},G=p("span",{class:"card-title"},"Pregunta",-1),J=p("span",{class:"question--value"},"5. Antes de estar en esta cárcel, ¿había estado preso(a)?",-1),_=7,ne={__name:"reinsidencia",setup(K){const v=l(""),u=l([]),a=k(),n=l(!1),h=l("Antecedentes y trayectorias /  Reincidencia en la Cárcel"),V=l({categories:["Sí","No","No Asignado"],crosshair:!1}),w=l({min:0,allowDecimals:!1,title:{text:""}}),I=l({column:{pointPadding:.2,borderWidth:3}}),F=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),f=e=>e?Math.round(e*100)/100:0,$=(e,i,t)=>x({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),M=async e=>{n.value=!0;const i=r.filter(t=>t.id!==e);r.splice(0,r.length),u.value=u.value.filter(t=>t.carcelId!==e),y(),i.map(t=>r.push(t)),await a.sleep(50),n.value=!1},y=()=>{let e=u.value.reduce((i,t)=>i+t.pointCarcel,0);e=e/u.value.length,e=Math.round(f(e)),v.value=e.toString()},D=(e,i)=>{let t=0,c=0,m=0;for(let o=0;o<e.length;o++)e[o].value===0&&t++,e[o].value===1&&c++,e[o].value===-1&&(m+=e[o].value*-1);const s=t+c;return u.value.push({carcelId:i,pointCarcel:Math.round(f(c*100/s))}),y(),[Math.round(f(c*100/s)),Math.round(f(t*100/s))]},r=x([]),g=async(e,i,t)=>{var c,m;try{let s=((c=a==null?void 0:a.penitenciaria)==null?void 0:c.id)??null,o=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,b=a.historyId;if(t&&(s=e,o=i),b&&s){n.value=!0;let P=await O({historyId:b,carcelId:s,categoryId:_,subCategoryId:23,embedDetail:!0,dimensionId:128});const T=D(P.items,s);r.push($(s,o,T))}}catch(s){console.log(s)}finally{t||(n.value=!1)}},N=async()=>{n.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),n.value=!1};return(e,i)=>(S(),A(B,null,{default:C(()=>[d(R,{title:h.value,"section-value":_},null,8,["title"]),d(E,{"active-spin":n.value},null,8,["active-spin"]),d(X,{baseFilter:_,multipleDisabled:!1,onExecuteMount:N,onExecuteAction:g,onExecuteRemove:M}),p("div",W,[d(z,{class:"subsection-trayectoria",title:h.value,"section-value":_,pointValue:v.value,pointTitle:"5. Antes de estar en esta cárcel, ¿había estado preso(a)?",pointSubtitle:"",type:2},null,8,["title","pointValue","pointTitle"]),p("div",j,[p("div",q,[n.value?L("",!0):(S(),A(H,{key:0,chartType:"bar",optionsAxisX:V.value,optionsAxisY:w.value,plotOptions:I.value,tooltip:F.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(Y,{class:"card-preguntas"},{default:C(()=>[G,J]),_:1})])])]),_:1}))}};export{ne as default};
