import{e as r,H as e,a as i}from"./exporting-18a7442d.js";import{r as a,o as n,c as p,b as c,g as u,u as l,V as _}from"./index-56444a41.js";const d={class:"chart-column"},h={class:"chart-column__content"},b={__name:"CColunmChart",props:{title:{type:String,default:""},subtitle:{type:String,default:""},optionsAxisX:{type:Object,required:!0},optionsAxisY:{type:Object,required:!0},plotOptions:{type:Object,required:!0},tooltip:{type:Object,required:!0},series:{type:Array,required:!0},pane:{type:Object,default:null}},setup(s){const t=s;r(e),i(e);const o=a({chart:{type:"column"},title:{text:t.title},subtitle:{text:t.subtitle},xAxis:t.optionsAxisX,yAxis:t.optionsAxisY,plotOptions:t.plotOptions,tooltip:t.tooltip,series:t.series});return(y,m)=>(n(),p("div",d,[c("div",h,[u(l(_),{type:"chart",options:o,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0},null,8,["options"])])]))}};export{b as _};
