import{o as a,c as i,r as n,e as l,w as o,_,b as r}from"./index-986a4269.js";import{_ as c}from"./CHeaderBar-e3b0e061.js";const m=["title","src"],u={__name:"CIframe",props:{title:{type:String,default:""},source:{type:String,required:!0}},setup(e){return(t,s)=>(a(),i("iframe",{class:"c-iframe",title:e.title,src:e.source,frameborder:"0",allowfullscreen:""},`\r
    `,8,m))}};const f="https://maps.google.com/maps?width=109&height=885&hl=en&q=la moneda&t=&z=10&ie=UTF8&iwloc=B&output=embed",g={__name:"DimensionTerritorial",setup(e){const t=n("Dimensión territorial");return(s,p)=>(a(),l(_,null,{default:o(()=>[r(c,{title:t.value},null,8,["title"]),r(u,{source:f})]),_:1}))}};export{g as default};
