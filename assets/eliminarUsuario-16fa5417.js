import{g as e,h as r,C as c,q as l,o as _,f as d,j as u,_ as m,m as t,b as p}from"./index-b5adf2c2.js";import{_ as f}from"./CHeaderBar-c5f14508.js";import{_ as g}from"./CButton-105090c3.js";import{C as v}from"./CSearch-b0225dd8.js";const h={class:"section-form"},C=99,b="Eliminar usuario",U={__name:"eliminarUsuario",setup(x){const a=e("Eliminar usuario");e(null),e([{id:3,description:"Director nacional"},{id:4,description:"Director regional"},{id:5,description:"Alcaide"},{id:2,description:"Gestor"}]);const i=e([]),s=e([]);e(null);const o=()=>{};return r(async()=>{i.value=await c(),s.value=await l()}),(n,y)=>(_(),d(m,{class:"admin-content"},{default:u(()=>[t(f,{title:a.value,"section-value":C},null,8,["title"]),p("div",h,[t(v),t(g,{title:b,onExecuteAction:o,disabled:n.blockButton},null,8,["disabled"])])]),_:1}))}};export{U as default};