import{e as r,H as e,a as i}from"./exporting-9f76ea7f.js";import{d as a,o as n,c as p,a as c,b as u,u as l,V as d}from"./index-835fa660.js";const _={class:"chart-column"},h={class:"chart-column__content"},b={__name:"CColunmChart",props:{title:{type:String,default:""},subtitle:{type:String,default:""},optionsAxisX:{type:Object,required:!0},optionsAxisY:{type:Object,required:!0},plotOptions:{type:Object,required:!0},tooltip:{type:Object,required:!0},series:{type:Array,required:!0},pane:{type:Object,default:null}},setup(s){const t=s;r(e),i(e);const o=a({chart:{type:"column"},title:{text:t.title},subtitle:{text:t.subtitle},xAxis:t.optionsAxisX,yAxis:t.optionsAxisY,plotOptions:t.plotOptions,tooltip:t.tooltip,series:t.series});return(y,m)=>(n(),p("div",_,[c("div",h,[u(l(d),{type:"chart",options:o,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0},null,8,["options"])])]))}};export{b as _};
