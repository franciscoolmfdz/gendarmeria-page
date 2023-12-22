import{g as r,h as v,i as C,o as b,f as R,j as t,_ as S,q as h,s as P,m as o,b as s,x as w}from"./index-67eed0ab.js";import{_,a as T}from"./CChartDonutSection-5dbbc148.js";import{_ as E}from"./CHeaderBar-d68a262d.js";import{_ as J}from"./CButton-9e3ba2d4.js";import{_ as L}from"./CTable-0226543d.js";import{s as A}from"./filterSituacion-32c57da3.js";const y={class:"selected-options"},V={class:"information-section-program"},$=s("span",{class:"sub-menu__option--title"}," Ver más ",-1),x=s("span",{class:"sub-menu__option--title"}," Ver más ",-1),I={class:"information__section"},k=s("span",{class:"card-title"},"Programas",-1),D=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"PPL :"),s("span",null," Programa de reinserción social para personas privadas de libertad")],-1),B=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"PRS :"),s("span",null," Programa Ministerio del Interior")],-1),M=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"CET C :"),s("span",null," CET Cerrado")],-1),N=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"CET S :"),s("span",null," CET Semiabierto")],-1),j=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"CTA :"),s("span",null," Centro de tratamiento de adicciones")],-1),q=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"SSJJ :"),s("span",null," Secciones Juveniles")],-1),F=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"CJ :"),s("span",null," Creciendo Juntos")],-1),G={class:"content__section table-program"},U=4,Y={__name:"ElementosReinsercion",setup(z){const d=A(),n=r({id:15,description:"Región Metropolitana de Santiago"}),p=r([]),m=r("Elementos de reinserción"),g=r([{rowReference:"region",description:"Región",class:"region"},{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"programPPL",description:"PPL"},{rowReference:"programPLS",description:"PRS"},{rowReference:"programCETC",description:"CET C"},{rowReference:"programCETSA",description:"CET SA"},{rowReference:"programCTA",description:"CTA"},{rowReference:"programSSJJ",description:"SSJJ"},{rowReference:"programCJ",description:"CJ"},{rowReference:"total",description:"Total en funcionamiento"}]),l=r([]),f=async c=>{if(!d.listadoRegiones.length>0){let e=await h();p.value=e,d.setRegionesList(e)}},u=async()=>{var c;try{if(n.value){const e={regionId:((c=n.value)==null?void 0:c.id)??n.value},i=await P(e);l.value=i.map(a=>(a.region={data:a.region.substring(0,3),class:"region"},a.programPPL=a.programPPL?{data:".",class:"data-circle"}:"",a.programPLS=a.programPLS?{data:".",class:"data-circle"}:"",a.programCETC=a.programCETC?{data:".",class:"data-circle"}:"",a.programCETSA=a.programCETSA?{data:".",class:"data-circle"}:"",a.programCTA=a.programCTA?{data:".",class:"data-circle"}:"",a.programSSJJ=a.programSSJJ?{data:".",class:"data-circle"}:"",a.programCJ=a.programCJ?{data:".",class:"data-circle"}:"",a.total={data:a.total,class:"value-total"},a.promedio={data:a.promedio,class:"value-total"},a))}else l.value=[]}catch(e){console.log(e)}};return v(async()=>{await f(),await u()}),(c,e)=>{const i=C("RouterLink");return b(),R(S,{class:"contenedor-reinsercion"},{default:t(()=>[o(E,{title:m.value,"section-value":U},null,8,["title"]),s("div",y,[o(w,{class:"select-region",options:p.value,modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a)},null,8,["options","modelValue"]),o(J,{class:"c-filterbar-search",title:"",onExecuteAction:u})]),s("div",V,[o(_,{class:"section-donut",title:"Reincidentes por recinto","point-value":""},{default:t(()=>[o(i,{to:"situacionReincidencia",class:"sub-menu--option white btn-small"},{default:t(()=>[$]),_:1})]),_:1}),o(_,{class:"section-donut",title:"Aplicación IGI","point-value":""},{default:t(()=>[o(i,{to:"regimenProcesal",class:"sub-menu--option white btn-small"},{default:t(()=>[x]),_:1})]),_:1}),s("div",I,[o(T,{class:"card-information card-program"},{default:t(()=>[k,D,B,M,N,j,q,F]),_:1})])]),s("div",G,[o(L,{columns:g.value,rows:l.value},null,8,["columns","rows"])])]),_:1})}}};export{Y as default};
