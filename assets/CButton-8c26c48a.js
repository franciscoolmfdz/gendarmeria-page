import{o as n,c as s,t as i}from"./index-8d4f2d0d.js";const a=["disabled"],d={__name:"CButton",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["executeAction"],setup(t,{emit:o}){return(l,e)=>(n(),s("button",{class:"c-button",onClick:e[0]||(e[0]=c=>o("executeAction")),disabled:t.disabled},i(t.title),9,a))}};export{d as _};
