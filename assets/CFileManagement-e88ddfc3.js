import{g as n,J as f,o as p,c as _,b as m}from"./index-ec431411.js";const y={__name:"CFileManagement",props:{modelValue:{type:[String,Object],default:""}},emits:["update:modelValue"],setup(d,{emit:a}){const s=n(null),o=n(""),i=n(""),r=t=>{var e,l;if((e=t.target)!=null&&e.files&&((l=t.target)==null?void 0:l.files.length)>0){const c=t.target.files[0];a("update:modelValue",c)}},u=()=>{o.value="",i.value=""};return f(async()=>{u()}),(t,e)=>(p(),_("div",null,[m("input",{type:"file",ref_key:"fileInput",ref:s,onChange:e[0]||(e[0]=l=>r(l))},null,544)]))}};export{y as _};
