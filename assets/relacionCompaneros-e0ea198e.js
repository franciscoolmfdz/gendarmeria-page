import{i as j,h as c,r as g,o as b,f as x,j as d,_ as k,g as p,b as i,a as E}from"./index-56444a41.js";import{_ as L}from"./CSpinner-f396d0ca.js";import{_ as R}from"./CHeaderBar-ce0ad327.js";import{_ as V}from"./CFilterbar-93b1efd1.js";import{_ as S}from"./CCard-394f244e.js";import{_ as B}from"./CColunmChart-728befc7.js";import{g as M}from"./dimensionHistory-893adf31.js";import"./exporting-18a7442d.js";import"./api-ec658a74.js";const N={class:"regimen-carcel"},T={class:"chart-section"},X=i("span",{class:"card-title"},"Frecuencia respuestas Relación con compañeros/as de trabajo",-1),Y=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),z=i("span",{class:"card-title"},"Preguntas",-1),H=i("span",{class:"question--value"},"fp17 Trabajando en esta cárcel me siento apoyado por mis compañeros ",-1),U=i("span",{class:"question--value"},"fp18 Confío en mis colegas y ellos/as en mí en esta prisión",-1),W=i("span",{class:"question--value"},"fp19 Me siento respetado por los compañeros/as de esta prisión.",-1),u=2,le={__name:"relacionCompaneros",setup(G){const e=j(),a=c(!1),w=c("Calidad de vida de los funcionarios / Relación con compañeros/as de trabajo"),C=c({categories:["fp17","fp18","fp19"],crosshair:!1}),D=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=c({column:{pointPadding:.2,borderWidth:3}}),P=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),I=(s,l,t)=>g({id:s,name:l,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async s=>{a.value=!0;const l=n.filter(t=>t.id!==s);n.splice(0,n.length),l.map(t=>n.push(t)),await e.sleep(50),a.value=!1},m=async(s,l,t)=>{var f,_;try{let r=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(t&&(r=s,v=l),h&&r){a.value=!0;let A=await M({historyId:h,carcelId:r,categoryId:u,subCategoryId:14});const y=[];A.filter(o=>o.poundUsed===1).map(o=>{const O=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;y.push(O)}),n.push(I(r,v,y))}}catch(r){console.log(r)}finally{t||(a.value=!1)}},q=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async s=>await m(s.id,s.description,!0))),a.value=!1};return(s,l)=>(b(),x(k,null,{default:d(()=>[p(R,{title:w.value,"section-value":u},null,8,["title"]),p(L,{"active-spin":a.value},null,8,["active-spin"]),p(V,{baseFilter:u,multipleDisabled:!1,onExecuteMount:q,onExecuteAction:m,onExecuteRemove:$}),i("div",N,[i("div",T,[p(S,{class:"card-information"},{default:d(()=>[X,Y]),_:1}),a.value?E("",!0):(b(),x(B,{key:0,optionsAxisX:C.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:P.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(S,{class:"card-preguntas"},{default:d(()=>[z,H,U,W]),_:1})])]),_:1}))}};export{le as default};
