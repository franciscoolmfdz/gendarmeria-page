import{u as A,g as r,r as y,o as b,f as x,j as u,_ as C,l as d,m as O,b as i,a as E,k as L}from"./index-1482005a.js";import{_ as T}from"./CHeaderBar-46b15ae3.js";import{_ as V}from"./CFilterbar-feb28bc4.js";import{_ as q}from"./CCard-582b8853.js";import{_ as B}from"./CColunmChart-56bb9457.js";import"./CSelect.vue_vue_type_style_index_0_lang-024aa3d7.js";import"./CSelect-d1359523.js";import"./carceles-dec193d8.js";const N={class:"regimen-carcel"},X={class:"chart-section"},Y=i("span",{class:"card-title"},"Frecuencia respuestas Motivación y significado del trabajo",-1),z=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),H=i("span",{class:"card-title"},"Preguntas",-1),R=i("span",{class:"question--value"},"fp14 Me gusta venir a trabajar aquí",-1),U=i("span",{class:"question--value"},"fp15 Me siento orgulloso del trabajo que hago aquí",-1),W=i("span",{class:"question--value"},"fp16 Siento que mi trabajo aquí tiene un sentido",-1),p=2,ne={__name:"motivacionTrabajo",setup(G){const e=A(),a=r(!1),S=r("Calidad de vida de los funcionarios / Motivación y significado del trabajo"),j=r({categories:["fp14","fp15","fp16"],crosshair:!1}),w=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),D=r({column:{pointPadding:.2,borderWidth:3}}),F=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),P=(t,l,s)=>y({id:t,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async t=>{a.value=!0;const l=n.filter(s=>s.id!==t);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),a.value=!1},f=async(t,l,s)=>{var _,m;try{let c=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.id)??null,v=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.description)??null,h=e.historyId;if(s&&(c=t,v=l),h&&c){a.value=!0;let $=await L({historyId:h,carcelId:c,categoryId:p,subCategoryId:13});const g=[];$.filter(o=>o.poundUsed===1).map(o=>{const k=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;g.push(k)}),n.push(P(c,v,g))}}catch(c){console.log(c)}finally{s||(a.value=!1)}},M=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await f(t.id,t.description,!0))),a.value=!1};return(t,l)=>(b(),x(C,null,{default:u(()=>[d(T,{title:S.value,"section-value":p},null,8,["title"]),d(O,{"active-spin":a.value},null,8,["active-spin"]),d(V,{baseFilter:p,multipleDisabled:!1,onExecuteMount:M,onExecuteAction:f,onExecuteRemove:I}),i("div",N,[i("div",X,[d(q,{class:"card-information"},{default:u(()=>[Y,z]),_:1}),a.value?E("",!0):(b(),x(B,{key:0,optionsAxisX:j.value,optionsAxisY:w.value,plotOptions:D.value,tooltip:F.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(q,{class:"card-preguntas"},{default:u(()=>[H,R,U,W]),_:1})])]),_:1}))}};export{ne as default};
