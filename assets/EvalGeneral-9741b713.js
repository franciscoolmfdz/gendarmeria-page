import{e as p,r as t,o as u,d as _,w as s,b as a,a as e,_ as m}from"./index-3d57f866.js";import{_ as f}from"./CHeaderBar-e4adc1c3.js";import{_ as v,a as o}from"./CCard-cf723d98.js";import{_ as h}from"./CColunmChart-7c55dacb.js";import"./CSearch-4027810f.js";import"./exporting-f1478c18.js";const g={class:"evaluacion-general"},x={class:"chart-section"},b=e("span",{class:"card-title"},"Promedio respuestas evaluación general",-1),y=e("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",-1),A=e("span",{class:"card-title"},"Preguntas",-1),C=e("span",{class:"question--value"},"8.1 A pesar de todo, le he podido dar un sentido a mi vida en esta cárcel",-1),q=e("span",{class:"question--value"},"8.2 Siento que estar acá me ha ayudado a salir adelante",-1),O=p({__name:"EvalGeneral",setup(E){const i=t("Calidad de vida de los internos / Evaluación general"),n=t({categories:["8.1","8.2"],crosshair:!1}),l=t({min:0,allowDecimals:!1,title:{text:"Escala de frecuencia"}}),r=t({column:{pointPadding:.2,borderWidth:3}}),c=t({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),d=t([{name:"C.C.P. DE COLINA I",data:[67.5,32.5]}]);return(P,$)=>(u(),_(m,null,{default:s(()=>[a(f,{title:i.value,subMenuActive:""},null,8,["title"]),a(v),e("div",g,[e("div",x,[a(o,{class:"card-information"},{default:s(()=>[b,y]),_:1}),a(h,{optionsAxisX:n.value,optionsAxisY:l.value,plotOptions:r.value,tooltip:c.value,series:d.value},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"])]),a(o,{class:"card-preguntas"},{default:s(()=>[A,C,q]),_:1})])]),_:1}))}});export{O as default};
