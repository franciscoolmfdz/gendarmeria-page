import{o as n,c as i,b as r,F as c,h as l,f as _,j as u,_ as f,g as s}from"./index-e11d2db0.js";import{_ as m}from"./CHeaderBar-7430ddcb.js";const p=r("span",null,"Si no es posible visualizar la sección, haga click en la siguiente opción:",-1),d=["title","src"],g={__name:"CIframe",props:{title:{type:String,default:""},source:{type:String,required:!0}},setup(e){const t=e,a=()=>{console.log(t.source),window.open(t.source,"_blank")};return(o,v)=>(n(),i(c,null,[r("div",{class:"c-iframe-on-error"},[p,r("button",{onClick:a,class:"btn agregar__archivo"},"Abrir en nueva pestaña ")]),r("iframe",{class:"c-iframe",title:e.title,src:e.source,frameborder:"0",allowfullscreen:""},`\r
    `,8,d)],64))}};const b="https://lookerstudio.google.com/u/0/reporting/dd2b7ffe-61b8-430b-af08-f91bdd69127a/page/tXQTD?s=kvtvr4Sl938",x={__name:"DimensionTerritorial",setup(e){const t=l("Dimensión territorial");return(a,o)=>(n(),_(f,null,{default:u(()=>[s(m,{title:t.value},null,8,["title"]),s(g,{source:b})]),_:1}))}};export{x as default};
