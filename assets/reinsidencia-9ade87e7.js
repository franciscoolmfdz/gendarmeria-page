import{g as l,u as k,r as x,o as S,f as A,j as V,_ as B,m as d,n as E,b as p,a as L,l as O}from"./index-6cde2442.js";import{_ as X}from"./CHeaderBar-2d6d0b63.js";import{_ as Y}from"./CFilterbar-5d2801c4.js";import{_ as z}from"./CCard-126910ad.js";import{_ as H}from"./subSideNav-9827078f.js";import{_ as R}from"./CColunmChart-4b73e99b.js";import"./CButton-7e8ab65d.js";import"./CChartDonutSection-d0252771.js";const W={class:"chart-section-principal"},j={class:"section-reincidencia"},q={class:"chart-section"},G=p("span",{class:"card-title"},"Pregunta",-1),J=p("span",{class:"question--value"},"5. Antes de estar en esta cárcel, ¿había estado preso(a)?",-1),_=7,ne={__name:"reinsidencia",setup(K){const v=l(""),u=l([]),a=k(),n=l(!1),h=l("Trayectoria /  Antes de estar en esta cárcel, ¿había estado preso(a)? (como adulto)"),w=l({categories:["Sí","No","No Asignado"],crosshair:!1}),C=l({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),I=l({column:{pointPadding:.2,borderWidth:3}}),F=l({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),f=e=>e?Math.round(e*100)/100:0,$=(e,o,t)=>x({id:e,name:o,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),M=async e=>{n.value=!0;const o=c.filter(t=>t.id!==e);c.splice(0,c.length),u.value=u.value.filter(t=>t.carcelId!==e),y(),o.map(t=>c.push(t)),await a.sleep(50),n.value=!1},y=()=>{let e=u.value.reduce((o,t)=>o+t.pointCarcel,0);e=e/u.value.length,e=Math.round(f(e)),v.value=e.toString()},T=(e,o)=>{let t=0,r=0,m=0;for(let i=0;i<e.length;i++)e[i].value===0&&t++,e[i].value===1&&r++,e[i].value===-1&&(m+=e[i].value*-1);const s=t+r;return u.value.push({carcelId:o,pointCarcel:Math.round(f(r*100/s))}),y(),[Math.round(f(r*100/s)),Math.round(f(t*100/s))]},c=x([]),g=async(e,o,t)=>{var r,m;try{let s=((r=a==null?void 0:a.penitenciaria)==null?void 0:r.id)??null,i=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,b=a.historyId;if(t&&(s=e,i=o),b&&s){n.value=!0;let N=await O({historyId:b,carcelId:s,categoryId:_,subCategoryId:23,embedDetail:!0,dimensionId:128});const P=T(N.items,s);c.push($(s,i,P))}}catch(s){console.log(s)}finally{t||(n.value=!1)}},D=async()=>{n.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),n.value=!1};return(e,o)=>(S(),A(B,null,{default:V(()=>[d(X,{title:h.value,"section-value":_},null,8,["title"]),d(E,{"active-spin":n.value},null,8,["active-spin"]),d(Y,{baseFilter:_,multipleDisabled:!1,onExecuteMount:D,onExecuteAction:g,onExecuteRemove:M}),p("div",W,[d(H,{class:"subsection-trayectoria",title:h.value,"section-value":_,pointValue:v.value,pointTitle:"5. Antes de estar en esta cárcel, ¿había estado preso(a)?",pointSubtitle:"",type:2},null,8,["title","pointValue","pointTitle"]),p("div",j,[p("div",q,[n.value?L("",!0):(S(),A(R,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:C.value,plotOptions:I.value,tooltip:F.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(z,{class:"card-preguntas"},{default:V(()=>[G,J]),_:1})])])]),_:1}))}};export{ne as default};
