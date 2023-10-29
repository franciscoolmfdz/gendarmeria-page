import{i as C,h as r,r as y,o as g,f as b,j as d,_ as O,g as u,k as T,b as e,a as L,l as V}from"./index-c619b897.js";import{_ as B}from"./CHeaderBar-1d33da3e.js";import{_ as H}from"./CFilterbar-55fa5467.js";import{_ as x}from"./CCard-1c845476.js";import{_ as M}from"./CColunmChart-24d17a08.js";import"./CSelect.vue_vue_type_style_index_0_lang-b9870a27.js";import"./CSelect-f9a2a604.js";import"./carceles-3b8ad7b2.js";import"./exporting-0eb74ff7.js";const N={class:"trato-funcionarios"},X={class:"chart-section"},Y=e("span",{class:"card-title"},"Promedio respuestas de trato con funcionarios",-1),z=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=e("span",{class:"card-title"},"Preguntas",-1),U=e("span",{class:"question--value"},"5.1 Soy tratado con respeto por los funcionarios",-1),W=e("span",{class:"question--value"},"5.2 He recibido tratos humillantes en esta cárcel",-1),j=e("span",{class:"question--value"},"5.3 Soy tratado como un ser humano en esta cárcel",-1),G=e("span",{class:"question--value"},"5.4 En esta cárcel se abusa de los internos más débiles",-1),J=e("span",{class:"question--value"},"5.5 Me llevo bien con los gendarmes de mi módulo",-1),K=e("span",{class:"question--value"},"5.6 Siento que los funcionarios confían en mí",-1),Q=e("span",{class:"question--value"},"5.7 En esta cárcel los funcionarios son honestos",-1),Z=e("span",{class:"question--value"},"5.8 En esta cárcel recibo apoyo del personal cuando lo necesito",-1),ee=e("span",{class:"question--value"},"5.9 En esta cárcel los gendarmes se preocupan por mí",-1),q=1,_e={__name:"TratoFuncionarios",setup(se){const s=C(),o=r(!1),S=r("Calidad de vida de los internos / Trato con funcionario interno"),w=r({categories:["5.1","5.2","5.3","5.4","5.5","5.6","5.7"],crosshair:!1}),E=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),F=r({column:{pointPadding:.2,borderWidth:3}}),P=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),i=y([]),D=(t,l,a)=>y({id:t,name:l,data:a,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=async t=>{o.value=!0;const l=i.filter(a=>a.id!==t);i.splice(0,i.length),l.map(a=>i.push(a)),await s.sleep(50),o.value=!1},p=async(t,l,a)=>{var _,m;try{let c=((_=s==null?void 0:s.penitenciaria)==null?void 0:_.id)??null,f=((m=s==null?void 0:s.penitenciaria)==null?void 0:m.description)??null,h=s.historyId;if(a&&(c=t,f=l),h&&c){o.value=!0;let k=await V({historyId:h,carcelId:c,categoryId:1,subCategoryId:5});const v=[];k.filter(n=>n.poundUsed===1).map(n=>{const A=n!=null&&n.promPound?Math.round((n==null?void 0:n.promPound)*100)/100:0;v.push(A)}),i.push(D(c,f,v))}}catch(c){console.log(c)}finally{a||(o.value=!1)}},$=async()=>{o.value=!0,s.carcelesSelected&&s.carcelesSelected.length>0&&await Promise.all(s.carcelesSelected.map(async t=>await p(t.id,t.description,!0))),o.value=!1};return(t,l)=>(g(),b(O,null,{default:d(()=>[u(B,{title:S.value,"section-value":q},null,8,["title"]),u(T,{"active-spin":o.value},null,8,["active-spin"]),u(H,{baseFilter:q,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:p,onExecuteRemove:I}),e("div",N,[e("div",X,[u(x,{class:"card-information"},{default:d(()=>[Y,z]),_:1}),o.value?L("",!0):(g(),b(M,{key:0,optionsAxisX:w.value,optionsAxisY:E.value,plotOptions:F.value,tooltip:P.value,series:i},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),u(x,{class:"card-preguntas"},{default:d(()=>[R,U,W,j,G,J,K,Q,Z,ee]),_:1})])]),_:1}))}};export{_e as default};