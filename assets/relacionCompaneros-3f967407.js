import{r,d as g,o as b,e as x,w as d,_ as k,b as p,a as i,f as E}from"./index-56c60ed9.js";import{_ as L}from"./CSpinner-05dd8aad.js";import{_ as R}from"./CHeaderBar-3e34db07.js";import{u as V,_ as j,a as w}from"./CCard-276c3707.js";import{_ as B}from"./CColunmChart-541ea562.js";import{g as M}from"./dimensionHistory-b6bfb333.js";import"./exporting-d5169d8a.js";import"./api-7944baea.js";const N={class:"regimen-carcel"},T={class:"chart-section"},X=i("span",{class:"card-title"},"Frecuencia respuestas Relación con compañeros/as de trabajo",-1),Y=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),z=i("span",{class:"card-title"},"Preguntas",-1),H=i("span",{class:"question--value"},"fp17 Trabajando en esta cárcel me siento apoyado por mis compañeros ",-1),U=i("span",{class:"question--value"},"fp18 Confío en mis colegas y ellos/as en mí en esta prisión",-1),W=i("span",{class:"question--value"},"fp19 Me siento respetado por los compañeros/as de esta prisión.",-1),u=2,ne={__name:"relacionCompaneros",setup(G){const e=V(),a=r(!1),S=r("Calidad de vida de los funcionarios / Relación con compañeros/as de trabajo"),C=r({categories:["fp17","fp18","fp19"],crosshair:!1}),D=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),I=(s,l,t)=>g({id:s,name:l,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async s=>{a.value=!0;const l=n.filter(t=>t.id!==s);n.splice(0,n.length),l.map(t=>n.push(t)),await e.sleep(50),a.value=!1},f=async(s,l,t)=>{var m,_;try{let c=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(t&&(c=s,v=l),h&&c){a.value=!0;let A=await M({historyId:h,carcelId:c,categoryId:u,subCategoryId:14});const y=[];A.filter(o=>o.poundUsed===1).map(o=>{const O=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;y.push(O)}),n.push(I(c,v,y))}}catch(c){console.log(c)}finally{t||(a.value=!1)}},q=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async s=>await f(s.id,s.description,!0))),a.value=!1};return(s,l)=>(b(),x(k,null,{default:d(()=>[p(R,{title:S.value,"section-value":u},null,8,["title"]),p(L,{"active-spin":a.value},null,8,["active-spin"]),p(j,{baseFilter:u,multipleDisabled:!1,onExecuteMount:q,onExecuteAction:f,onExecuteRemove:$}),i("div",N,[i("div",T,[p(w,{class:"card-information"},{default:d(()=>[X,Y]),_:1}),a.value?E("",!0):(b(),x(B,{key:0,optionsAxisX:C.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:P.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(w,{class:"card-preguntas"},{default:d(()=>[z,H,U,W]),_:1})])]),_:1}))}};export{ne as default};
