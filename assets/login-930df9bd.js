import{r as u,o as a,c as l,a as _,b as s,w as n,v as c,d as p,e as m,f as v}from"./index-ea41498e.js";import{p as f}from"./user-0c3adcf3.js";const h={class:"row class-login"},w=s("div",{class:"container"},[s("h1",null,"Ingreso de usuario"),s("hr")],-1),g={key:0,class:"col s12 m7"},y=s("div",{class:"card horizontal"},[s("div",{class:"card-stacked"},[s("div",{class:"card-content"},[s("h5",null,"usuario o password inválidos")])])],-1),b=[y],k={class:"row"},x={class:"input-field col s12"},B=s("label",{for:"email"},"Email",-1),U={class:"input-field col s12"},V=s("label",{for:"password"},"Password",-1),C=s("button",{class:"waves-effect waves-light btn",type:"submit"}," Ingresar ",-1),I={__name:"CLogin",setup(d){const e=u({username:"",password:"",errors:!1}),i=async()=>{if(e.password.length>=2&&e.username!="")try{const o=await f(e);o?o!=null&&o.code&&o.code===401?e.errors=!0:(e.errors=!1,console.log(o),localStorage.setItem("user",JSON.stringify(o)),m.push("/")):e.errors=!0}catch(o){console.log(o)}else return};return(o,t)=>(a(),l("div",h,[w,e.errors?(a(),l("div",g,b)):_("",!0),s("form",{onSubmit:t[2]||(t[2]=p(r=>i(),["prevent"])),class:"col s12"},[s("div",k,[s("div",x,[n(s("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.username=r),id:"email",type:"email",class:"validate"},null,512),[[c,e.username,void 0,{trim:!0}]]),B]),s("div",U,[n(s("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>e.password=r),id:"password",type:"password",class:"validate"},null,512),[[c,e.password,void 0,{trim:!0}]]),V])]),C],32)]))}},E={__name:"login",setup(d){return(e,i)=>(a(),v(I))}};export{E as default};
