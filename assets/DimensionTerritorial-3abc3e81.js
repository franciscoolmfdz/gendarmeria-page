import{o as i,c as a,r as n,e as c,w as o,_ as l,b as r}from"./index-71af1fdf.js";import{_}from"./CHeaderBar-12f01208.js";const u=["title","src"],m={__name:"CIframe",props:{title:{type:String,default:""},source:{type:String,required:!0}},setup(e){return(t,s)=>(i(),a("iframe",{class:"c-iframe",title:e.title,src:e.source,frameborder:"0",allowfullscreen:""},`\r
    `,8,u))}};const p="https://maps.google.com/maps?width=109&height=885&hl=en&q=centro penitenciario chile&t=&z=10&ie=UTF8&iwloc=B&output=embed",g={__name:"DimensionTerritorial",setup(e){const t=n("Dimensión territorial");return(s,f)=>(i(),c(l,null,{default:o(()=>[r(_,{title:t.value},null,8,["title"]),r(m,{source:p})]),_:1}))}};export{g as default};