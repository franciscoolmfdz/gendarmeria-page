import{r as n,o as A,d as T,w as i,_ as x,b as e,a,p as I,i as N,q as E}from"./index-acf756d2.js";import{_ as V}from"./CHeaderBar-02265e87.js";import{_ as b}from"./ManagementXLS-b17fbafd.js";import{_ as D,a as r,b as M}from"./CSection-7db208dd.js";import{_ as $}from"./CTable-cc52dbd7.js";import{C as _}from"./CSearch-088390e8.js";const y=a("i",{class:"large material-icons"},"arrow_upward",-1),h={class:"content-document__section"},z={__name:"ElementosReinsercion",setup(S){const c=n(),p=n([{rowReference:"name",description:"Nombre archivo"},{rowReference:"periodo",description:"Periodo"},{rowReference:"region",description:"Región"},{rowReference:"penitenciaria",description:"centro penitenciario"}]),f=n([{name:"reinserción_2023.pdf",periodo:"2023-02",region:"METROPOLITANA",penitenciaria:"C.C.P. DE COLINA I"},{name:"reinsercion_x2023_03.xslx",periodo:"2023-03",region:"METROPOLITANA",penitenciaria:"C.C.P. DE COLINA I"},{name:"reinsercion_x2023_02.xslx",periodo:"2023-04",region:"METROPOLITANA",penitenciaria:"C.C.P. DE COLINA I"}]),d=n(null),u=n(null),m=n(null),C=[{id:1,description:"METROPOLITANA"}],g=s=>new Promise(o=>{setTimeout(()=>{const t=C.filter(l=>l.description.toLowerCase().includes(s.toLowerCase()));o(t)},1e3)}),v=[{id:1,description:"C.C.P. DE COLINA I"}],w=s=>new Promise(o=>{setTimeout(()=>{const t=v.filter(l=>l.description.toLowerCase().includes(s.toLowerCase()));o(t)},1e3)}),O=()=>{console.log("Modal closed")},P=()=>{console.log("Modal submitted")},L=()=>{console.log(c.value.open())},R=n("Elementos de reinserción");return(s,o)=>(A(),T(x,null,{default:i(()=>[e(V,{title:R.value},null,8,["title"]),a("button",{onClick:L,class:"btn agregar__archivo"},[I("Agregar registro "),y]),e(M,{ref_key:"modalForm",ref:c,title:"Subir documento",onClose:O,onSubmit:P},{default:i(()=>[e(D,{title:""},{default:i(()=>[e(r,{title:""},{default:i(()=>[e(b)]),_:1}),e(r,{title:"Región"},{default:i(()=>[e(_,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=t=>u.value=t),asyncOptionsPromise:g},null,8,["modelValue"])]),_:1}),e(r,{title:"Penitenciaría"},{default:i(()=>[e(_,{modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=t=>m.value=t),asyncOptionsPromise:w},null,8,["modelValue"])]),_:1}),e(r,{title:"Periodo"},{default:i(()=>[N(a("input",{type:"month","onUpdate:modelValue":o[2]||(o[2]=t=>d.value=t)},null,512),[[E,d.value]])]),_:1})]),_:1})]),_:1},512),a("div",h,[e($,{columns:p.value,rows:f.value},null,8,["columns","rows"])])]),_:1}))}};export{z as default};
