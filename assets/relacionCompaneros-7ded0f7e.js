import{i as O,h as r,r as g,o as b,f as x,j as d,_ as j,g as p,k as E,b as i,a as L,l as R}from"./index-c619b897.js";import{_ as V}from"./CHeaderBar-1d33da3e.js";import{_ as B}from"./CFilterbar-55fa5467.js";import{_ as S}from"./CCard-1c845476.js";import{_ as M}from"./CColunmChart-24d17a08.js";import"./CSelect.vue_vue_type_style_index_0_lang-b9870a27.js";import"./CSelect-f9a2a604.js";import"./carceles-3b8ad7b2.js";import"./exporting-0eb74ff7.js";const N={class:"regimen-carcel"},T={class:"chart-section"},X=i("span",{class:"card-title"},"Frecuencia respuestas Relación con compañeros/as de trabajo",-1),Y=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),z=i("span",{class:"card-title"},"Preguntas",-1),H=i("span",{class:"question--value"},"fp17 Trabajando en esta cárcel me siento apoyado por mis compañeros ",-1),U=i("span",{class:"question--value"},"fp18 Confío en mis colegas y ellos/as en mí en esta prisión",-1),W=i("span",{class:"question--value"},"fp19 Me siento respetado por los compañeros/as de esta prisión.",-1),u=2,le={__name:"relacionCompaneros",setup(G){const e=O(),a=r(!1),w=r("Calidad de vida de los funcionarios / Relación con compañeros/as de trabajo"),C=r({categories:["fp17","fp18","fp19"],crosshair:!1}),D=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=g([]),I=(s,l,t)=>g({id:s,name:l,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),$=async s=>{a.value=!0;const l=n.filter(t=>t.id!==s);n.splice(0,n.length),l.map(t=>n.push(t)),await e.sleep(50),a.value=!1},m=async(s,l,t)=>{var f,_;try{let c=((f=e==null?void 0:e.penitenciaria)==null?void 0:f.id)??null,v=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,h=e.historyId;if(t&&(c=s,v=l),h&&c){a.value=!0;let q=await R({historyId:h,carcelId:c,categoryId:u,subCategoryId:14});const y=[];q.filter(o=>o.poundUsed===1).map(o=>{const A=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;y.push(A)}),n.push(I(c,v,y))}}catch(c){console.log(c)}finally{t||(a.value=!1)}},k=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async s=>await m(s.id,s.description,!0))),a.value=!1};return(s,l)=>(b(),x(j,null,{default:d(()=>[p(V,{title:w.value,"section-value":u},null,8,["title"]),p(E,{"active-spin":a.value},null,8,["active-spin"]),p(B,{baseFilter:u,multipleDisabled:!1,onExecuteMount:k,onExecuteAction:m,onExecuteRemove:$}),i("div",N,[i("div",T,[p(S,{class:"card-information"},{default:d(()=>[X,Y]),_:1}),a.value?L("",!0):(b(),x(M,{key:0,optionsAxisX:C.value,optionsAxisY:D.value,plotOptions:F.value,tooltip:P.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(S,{class:"card-preguntas"},{default:d(()=>[z,H,U,W]),_:1})])]),_:1}))}};export{le as default};