import{r as n,o as T,d as x,w as i,_ as I,b as e,a as r,p as N,j as R,q as V}from"./index-4bf4a7de.js";import{_ as b}from"./CHeaderBar-922b50aa.js";import{_ as D}from"./ManagementXLS-5e76ee27.js";import{_ as E,a as s,b as M}from"./CSection-35558c31.js";import{_ as $}from"./CTable-28ef051b.js";import{C as _}from"./CSearch-2f80ded9.js";import"./FileSaver.min-6e0acbf1.js";const y=r("i",{class:"large material-icons"},"arrow_upward",-1),h={class:"content-document__section"},z={__name:"GestionCarcel",setup(S){const c=n(),p=n([{rowReference:"name",description:"Nombre archivo"},{rowReference:"periodo",description:"Periodo"},{rowReference:"region",description:"Región"},{rowReference:"penitenciaria",description:"centro penitenciario"}]),f=n([{name:"gestion_2023.pdf",periodo:"2023-02",region:"METROPOLITANA",penitenciaria:"C.C.P. DE COLINA I"},{name:"gestion_carcel_x2023_03.xslx",periodo:"2023-03",region:"METROPOLITANA",penitenciaria:"C.C.P. DE COLINA I"},{name:"gestion_carcel_x2023_03.xslx",periodo:"2023-04",region:"METROPOLITANA",penitenciaria:"C.C.P. DE COLINA I"}]),d=n(null),u=n(null),m=n(null),C=[{id:1,description:"METROPOLITANA"}],g=a=>new Promise(o=>{setTimeout(()=>{const t=C.filter(l=>l.description.toLowerCase().includes(a.toLowerCase()));o(t)},1e3)}),v=[{id:1,description:"C.C.P. DE COLINA I"}],w=a=>new Promise(o=>{setTimeout(()=>{const t=v.filter(l=>l.description.toLowerCase().includes(a.toLowerCase()));o(t)},1e3)}),O=()=>{console.log("Modal closed")},P=()=>{console.log("Modal submitted")},L=()=>{console.log(c.value.open())},A=n("Gestión de la carcel");return(a,o)=>(T(),x(I,null,{default:i(()=>[e(b,{title:A.value},null,8,["title"]),r("button",{onClick:L,class:"btn agregar__archivo"},[N("Agregar registro "),y]),e(M,{ref_key:"modalForm",ref:c,title:"Subir documento",onClose:O,onSubmit:P},{default:i(()=>[e(E,{title:""},{default:i(()=>[e(s,{title:""},{default:i(()=>[e(D)]),_:1}),e(s,{title:"Región"},{default:i(()=>[e(_,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=t=>u.value=t),asyncOptionsPromise:g},null,8,["modelValue"])]),_:1}),e(s,{title:"Penitenciaría"},{default:i(()=>[e(_,{modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=t=>m.value=t),asyncOptionsPromise:w},null,8,["modelValue"])]),_:1}),e(s,{title:"Periodo"},{default:i(()=>[R(r("input",{type:"month","onUpdate:modelValue":o[2]||(o[2]=t=>d.value=t)},null,512),[[V,d.value]])]),_:1})]),_:1})]),_:1},512),r("div",h,[e($,{columns:p.value,rows:f.value},null,8,["columns","rows"])])]),_:1}))}};export{z as default};