import{h as a,m as w,o as r,f as u,j as y,_ as U,g as n,b as i,w as d,v as p,a as V}from"./index-c619b897.js";import{_ as C}from"./CHeaderBar-1d33da3e.js";import{_ as b}from"./CSelect.vue_vue_type_style_index_0_lang-b9870a27.js";import{_ as m}from"./CSelect-f9a2a604.js";import{C as k}from"./CSearch-4e5f97ca.js";import{g as B}from"./carceles-3b8ad7b2.js";import{g as N}from"./regiones-a08bc90d.js";const $={class:"section-form"},x=99,D="Editar usuario",j={__name:"editarUsuario",setup(E){const f=a("Editar usuario"),l=a(null),_=a([{id:3,description:"Director nacional"},{id:4,description:"Director regional"},{id:5,description:"Alcaide"},{id:2,description:"Gestor"}]),c=a([]),v=a([]),s=a(null),g=()=>{};return w(async()=>{c.value=await B(),v.value=await N()}),(o,e)=>(r(),u(U,{class:"grafic-content"},{default:y(()=>[n(C,{title:f.value,"section-value":x},null,8,["title"]),i("div",$,[n(k),d(i("input",{class:"search__content--text","onUpdate:modelValue":e[0]||(e[0]=t=>o.inputValue=t),placeholder:"Ingresar nombre usuario",type:"text"},null,512),[[p,o.inputValue]]),n(m,{options:_.value,modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t)},null,8,["options","modelValue"]),s.value===4?(r(),u(m,{key:0,options:v.value,modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t)},null,8,["options","modelValue"])):V("",!0),s.value===5?(r(),u(m,{key:1,options:c.value,modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value=t)},null,8,["options","modelValue"])):V("",!0),d(i("input",{class:"search__content--text","onUpdate:modelValue":e[4]||(e[4]=t=>o.inputValue=t),placeholder:"Nueva password",type:"password"},null,512),[[p,o.inputValue]]),d(i("input",{class:"search__content--text","onUpdate:modelValue":e[5]||(e[5]=t=>o.inputValue=t),placeholder:"Reingrese nueva password",type:"password"},null,512),[[p,o.inputValue]]),n(b,{title:D,onExecuteAction:g,disabled:o.blockButton},null,8,["disabled"])])]),_:1}))}};export{j as default};
