import{r as c,d as g,o as y,e as b,w as u,_ as O,b as d,a as e,f as T}from"./index-909a904c.js";import{_ as k}from"./CSpinner-02a6450e.js";import{_ as L}from"./CHeaderBar-ce8cbd6a.js";import{u as V,_ as z,a as x}from"./CCard-7ec801a1.js";import{_ as B}from"./CColunmChart-dd59c009.js";import{g as N}from"./dimensionHistory-b6bfb333.js";import"./exporting-89b1efd4.js";import"./api-7944baea.js";const X={class:"trato-internos"},Y={class:"chart-section"},H=e("span",{class:"card-title"},"Promedio respuestas de trato con otros internos",-1),M=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=e("span",{class:"card-title"},"Preguntas",-1),U=e("span",{class:"question--value"},"4.1 En esta cárcel me llevo bien con otros internos",-1),W=e("span",{class:"question--value"},"4.2 En esta cárcel me siento inseguro o amenazado",-1),j=e("span",{class:"question--value"},"4.3 Siento que soy tratado con respeto por otros internos",-1),G=e("span",{class:"question--value"},"4.4 En esta cárcel se abusa de los internos más débiles",-1),J=e("span",{class:"question--value"},"4.5 En esta cárcel me siento seguro de agresiones de otros internos",-1),K=e("span",{class:"question--value"},"4.6 En esta cárcel tengo amigos que me ayudan",-1),Q=e("span",{class:"question--value"},"4.7 En esta cárcel temo por mi integridad física ",-1),q=1,de={__name:"TratoInternos",setup(Z){const t=V(),o=c(!1),E=c("Calidad de vida de los internos / Trato con otros internos"),S=c({categories:["4.1","4.2","4.3","4.4","4.5","4.6","4.7"],crosshair:!1}),w=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),I=c({column:{pointPadding:.2,borderWidth:3}}),P=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),i=g([]),D=(s,l,a)=>g({id:s,name:l,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async s=>{o.value=!0;const l=i.filter(a=>a.id!==s);i.splice(0,i.length),l.map(a=>i.push(a)),await t.sleep(50),o.value=!1},p=async(s,l,a)=>{var _,m;try{let r=((_=t==null?void 0:t.penitenciaria)==null?void 0:_.id)??null,f=((m=t==null?void 0:t.penitenciaria)==null?void 0:m.description)??null,v=t.historyId;if(a&&(r=s,f=l),v&&r){o.value=!0;let A=await N({historyId:v,carcelId:r,categoryId:1,subCategoryId:4});const h=[];A.filter(n=>n.poundUsed===1).map(n=>{const C=n!=null&&n.promPound?Math.round((n==null?void 0:n.promPound)*100)/100:0;h.push(C)}),i.push(D(r,f,h))}}catch(r){console.log(r)}finally{a||(o.value=!1)}},$=async()=>{o.value=!0,t.carcelesSelected&&t.carcelesSelected.length>0&&await Promise.all(t.carcelesSelected.map(async s=>await p(s.id,s.description,!0))),o.value=!1};return(s,l)=>(y(),b(O,null,{default:u(()=>[d(L,{title:E.value,"section-value":q},null,8,["title"]),d(k,{"active-spin":o.value},null,8,["active-spin"]),d(z,{baseFilter:q,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:p,onExecuteRemove:F}),e("div",X,[e("div",Y,[d(x,{class:"card-information"},{default:u(()=>[H,M]),_:1}),o.value?T("",!0):(y(),b(B,{key:0,optionsAxisX:S.value,optionsAxisY:w.value,plotOptions:I.value,tooltip:P.value,series:i},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(x,{class:"card-preguntas"},{default:u(()=>[R,U,W,j,G,J,K,Q]),_:1})])]),_:1}))}};export{de as default};
