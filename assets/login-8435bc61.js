import{r as u,o as a,c as l,a as _,b as s,w as n,v as c,d as p,e as m,f as v}from"./index-71331f0e.js";import{p as f}from"./user-3ea660b0.js";const h={class:"row class-login"},g=s("div",{class:"reinsercion-logos"},[s("div",{class:"reinsercion-logos-data"}),s("div",{class:"reinsercion-logos-shield"})],-1),w=s("div",{class:"container title-login"},[s("h3",null,"Ingreso de usuario"),s("hr")],-1),y={key:0,class:"col s12 m7"},b=s("div",{class:"card horizontal"},[s("div",{class:"card-stacked"},[s("div",{class:"card-content"},[s("h5",null,"usuario o password inválidos")])])],-1),k=[b],x={class:"row"},B={class:"input-field col s12"},U=s("label",{for:"email"},"Email",-1),V={class:"input-field col s12"},C=s("label",{for:"password"},"Password",-1),I=s("button",{class:"waves-effect waves-light btn",type:"submit"}," Ingresar ",-1),N={__name:"CLogin",setup(d){const e=u({username:"",password:"",errors:!1}),i=async()=>{if(e.password.length>=2&&e.username!="")try{const o=await f(e);o?o!=null&&o.code&&o.code===401?e.errors=!0:(e.errors=!1,console.log(o),localStorage.setItem("user",JSON.stringify(o)),m.push("/")):e.errors=!0}catch(o){console.log(o)}else return};return(o,t)=>(a(),l("div",h,[g,w,e.errors?(a(),l("div",y,k)):_("",!0),s("form",{onSubmit:t[2]||(t[2]=p(r=>i(),["prevent"])),class:"col s12 section-submit"},[s("div",x,[s("div",B,[n(s("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.username=r),id:"email",type:"email",class:"validate"},null,512),[[c,e.username,void 0,{trim:!0}]]),U]),s("div",V,[n(s("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>e.password=r),id:"password",type:"password",class:"validate"},null,512),[[c,e.password,void 0,{trim:!0}]]),C])]),I],32)]))}},L={__name:"login",setup(d){return(e,i)=>(a(),v(N))}};export{L as default};
