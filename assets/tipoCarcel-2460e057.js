import{u as B,g as l,r as x,o as C,f as S,j as T,_ as E,m as u,n as L,b as d,a as N,l as O}from"./index-47b30902.js";import{_ as X}from"./CHeaderBar-8086222b.js";import{_ as Y}from"./CFilterbar-24b16cbf.js";import{_ as j}from"./subSideNav-7fd919fe.js";import{_ as z}from"./CCard-b923f4a4.js";import{_ as H}from"./CColunmChart-9de26bb9.js";import"./CButton-3fe15e8f.js";import"./CChartDonutSection-92782cbd.js";const W={class:"chart-section-principal"},q={class:"tipo-carcel-section"},R={class:"chart-section"},G=d("span",{class:"card-title"},"Pregunta",-1),J=d("span",{class:"question--value"},"Tipo de carcel",-1),m=7,le={__name:"tipoCarcel",setup(K){const o=B(),s=l(!1),_=l("Antecedentes y trayectorias / Tipo de carcel"),v=l(""),p=l([]),w=l({categories:["Tradicional","Concecionada"],crosshair:!1}),I=l({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),D=l({column:{pointPadding:.2,borderWidth:3}}),F=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=x([]),V=(e,i,t)=>x({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),h=()=>{let e=p.value.reduce((i,t)=>i+t.pointCarcel,0);e=e/p.value.length,e=Math.round(f(e)),v.value=e.toString()},f=e=>e?Math.round(e*100)/100:0,$=async e=>{s.value=!0;const i=n.filter(t=>t.id!==e);n.splice(0,n.length),p.value=p.value.filter(t=>t.carcelId!==e),h(),i.map(t=>n.push(t)),await o.sleep(50),s.value=!1},A=(e,i)=>{let t=0,c=0;for(let a=0;a<e.length;a++)e[a].value===0&&t++,e[a].value===1&&c++;const r=t+c;return p.value.push({carcelId:i,pointCarcel:Math.round(f(t*100/r))}),h(),[Math.round(f(t*100/r)),Math.round(f(c*100/r))]},y=async(e,i,t)=>{var c,r;try{let a=((c=o==null?void 0:o.penitenciaria)==null?void 0:c.id)??null,g=((r=o==null?void 0:o.penitenciaria)==null?void 0:r.description)??null,b=o.historyId;if(t&&(a=e,g=i),b&&a){s.value=!0;let P=await O({historyId:b,carcelId:a,categoryId:m,subCategoryId:23,embedDetail:!0,dimensionId:136});const k=A(P.items,a);n.push(V(a,g,k))}}catch(a){console.log(a)}finally{t||(s.value=!1)}},M=async()=>{s.value=!0,o.carcelesSelected&&o.carcelesSelected.length>0&&await Promise.all(o.carcelesSelected.map(async e=>await y(e.id,e.description,!0))),s.value=!1};return(e,i)=>(C(),S(E,null,{default:T(()=>[u(X,{title:_.value,"section-value":m},null,8,["title"]),u(L,{"active-spin":s.value},null,8,["active-spin"]),u(Y,{baseFilter:m,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:y,onExecuteRemove:$}),d("div",W,[u(j,{class:"subsection-trayectoria",title:_.value,"section-value":m,pointValue:v.value,pointTitle:"Tipo de cárcel",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),d("div",q,[d("div",R,[s.value?N("",!0):(C(),S(H,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:I.value,plotOptions:D.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(z,{class:"card-preguntas"},{default:T(()=>[G,J]),_:1})])])]),_:1}))}};export{le as default};
