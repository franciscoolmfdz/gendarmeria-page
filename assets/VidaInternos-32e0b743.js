import{o as n,c,a as t,b as e,u as _,V as d,r as u,d as p,w as s,_ as m}from"./index-4bf4a7de.js";import{_ as h}from"./CHeaderBar-922b50aa.js";import{_ as f,a as v}from"./CCard-5ae8440c.js";import{e as g,H as i,a as x}from"./exporting-f1cc372d.js";import"./CSearch-2f80ded9.js";const C={class:"chart-polar"},y={class:"chart-polar__content"},I={__name:"CPolarChart",setup(o){g(i),x(i);const a={chart:{polar:!0},title:{text:""},pane:{startAngle:0,endAngle:360},xAxis:{tickInterval:1,min:1,max:8,labels:{format:"{value}"}},yAxis:{min:0},plotOptions:{series:{pointStart:0,pointInterval:1},column:{pointPadding:0,groupPadding:0}},series:[{type:"line",name:"C.C.P. DE COLINA I",data:[8,7,6,5,4,3,2,6],pointPlacement:"between"}]};return(r,l)=>(n(),c("div",C,[t("div",y,[e(_(d),{type:"chart",options:a,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0})])]))}};const $={class:"chart-section"},b=t("span",{class:"card-title"},"Grafico calidad de vida de los internos",-1),A=t("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",-1),w={__name:"VidaInternos",setup(o){const a=u("Calidad de vida de los internos");return(r,l)=>(n(),p(m,null,{default:s(()=>[e(h,{title:a.value,subMenuActive:""},null,8,["title"]),e(f),t("div",$,[e(v,{class:"card-information"},{default:s(()=>[b,A]),_:1}),e(I)])]),_:1}))}};export{w as default};