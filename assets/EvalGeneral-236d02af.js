import{a as p,_ as u}from"./CHeaderBar-bee1a11e.js";import{_,a as o}from"./CCard-2612ec31.js";import{_ as m}from"./CColunmChart-560aaf8d.js";import{e as f,r as a,o as v,d as h,w as s,b as t,a as e}from"./index-76fa7c79.js";import"./CSearch-e92f4562.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./exporting-d763e76d.js";const g={class:"evaluacion-general"},x={class:"chart-section"},b=e("span",{class:"card-title"},"Promedio respuestas evaluación general",-1),y=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),P=e("span",{class:"card-title"},"Preguntas",-1),A=e("span",{class:"question--value"},"8.1 A pesar de todo, le he podido dar un sentido a mi vida en esta cárcel",-1),q=e("span",{class:"question--value"},"8.2 Siento que estar acá me ha ayudado a salir adelante",-1),L=f({__name:"EvalGeneral",setup($){const i=a("Calidad de vida de los internos / Evaluación general"),n=a({categories:["8.1","8.2"],crosshair:!1}),l=a({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),r=a({column:{pointPadding:.2,borderWidth:3}}),c=a({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),d=a([{name:"Penitenciaría 1",data:[67.5,32.5]},{name:"Penitenciaría 2",data:[84.6,15.4]},{name:"Penitenciaría 3",data:[48.9,52.1]}]);return(E,k)=>(v(),h(u,null,{default:s(()=>[t(p,{title:i.value,subMenuActive:""},null,8,["title"]),t(_),e("div",g,[e("div",x,[t(o,{class:"card-information"},{default:s(()=>[b,y]),_:1}),t(m,{optionsAxisX:n.value,optionsAxisY:l.value,plotOptions:r.value,tooltip:c.value,series:d.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),t(o,{class:"card-preguntas"},{default:s(()=>[P,A,q]),_:1})])]),_:1}))}});export{L as default};
