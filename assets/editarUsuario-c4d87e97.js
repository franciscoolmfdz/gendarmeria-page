import{h as a,k as w,o as r,f as u,j as y,_ as U,g as n,b as i,w as d,v as p,a as V}from"./index-81990198.js";import{_ as k}from"./CHeaderBar-c05e4acb.js";import{_ as C}from"./CSelect.vue_vue_type_style_index_0_lang-f7ab962f.js";import{_ as m}from"./CSelect-97c825b8.js";import{C as b}from"./CSearch-634c530d.js";import{g as B}from"./carceles-fea03c35.js";import{g as N}from"./regiones-9e2eaf7c.js";import"./api-ec658a74.js";const $={class:"section-form"},x=99,D="Editar usuario",G={__name:"editarUsuario",setup(E){const f=a("Editar usuario"),l=a(null),_=a([{id:3,description:"Director nacional"},{id:4,description:"Director regional"},{id:5,description:"Alcaide"},{id:2,description:"Gestor"}]),c=a([]),v=a([]),s=a(null),g=()=>{};return w(async()=>{c.value=await B(),v.value=await N()}),(o,e)=>(r(),u(U,{class:"grafic-content"},{default:y(()=>[n(k,{title:f.value,"section-value":x},null,8,["title"]),i("div",$,[n(b),d(i("input",{class:"search__content--text","onUpdate:modelValue":e[0]||(e[0]=t=>o.inputValue=t),placeholder:"Ingresar nombre usuario",type:"text"},null,512),[[p,o.inputValue]]),n(m,{options:_.value,modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t)},null,8,["options","modelValue"]),s.value===4?(r(),u(m,{key:0,options:v.value,modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t)},null,8,["options","modelValue"])):V("",!0),s.value===5?(r(),u(m,{key:1,options:c.value,modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value=t)},null,8,["options","modelValue"])):V("",!0),d(i("input",{class:"search__content--text","onUpdate:modelValue":e[4]||(e[4]=t=>o.inputValue=t),placeholder:"Nueva password",type:"password"},null,512),[[p,o.inputValue]]),d(i("input",{class:"search__content--text","onUpdate:modelValue":e[5]||(e[5]=t=>o.inputValue=t),placeholder:"Reingrese nueva password",type:"password"},null,512),[[p,o.inputValue]]),n(C,{title:D,onExecuteAction:g,disabled:o.blockButton},null,8,["disabled"])])]),_:1}))}};export{G as default};
