import{u as L,g as c,r as g,o as b,f as x,j as u,_ as O,l as p,m as E,b as t,a as R,k as V}from"./index-1482005a.js";import{_ as B}from"./CHeaderBar-46b15ae3.js";import{_ as M}from"./CFilterbar-feb28bc4.js";import{_ as S}from"./CCard-582b8853.js";import{_ as N}from"./CColunmChart-56bb9457.js";import"./CSelect.vue_vue_type_style_index_0_lang-024aa3d7.js";import"./CSelect-d1359523.js";import"./carceles-dec193d8.js";const T={class:"regimen-carcel"},X={class:"chart-section"},Y=t("span",{class:"card-title"},"Frecuencia respuestas Apoyo a la reinserción",-1),j=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),z=t("span",{class:"card-title"},"Preguntas",-1),H=t("span",{class:"question--value"},"fp30 Siento que mi trabajo contribuye a la reinserción",-1),U=t("span",{class:"question--value"},"fp33 Me siento respetado por los internos/as de esta cárcel",-1),W=t("span",{class:"question--value"},"fp34 Tengo una buena relación con los internos/as en esta prisión",-1),G=t("span",{class:"question--value"},"fp35 Los internos acuden a mí con sus problemas porque saben que los trataré de ayudar",-1),d=2,le={__name:"apoyoReinsercion",setup(J){const e=L(),a=c(!1),q=c("Calidad de vida de los funcionarios / Apoyo a la reinserción"),w=c({categories:["fp30","fp33","fp34","fp35"],crosshair:!1}),A=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),D=c({column:{pointPadding:.2,borderWidth:3}}),F=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),P=(s,l,o)=>g({id:s,name:l,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async s=>{a.value=!0;const l=n.filter(o=>o.id!==s);n.splice(0,n.length),l.map(o=>n.push(o)),await e.sleep(50),a.value=!1},f=async(s,l,o)=>{var _,m;try{let r=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.id)??null,v=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,h=e.historyId;if(o&&(r=s,v=l),h&&r){a.value=!0;let k=await V({historyId:h,carcelId:r,categoryId:d,subCategoryId:17});const y=[];k.filter(i=>i.poundUsed===1).map(i=>{const C=i!=null&&i.promPound?Math.round((i==null?void 0:i.promPound)*100)/100:0;y.push(C)}),n.push(P(r,v,y))}}catch(r){console.log(r)}finally{o||(a.value=!1)}},$=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async s=>await f(s.id,s.description,!0))),a.value=!1};return(s,l)=>(b(),x(O,null,{default:u(()=>[p(B,{title:q.value,"section-value":d},null,8,["title"]),p(E,{"active-spin":a.value},null,8,["active-spin"]),p(M,{baseFilter:d,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:f,onExecuteRemove:I}),t("div",T,[t("div",X,[p(S,{class:"card-information"},{default:u(()=>[Y,j]),_:1}),a.value?R("",!0):(b(),x(N,{key:0,optionsAxisX:w.value,optionsAxisY:A.value,plotOptions:D.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(S,{class:"card-preguntas"},{default:u(()=>[z,H,U,W,G]),_:1})])]),_:1}))}};export{le as default};