import{o as n,c as i,b as r,F as c,g as l,f as _,j as u,_ as m,m as s}from"./index-01c65d82.js";import{_ as f}from"./CHeaderBar-27cb1ce3.js";const p=r("span",null,"Si no es posible visualizar la sección, haga click en la siguiente opción:",-1),d=["title","src"],g={__name:"CIframe",props:{title:{type:String,default:""},source:{type:String,required:!0}},setup(e){const t=e,a=()=>{console.log(t.source),window.open(t.source,"_blank")};return(o,v)=>(n(),i(c,null,[r("div",{class:"c-iframe-on-error"},[p,r("button",{onClick:a,class:"btn agregar__archivo"},"Abrir en nueva pestaña ")]),r("iframe",{class:"c-iframe",title:e.title,src:e.source,frameborder:"0",allowfullscreen:""},`\r
    `,8,d)],64))}};const b="https://lookerstudio.google.com/embed/u/0/reporting/dd2b7ffe-61b8-430b-af08-f91bdd69127a/page/tXQTD",x={__name:"DimensionTerritorial",setup(e){const t=l("Dimensión territorial");return(a,o)=>(n(),_(m,{class:"grafic-content"},{default:u(()=>[s(f,{title:t.value},null,8,["title"]),s(g,{source:b})]),_:1}))}};export{x as default};
