import{u as z,g as r,r as I,o as M,f as C,j as D,_ as B,m as _,n as L,b as h,a as O,l as X}from"./index-252043c9.js";import{_ as Y}from"./CHeaderBar-59194ce0.js";import{_ as j}from"./CFilterbar-a4cd4de9.js";import{a as H}from"./CChartDonutSection-3a081ac5.js";import{_ as W}from"./subSideNav-ae799e0b.js";import{_ as q}from"./CColunmChart-d19b5d28.js";import"./CButton-d596cb39.js";const R={class:"chart-section-principal"},G={class:"edad-internos"},J={class:"chart-section"},K=h("span",{class:"card-title"},"Pregunta",-1),Q=h("span",{class:"question--value"},"1. ¿Cuántos años tiene actualmente?",-1),y=7,se={__name:"edadInternos",setup(U){const o=z(),i=r(!1),b=r("Antecedentes y trayectorias / Edad del interno"),x=r(""),p=r([]),w=r({categories:["18 - 25 Años","26 - 33 años","34 - 41 años","42 - 49 años","50 - 65 años","66 o más","No Asignado"],crosshair:!1}),F=r({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),P=r({column:{pointPadding:.2,borderWidth:3}}),$=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),u=I([]),V=(e,n,a)=>I({id:e,name:n,data:a,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),c=e=>e?Math.round(e*100)/100:0,k=async e=>{i.value=!0;const n=u.filter(a=>a.id!==e);u.splice(0,u.length),p.value=p.value.filter(a=>a.carcelId!==e),S(),n.map(a=>u.push(a)),await o.sleep(50),i.value=!1},S=()=>{let e=p.value.reduce((n,a)=>n+a.pointCarcel,0);e=e/p.value.length,e=Math.round(c(e)),x.value=e.toString()+" Años"},N=(e,n)=>{let a=0,d=0,m=0,s=0,f=0,v=0,g=0,l=0;for(let t=0;t<e.length;t++)e[t].value>0&&(g+=e[t].value,l++),e[t].value<=25&&e[t].value>0&&a++,e[t].value>=26&&e[t].value<=33&&d++,e[t].value>=34&&e[t].value<=41&&m++,e[t].value>=42&&e[t].value<=49&&s++,e[t].value>=50&&e[t].value<=65&&f++,e[t].value>66&&v++;return p.value.push({carcelId:n,pointCarcel:Math.round(g/l)}),S(),[Math.round(c(a*100/l)),Math.round(c(d*100/l)),Math.round(c(m*100/l)),Math.round(c(s*100/l)),Math.round(c(f*100/l)),Math.round(c(v*100/l))]},A=async(e,n,a)=>{var d,m;try{let s=((d=o==null?void 0:o.penitenciaria)==null?void 0:d.id)??null,f=((m=o==null?void 0:o.penitenciaria)==null?void 0:m.description)??null,v=o.historyId;if(a&&(s=e,f=n),v&&s){i.value=!0;let l=await X({historyId:v,carcelId:s,categoryId:y,subCategoryId:23,embedDetail:!0,dimensionId:124});const t=N(l.items,s);u.push(V(s,f,t))}}catch(s){console.log(s)}finally{a||(i.value=!1)}},T=async()=>{i.value=!0,o.carcelesSelected&&o.carcelesSelected.length>0&&await Promise.all(o.carcelesSelected.map(async e=>await A(e.id,e.description,!0))),i.value=!1};return(e,n)=>(M(),C(B,{class:"section-edad-internos"},{default:D(()=>[_(Y,{title:b.value,"section-value":y},null,8,["title"]),_(L,{"active-spin":i.value},null,8,["active-spin"]),_(j,{baseFilter:y,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:A,onExecuteRemove:k}),h("div",R,[_(W,{class:"subsection-trayectoria",title:b.value,"section-value":y,"point-label":x.value,"point-disabled":!0,pointTitle:"Edad del interno",pointSubtitle:"",type:2},null,8,["title","point-label"]),h("div",G,[h("div",J,[i.value?O("",!0):(M(),C(q,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:F.value,plotOptions:P.value,tooltip:$.value,series:u},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),_(H,{class:"card-preguntas"},{default:D(()=>[K,Q]),_:1})])])]),_:1}))}};export{se as default};
