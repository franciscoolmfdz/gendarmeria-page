import{u as N,g as r,r as h,o as y,f as x,j as v,_ as V,m as _,n as q,b as c,a as B,l as M}from"./index-68f8bedd.js";import{_ as O}from"./CHeaderBar-15eb3a90.js";import{_ as T}from"./CFilterbar-b73af337.js";import{_ as b}from"./CCard-428d3126.js";import{_ as X}from"./CColunmChart-8bdfd6bf.js";import"./CButton-40472355.js";const Y={class:"regimen-carcel"},z={class:"chart-section"},H=c("span",{class:"card-title"},"Suma de p1 ¿Cuántos años tiene actualmente?",-1),W=c("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),j=c("span",{class:"card-title"},"Pregunta",-1),R=c("span",{class:"question--value"},"FP 1 ¿Cuántos años tiene actualmente?",-1),d=7,ee={__name:"edadInternos",setup(U){const a=N(),i=r(!1),S=r("Trayectoria / ¿Cuántos años tiene actualmente?"),D=r({categories:["Menor a 20 años","Entre 20 a 30 años","Entre 30 a 40 años","Entre 40 a 50 años","Entre 50 a 60 años","Mayor a 60 años","No Asignado"],crosshair:!1}),I=r({min:0,allowDecimals:!1,title:{text:"Suma por categoría"}}),w=r({column:{pointPadding:.2,borderWidth:3}}),A=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),C=e=>{let o=0,s=0,u=0,m=0,n=0,p=0,f=0;for(let t=0;t<e.length;t++)e[t].value<20&&o++,e[t].value>=20&&e[t].value<30&&s++,e[t].value>=30&&e[t].value<40&&u++,e[t].value>=40&&e[t].value<50&&m++,e[t].value>=50&&e[t].value<=60&&n++,e[t].value>60&&p++,e[t].value===-1&&(f+=e[t].value*-1);return[o,s,u,m,n,p,f]},l=h([]),F=(e,o,s)=>h({id:e,name:o,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),P=async e=>{i.value=!0;const o=l.filter(s=>s.id!==e);l.splice(0,l.length),o.map(s=>l.push(s)),await a.sleep(50),i.value=!1},g=async(e,o,s)=>{var u,m;try{let n=((u=a==null?void 0:a.penitenciaria)==null?void 0:u.id)??null,p=((m=a==null?void 0:a.penitenciaria)==null?void 0:m.description)??null,f=a.historyId;if(s&&(n=e,p=o),f&&n){i.value=!0;let k=await M({historyId:f,carcelId:n,categoryId:d,subCategoryId:23,embedDetail:!0,dimensionId:124});const L=C(k.items);l.push(F(n,p,L))}}catch(n){console.log(n)}finally{s||(i.value=!1)}},$=async()=>{i.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await g(e.id,e.description,!0))),i.value=!1};return(e,o)=>(y(),x(V,null,{default:v(()=>[_(O,{title:S.value,"section-value":d},null,8,["title"]),_(q,{"active-spin":i.value},null,8,["active-spin"]),_(T,{baseFilter:d,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:g,onExecuteRemove:P}),c("div",Y,[c("div",z,[_(b,{class:"card-information"},{default:v(()=>[H,W]),_:1}),i.value?B("",!0):(y(),x(X,{key:0,optionsAxisX:D.value,optionsAxisY:I.value,plotOptions:w.value,tooltip:A.value,series:l},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),_(b,{class:"card-preguntas"},{default:v(()=>[j,R]),_:1})])]),_:1}))}};export{ee as default};
