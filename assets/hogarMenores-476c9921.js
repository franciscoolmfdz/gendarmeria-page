import{u as N,g as i,r as x,o as S,f as C,j as V,_ as O,m as p,n as T,b as d,a as B,l as E}from"./index-c9e0618f.js";import{_ as L}from"./CHeaderBar-331bbde6.js";import{_ as R}from"./CFilterbar-e0d95047.js";import{_ as X}from"./subSideNav-f082b54b.js";import{a as Y}from"./CChartDonutSection-d026bc1c.js";import{_ as j}from"./CColunmChart-f1c31e33.js";import"./CButton-34edb123.js";const z={class:"chart-section-principal"},W={class:"hogar-menores"},q={class:"chart-section"},G=d("span",{class:"card-title"},"Pregunta",-1),J=d("span",{class:"question--value"},"2. Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),f=7,ne={__name:"hogarMenores",setup(K){const o=N(),n=i(!1),_=i("Antecedentes y trayectorias / Residió en Sename cuando niño"),v=i(""),u=i([]),w=i({categories:["Sí","No"],crosshair:!1}),I=i({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),M=i({column:{pointPadding:.2,borderWidth:3}}),D=i({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),r=x([]),F=(e,s,t)=>x({id:e,name:s,data:t,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),h=()=>{let e=u.value.reduce((s,t)=>s+t.pointCarcel,0);e=e/u.value.length,e=Math.round(m(e)),v.value=e.toString()},m=e=>e?Math.round(e*100)/100:0,$=async e=>{n.value=!0;const s=r.filter(t=>t.id!==e);r.splice(0,r.length),u.value=u.value.filter(t=>t.carcelId!==e),h(),s.map(t=>r.push(t)),await o.sleep(50),n.value=!1},A=(e,s)=>{let t=0,l=0;for(let a=0;a<e.length;a++)e[a].value===0&&t++,e[a].value===1&&l++;const c=t+l;return u.value.push({carcelId:s,pointCarcel:Math.round(m(l*100/c))}),h(),[Math.round(m(l*100/c)),Math.round(m(t*100/c))]},y=async(e,s,t)=>{var l,c;try{let a=((l=o==null?void 0:o.penitenciaria)==null?void 0:l.id)??null,g=((c=o==null?void 0:o.penitenciaria)==null?void 0:c.description)??null,b=o.historyId;if(t&&(a=e,g=s),b&&a){n.value=!0;let k=await E({historyId:b,carcelId:a,categoryId:f,subCategoryId:23,embedDetail:!0,dimensionId:125});const H=A(k.items,a);r.push(F(a,g,H))}}catch(a){console.log(a)}finally{t||(n.value=!1)}},P=async()=>{n.value=!0,o.carcelesSelected&&o.carcelesSelected.length>0&&await Promise.all(o.carcelesSelected.map(async e=>await y(e.id,e.description,!0))),n.value=!1};return(e,s)=>(S(),C(O,null,{default:V(()=>[p(L,{title:_.value,"section-value":f},null,8,["title"]),p(T,{"active-spin":n.value},null,8,["active-spin"]),p(R,{baseFilter:f,multipleDisabled:!1,onExecuteMount:P,onExecuteAction:y,onExecuteRemove:$}),d("div",z,[p(X,{class:"subsection-trayectoria",title:_.value,"section-value":f,pointValue:v.value,pointTitle:"Residió en Sename cuando niño",pointSubtitle:"","point-is-percent":!0,"point-type":2},null,8,["title","pointValue"]),d("div",W,[d("div",q,[n.value?B("",!0):(S(),C(j,{key:0,chartType:"bar",optionsAxisX:w.value,optionsAxisY:I.value,plotOptions:M.value,tooltip:D.value,series:r},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),p(Y,{class:"card-preguntas"},{default:V(()=>[G,J]),_:1})])])]),_:1}))}};export{ne as default};
