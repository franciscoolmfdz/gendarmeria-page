import{u as k,g as i,r as x,o as S,f as C,j as V,_ as N,m as d,n as O,b as p,a as B,l as E}from"./index-268772aa.js";import{_ as L}from"./CHeaderBar-873738c0.js";import{_ as X}from"./CFilterbar-bf69c50e.js";import{_ as Y}from"./subSideNav-11a5ce54.js";import{_ as z}from"./CCard-23aa0275.js";import{_ as R}from"./CColunmChart-fc62ac14.js";import"./CButton-9395e1c7.js";import"./CChartDonutSection-d5669898.js";const W={class:"chart-section-principal"},j={class:"hogar-menores"},q={class:"chart-section"},G=p("span",{class:"card-title"},"Pregunta",-1),J=p("span",{class:"question--value"},"2. Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),f=7,ie={__name:"hogarMenores",setup(K){const o=k(),n=i(!1),_=i("Antecedentes y trayectorias / Residió en Sename cuando niño"),v=i(""),u=i([]),w=i({categories:["Sí","No"],crosshair:!1}),I=i({min:0,allowDecimals:!1,title:{text:""}}),M=i({column:{pointPadding:.2,borderWidth:3}}),D=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=x([]),F=(e,s,t)=>x({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),h=()=>{let e=u.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/u.value.length,e=Math.round(m(e)),v.value=e.toString()},m=e=>e?Math.round(e*100)/100:0,$=async e=>{n.value=!0;const s=r.filter(t=>t.id!==e);r.splice(0,r.length),u.value=u.value.filter(t=>t.carcelId!==e),h(),s.map(t=>r.push(t)),await o.sleep(50),n.value=!1},A=(e,s)=>{let t=0,l=0;for(let a=0;a<e.length;a++)e[a].value===0&&t++,e[a].value===1&&l++;const c=t+l;return u.value.push({carcelId:s,pointCarcel:Math.round(m(l*100/c))}),h(),[Math.round(m(l*100/c)),Math.round(m(t*100/c))]},g=async(e,s,t)=>{var l,c;try{let a=((l=o==null?void 0:o.penitenciaria)==null?void 0:l.id)??null,y=((c=o==null?void 0:o.penitenciaria)==null?void 0:c.description)??null,b=o.historyId;if(t&&(a=e,y=s),b&&a){n.value=!0;let P=await E({historyId:b,carcelId:a,categoryId:f,subCategoryId:23,embedDetail:!0,dimensionId:125});const T=A(P.items,a);r.push(F(a,y,T))}}catch(a){console.log(a)}finally{t||(n.value=!1)}},H=async()=>{n.value=!0,o.carcelesSelected&&o.carcelesSelected.length>0&&await Promise.all(o.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),n.value=!1};return(e,s)=>(S(),C(N,null,{default:V(()=>[d(L,{title:_.value,"section-value":f},null,8,["title"]),d(O,{"active-spin":n.value},null,8,["active-spin"]),d(X,{baseFilter:f,multipleDisabled:!1,onExecuteMount:H,onExecuteAction:g,onExecuteRemove:$}),p("div",W,[d(Y,{class:"subsection-trayectoria",title:_.value,"section-value":f,pointValue:v.value,pointTitle:"2. Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",pointSubtitle:"",type:2},null,8,["title","pointValue","pointTitle"]),p("div",j,[p("div",q,[n.value?B("",!0):(S(),C(R,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:I.value,plotOptions:M.value,tooltip:D.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(z,{class:"card-preguntas"},{default:V(()=>[G,J]),_:1})])])]),_:1}))}};export{ie as default};
