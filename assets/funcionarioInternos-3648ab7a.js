import{i as $,h as c,r as g,l as k,o as x,f as b,j as d,_ as L,g as p,b as n,a as V}from"./index-c7e60c0d.js";import{_ as B}from"./CHeaderBar-f802f93d.js";import{_ as N}from"./CFilterbar-a60f96d0.js";import{_ as S}from"./CCard-9caa2825.js";import{_ as R}from"./CColunmChart-46cb0204.js";import{g as X}from"./dimensionHistory-893adf31.js";import"./exporting-f3fb0e82.js";import"./api-ec658a74.js";const Y={class:"regimen-carcel"},z={class:"chart-section"},H=n("span",{class:"card-title"},"Frecuencia respuestas respeto y relación con los internos",-1),M=n("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),T=n("span",{class:"card-title"},"Preguntas",-1),U=n("span",{class:"question--value"},"fp31 En general, me preocupo por los internos/as",-1),W=n("span",{class:"question--value"},"fp32 Creo que el tema carcelario tiene raíces sociales",-1),u=2,ne={__name:"funcionarioInternos",setup(j){const e=$(),o=c(!1),w=c("Calidad de vida de los funcionarios / Respeto y relación con los internos"),I=c({categories:["fp31","fp32"],crosshair:!1}),C=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),D=c({column:{pointPadding:.2,borderWidth:3}}),F=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),i=g([]),P=(s,l,t)=>g({id:s,name:l,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),q=async s=>{o.value=!0;const l=i.filter(t=>t.id!==s);i.splice(0,i.length),l.map(t=>i.push(t)),await e.sleep(50),o.value=!1},f=async(s,l,t)=>{var m,_;try{let r=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(t&&(r=s,v=l),h&&r){o.value=!0;let E=await X({historyId:h,carcelId:r,categoryId:u,subCategoryId:18});const y=[];E.filter(a=>a.poundUsed===1).map(a=>{const O=a!=null&&a.promPound?Math.round((a==null?void 0:a.promPound)*100)/100:0;y.push(O)}),i.push(P(r,v,y))}}catch(r){console.log(r)}finally{t||(o.value=!1)}},A=async()=>{o.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async s=>await f(s.id,s.description,!0))),o.value=!1};return(s,l)=>{const t=k("c-spinner");return x(),b(L,null,{default:d(()=>[p(B,{title:w.value,"section-value":u},null,8,["title"]),p(t,{"active-spin":o.value},null,8,["active-spin"]),p(N,{baseFilter:u,multipleDisabled:!1,onExecuteMount:A,onExecuteAction:f,onExecuteRemove:q}),n("div",Y,[n("div",z,[p(S,{class:"card-information"},{default:d(()=>[H,M]),_:1}),o.value?V("",!0):(x(),b(R,{key:0,optionsAxisX:I.value,optionsAxisY:C.value,plotOptions:D.value,tooltip:F.value,series:i},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(S,{class:"card-preguntas"},{default:d(()=>[T,U,W]),_:1})])]),_:1})}}};export{ne as default};
