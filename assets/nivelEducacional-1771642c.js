import{u as G,g as r,r as $,o as N,f as V,j as T,_ as J,m as v,n as K,b as _,a as Q,l as U}from"./index-f4014f88.js";import{_ as Z}from"./CHeaderBar-d0b8e6b1.js";import{_ as E}from"./CFilterbar-afdcf436.js";import{_ as ee}from"./subSideNav-f84c82b1.js";import{_ as te}from"./CCard-b7de056c.js";import{g as ae}from"./constants-d2d1374d.js";import{_ as oe}from"./CColunmChart-edb9f83d.js";import"./CButton-3d9ac940.js";import"./CChartDonutSection-68954dd9.js";const le={class:"chart-section-principal"},ie={class:"section-nivel-educ"},se={class:"chart-section"},ne=_("span",{class:"card-title"},"Pregunta",-1),re=_("span",{class:"question--value"},"3. ¿Hasta qué curso llegó (en la calle)?",-1),g=7,ge={__name:"nivelEducacional",setup(ce){const l=G(),n=r(!1),M=r("Antecedentes y trayectorias / Nivel educacional (en la calle)"),x=r(""),p=r([]),k=r({categories:["sin estudios formales","primero básico","segundo básico","tercero básico","cuarto básico","quinto básico","sexto básico","séptimo básico","octavo básico","I medio","II medio","III medio","IV medio completo","superior incompleta","superior completa","no asignado"],crosshair:!1}),q=r({min:0,allowDecimals:!1,title:{text:"Porcentaje de la población penal"}}),H=r({column:{pointPadding:.2,borderWidth:3}}),L=r({headerFormat:'<span style="font-size:10px">{point.key}%</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),O=e=>e?Math.round(e*100)/100:0,u=$([]),X=(e,i,o)=>$({id:e,name:i,data:o,dataLabels:{enabled:!0,color:"#000",align:"center",x:10,pointFormat:'<tr><td style="padding:0"><b>{point.y}%</b></td></tr>',style:{inside:!1,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),I=()=>{let e=p.value.reduce((o,c)=>o+c.pointCarcel,0);e=e/p.value.length,e=Math.round(O(e));const i=ae(e);x.value=i},Y=async e=>{n.value=!0;const i=u.filter(o=>o.id!==e);u.splice(0,u.length),p.value=p.value.filter(o=>o.carcelId!==e),I(),i.map(o=>u.push(o)),await l.sleep(50),n.value=!1},j=(e,i)=>{let o=0,c=0,d=0,s=0,m=0,f=0,y=0,h=0,b=0,C=0,S=0,D=0,w=0,A=0,F=0,W=null,P=0,a=0;for(let t=0;t<e.length;t++)e[t].value===-1?W+=e[t].value*-1:(P+=e[t].value,a++),e[t].value===0&&o++,e[t].value===1&&c++,e[t].value===2&&d++,e[t].value===3&&s++,e[t].value===4&&m++,e[t].value===5&&f++,e[t].value===6&&y++,e[t].value===7&&h++,e[t].value===8&&b++,e[t].value===9&&C++,e[t].value===10&&S++,e[t].value===11&&D++,e[t].value===12&&w++,e[t].value===13&&A++,e[t].value===14&&F++;const R=[Math.round(o*100/a),Math.round(c*100/a),Math.round(d*100/a),Math.round(s*100/a),Math.round(m*100/a),Math.round(f*100/a),Math.round(y*100/a),Math.round(h*100/a),Math.round(b*100/a),Math.round(C*100/a),Math.round(S*100/a),Math.round(D*100/a),Math.round(w*100/a),Math.round(A*100/a),Math.round(F*90/a)];return p.value.push({carcelId:i,pointCarcel:Math.round(P/a)}),I(),R},B=async(e,i,o)=>{var c,d;try{let s=((c=l==null?void 0:l.penitenciaria)==null?void 0:c.id)??null,m=((d=l==null?void 0:l.penitenciaria)==null?void 0:d.description)??null,f=l.historyId;if(o&&(s=e,m=i),f&&s){n.value=!0;let h=await U({historyId:f,carcelId:s,categoryId:g,subCategoryId:23,embedDetail:!0,dimensionId:126});const b=j(h.items,s);u.push(X(s,m,b))}}catch(s){console.log(s)}finally{o||(n.value=!1)}},z=async()=>{n.value=!0,l.carcelesSelected&&l.carcelesSelected.length>0&&await Promise.all(l.carcelesSelected.map(async e=>await B(e.id,e.description,!0))),n.value=!1};return(e,i)=>(N(),V(J,null,{default:T(()=>[v(Z,{title:M.value,"section-value":g},null,8,["title"]),v(K,{"active-spin":n.value},null,8,["active-spin"]),v(E,{baseFilter:g,multipleDisabled:!1,onExecuteMount:z,onExecuteAction:B,onExecuteRemove:Y}),_("div",le,[v(ee,{class:"section-nivel-educacional",title:M.value,"section-value":g,"point-label":x.value,"point-disabled":!0,pointTitle:"Nivel educacional (en la calle)",pointSubtitle:"luna","point-type":3},null,8,["title","point-label","pointTitle"]),_("div",ie,[_("div",se,[n.value?Q("",!0):(N(),V(oe,{key:0,chartType:"bar",optionsAxisX:k.value,optionsAxisY:q.value,plotOptions:H.value,tooltip:L.value,series:u},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))]),v(te,{class:"card-preguntas"},{default:T(()=>[ne,re]),_:1})])])]),_:1}))}};export{ge as default};
