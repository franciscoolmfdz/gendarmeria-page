import{u as N,g as r,r as S,o as C,f as A,j as I,_ as z,m,n as B,b as f,a as L,l as O}from"./index-6cde2442.js";import{_ as X}from"./CHeaderBar-2d6d0b63.js";import{_ as Y}from"./CFilterbar-5d2801c4.js";import{_ as H}from"./subSideNav-9827078f.js";import{_ as W}from"./CCard-126910ad.js";import{_ as j}from"./CColunmChart-4b73e99b.js";import"./CButton-7e8ab65d.js";import"./CChartDonutSection-d0252771.js";const q={class:"chart-section-principal"},J={class:"tiempo-encierro"},R={class:"chart-section"},G=f("span",{class:"card-title"},"Pregunta",-1),K=f("span",{class:"question--value"},"6. ¿Cuánto tiempo lleva en esta cárcel?",-1),v=7,ne={__name:"tiempoEncierro",setup(Q){const a=N(),l=r(!1),y=r("Trayectoria / ¿Cuánto tiempo lleva en esta cárcel?"),g=r(""),u=r([]),M=r({categories:["menos de 6 meses","entre 6 meses y 1 año","entre 1 y 2 años","más de 2 años","No asignado"],crosshair:!1}),w=r({min:0,allowDecimals:!1,title:{text:""}}),F=r({column:{pointPadding:0,borderWidth:3}}),T=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),b=()=>{let e=u.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/u.value.length,e=$(e),g.value=e.toString()},V=(e,s)=>{let t=0,p=0,d=0,i=0,_=0,o=0;for(let n=0;n<e.length;n++)e[n].value===1&&(t++,o++),e[n].value===2&&(p++,o++),e[n].value===3&&(d++,o++),e[n].value===4&&(i++,o++),e[n].value===-1&&(_+=e[n].value*-1);const h=[Math.round(t,o),Math.round(p,o),Math.round(d,o),Math.round(i,o)];return u.value.push({carcelId:s,pointCarcel:Math.max(...h)}),b(),h},$=e=>e?Math.round(e*100)/100:0,c=S([]),D=(e,s,t)=>S({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),E=async e=>{l.value=!0;const s=c.filter(t=>t.id!==e);c.splice(0,c.length),u.value=u.value.filter(t=>t.carcelId!==e),b(),s.map(t=>c.push(t)),await a.sleep(50),l.value=!1},x=async(e,s,t)=>{var p,d;try{let i=((p=a==null?void 0:a.penitenciaria)==null?void 0:p.id)??null,_=((d=a==null?void 0:a.penitenciaria)==null?void 0:d.description)??null,o=a.historyId;if(t&&(i=e,_=s),o&&i){l.value=!0;let n=await O({historyId:o,carcelId:i,categoryId:v,subCategoryId:23,embedDetail:!0,dimensionId:129});const k=V(n.items,i);c.push(D(i,_,k))}}catch(i){console.log(i)}finally{t||(l.value=!1)}},P=async()=>{l.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await x(e.id,e.description,!0))),l.value=!1};return(e,s)=>(C(),A(z,null,{default:I(()=>[m(X,{title:y.value,"section-value":v},null,8,["title"]),m(B,{"active-spin":l.value},null,8,["active-spin"]),m(Y,{baseFilter:v,multipleDisabled:!1,onExecuteMount:P,onExecuteAction:x,onExecuteRemove:E}),f("div",q,[m(H,{class:"subsection-trayectoria",title:y.value,"section-value":v,pointValue:g.value,pointTitle:"6. ¿Cuánto tiempo lleva en esta cárcel?",pointSubtitle:"",type:2},null,8,["title","pointValue","pointTitle"]),f("div",J,[f("div",R,[l.value?L("",!0):(C(),A(j,{key:0,chartType:"bar",optionsAxisX:M.value,optionsAxisY:w.value,plotOptions:F.value,tooltip:T.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),m(W,{class:"card-preguntas"},{default:I(()=>[G,K]),_:1})])])]),_:1}))}};export{ne as default};
