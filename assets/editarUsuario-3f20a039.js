import{g as o,h as y,y as w,E as U,o as u,f as r,j as C,_ as b,m as n,b as i,w as d,v as p,z as c,a as V}from"./index-45ccebc1.js";import{_ as k}from"./CHeaderBar-26ed6fbc.js";import{_ as B}from"./CButton-a3569a76.js";import{C as E}from"./CSearch-29b72996.js";const N={class:"section-form"},$=99,x="Editar usuario",M={__name:"editarUsuario",setup(D){const _=o("Editar usuario"),l=o(null),f=o([{id:3,description:"Director nacional"},{id:4,description:"Director regional"},{id:5,description:"Alcaide"},{id:2,description:"Gestor"}]),m=o([]),v=o([]),s=o(null),g=()=>{};return y(async()=>{m.value=await w(),v.value=await U()}),(a,e)=>(u(),r(b,{class:"admin-content"},{default:C(()=>[n(k,{title:_.value,"section-value":$},null,8,["title"]),i("div",N,[n(E),d(i("input",{class:"search__content--text","onUpdate:modelValue":e[0]||(e[0]=t=>a.inputValue=t),placeholder:"Ingresar nombre usuario",type:"text"},null,512),[[p,a.inputValue]]),n(c,{options:f.value,modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t)},null,8,["options","modelValue"]),s.value===4?(u(),r(c,{key:0,options:v.value,modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t)},null,8,["options","modelValue"])):V("",!0),s.value===5?(u(),r(c,{key:1,options:m.value,modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value=t)},null,8,["options","modelValue"])):V("",!0),d(i("input",{class:"search__content--text","onUpdate:modelValue":e[4]||(e[4]=t=>a.inputValue=t),placeholder:"Nueva password",type:"password"},null,512),[[p,a.inputValue]]),d(i("input",{class:"search__content--text","onUpdate:modelValue":e[5]||(e[5]=t=>a.inputValue=t),placeholder:"Reingrese nueva password",type:"password"},null,512),[[p,a.inputValue]]),n(B,{title:x,onExecuteAction:g,disabled:a.blockButton},null,8,["disabled"])])]),_:1}))}};export{M as default};
