import{i as L,h as c,r as g,o as y,f as b,j as d,_ as O,g as u,b as e,a as k}from"./index-3d38bb09.js";import{_ as V}from"./CSpinner-448ba0a9.js";import{_ as B}from"./CHeaderBar-91227b8c.js";import{_ as H}from"./CFilterbar-14ba97f5.js";import{_ as q}from"./CCard-a3a9bcd7.js";import{_ as M}from"./CColunmChart-e4e1c29e.js";import{g as N}from"./dimensionHistory-893adf31.js";import"./exporting-8b41a059.js";import"./api-ec658a74.js";const X={class:"funcionamiento-carcel"},Y={class:"chart-section"},j=e("span",{class:"card-title"},"Promedio respuestas funcionamiento de la carcel",-1),z=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=e("span",{class:"card-title"},"Preguntas",-1),T=e("span",{class:"question--value"},"7.1 Mi vida en esta cárcel es aburrida ",-1),U=e("span",{class:"question--value"},"7.2 En esta cárcel he sufrido mucho ",-1),W=e("span",{class:"question--value"},"7.3 En este lugar he pensado en el suicidio ",-1),G=e("span",{class:"question--value"},"7.4 Hay mucho consumo de drogas en esta cárcel ",-1),J=e("span",{class:"question--value"},"7.5 Acá te mandan al castigo por cualquier cosa ",-1),K=e("span",{class:"question--value"},"7.6 Siento que esta cárcel funciona bien ",-1),Q=e("span",{class:"question--value"},"7.7 El ambiente de esta cárcel es es tenso ",-1),Z=e("span",{class:"question--value"},"7.8 En esta cárcel las cosas se mueven con plata ",-1),ee=e("span",{class:"question--value"},"7.9 Los gendarmes son justos en su trato con nosotros aquí ",-1),se=e("span",{class:"question--value"},"7.10 Aquí tratan bien a las visitas ",-1),x=1,me={__name:"FuncionamientoCarcel",setup(te){const s=L(),a=c(!1),S=c("Calidad de vida de los internos / Funcionamiento de la carcel"),F=c({categories:["7.1","7.2","7.3","7.4","7.5","7.6","7.7","7.8","7.9","7.10"],crosshair:!1}),w=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),E=c({column:{pointPadding:.2,borderWidth:3}}),A=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),i=g([]),C=(t,n,o)=>g({id:t,name:n,data:o,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),D=async t=>{a.value=!0;const n=i.filter(o=>o.id!==t);i.splice(0,i.length),n.map(o=>i.push(o)),await s.sleep(50),a.value=!1},p=async(t,n,o)=>{var _,m;try{let l=((_=s==null?void 0:s.penitenciaria)==null?void 0:_.id)??null,f=((m=s==null?void 0:s.penitenciaria)==null?void 0:m.description)??null,v=s.historyId;if(o&&(l=t,f=n),v&&l){a.value=!0;let P=await N({historyId:v,carcelId:l,categoryId:1,subCategoryId:7});const h=[];P.filter(r=>r.poundUsed===1).map(r=>{const $=Math.round((r==null?void 0:r.promPound)*100)/100;h.push($)}),i.push(C(l,f,h))}}catch(l){console.log(l)}finally{o||(a.value=!1)}},I=async()=>{a.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async t=>await p(t.id,t.description,!0))),a.value=!1};return(t,n)=>(y(),b(O,null,{default:d(()=>[u(B,{title:S.value,"section-value":x},null,8,["title"]),u(V,{"active-spin":a.value},null,8,["active-spin"]),u(H,{baseFilter:x,multipleDisabled:!1,onExecuteMount:I,onExecuteAction:p,onExecuteRemove:D}),e("div",X,[e("div",Y,[u(q,{class:"card-information"},{default:d(()=>[j,z]),_:1}),a.value?k("",!0):(y(),b(M,{key:0,optionsAxisX:F.value,optionsAxisY:w.value,plotOptions:E.value,tooltip:A.value,series:i},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(q,{class:"card-preguntas"},{default:d(()=>[R,T,U,W,G,J,K,Q,Z,ee,se]),_:1})])]),_:1}))}};export{me as default};
