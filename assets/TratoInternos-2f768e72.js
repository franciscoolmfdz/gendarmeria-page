import{_ as p,a as u}from"./CHeaderBar-bee1a11e.js";import{_,a}from"./CCard-2612ec31.js";import{_ as m}from"./CColunmChart-560aaf8d.js";import{r as e,o as f,d as v,w as o,b as t,a as s}from"./index-76fa7c79.js";import"./CSearch-e92f4562.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./exporting-d763e76d.js";const h={class:"trato-internos"},g={class:"chart-section"},b=s("span",{class:"card-title"},"Promedio respuestas de trato con otros internos",-1),q=s("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),x=s("span",{class:"card-title"},"Preguntas",-1),y=s("span",{class:"question--value"},"4.1 En esta cárcel me llevo bien con otros internos",-1),E=s("span",{class:"question--value"},"4.2 En esta cárcel me siento inseguro o amenazado",-1),P=s("span",{class:"question--value"},"4.3 Siento que soy tratado con respeto por otros internos",-1),A=s("span",{class:"question--value"},"4.4 En esta cárcel se abusa de los internos más débiles",-1),T=s("span",{class:"question--value"},"4.5 En esta cárcel me siento seguro de agresiones de otros internos",-1),$=s("span",{class:"question--value"},"4.6 En esta cárcel tengo amigos que me ayudan",-1),k=s("span",{class:"question--value"},"4.7 En esta cárcel temo por mi integridad física ",-1),N={__name:"TratoInternos",setup(w){const n=e("Calidad de vida de los internos / Trato con otros internos"),i=e({categories:["4.1","4.2","4.3","4.4","4.5","4.6","4.7"],crosshair:!1}),r=e({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),c=e({column:{pointPadding:.2,borderWidth:3}}),l=e({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),d=e([{name:"Penitenciaría 1",data:[23.9,23.5,25.4,89.2,43,3,35.6]},{name:"Penitenciaría 2",data:[83.6,2.8,21.5,93.4,2,43.5,88]},{name:"Penitenciaría 3",data:[48.9,38.8,39.3,32.4,47,34.3,54]}]);return(B,F)=>(f(),v(p,null,{default:o(()=>[t(u,{title:n.value,subMenuActive:""},null,8,["title"]),t(_),s("div",h,[s("div",g,[t(a,{class:"card-information"},{default:o(()=>[b,q]),_:1}),t(m,{optionsAxisX:i.value,optionsAxisY:r.value,plotOptions:c.value,tooltip:l.value,series:d.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),t(a,{class:"card-preguntas"},{default:o(()=>[x,y,E,P,A,T,$,k]),_:1})])]),_:1}))}};export{N as default};