import{o as t,c as s,b as l,F as c,A as r,a as u,t as o,q as m}from"./index-77660dd1.js";const A={"c-class":"c-table"},f={class:"green lighten-2"},C={key:0},b=["colspan"],g={key:0},p={key:0,class:"section-buttons"},v=["onClick"],x={class:"large material-icons"},B={__name:"CTable",props:{parentColumns:{type:Array,default:null},columns:{type:Array,required:!0},rows:{type:Array,required:!0},actionsActive:{type:Boolean,default:!1}},emits:["executeActionlist"],setup(a,{emit:h}){const k=(d,y)=>{h("executeActionlist",{actionName:d,request:y})};return(d,y)=>(t(),s("table",A,[l("thead",f,[a.parentColumns?(t(),s("tr",C,[(t(!0),s(c,null,r(a.parentColumns,e=>(t(),s("th",{key:e.key,colspan:e.colspan},o(e.description),9,b))),128))])):u("",!0),l("tr",null,[(t(!0),s(c,null,r(a.columns,e=>(t(),s("th",{key:e.key},o(e.description),1))),128)),a.actionsActive?(t(),s("th",g,"Acciones")):u("",!0)])]),l("tbody",null,[(t(!0),s(c,null,r(a.rows,e=>(t(),s("tr",{key:e.id},[(t(!0),s(c,null,r(a.columns,n=>{var i,_;return t(),s("td",{key:n.rowReference,class:m((i=e[n.rowReference])!=null&&i.class?e[n.rowReference].class:"")},o(((_=e[n.rowReference])==null?void 0:_.data)||e[n.rowReference]),3)}),128)),a.actionsActive?(t(),s("td",p,[(t(!0),s(c,null,r(e.actions,n=>(t(),s("li",{class:m(["action-element btn",n.name]),onClick:i=>k(n.name,e)},[l("i",x,o(n.iconName),1)],10,v))),256))])):u("",!0)]))),128))])]))}};export{B as _};
