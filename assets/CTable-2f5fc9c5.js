import{o as t,c as s,b as a,F as l,p as o,t as i,a as d,s as u}from"./index-55c36585.js";const f={"c-class":"c-table"},A={class:"c-table-title-section"},x={key:0,class:"c-table-title-section__content"},C=["colspan"],p={class:"c-table-title-section-title__content"},R={key:0,class:"c-table-title-section--text-action"},v={class:"c-table-body-section"},g={key:0,class:"section-buttons c-table-body-section__buttons"},B=["onClick"],N={class:"large material-icons"},F={__name:"CTable",props:{parentColumns:{type:Array,default:null},columns:{type:Array,required:!0},rows:{type:Array,required:!0},actionsActive:{type:Boolean,default:!1}},emits:["executeActionlist"],setup(n,{emit:h}){const k=(_,y)=>{h("executeActionlist",{actionName:_,request:y})};return(_,y)=>(t(),s("table",f,[a("thead",A,[n.parentColumns?(t(),s("tr",x,[(t(!0),s(l,null,o(n.parentColumns,e=>(t(),s("td",{class:"c-table-title-section--text",key:e.key,colspan:e.colspan},i(e.description),9,C))),128))])):d("",!0),a("tr",p,[(t(!0),s(l,null,o(n.columns,e=>(t(),s("td",{class:"c-table-title-section--text-header",key:e.key},i(e.description),1))),128)),n.actionsActive?(t(),s("td",R,"Acciones")):d("",!0)])]),a("tbody",v,[(t(!0),s(l,null,o(n.rows,e=>(t(),s("tr",{key:e.id,class:"c-table-body-section__content"},[(t(!0),s(l,null,o(n.columns,c=>{var r,b,m;return t(),s("td",{class:u(["c-table-body-section__data",(r=e[c.rowReference])!=null&&r.class?e[c.rowReference].class:""]),key:c.rowReference},[a("span",{class:u(["data-text",(b=e[c.rowReference])!=null&&b.class?e[c.rowReference].class:""])},i(((m=e[c.rowReference])==null?void 0:m.data)||e[c.rowReference]),3)],2)}),128)),n.actionsActive?(t(),s("td",g,[(t(!0),s(l,null,o(e.actions,c=>(t(),s("li",{class:u(["action-element btn",c.name]),onClick:r=>k(c.name,e)},[a("i",N,i(c.iconName),1)],10,B))),256))])):d("",!0)]))),128))])]))}};export{F as _};
