import{i as o,j as b,o as p,f as u,g as m,_ as D,H as S,m as s,b as n,z as h,a as $,y as x}from"./index-06150a1e.js";import{_ as C}from"./CHeaderBar-04ce4dcb.js";import{_ as M}from"./CCard-3d518836.js";import{_ as V}from"./CButton-2b9dd805.js";import{_ as A}from"./CTable-6a0ceb92.js";import{s as L}from"./filterSituacion-8fd85402.js";const N={class:"selected-options"},B={class:"information__section"},E=n("span",{class:"card-title"}," Partes denuncia ley 20.000",-1),F=n("span",null," totales partes denuncia ley 20.000 ",-1),J={class:"content__section"},O=3,U={__name:"partesDenuncia",setup(T){const t=L(),r=o(!1),i=o({id:15,description:"Región Metropolitana de Santiago"}),c=o([]),_=o("Estado situación carcelaria / Resumen partes ley 20.000"),f=o([{description:"Centro penitenciario",colspan:1},{description:"año 2022",colspan:12},{description:"Resumen",colspan:3}]),g=o([{rowReference:"establecimiento",description:""},{rowReference:"dataEnero",description:"Enero"},{rowReference:"dataFeb",description:"Feb"},{rowReference:"dataMar",description:"Marzo"},{rowReference:"dataAbril",description:"Abril"},{rowReference:"dataMay",description:"Mayo"},{rowReference:"dataJun",description:"Junio"},{rowReference:"dataJul",description:"Julio"},{rowReference:"dataAgost",description:"Agosto"},{rowReference:"dataSept",description:"Septiembre"},{rowReference:"dataOct",description:"Octubre"},{rowReference:"dataNov",description:"Nombiembre"},{rowReference:"dataDic",description:"Diciembre"},{rowReference:"dataOtro",description:"Otro"},{rowReference:"dataLey",description:"Ley 20.000"},{rowReference:"Total",description:"Total"}]),w=o([]),R=async()=>{t.changeRegionSelected(i.value),await y(),await l()},v=async a=>{if(!t.listadoRegiones.length>0){let e=await S();c.value=e,t.setRegionesList(e)}},y=async()=>{const a={regionId:t.regionSelected.id};let e=await x(a);t.setCarcelesList(e)},l=async()=>{var a;try{if((a=t==null?void 0:t.regionSelected)!=null&&a.id){const e={year:2022,month:12,regionId:t.regionSelected.id,embedPopulation:!0}}}catch(e){console.log(e)}};return b(async()=>{i.value=t.regionSelected,await v(),await l(),r.value=!0}),(a,e)=>(p(),u(D,null,{default:m(()=>[s(C,{title:_.value,"section-value":O},null,8,["title"]),n("div",N,[r.value?(p(),u(h,{key:0,options:c.value,modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=d=>i.value=d)},null,8,["options","modelValue"])):$("",!0),s(V,{title:"Buscar",onExecuteAction:e[1]||(e[1]=d=>R())})]),n("div",B,[s(M,{class:"card-information"},{default:m(()=>[E,F]),_:1})]),n("div",J,[s(A,{"parent-columns":f.value,columns:g.value,rows:w.value},null,8,["parent-columns","columns","rows"])])]),_:1}))}};export{U as default};
