import{u as k,g as i,r as h,o as y,f as x,j as b,_ as D,m as c,n as M,b as u,a as P,l as B}from"./index-77660dd1.js";import{_ as E}from"./CHeaderBar-420a9954.js";import{_ as L}from"./CFilterbar-697d0ee8.js";import{_ as O}from"./subSideNav-4b706314.js";import{_ as X}from"./CCard-f0f378fd.js";import{_ as Y}from"./CColunmChart-2227accc.js";import"./CButton-f7aa2ad4.js";import"./CChartDonutSection-366c452d.js";const z={class:"chart-section-principal"},R={class:"hogar-menores"},W={class:"chart-section"},j=u("span",{class:"card-title"},"Pregunta",-1),q=u("span",{class:"question--value"},"2. Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),p=7,se={__name:"hogarMenores",setup(G){const o=k(),n=i(!1),m=i("Trayectoria /  ¿estuvo en algún Hogar de menores o del Sename?"),f=i(""),S=i({categories:["Sí","No","No Asignado"],crosshair:!1}),V=i({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),w=i({column:{pointPadding:.2,borderWidth:3}}),A=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),C=e=>e?Math.round(e*100)/100:0,I=e=>{let s=0,a=0,r=0;for(let t=0;t<e.length;t++)e[t].value===0&&s++,e[t].value===1&&a++,e[t].value===-1&&(r+=e[t].value*-1);const d=e.length-r;return f.value=C(a*100/d),[a,s,r]},l=h([]),$=(e,s,a)=>h({id:e,name:s,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async e=>{n.value=!0;const s=l.filter(a=>a.id!==e);l.splice(0,l.length),s.map(a=>l.push(a)),await o.sleep(50),n.value=!1},_=async(e,s,a)=>{var r,d;try{let t=((r=o==null?void 0:o.penitenciaria)==null?void 0:r.id)??null,v=((d=o==null?void 0:o.penitenciaria)==null?void 0:d.description)??null,g=o.historyId;if(a&&(t=e,v=s),g&&t){n.value=!0;let H=await B({historyId:g,carcelId:t,categoryId:p,subCategoryId:23,embedDetail:!0,dimensionId:125});const N=I(H.items);l.push($(t,v,N))}}catch(t){console.log(t)}finally{a||(n.value=!1)}},T=async()=>{n.value=!0,o.carcelesSelected&&o.carcelesSelected.length>0&&await Promise.all(o.carcelesSelected.map(async e=>await _(e.id,e.description,!0))),n.value=!1};return(e,s)=>(y(),x(D,null,{default:b(()=>[c(E,{title:m.value,"section-value":p},null,8,["title"]),c(M,{"active-spin":n.value},null,8,["active-spin"]),c(L,{baseFilter:p,multipleDisabled:!1,onExecuteMount:T,onExecuteAction:_,onExecuteRemove:F}),u("div",z,[c(O,{class:"subsection-trayectoria",title:m.value,"section-value":p,pointValue:f.value,pointTitle:"2. Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",pointSubtitle:"",type:2},null,8,["title","pointValue","pointTitle"]),u("div",R,[u("div",W,[n.value?P("",!0):(y(),x(Y,{key:0,chartType:"bar",optionsAxisX:S.value,optionsAxisY:V.value,plotOptions:w.value,tooltip:A.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),c(X,{class:"card-preguntas"},{default:b(()=>[j,q]),_:1})])])]),_:1}))}};export{se as default};
