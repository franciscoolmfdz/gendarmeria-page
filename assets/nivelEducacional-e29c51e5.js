import{i as X,h as n,r as w,o as F,f as A,j as h,_ as Y,g as d,b as c,a as z}from"./index-56444a41.js";import{_ as W}from"./CSpinner-f396d0ca.js";import{_ as j}from"./CHeaderBar-ce0ad327.js";import{_ as M}from"./CFilterbar-93b1efd1.js";import{_ as C}from"./CCard-394f244e.js";import{_ as R}from"./CColunmChart-728befc7.js";import{a as U}from"./dimensionHistory-893adf31.js";import"./exporting-18a7442d.js";import"./api-ec658a74.js";const G={class:"regimen-carcel"},J={class:"chart-section"},K=c("span",{class:"card-title"},"Suma de p3 ¿Hasta qué curso llegó (en la calle)?",-1),Q=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),Z=c("span",{class:"card-title"},"Pregunta",-1),E=c("span",{class:"question--value"},"FP 3 ¿Hasta qué curso llegó (en la calle)?",-1),y=7,ue={__name:"nivelEducacional",setup(ee){const s=X(),l=n(!1),P=n("Trayectoria / ¿Hasta qué curso llegó (en la calle)?"),$=n({categories:["sin estudios formales","primero básico","segundo básico","tercero básico","cuarto básico","quinto básico","sexto básico","séptimo básico","octavo básico","I medio","II medio","III medio","IV medio completo","superior incompleta","superior completa","no asignado"],crosshair:!1}),H=n({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),V=n({column:{pointPadding:.2,borderWidth:3}}),k=n({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),L=e=>{let i=0,a=0,u=0,p=0,o=0,m=0,f=0,g=0,v=0,_=0,x=0,I=0,B=0,S=0,D=0,q=null;for(let t=0;t<e.length;t++)e[t].value===0&&i++,e[t].value===1&&a++,e[t].value===2&&u++,e[t].value===3&&p++,e[t].value===4&&o++,e[t].value===5&&m++,e[t].value===6&&f++,e[t].value===7&&g++,e[t].value===8&&v++,e[t].value===9&&_++,e[t].value===10&&x++,e[t].value===11&&I++,e[t].value===12&&B++,e[t].value===13&&S++,e[t].value===14&&D++,e[t].value===-1&&(q+=e[t].value*-1);return[i,a,u,p,o,m,f,g,v,_,x,I,B,S,D,q]},r=w([]),N=(e,i,a)=>w({id:e,name:i,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),O=async e=>{l.value=!0;const i=r.filter(a=>a.id!==e);r.splice(0,r.length),i.map(a=>r.push(a)),await s.sleep(50),l.value=!1},b=async(e,i,a)=>{var u,p;try{let o=((u=s==null?void 0:s.penitenciaria)==null?void 0:u.id)??null,m=((p=s==null?void 0:s.penitenciaria)==null?void 0:p.description)??null,f=s.historyId;if(a&&(o=e,m=i),f&&o){l.value=!0;let v=await U({historyId:f,carcelId:o,categoryId:y,subCategoryId:23,embedDetail:!0,dimensionId:126});const _=L(v.items);r.push(N(o,m,_))}}catch(o){console.log(o)}finally{a||(l.value=!1)}},T=async()=>{l.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async e=>await b(e.id,e.description,!0))),l.value=!1};return(e,i)=>(F(),A(Y,null,{default:h(()=>[d(j,{title:P.value,"section-value":y},null,8,["title"]),d(W,{"active-spin":l.value},null,8,["active-spin"]),d(M,{baseFilter:y,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:b,onExecuteRemove:O}),c("div",G,[c("div",J,[d(C,{class:"card-information"},{default:h(()=>[K,Q]),_:1}),l.value?z("",!0):(F(),A(R,{key:0,optionsAxisX:$.value,optionsAxisY:H.value,plotOptions:V.value,tooltip:k.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(C,{class:"card-preguntas"},{default:h(()=>[Z,E]),_:1})])]),_:1}))}};export{ue as default};
