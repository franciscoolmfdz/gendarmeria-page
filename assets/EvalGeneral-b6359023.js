import{i as C,h as c,r as y,o as g,f as x,j as u,_ as O,g as d,k as L,b as i,a as V,l as B}from"./index-c619b897.js";import{_ as N}from"./CHeaderBar-1d33da3e.js";import{_ as X}from"./CFilterbar-55fa5467.js";import{_ as b}from"./CCard-1c845476.js";import{_ as Y}from"./CColunmChart-24d17a08.js";import"./CSelect.vue_vue_type_style_index_0_lang-b9870a27.js";import"./CSelect-f9a2a604.js";import"./carceles-3b8ad7b2.js";import"./exporting-0eb74ff7.js";const z={class:"evaluacion-general"},G={class:"chart-section"},H=i("span",{class:"card-title"},"Promedio respuestas evaluación general",-1),M=i("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),R=i("span",{class:"card-title"},"Preguntas",-1),T=i("span",{class:"question--value"},"8.1 A pesar de todo, le he podido dar un sentido a mi vida en esta cárcel",-1),U=i("span",{class:"question--value"},"8.2 Siento que estar acá me ha ayudado a salir adelante",-1),S=1,ne={__name:"EvalGeneral",setup(W){const e=C(),a=c(!1),w=c("Calidad de vida de los internos / Evaluación general"),P=c({categories:["8.1","8.2"],crosshair:!1}),D=c({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),E=c({column:{pointPadding:.2,borderWidth:3}}),I=c({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),n=y([]),A=(t,l,s)=>y({id:t,name:l,data:s,dataLabels:{enabled:!0,color:"#fff",align:"center",y:70,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),F=async t=>{a.value=!0;const l=n.filter(s=>s.id!==t);n.splice(0,n.length),l.map(s=>n.push(s)),await e.sleep(50),a.value=!1},p=async(t,l,s)=>{var m,_;try{let r=((m=e==null?void 0:e.penitenciaria)==null?void 0:m.id)??null,f=((_=e==null?void 0:e.penitenciaria)==null?void 0:_.description)??null,v=e.historyId;if(s&&(r=t,f=l),v&&r){a.value=!0;let k=await B({historyId:v,carcelId:r,categoryId:1,subCategoryId:8});const h=[];k.filter(o=>o.poundUsed===1).map(o=>{const q=o!=null&&o.promPound?Math.round((o==null?void 0:o.promPound)*100)/100:0;h.push(q)}),n.push(A(r,f,h))}}catch(r){console.log(r)}finally{s||(a.value=!1)}},$=async()=>{a.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await Promise.all(e.carcelesSelected.map(async t=>await p(t.id,t.description,!0))),a.value=!1};return(t,l)=>(g(),x(O,null,{default:u(()=>[d(N,{title:w.value,"section-value":S},null,8,["title"]),d(L,{"active-spin":a.value},null,8,["active-spin"]),d(X,{baseFilter:S,multipleDisabled:!1,onExecuteMount:$,onExecuteAction:p,onExecuteRemove:F}),i("div",z,[i("div",G,[d(b,{class:"card-information"},{default:u(()=>[H,M]),_:1}),a.value?V("",!0):(g(),x(Y,{key:0,optionsAxisX:P.value,optionsAxisY:D.value,plotOptions:E.value,tooltip:I.value,series:n},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),d(b,{class:"card-preguntas"},{default:u(()=>[R,T,U]),_:1})])]),_:1}))}};export{ne as default};
