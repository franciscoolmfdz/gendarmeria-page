import{o as e,c as t,b as a,F as r,n as o,a as d,t as l,z as y}from"./index-b4110eaa.js";const h={"c-class":"c-table"},k={class:"green lighten-2"},A={key:0},b={key:0,class:"section-buttons"},f=["onClick"],g={class:"large material-icons"},x={__name:"CTable",props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},actionsActive:{type:Boolean,default:!1}},emits:["executeActionlist"],setup(c,{emit:_}){const m=(i,u)=>{_("executeActionlist",{actionName:i,request:u})};return(i,u)=>(e(),t("table",h,[a("thead",k,[a("tr",null,[(e(!0),t(r,null,o(c.columns,n=>(e(),t("th",{key:n.key},l(n.description),1))),128)),c.actionsActive?(e(),t("th",A,"Acciones")):d("",!0)])]),a("tbody",null,[(e(!0),t(r,null,o(c.rows,n=>(e(),t("tr",{key:n.id},[(e(!0),t(r,null,o(c.columns,s=>(e(),t("td",{key:s.rowReference},l(n[s.rowReference]),1))),128)),c.actionsActive?(e(),t("td",b,[(e(!0),t(r,null,o(n.actions,s=>(e(),t("li",{class:y(["action-element btn",s.name]),onClick:v=>m(s.name,n)},[a("i",g,l(s.iconName),1)],10,f))),256))])):d("",!0)]))),128))])]))}};export{x as _};