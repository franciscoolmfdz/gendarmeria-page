import{o as e,c as t,a as s,F as a,k as o,m as c,t as u,l as d}from"./index-76fa7c79.js";const y={class:"green lighten-2"},m={key:0},k={key:0},A={__name:"CTable",props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},actionsActive:{type:Boolean,default:!1}},setup(n){return(i,h)=>(e(),t("table",null,[s("thead",y,[s("tr",null,[(e(!0),t(a,null,o(n.columns,r=>(e(),t("th",{key:r.key},u(r.description),1))),128)),n.actionsActive?(e(),t("th",m,"Acciones")):c("",!0)])]),s("tbody",null,[(e(!0),t(a,null,o(n.rows,r=>(e(),t("tr",{key:r.id},[(e(!0),t(a,null,o(n.columns,l=>(e(),t("td",{key:l.rowReference},u(r[l.rowReference]),1))),128)),n.actionsActive?(e(),t("td",k,[d(i.$slots,"default",{row:r})])):c("",!0)]))),128))])]))}};export{A as _};