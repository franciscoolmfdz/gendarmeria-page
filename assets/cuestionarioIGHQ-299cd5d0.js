import{u as P,i as r,r as g,o as b,f as x,g as Q,_ as k,m as f,p as E,b as _,a as N,q as T}from"./index-70926910.js";import{_ as B}from"./subSideNav-490a0adb.js";import{_ as L}from"./CHeaderBar-a99216df.js";import{_ as O}from"./CFilterbar-589e7ba9.js";import"./CCard-3d6808c8.js";import{_ as R}from"./CColunmChart-eab0ad9e.js";import"./CButton-3d32abb2.js";const X={class:"chart-section-principal"},Y={class:"cuestionario-ghq-funcionario"},q={class:"chart-section"},v=2,ee={__name:"cuestionarioIGHQ",setup(z){const a=P(),s=r(!1),h=r("Calidad de vida de los funcionarios / Cuestionario de Salud GHQ-12 de Goldberg"),S=r("-");r(0);const I=r({categories:["Ausencia","Sospecha","Presencia","No asignado"],crosshair:!1}),w=r({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),D=r({column:{pointPadding:.2,borderWidth:3}}),G=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b>%</td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),c=g([]),C=(e,i,t)=>g({id:e,name:i,data:t,dataLabels:{enabled:!0,color:"#fff",align:"center",x:-15,style:{inside:!0,fontSize:"10px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}),V=async e=>{s.value=!0;const i=c.filter(t=>t.id!==e);c.splice(0,c.length),i.map(t=>c.push(t)),await a.sleep(50),s.value=!1},H=e=>{let i=e[0].recordId,t=0,n=0,l=0,o=0;for(let d=0;d<e.length;d++){let p=e[d];p.recordId==i&&p.pound>=0?o+=p.pound:(o<2?t++:o>2&&o<=6?n++:o>6&&l++,o=p.pound,i=p.recordId)}const u=t+n+l;return t=t/u*100,n=n/u*100,l=l/u*100,[m(t),m(n),m(l)]},m=e=>e?Math.round(e*100)/100:0,y=async(e,i,t)=>{var n,l;try{let o=((n=a==null?void 0:a.penitenciaria)==null?void 0:n.id)??null,u=((l=a==null?void 0:a.penitenciaria)==null?void 0:l.description)??null,d=a.historyId;if(t&&(o=e,u=i),d&&o){s.value=!0;let F=await T({historyId:d,carcelId:o,categoryId:2,subCategoryId:22,embedDetail:!0});const $=H(F.items);c.push(C(o,u,$))}}catch(o){console.log(o)}finally{t||(s.value=!1)}},A=async()=>{s.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await Promise.all(a.carcelesSelected.map(async e=>await y(e.id,e.description,!0))),s.value=!1};return(e,i)=>(b(),x(k,null,{default:Q(()=>[f(L,{title:h.value,"section-value":v},null,8,["title"]),f(E,{"active-spin":s.value},null,8,["active-spin"]),f(O,{baseFilter:v,multipleDisabled:!1,onExecuteMount:A,onExecuteAction:y,onExecuteRemove:V}),_("div",X,[f(B,{class:"subsection-funcionarios",title:h.value,"section-value":v,pointValue:S.value,pointTitle:"Cuestionario General de Salud GHQ-12 de Goldberg",pointSubtitle:"Promedio respuestas cuestionario General de Salud GHQ-12 de Goldberg"},null,8,["title","pointValue"]),_("div",Y,[_("div",q,[s.value?N("",!0):(b(),x(R,{key:0,chartType:"bar",optionsAxisX:I.value,optionsAxisY:w.value,plotOptions:D.value,tooltip:G.value,series:c},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])])])]),_:1}))}};export{ee as default};
