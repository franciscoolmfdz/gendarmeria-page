import{u as k,g as i,r as S,o as b,f as C,j as V,_ as N,m as p,n as O,b as d,a as B,l as E}from"./index-d5d29b93.js";import{_ as L}from"./CHeaderBar-c99abf49.js";import{_ as X}from"./CFilterbar-6fdaab9f.js";import{_ as Y}from"./subSideNav-7690126a.js";import{_ as z}from"./CCard-fa753b4a.js";import{_ as W}from"./CColunmChart-9503d52d.js";import"./CButton-1f0b74cb.js";import"./CChartDonutSection-be9d7933.js";const j={class:"chart-section-principal"},q={class:"hogar-menores"},R={class:"chart-section"},G=d("span",{class:"card-title"},"Pregunta",-1),J=d("span",{class:"question--value"},"2. Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),f=7,ie={__name:"hogarMenores",setup(K){const o=k(),n=i(!1),_=i("Trayectoria /  ¿estuvo en algún Hogar de menores o del Sename?"),v=i(""),u=i([]),w=i({categories:["Sí","No"],crosshair:!1}),I=i({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),D=i({column:{pointPadding:.2,borderWidth:3}}),M=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=S([]),$=(e,s,t)=>S({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),h=()=>{let e=u.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/u.value.length,e=m(e),v.value=e.toString()},m=e=>e?Math.round(e*100)/100:0,F=async e=>{n.value=!0;const s=r.filter(t=>t.id!==e);r.splice(0,r.length),u.value=u.value.filter(t=>t.carcelId!==e),h(),s.map(t=>r.push(t)),await o.sleep(50),n.value=!1},H=(e,s)=>{let t=0,l=0;for(let a=0;a<e.length;a++)e[a].value===0&&t++,e[a].value===1&&l++;const c=t+l;return u.value.push({carcelId:s,pointCarcel:Math.round(m(l*100/c))}),h(),[Math.round(m(l*100/c)),Math.round(m(t*100/c))]},g=async(e,s,t)=>{var l,c;try{let a=((l=o==null?void 0:o.penitenciaria)==null?void 0:l.id)??null,y=((c=o==null?void 0:o.penitenciaria)==null?void 0:c.description)??null,x=o.historyId;if(t&&(a=e,y=s),x&&a){n.value=!0;let A=await E({historyId:x,carcelId:a,categoryId:f,subCategoryId:23,embedDetail:!0,dimensionId:125});const P=H(A.items,a);r.push($(a,y,P))}}catch(a){console.log(a)}finally{t||(n.value=!1)}},T=async()=>{n.value=!0,o.carcelesSelected&&o.carcelesSelected.length>0&&await Promise.all(o.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),n.value=!1};return(e,s)=>(b(),C(N,null,{default:V(()=>[p(L,{title:_.value,"section-value":f},null,8,["title"]),p(O,{"active-spin":n.value},null,8,["active-spin"]),p(X,{baseFilter:f,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:g,onExecuteRemove:F}),d("div",j,[p(Y,{class:"subsection-trayectoria",title:_.value,"section-value":f,pointValue:v.value,pointTitle:"2. Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",pointSubtitle:"",type:2},null,8,["title","pointValue","pointTitle"]),d("div",q,[d("div",R,[n.value?B("",!0):(b(),C(W,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:I.value,plotOptions:D.value,tooltip:M.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(z,{class:"card-preguntas"},{default:V(()=>[G,J]),_:1})])])]),_:1}))}};export{ie as default};
