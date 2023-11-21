import{u as z,g as r,r as I,o as A,f as C,j as D,_ as B,m as _,n as L,b as h,a as O,l as X}from"./index-47b30902.js";import{_ as Y}from"./CHeaderBar-8086222b.js";import{_ as j}from"./CFilterbar-24b16cbf.js";import{_ as H}from"./CCard-b923f4a4.js";import{_ as W}from"./subSideNav-7fd919fe.js";import{_ as q}from"./CColunmChart-9de26bb9.js";import"./CButton-3fe15e8f.js";import"./CChartDonutSection-92782cbd.js";const R={class:"chart-section-principal"},G={class:"edad-internos"},J={class:"chart-section"},K=h("span",{class:"card-title"},"Pregunta",-1),Q=h("span",{class:"question--value"},"1. ¿Cuántos años tiene actualmente?",-1),y=7,le={__name:"edadInternos",setup(U){const n=z(),i=r(!1),b=r("Antecedentes y trayectorias / Edad del interno"),x=r(""),p=r([]),w=r({categories:["Menor a 20 años","Entre 20 a 30 años","Entre 30 a 40 años","Entre 40 a 50 años","Entre 50 a 60 años","Mayor a 60 años","No Asignado"],crosshair:!1}),F=r({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),P=r({column:{pointPadding:.2,borderWidth:3}}),$=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),u=I([]),V=(e,o,a)=>I({id:e,name:o,data:a,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),c=e=>e?Math.round(e*100)/100:0,k=async e=>{i.value=!0;const o=u.filter(a=>a.id!==e);u.splice(0,u.length),p.value=p.value.filter(a=>a.carcelId!==e),M(),o.map(a=>u.push(a)),await n.sleep(50),i.value=!1},M=()=>{let e=p.value.reduce((o,a)=>o+a.pointCarcel,0);e=e/p.value.length,e=Math.round(c(e)),x.value=e.toString()+" Años"},N=(e,o)=>{let a=0,d=0,m=0,s=0,f=0,v=0,g=0,l=0;for(let t=0;t<e.length;t++)e[t].value>0&&(g+=e[t].value,l++),e[t].value<20&&e[t].value>0&&a++,e[t].value>=20&&e[t].value<30&&d++,e[t].value>=30&&e[t].value<40&&m++,e[t].value>=40&&e[t].value<50&&s++,e[t].value>=50&&e[t].value<=60&&f++,e[t].value>60&&v++;return p.value.push({carcelId:o,pointCarcel:Math.round(g/l)}),M(),[Math.round(c(a*100/l)),Math.round(c(d*100/l)),Math.round(c(m*100/l)),Math.round(c(s*100/l)),Math.round(c(f*100/l)),Math.round(c(v*100/l))]},S=async(e,o,a)=>{var d,m;try{let s=((d=n==null?void 0:n.penitenciaria)==null?void 0:d.id)??null,f=((m=n==null?void 0:n.penitenciaria)==null?void 0:m.description)??null,v=n.historyId;if(a&&(s=e,f=o),v&&s){i.value=!0;let l=await X({historyId:v,carcelId:s,categoryId:y,subCategoryId:23,embedDetail:!0,dimensionId:124});const t=N(l.items,s);u.push(V(s,f,t))}}catch(s){console.log(s)}finally{a||(i.value=!1)}},T=async()=>{i.value=!0,n.carcelesSelected&&n.carcelesSelected.length>0&&await Promise.all(n.carcelesSelected.map(async e=>await S(e.id,e.description,!0))),i.value=!1};return(e,o)=>(A(),C(B,null,{default:D(()=>[_(Y,{title:b.value,"section-value":y},null,8,["title"]),_(L,{"active-spin":i.value},null,8,["active-spin"]),_(j,{baseFilter:y,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:S,onExecuteRemove:k}),h("div",R,[_(W,{class:"subsection-trayectoria",title:b.value,"section-value":y,"point-label":x.value,"point-disabled":!0,pointTitle:"Edad del interno",pointSubtitle:"",type:2},null,8,["title","point-label"]),h("div",G,[h("div",J,[i.value?O("",!0):(A(),C(q,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:F.value,plotOptions:P.value,tooltip:$.value,series:u},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),_(H,{class:"card-preguntas"},{default:D(()=>[K,Q]),_:1})])])]),_:1}))}};export{le as default};
